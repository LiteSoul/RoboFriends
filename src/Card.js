import React from 'react'

const Card = props => {
	return (
		<div className="bg-light-green dib br1 pa3 ma2 dim pointer bw2 shadow-4">
			<img src="https://robohash.org/roboto?size=200x200" alt="robots" />
			<div>
				<h2>
					{props.name} {props.version}
				</h2>
				<p>{props.email}</p>
			</div>
		</div>
	)
}

export default Card
