import React from 'react'
import posed from 'react-pose'

import './nav-icon.css'

const NavTitle = posed.p({
  idle: {
    opacity: 0,
    top: "30px",
    flip: true
  },
  hovered: {
    opacity: 1,
    top: "3vw",
    flip: true
  }
})

const NavTitleTablet = posed.p({
  idle: {
    opacity: 0,
    top: "30px",
    flip: true
  },
  hovered: {
    opacity: 1,
    top: "4vw",
    flip: true
  }
})

const HoverImage = posed.img({
  idle: {
    opacity: 0,
  },
  hovered: {
    opacity: 1,
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
         <img className="nav-logo" src={this.props.image} alt={this.props.name}/>
         <NavTitle id="header-desktop" pose={this.state.hovered ? "hovered" : "idle"}>{this.props.name}</NavTitle>
         <NavTitleTablet id="header-ipad" pose={this.state.hovered ? "hovered" : "idle"}>{this.props.name}</NavTitleTablet>
       </div>
    )
  }
}

export default NavIcon
