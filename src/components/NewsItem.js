import React from "react";

const NewsItem =(props)=>{

		let { title, description, imageUrl, newsUrl, author, publishTime } =props;
		return (
			<div className="my-3">
				<div className="card " style={{ width: "18rem", marginleft: "3rem" }}>
					<img src={imageUrl} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{title}</h5>
						<p className="card-text">{description} ....</p>
						<p className="card-text">
							<small className="text-body-secondary">
								Author: {author ? author : "Unknown"} - Time:{" "}
								{new Date(publishTime).toUTCString()}
							</small>
						</p>
						<a href={newsUrl} className="btn btn-sm btn-primary">
							Read More...
						</a>
					</div>
				</div>
			</div>
		);
	}

export default NewsItem;