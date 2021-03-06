import React from 'react'
import posed from 'react-pose'

import './nav-icon-blog.css'

const NavTitle = posed.p({
  idle: {
    opacity: 0,
    top: "30px",
    flip: true
  },
  hovered: {
    opacity: 1,
    top: "50px",
    flip: true
  }
})

const HoverImage = posed.img({
  idle: {
    opacity: 0
  },
  hovered: {
    opacity: 1
  }
})

const DefaultImage = posed.img({
  idle: {
    opacity: 1
  },
  hovered: {
    opacity: 0
  }
})

class NavIcon extends React.Component {

  state = {
    hovered: false
  }

  hoverIn = () => {
    this.setState({ hovered: true })
  }

  hoverOut = () => {
    this.setState({ hovered: false })
  }

  render() {
      return (
       <div className="nav-element" onMouseEnter={() => this.hoverIn()}
              onMouseLeave={() => this.hoverOut()}>
         <HoverImage pose={this.state.hovered ? "hovered" : "idle"} className="nav-logo hover" src={this.props.hoverImage} alt={this.props.name}/> 
         <DefaultImage pose={this.state.hovered ? "hovered" : "idle"} className="nav-logo" src={this.props.image} alt={this.props.name}/>
         <NavTitle className="blog-p" pose={this.state.hovered ? "hovered" : "idle"}>{this.props.name}</NavTitle>
       </div>
    )
  }
}

export default NavIcon
