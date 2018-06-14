import React from 'react'

const SearchBox = ({ searchChange }) => {
	return (
		<div className="pa2">
			<input
				className="pa2 ba b--green bg-lightest-blue"
				type="search"
				placeholder="Search names or jobs"
				onChange={searchChange} //Everytime search changes we call a function in App.js
			/>
		</div>
	)
}

export default SearchBox
