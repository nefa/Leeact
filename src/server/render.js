import DocumentTitle from 'react-document-title';
import Html from './html';
import Promise from 'bluebird';
import React from 'react';
import Router from 'react-router';
import config from './config';
import initialState from './initialstate';
import routes from '../client/routes';
import {state} from '../client/state';

var ReactDOMServer = require('react-dom/server')

export default function render(req, res, locale) {
  const path = req.path;
  return loadData(path, locale)
    .then((appState) => renderPage(req, res, appState, path));
}

function loadData(path, locale) {
  // TODO: Preload and merge user specific state.
  const appState = initialState;
  return new Promise((resolve, reject) => {
    resolve(appState);
  });
}

// TODO: Refactor.
function renderPage(req, res, appState, path) {
  return new Promise((resolve, reject) => {
    const router = Router.create({
      routes,
      location: path,
      onError: reject,
      onAbort: (abortReason) => {
        if (abortReason.constructor.name === 'Redirect') {
          const {to, params, query} = abortReason;
          const path = router.makePath(to, params, query);
          res.redirect(path);
          resolve();
          return;
        }
        reject(abortReason);
      }
    });
    router.run((Handler, routerState) => {
      state.load(appState);
      const html = getPageHtml(Handler, appState, req.hostname);
      const notFound = routerState.routes.some(route => route.name === 'not-found');
      const status = notFound ? 404 : 200;
      res.status(status).send(html);
      resolve();
    });
  });
}

function renderSpinner() {
  return '<div class="LoadingBox">' +
          '<div class="LoadingSymbol">' +
            '<img class="LoadingImage" src="/assets/img/bbloading.gif" width="160" height="36" alt="Loading..." />' +
          '</div>' +
          '<span class="LoadingText">Loading BetBrain...</span>' +
      '</div>'
}

function getPageHtml(Handler, appState, hostname) {
  const appHtml = `<div id="app">${ReactDOMServer.renderToString(<Handler />)}</div>`;
  const appScriptSrc = config.isProduction
    ? '/build/app.js?v=' + config.version
    : `\/\/${hostname}:8888/build/app.js`;

  let scriptHtml = `
    <script>
      (function() {
        window._appState = ${JSON.stringify(appState)};
        var app = document.createElement('script'); app.type = 'text/javascript'; app.async = true;
        var src = '${appScriptSrc}';
        // IE<11 and Safari need Intl polyfill.
        if (!window.Intl) src = src.replace('.js', 'intl.js');
        app.src = src;
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(app, s);
      })();
    </script>`;

  if (config.isProduction && config.googleAnalyticsId !== 'UA-XXXXXXX-X')
    scriptHtml += `
      <script>
        (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
        function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
        e=o.createElement(i);r=o.getElementsByTagName(i)[0];
        e.src='//www.google-analytics.com/analytics.js';
        r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
        ga('create','${config.googleAnalyticsId}');ga('send','pageview');
      </script>`;

  const title = DocumentTitle.rewind();

  return '<!DOCTYPE html>' + ReactDOMServer.renderToStaticMarkup(
    <Html
      bodyHtml={appHtml + scriptHtml}
      isProduction={config.isProduction}
      title={title}
      version={config.version}
    />
  );
}
