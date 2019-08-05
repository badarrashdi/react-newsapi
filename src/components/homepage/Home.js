import React from 'react';
import Layout from '../layout/Layout';
import Hero from '../news/Hero';
import TabNews from '../news/TabNews';

import ImgAds from '../../resources/img/bg-img/add3.png';

const Home = () => {
    return(
        <Layout>
            <Hero/>
                <section className="intro-news-area section-padding-100-0 mb-70">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-8">
                                <div className="intro-news-tab">
                                    
                                        <TabNews />
                                    </div>
                            </div>
                            <div className="col-12 col-sm-9 col-md-6 col-lg-4">
                                <div className="sidebar-area">
                                    {/* Newsletter Widget */}
                                    <div className="single-widget-area newsletter-widget mb-30">
                                    <h4>Subscribe to our newsletter</h4>
                                    <form action="#" method="post">
                                        <input type="email" name="nl-email" id="nlemail" placeholder="Your E-mail" />
                                        <button type="submit" className="btn newsbox-btn w-100">Subscribe</button>
                                    </form>
                                    <p className="mt-30">Nullam lacinia ex eleifend orci porttitor, suscipit interdum augue condimentum. Etiam pretium turpis eget nibh . volutpat lobortis.</p>
                                    </div>
                                    {/* Add Widget */}
                                    <div className="single-widget-area add-widget mb-30">
                                    <a href="#">
                                        <img src={ImgAds} alt="" />
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            
        </Layout>
    )
}

export default Home;