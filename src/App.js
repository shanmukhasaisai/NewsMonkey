import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
	state = {
		progress: 0,
	};
	setProgress = progress => {
		this.setState({
			progress: progress,
		});
	};

	render() {
		return (
			<div>
				<BrowserRouter>
					<NavBar />
					<LoadingBar color="#f11946" progress={this.state.progress} />
					<Routes>
						<Route
							path="/"
							element={
								<News
									setProgress={this.setProgress}
									key="general"
									pageSize={5}
									country="in"
									category="general"
								/>
							}
						></Route>
						<Route
							path="/Business"
							element={
								<News
									setProgress={this.setProgress}
									key="business"
									pageSize={5}
									country="in"
									category="business"
								/>
							}
						></Route>
						<Route
							path="/Entertainment"
							element={
								<News
									setProgress={this.setProgress}
									key="entertainment"
									pageSize={5}
									country="in"
									category="entertainment"
								/>
							}
						></Route>
						<Route
							path="/General"
							element={
								<News
									setProgress={this.setProgress}
									key="general"
									pageSize={5}
									country="in"
									category="general"
								/>
							}
						></Route>
						<Route
							path="/Health"
							element={
								<News
									setProgress={this.setProgress}
									key="health"
									pageSize={5}
									country="in"
									category="health"
								/>
							}
						></Route>
						<Route
							path="/Science"
							element={
								<News
									setProgress={this.setProgress}
									key="science"
									pageSize={5}
									country="in"
									category="science"
								/>
							}
						></Route>
						<Route
							path="/Sports"
							element={
								<News
									setProgress={this.setProgress}
									key="sports"
									pageSize={5}
									country="in"
									category="sports"
								/>
							}
						></Route>
						<Route
							path="/Technology"
							element={
								<News
									setProgress={this.setProgress}
									key="technology"
									pageSize={11}
									country="in"
									category="technology"
								/>
							}
						></Route>
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}
