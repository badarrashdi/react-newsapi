import React from 'react';
import Logo from '../../resources/img/logo.svg';

class Footer extends React.Component {

    render(){
        return(
            <footer className="footer-area">
            <div className="footer-logo mb-100">
              <a href="index.html"><img src={Logo} alt="" /></a>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="footer-content text-center">
                    <div className="footer-nav">
                      <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Closed Captioning</a></li>
                        <li><a href="#">Site Map</a></li>
                      </ul>
                    </div>
                    <div className="footer-social-info">
                      <a href="#" data-toggle="tooltip" data-placement="top" title="pinterest"><i className="fa fa-pinterest" aria-hidden="true" /></a>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="facebook"><i className="fa fa-facebook" aria-hidden="true" /></a>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="twitter"><i className="fa fa-twitter" aria-hidden="true" /></a>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="dribbble"><i className="fa fa-dribbble" aria-hidden="true" /></a>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="behance"><i className="fa fa-behance" aria-hidden="true" /></a>
                      <a href="#" data-toggle="tooltip" data-placement="top" title="linkedin"><i className="fa fa-linkedin" aria-hidden="true" /></a>
                    </div>
                    <p className="mb-15">Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum. Etiam pretium turpis eget nibh laoreet iaculis. Proin ac urna at lectus volutpat lobortis. Vestibulum venenatis iaculis diam vitae lobortis. Donec tincidunt viverra elit, sed consectetur est pr etium ac. Mauris nec mauris tellus. </p>
                    <p className="copywrite-text"><a href="#">
                        Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by </a><a href="https://colorlib.com" target="_blank">Colorlib</a>
                    </p></div>
                </div>
              </div>
            </div>
          </footer>
        )
    }
}

export default Footer;