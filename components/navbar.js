import React from 'react'
import Link from 'next/link'
import Router from 'next/router'



export default class Navbar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.toggleClass = this.toggleClass.bind(this);
    //console.log(props.isauth);
  }


  toggleClass() {
    //e.preventDefault();
    //console.log('The link was clicked.');
        this.setState(state => ({
          isActive: !state.isActive
    }));
  }
  

  render () {
    

    return (
      <React.Fragment>
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
            <img src="/static/waqf-logo-square.png" />
            </a>
          </Link>

          <a onClick={this.toggleClass} role="button" className={"navbar-burger burger " + (this.state.isActive ? 'is-active' : null)} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className={"navbar-menu " + (this.state.isActive ? 'is-active' : null)}>
          
          <div className="navbar-start">
            <Link href="/project">
            <a className="navbar-item">
              Unit Usaha
            </a>
            </Link>
            <Link href="/send">
            <a className="navbar-item">
              Kirim Wakaf Uang
            </a>
            </Link>

          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a href="/login" className="button">
                  <span className="icon">
                    <i className="fas fa-user-shield"></i>
                  </span>
                  <span>
                    Login
                  </span>
                </a>

                <a href="https://api.whatsapp.com/send?phone=6281999556735&text=Halo%2C%20saya%20ingin%20konsultasi%20seputar%wakaf%uang" className="button is-dark">
                  <span className="icon">
                  <i className="fab fa-whatsapp"></i>
                  </span>
                  <span>
                    Hubungi Kami
                  </span>
                </a>
              </div>

            </div>
            
          </div>
        

        </div>
      </nav>
      </React.Fragment>
    )
    
  }

}