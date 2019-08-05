import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import "react-tabs/style/react-tabs.css";
import Card from './Card';
import CardSmall from './CardSmall';
import NEWSAPI from '../api/newsapi';



export default class TopNews extends React.Component {

    constructor() {
        super();
        this.state = {
            news: [],
        }
       const reactApi = process.env.REACT_APP_API;
       console.log(reactApi)
    }

    componentDidMount() {
        this.getSources();
    }
      
      
    getSources() {
        NEWSAPI.get(`top-headlines?country=in&apiKey=reactApi`)
        .then(res => {
            // Set state with result
            const news =  res.data.articles
            this.setState({ news });
        });
    }

    render(){
        return(

        )
    }
}