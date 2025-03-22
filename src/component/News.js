import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    constructor(props) {
        super(props);
        // console.log("Sita Ram");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - Sita Ram`;
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    async updateNews() {
        this.props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let passedData = await data.json();
        this.props.setProgress(70);
        this.setState({ articles: passedData.articles, totalResults: passedData.totalResults, loading: false });
        this.props.setProgress(100);
    }
    async componentDidMount() {
        this.updateNews();
    }

    handlePrevClick = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a85c6bc5bc224d5fa991993efc7a9b63&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        // this.setState({ loading: true });
        // let data = await fetch(url);
        // let passedData = await data.json();
        // console.log(passedData);

        // console.log("Previous");
        // this.setState({
        //     page: this.state.page - 1,
        //     articles: passedData.articles,
        //     loading: false
        // })
        this.updateNews();

    }
    handleNextClick = async () => {
        // if (this.state.page + 1 > Math.ceil(this.totalResults / this.props.pageSize)) {

        // } else {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a85c6bc5bc224d5fa991993efc7a9b63&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
        //     this.setState({ loading: true });
        //     let data = await fetch(url);
        //     let passedData = await data.json();
        //     console.log(passedData);
        //     console.log("next");
        //     this.setState({
        //         page: this.state.page + 1,
        //         articles: passedData.articles,
        //         loading:false
        //     })
        // }
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }

    fetchMoreData = async () => {
        
        this.setState({ page: this.state.page + 1 });
        this.setState({ page: this.state.page - 1 });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        let data = await fetch(url);
        let passedData = await data.json();
        this.setState({ articles: this.state.articles.concat(passedData.articles), totalResults: passedData.totalResults, loading: false });
    };

    render() {
        return (
            <>
                <h2 className='text-center' style={{ margin: '40px 0px' }}>Sita Ram - Top  {this.props.category} Headlines </h2>
                {/* {this.state.loading && <Spinner />} */}

                <InfiniteScroll
                    dataLength={this.state.articles.length()}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                console.log(element);
                                return (<div className="col md-4" key={element.url}>
                                    <NewsItem title={element.title} author={!element.author ? "Unknown" : element.author} date={element.publishedAt} description={element.description ? element.description.slice(0, 90) : " "} imageUrl={element.urlToImage} newsUrl={element.url} source={element.source.name} />
                                </div>)
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next  &rarr;</button>
                </div> */}

            </>
        )
    }
}

export default News
