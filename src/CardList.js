import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
	return (
		<div>
			<Card
				id={robots[0].id}
				name={robots[0].name}
				version={robots[0].version}
				job={robots[0].job}
				email={robots[0].email}
			/>
			<Card
				id={robots[1].id}
				name={robots[1].name}
				version={robots[1].version}
				job={robots[1].job}
				email={robots[1].email}
			/>
			<Card
				id={robots[2].id}
				name={robots[2].name}
				version={robots[2].version}
				job={robots[2].job}
				email={robots[2].email}
			/>
		</div>
	)
}

export default CardList
