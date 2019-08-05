import React from 'react';

import Img1 from '../../resources/img/bg-img/1.jpg';
import Img2 from '../../resources/img/bg-img/2.jpg';
import Img3 from '../../resources/img/bg-img/3.jpg';



export default class Hero extends React.Component {
    render() {
        return(
            <div className="hero-area">
        <div className="hero-post-slides">
          <div className="single-slide">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="single-blog-post style-1" data-animation="fadeInUpBig" data-delay="100ms" data-duration="1000ms">
                    <div className="blog-thumbnail bg-overlay">
                      <a href="#"><img src={Img1} alt="" /></a>
                    </div>
                    <div className="blog-content">
                      <span className="post-date">June 20, 2018</span>
                      <a href="#" className="post-title">Traffic Problems in Time Square</a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="single-blog-post style-1 mb-30" data-animation="fadeInUpBig" data-delay="300ms" data-duration="1000ms">
                    <div className="blog-thumbnail bg-overlay">
                      <a href="#"><img src={Img2} alt="" /></a>
                    </div>
                    <div className="blog-content">
                      <span className="post-date">June 20, 2018</span>
                      <a href="#" className="post-title">The best way to spend your holliday</a>
                    </div>
                  </div>
                  <div className="single-blog-post style-1" data-animation="fadeInUpBig" data-delay="500ms" data-duration="1000ms">
                    <div className="blog-thumbnail bg-overlay">
                      <a href="#"><img src={Img3} alt="" /></a>
                    </div>
                    <div className="blog-content">
                      <span className="post-date">June 20, 2018</span>
                      <a href="#" className="post-title">Sport results for the weekend games</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

        )
    }
}