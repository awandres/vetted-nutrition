import React, { Component } from 'react'
import Link from 'next/link'
import MenuButton from './menuButton'
import utilStyles from '../styles/utils.module.css'

class Menu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: this.props.open ? this.props.open : false
    }
  }

  handleMenuClick () {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  handleLinkClick () {
    this.setState({menuOpen: false})
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({open: nextProps.open})
    }
  }

  render () {
    const styles = {
      container: {
        position: 'absolute',
        top: 0,
        right: 0,
        height: this.state.open ? '100%' : 0,
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        background: 'black',
        opacity: 0.8,
        color: '#fafafa',
        transition: 'height 0.3s ease',
        zIndex: 2,
        textAlign: 'right'
      },
      menuContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        height: this.state.open ? '100%' : 0,
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        background: 'black',
        opacity: 0.9,
        color: '#fafafa',
        transition: 'height 0.3s ease',
        zIndex: 2,
        textAlign: 'right',
        animation: '1s appear forwards',
        paddingTop: '80px',
        animation: '1s appear forwards',
        paddingTop: '80px',
        animationDelay: 1
      },
      menuList: {
        paddingTop: '3rem'
      },
      menuItem: {
        fontFamily: `'Open Sans', sans-serif`,
        fontSize: '1.rem',
        padding: '1rem 0',
        margin: '0 5%',
        cursor: 'pointer',
        textDecoration: 'none',
        textDecorationColor: 'white',
        color: this.state.hover ? 'gray' : '#fafafa',
        transition: 'color 0.2s ease-in-out',
        animation: '0.5s slideIn forwards',
        zIndex: 9999,
        animationDelay: 1

      },
      headerItem: {
        fontSize: '22px',
        color: 'white',
        zIndex: 9999
      },
      logo: {
        width: '40px',
        position: 'absolute',
        top: 0,
        left: 0
      },

      line: {
        width: '90%',
        height: '1px',
        background: 'gray',
        margin: '0 auto'

      }
    }
    return (
      <div>
        {
          this.state.open ?
            <div style={styles.menuList}>

              <div style={styles.menuContainer}>

                <Link href='/'><div style={styles.menuItem} onClick={() => this.handleMenuClick()}
            >

                  <h2 style={styles.headerItem}>Home</h2>
                </div></Link>


                <div style={styles.line} />

                <Link href='/about-us'><div style={styles.menuItem} onClick={() => this.handleMenuClick()}
  >
                  <h2 style={styles.headerItem}>About</h2>
                </div></Link>

                <div style={styles.line} />

                <Link href='/general-training-intake'><div style={styles.menuItem} onClick={() => this.handleMenuClick()}
  >
                  <h2 style={styles.headerItem}><span className={utilStyles.blue}>Contact Us</span></h2>
                </div></Link>
                <div style={styles.line} />

              </div>
            </div> : null
        }
      </div>
    )
  }
}

export default Menu
