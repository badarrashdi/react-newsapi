import React from 'react';
import Logo from '../../resources/img/logo.svg';
class Header extends React.Component {


    render(){
        return(
            <header className="header-area">
            <div className="newsbox-main-menu">
              <div className="classy-nav-container breakpoint-off">
                <div className="container-fluid">
                  <nav className="classy-navbar justify-content-between" id="newsboxNav">
                    <a href="index.html" className="nav-brand"><img src={Logo} alt="" /></a>
                    <div className="classy-navbar-toggler">
                      <span className="navbarToggler"><span /><span /><span /></span>
                    </div>
                    <div className="classy-menu">
                      <div className="classycloseIcon">
                        <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
                      </div>
                      <div className="classynav">
                        <ul>
                          <li><a href="#">International</a></li>
                          <li><a href="#">Local News</a></li>
                          <li><a href="#">Sport</a> </li>
                          <li><a href="#">Lifestyle</a></li>
                        </ul>
                        <div className="header-add-area">
                          <a href="#">
                            <img src="img/bg-img/add.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </header>
    
        )
    }

}

export default Header;