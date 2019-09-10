import React from "react";

export default class Avatar extends React.Component {
  render() {
    if (this.props.user) {
    var hash = 0
    var chr

    for (let i = 0; i < this.props.user.length; i++) {
          chr = this.props.user.charCodeAt(i)
          hash = (hash << 5) - hash + chr
          hash |= 0 // Convert to 32bit integer
        }
    }
    const avatar = hash % 4
    const src = "https://2019hackathonuabteam1.s3.amazonaws.com/appicon" + avatar + ".png"
    console.log(src)

    return (
      <img src={src} alt={avatar} width="53" height="53" />
    )
  }
}
