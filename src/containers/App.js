import React, { Component } from 'react'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import CardList from '../components/CardList'
import Footer from '../components/Footer'
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
		const filteredRobots = this.state.robots.filter(robot => {
			return (
				robot.name
					.toLowerCase()
					.includes(this.state.searchfield.toLowerCase()) ||
				robot.job.toLowerCase().includes(this.state.searchfield.toLowerCase())
			)
		})

		if (this.state.robots.length === 0) {
			return <h2 className="tc light-green">Loading...</h2>
		} else {
			return (
				<div className="tc">
					<h1 className="f2">RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
					<Footer />
				</div>
			)
		}
	}
}

export default App
