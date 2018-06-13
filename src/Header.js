import React from 'react'
import SearchBox from './SearchBox'

const Header = ({ searchChange }) => {
	return (
		<div>
			<h1 className="f2">RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange} />
		</div>
	)
}

export default Header
