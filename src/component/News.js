import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=> {
    const [articles,setArticals] = useState([]);
    const [loading,setLoading] = useState(true);
    const [page,setPage] = useState(1);
    const [totalResults,settotalResults] = useState(0);
   
  

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const updateNews=async ()=> {
        props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let passedData = await data.json();
        props.setProgress(70);
        setArticals(passedData.articles);
        settotalResults(passedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }
   useEffect(()=>{
        document.title = `${capitalizeFirstLetter(props.category)} - Sita Ram`;
        updateNews();
   },[])
   const fetchMoreData = async () => {
       let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.pageSize}`;
       setPage(page+1);
        let data = await fetch(url);
        let passedData = await data.json();
        setArticals(articles.concat(passedData.articles));
        settotalResults( passedData.totalResults);
        setLoading(false);
    };

  
        return (
            <>
                <h2 className='text-center' style={{ margin: '40px 0px',marginTop:'90px' }}>Sita Ram - Top  {capitalizeFirstLetter(props.category)} Headlines </h2>
                {/* {this.state.loading && <Spinner />} */}

                <InfiniteScroll
                    dataLength={articles ? articles.length : 0} // Safe check
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >

                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            console.log(element);
                            return (<div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title} author={!element.author ? "Unknown" : element.author} date={element.publishedAt} description={element.description ? element.description.slice(0, 90) : " "} imageUrl={element.urlToImage} newsUrl={element.url} source={element.source.name} />
                            </div>)
                        })}
                    </div>
                </div>
            </InfiniteScroll >
           
            </>
        )
}
News.defaultProps = {
        country: 'us',
        pageSize: 5,
        category: 'general'
    };

// News.propTypes = {
//         country: PropTypes.string,
//         pageSize: PropTypes.number,
//         category: PropTypes.string,
//     };
export default News
