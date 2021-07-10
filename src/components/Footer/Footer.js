import React, { useState } from 'react'
import './Footer.css'

const Footer = (props) => {
	const [minutes, setMinutes] = useState(0)

	const seconds = Math.floor(props.elapsedTime)

	return (
		<div class="Footer">
			<h2 class="FooterText">Vince Staples</h2>
			<h2 class="FooterText">The Apple & The Tree</h2>
			<h2 class="FooterText">Track 6</h2>
			<h2 class="FooterText">00 : {minutes.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})} : {seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}</h2>
		</div>
	)
}

export default Footer
