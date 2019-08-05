import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import "react-tabs/style/react-tabs.css";
import Card from './Card';
import CardSmall from './CardSmall';
import NEWSAPI from '../api/newsapi';

import Img14 from '../../resources/img/bg-img/14.jpg';
import Img15 from '../../resources/img/bg-img/15.jpg';

export default class TabNews extends React.Component {

    constructor() {
        super();
        this.state = {
            news: [],
            International:[]
        }
        const reactApi = process.env.REACT_APP_API;
        console.log(reactApi)
    }

    componentDidMount() {
        this.getSources();
        this.getSourcesInt();
    }
      
      
    getSources() {
        NEWSAPI.get(`top-headlines?country=in&apiKey=f10bc8effcb94b388b6e3544812ae423`)
        .then(res => {
            // Set state with result
            const news =  res.data.articles
            this.setState({ news });
        });
    }
    getSourcesInt() {
      NEWSAPI.get(`top-headlines?country=us&apiKey=f10bc8effcb94b388b6e3544812ae423`)
      .then(res => {
          // Set state with result
          const International =  res.data.articles
          this.setState({ International });
      });
  }


    render(){
      const newsData = this.state.news
      const newsDataInt = this.state.International
      const col2News = newsData.splice(0, 2);
      const col2NewsSmall = newsData.splice(1, 6);

      const col2NewsInt = newsDataInt.splice(0, 2);
      const col2NewsSmallInt = newsDataInt.splice(1, 6);
        return(
            <Tabs>
            <div className="intro-news-filter d-flex justify-content-between">
            <h6>All the news</h6>
            <nav>
          <TabList className="nav nav-tabs" id="nav-tab" role="tablist">
            <Tab className="nav-item nav-link">Top News</Tab>
            <Tab className="nav-item nav-link">International</Tab>
          </TabList>
          </nav>
      </div>
          <TabPanel className="tab-content">
            <div className="row">
                        
          {
             col2News.map((item,index)  => {
             return(
              <Card key={index} item={item} />
             )
            })
          }
          {
             col2NewsSmall.map((item,index)  => {
             return(
              <CardSmall key={index} item={item} />
             )
            })
          }         
            </div>
                           
          </TabPanel>
          <TabPanel className="tab-content">
          <div className="row">
                        
                        {
                           col2NewsInt.map((item,index)  => {
                           return(
                            <Card key={index} item={item} />
                           )
                          })
                        }
                        {
                           col2NewsSmallInt.map((item,index)  => {
                           return(
                            <CardSmall key={index} item={item} />
                           )
                          })
                        }         
                          </div>
          </TabPanel>
        </Tabs>
        )
    }
}