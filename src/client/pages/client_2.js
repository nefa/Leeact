import React from 'react';
import socketIo from 'socket.io-client';
import MessSend from './message-sender';


export default class Client2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.initialState(),
    this.counter = 0;
  }

  componentDidMount() {
    const endpoint = 'http://localhost:3333/';
    const socket = socketIo.connect(endpoint);

    socket.on('connect', connection => this.setState({
      connected: true,
      socket: socket,
      id: socket.id
    }));

   // when server sends back confirmation about nickname
    // socket.on('chatConnect', nick => this.setState({nickname: nick}));
    socket.on('joined', members => this.handleJoin(members));
    socket.on('setNick', nick => this.setNick(nick));
    socket.on('message', message => console.log('i received: ', message));

    socket.on('disconnect', connection => {
      console.log('...was disconected')
      this.setState(this.initialState())
    })
  }

  initialState() {
    return {
      connected: false,
      socket: null,
      members: [],
      id: null,
      nickname: null
    }
  }

  renderInputNick() {
    if (this.state.nickname) return (
      <div>
        logged as: {this.state.nickname} at {new Date().toDateString()}
      </div>
    )

    else return (
      <div>
        nickname: <input type="text" ref="nick" />
        <button onClick={evt => this.connectToChat()}>connect to chat</button>
      </div>
    )
  }

  handleJoin(members) {
    // omit self from rendering
    const currentMembers = members
      .filter(item => item.id != this.state.id)

    this.setState({
      members: currentMembers
    });
  }

  setNick(nickname) {
    this.setState({nickname: nickname});
  }

  sendMessage(data) {
    if (data.memberId) {
      console.log("data:", data)
      console.log("this.state.socket:", this.state.socket)
      this.state.socket.emit('message', data);
    }
    else console.error(`client ${clientId} needs to send an id...`);
  }

  connectionMessage() {
    if (this.state.connected) return (
      <p>connected... my id: {this.state.id}
        <br />
        <span>with nickname: {this.state.nickname}</span>
      </p>
    )
  }

  addMembers() {
    if (this.state.members.length) return this.state.members
      .map(member => {
        return <MessSend
          id={this.satate.id}
          member={member}
          sendMessage={this.sendMessage} />
      });
    else return null
  }

  connectToChat() {
    var nick = this.refs.nick.getDOMNode().value;
    console.log("this.refs:", this.state)
    if (nick && nick != '') {
      this.state.socket.emit('join', {nick: nick, id: this.state.id});
      this.refs.nick.getDOMNode().value = ''
    }
  }

  render() {
    return (
      <div id="client_2">
      {this.connectionMessage()}

        {this.renderInputNick()}

        <hr />
        {this.addMembers()}
      </div>
    );
  }
}
