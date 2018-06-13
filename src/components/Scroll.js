import React from 'react'

const Scroll = props => {
	return (
		<div
			style={{
				overflowY: 'scroll',
				border: '0px solid #0ccac4',
				minHeight: '300px',
				maxHeight: '600px'
			}}
		>
			{props.children}
		</div>
	)
}

export default Scroll
