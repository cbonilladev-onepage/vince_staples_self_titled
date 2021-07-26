import React, { useEffect, useState } from 'react'
import './Footer.css'

const Footer = ({elapsedTime}) => {
	const [time, setTime] = useState(0)

	const formatTime = new Date(elapsedTime * 1000).toISOString().substr(11, 8)

	// console.log(seconds)

	useEffect(() => {
		setTime(formatTime)
		// console.log(formatTime)
	}, [formatTime])

	return (
		<div class="Footer">
			{/* <div className="BottomBorder"></div> */}
			<h2 class="FooterText">Vince Staples</h2>
			<h2 class="FooterText">The Apple & The Tree</h2>
			<h2 class="FooterText">Track 6</h2>
			<h2 class="FooterText">{time}</h2>
		</div>
	)
}

export default Footer
