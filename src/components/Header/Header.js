import React from 'react'
import './Header.css'

const boldText = {
	fontWeight: 'bold'
}

const Header = () => {
	return (
		<header>
			<span style={boldText} className="TitleTrack">Vince Staples, Self-Titled</span>
		</header>
	)
}

export default Header
