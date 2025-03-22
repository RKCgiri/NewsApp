import './App.css';
import NavBar from './component/NavBar';
import React, { Component } from 'react';
import News from './component/News';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
    state={
        progress:0,
    }
    setProgress=(progress)=>{
        this.setState({progress:progress})
    }
    apikey=process.env.REACT_APP_NEWS_API_KEY;

    static defaultProps = {
        country: 'us',
        pageSize: 5,
        category: 'general'
    };

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    };

    render() {

        return (
            <div>
                <Router>
                    <NavBar />
                    {/* Top Loading Bar */}
                    <LoadingBar
                        height={3}
                        color="#f11946"
                        progress={this.state.progress}
                        
                    />
                    <Routes>
                        <Route path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pageSize={this.props.pageSize} country="us" category="general" />} />
                        <Route path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" pageSize={this.props.pageSize} country="us" category="business" />} />
                        <Route path="/entertainment" element={<News setProgress={this.setProgress}  apikey={this.apikey}key="entertainment" pageSize={this.props.pageSize} country="us" category="entertainment" />} />
                        <Route path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" pageSize={this.props.pageSize} country="us" category="health" />} />
                        <Route path="/science" element={<News setProgress={this.setProgress}  apikey={this.apikey}key="science" pageSize={this.props.pageSize} country="us" category="science" />} />
                        <Route path="/sports" element={<News setProgress={this.setProgress}  apikey={this.apikey}key="sports" pageSize={this.props.pageSize} country="us" category="sports" />} />
                        <Route path="/technology" element={<News setProgress={this.setProgress}  apikey={this.apikey}key="technology" pageSize={this.props.pageSize} country="us" category="technology" />} />
                    </Routes>
                </Router>
            </div>
        );
    }
}
