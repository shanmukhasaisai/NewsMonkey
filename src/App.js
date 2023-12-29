import "./App.css";

import React, { useState} from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App =()=> {
	const [progress, setProgress] = useState(0)
	

		return (
			<div>
				<BrowserRouter>
					<NavBar />
					<LoadingBar color="#f11946" progress={progress} />
					<Routes>
						<Route
							path="/"
							element={
								<News
									setProgress={setProgress}
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
									setProgress={setProgress}
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
									setProgress={setProgress}
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
									setProgress={setProgress}
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
									setProgress={setProgress}
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
									setProgress={setProgress}
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
									setProgress={setProgress}
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
									setProgress={setProgress}
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

export default App;
