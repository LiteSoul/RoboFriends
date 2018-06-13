import React from 'react'

const Card = ({ name, version, id, job }) => {
	return (
		<div className="tc bg-light-green dib br1 pa3 ma2 dim pointer bw2 shadow-4">
			<img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
			<div>
				<h2 className="dark-gray">
					{name} {version}
				</h2>
				<p>{job}</p>
			</div>
		</div>
	)
}

export default Card
