import React from "react";

import "../css/Announcements.scss"

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
      /*<div className="contact">
				<svg className="border"><polygon points="0,5 60,0 70,30 10,55"/></svg>
				<svg className="outline"><polygon points="8,7 58,2 67,28 18,48"/></svg>
				<svg className="panel-b"><polygon points="12,11 56,5 64,26 20,42"/></svg>*/
				<img src={src} alt={avatar} width="53" height="53" />
				/*<div className="text-container">
					<svg className="text-outline-1"><polygon points="78,10 220,0 210,44 69,48"/></svg>
					<svg className="text-outline-2"><polygon points="80,12 210,4 205,40 73,44"/></svg>
					<svg className="accent-outline-1"><polygon points="57,20 68,7 72,13 78,10 76,22 64,25 62,20"/></svg>
					<svg className="accent-outline-2"><polygon points="60,18 68,11 72,16 80,12 80,19 66,22 65,18"/></svg>
					<div className="text-skew"><label></label></div>
					<div className="message-type">
						<svg className="lettering-outline"><polygon points="0,3 9,1 16,4 17,13 13,18 11,25 3,25 2,17 3,12 0,10"/></svg>
						<span className="lettering">?</span>
					</div>
				</div>
      </div>*/
    )
  }
}
