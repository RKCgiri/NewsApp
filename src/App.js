import './App.css';
import NavBar from './component/NavBar';
import React, { useState } from 'react';
import News from './component/News';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const  App=(props)=> {
    const [progress,setProgress] =useState(0);
    const apikey="a85c6bc5bc224d5fa991993efc7a9b63";
        return (
            <div>
                <Router>
                    <NavBar />
                    {/* Top Loading Bar */}
                    <LoadingBar
                        height={3}
                        color="#f11946"
                        progress={progress}
                        
                    />
                    <Routes>
                        <Route path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={props.pageSize} country="us" category="general" />} />
                        <Route path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={props.pageSize} country="us" category="business" />} />
                        <Route path="/entertainment" element={<News setProgress={setProgress}  apikey={apikey}key="entertainment" pageSize={props.pageSize} country="us" category="entertainment" />} />
                        <Route path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={props.pageSize} country="us" category="health" />} />
                        <Route path="/science" element={<News setProgress={setProgress}  apikey={apikey}key="science" pageSize={props.pageSize} country="us" category="science" />} />
                        <Route path="/general" element={<News setProgress={setProgress}  apikey={apikey}key="science" pageSize={props.pageSize} country="us" category="general" />} />
                        <Route path="/sports" element={<News setProgress={setProgress}  apikey={apikey}key="sports" pageSize={props.pageSize} country="us" category="sports" />} />
                        <Route path="/technology" element={<News setProgress={setProgress}  apikey={apikey}key="technology" pageSize={props.pageSize} country="us" category="technology" />} />
                    </Routes>
                </Router>
            </div>
        );
    
}
export default App