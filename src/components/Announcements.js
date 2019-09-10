import React from "react";
import chatManager from '../lib/chatManager';
import { List } from 'antd';
import Avatar from './Avatar';
import moment from 'moment';

export default class Announcements extends React.Component {
  constructor () {
    super()
    this.state = {
      messages: []
    }
    chatManager.initChatManager(chatManager.getUsername())
    this.getRoomMessages = this.getRoomMessages.bind(this)
    this.subscribeToNewMessages = this.subscribeToNewMessages.bind(this)
    this.getRoomMessages()
    this.subscribeToNewMessages()
  }

  render() {
    //console.log("test")
    //return (${this.messages.map(this.renderMessage)};)
    //return this.state.messages.map(this.renderMessage)
    //return(null)

    if(this.props.visible) {
      return (
        <div style={{overflowY: 'scroll', height: '375px'}}>
          <h2 style={{textAlign: 'left', paddingLeft: '5%', paddingTop: '5%'}}>Announcements</h2>
          <List
            itemLayout="horizontal"
            style={{textAlign: 'left'}}
            dataSource={this.state.messages}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar user={item.userStore.users[item.senderId].name} />}
                  title={item.userStore.users[item.senderId].name + " (" + moment(item.createdAt).format("lll") + ")"}
                  description={item.parts[0].payload.content}
                />
              </List.Item>
            )}
          />
        </div>
      )
    }
    return null;
  }

  async getRoomMessages () {
    try {
      const user = await chatManager.getUser()
      const room = await chatManager.getRoom()
      const messages = await user.fetchMultipartMessages({
        roomId: room.id,
        // direction: 'older',
        limit: 10
      })
      this.setState({
        messages: [...messages.reverse(), ...this.state.messages]
      })
    } catch (e) {
      console.error('Could not fetch messages', e)
    }
  }

  async subscribeToNewMessages () {
    try {
      const user = await chatManager.getUser()
      const room = await chatManager.getRoom()
      // if (!user.rooms.length) await user.joinRoom({ roomId: '20439384' })
      // console.log('User subscribed...', user)
      user.subscribeToRoomMultipart({
        roomId: room.id,
        messageLimit: 0,
        hooks: {
          onMessage: message => {
            this.setState({
              messages: [message].concat(this.state.messages)
            })
          }
        }
      })
    } catch (e) {
      console.error('Could not subscribe', e)
    }
  }

}

