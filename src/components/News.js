import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
	static defaultProps = {
		country: "in",
		pageSize: 8,
		category: "sports",
	};
	static propTypes = {
		country: PropTypes.string,
		pageSize: PropTypes.number,
		category: PropTypes.string,
	};
	constructor(props) {
		super(props);
		this.state = {
			articles: [],
			loading: true,
			page: 1,
			totalResults:0,
		};
		document.title=`NewsMonkey - ${this.capitalize(this.props.category)}`
	}
	capitalize=(string)=>{
		return string.charAt(0).toUpperCase()+string.slice(1);
	}
	async updateNews(){
		const url = `https://newsapi.org/v2/top-headlines?country=${
			this.props.country
		}&category=${
			this.props.category
		}&apiKey=6f24d4fdace2445fa3ec2caaa8e33043&page=${
			this.state.page
		}&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({
			articles: parsedData.articles,
			totalResults: parsedData.totalResults,
			loading: false,
		});
	}
	async componentDidMount() {
		let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6f24d4fdace2445fa3ec2caaa8e33043&page=${this.state.page}&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({
			articles: parsedData.articles,
			totalResults: parsedData.totalResults,
			loading: false,
		});
		// this.updateNews();
	}
	handleNextClick = async () => {
		if (
			!(
				this.state.page + 1 >
				Math.ceil(this.state.totalResults / this.props.pageSize)
			)
		) {
			let url = `https://newsapi.org/v2/top-headlines?country=${
				this.props.country
			}&category=${
				this.props.category
			}&apiKey=6f24d4fdace2445fa3ec2caaa8e33043&page=${
				this.state.page + 1
			}&pageSize=${this.props.pageSize}`;
			this.setState({ loading: true });
			let data = await fetch(url);
			let parsedData = await data.json();
			this.setState({
				page: this.state.page + 1,
				articles: parsedData.articles,
				loading: false,
				totalResults: parsedData.totalResults,
			});
		}
		// this.setState({page: this.state.page+1});
		// this.updateNews();
	};
	handlePreClick = async () => {
		// let url = `https://newsapi.org/v2/top-headlines?country=${
		// 	this.props.country
		// }&category=${
		// 	this.props.category
		// }&apiKey=6f24d4fdace2445fa3ec2caaa8e33043&page=${
		// 	this.state.page - 1
		// }&pageSize=${this.props.pageSize}`;
		// this.setState({ loading: true });
		// let data = await fetch(url);
		// let parsedData = await data.json();
		// this.setState({
		// 	page: this.state.page - 1,
		// 	articles: parsedData.articles,
		// 	loading: false,
		// });
		this.setState({page:this.state.page-1});
		this.updateNews();
	};
	fetchMoreData=async()=>{
		this.setState({
			page: this.state.page+1,
		})
		const url = `https://newsapi.org/v2/top-headlines?country=${
			this.props.country
		}&category=${
			this.props.category
		}&apiKey=6f24d4fdace2445fa3ec2caaa8e33043&page=${
			this.state.page
		}&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({
			articles: this.state.articles.concat(parsedData.articles),
		});
	}


	render() {
		return (
			<>
				<h1 className="text-center" style={{ margin: "40px 0px" }}>
					NewsMonkey - Top {this.capitalize(this.props.category)} Headlines
				</h1>
				{this.state.loading && <Spinner />}
				<InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
				<div className="container">
					<div className="row">
					{
						this.state.articles.map(ele => {
							return (
								<div className="col-md-4" key={ele.url}>
									<NewsItem
										title={ele.title}
										description={
											ele.description ? ele.description.slice(0, 100) : ""
										}
										imageUrl={
											ele.urlToImage
												? ele.urlToImage
												: "https://imgeng.jagran.com/images/2023/dec/free-fire-max-redeem-codes-2023-india-today1703395333665.jpg"
										}
										newsUrl={ele.url}
										publishTime={ele.publishedAt}
										author={ele.author}
									/>
								</div>
							);
						})}
				</div>
				</div>
				
				</InfiniteScroll>
				{/* <div className="container d-flex justify-content-between">
					<button
						disabled={this.state.page <= 1}
						type="button"
						className="btn btn-primary"
						onClick={this.handlePreClick}
					>
						{" "}
						&larr; Previous
					</button>
					<button
						disabled={
							this.state.page + 1 >
							Math.ceil(this.state.totalResults / this.props.pageSize)
						}
						type="button"
						className="btn btn-primary"
						onClick={this.handleNextClick}
					>
						Next &rarr;
					</button>
				</div> */}
			</>
		);
	}
}
