import React, { Component } from 'react'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import CardList from '../components/CardList'
import GithubCorner from 'react-github-corner'
import './App.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://api.myjson.com/bins/cgoe6')
			.then(response => response.json())
			.then(robots => this.setState({ robots })) //->robots:robots
	}

	onSearchChange = event => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const { robots, searchfield } = this.state
		const filteredRobots = robots.filter(robot => {
			return (
				robot.name.toLowerCase().includes(searchfield.toLowerCase()) ||
				robot.job.toLowerCase().includes(searchfield.toLowerCase())
			)
		})
		//Render return this
		return !robots.length ? (
			<div>
				<h3 className="tc light-green">Calling friends...</h3>
				<img
					src={`./caller.png`}
					style={{
						display: 'block',
						marginLeft: 'auto',
						marginRight: 'auto'
					}}
					alt="caller"
				/>
			</div>
		) : (
			<div className="tc">
				<h1 className="f2">RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
				<GithubCorner href="https://github.com/LiteSoul/RoboFriends" />
			</div>
		)
	}
}

export default App
