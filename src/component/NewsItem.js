import React from 'react'

const NewsItem=(props)=>  {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className='my-3'>
                {/* This is a News Item . Sita Ram . */}
                <div className="card" >
                    <div style={{ display:'flex',justifyContent:'center',position:'absolute',right:'0' }}>
                        <span class="badge rounded-pill bg-danger" > {source}</span>
                    </div>
                    <img src={!imageUrl ? "https://images.wsj.net/im-65964490" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">

                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description}</p>
                        <p className='card-text'><small className='text-muted'>By {author} on {new Date(date).toGMTString()} </small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm  btn-dark">Read More </a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem
