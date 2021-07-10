import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import playButton from '../../assets/playbutton.svg';
import './Visualizer.css';

const Visualizer = () => {
	const  [audioState, setAudioState] = useState(false);

	const handleAudio = () => {
		setAudioState(!audioState)
	}

	return (
		<div className="VisualizerContainer">
			<div className="VisualizerField">
				<div>
					<img onClick={handleAudio} className="PlayButton" src={playButton} alt="play button"/>
					<ReactPlayer loop={true} playing={audioState} className="audioSource" url="https://www.youtube.com/watch?v=2r3mx_8GF9E"></ReactPlayer>
					{/* <p>VISUALIZER</p> */}
				</div>
			</div>
		</div>
	)
}

export default Visualizer
