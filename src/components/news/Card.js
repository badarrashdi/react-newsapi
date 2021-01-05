import React from 'react';

const Card = props => {

    return(
        <div className="col-12 col-sm-6">
            <div className="single-blog-post style-2 mb-5">
            {/* Blog Thumbnail */}
            <div className="blog-thumbnail">
                <a href="#"><img src={props.item.urlToImage} alt={props.item.title} alt="" /></a>
            </div>
            {/* Blog Content */}
            <div className="blog-content">
                <span className="post-date">{props.item.publishedAt}</span>
                <a href="#" className="post-title">{props.item.title}</a>
                <a href="#" className="post-author">{props.item.author}</a>
            </div>
            </div>
        </div>
    )
}
export default Card;