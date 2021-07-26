
import "p5/lib/addons/p5.sound";
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import pauseButton from '../../assets/pausebutton.svg';
import playButton from '../../assets/playbutton.svg';
import './Visualizer.css';

const Visualizer = (props) => {
	const [audioState, setAudioState] = useState(false);

	const handleAudio = () => {
		setAudioState(!audioState)
	}

	const PlayButton = () => {
		return <img onClick={handleAudio} className="PlayButton" src={playButton} alt="play button" />
	}

	const PauseButton = () => {
		return <img onClick={handleAudio} className="PauseButton" src={pauseButton} alt="pause button" />
	}

	let amplitude;
	const s = (sketch) => {

		sketch.setup = () => {
			sketch.createCanvas(200, 200)
			// amplitude = new p5.Amplitude();
		};

		sketch.draw = () => {
			sketch.background('#083664');
			let vol = amplitude.getLevel();
			// sketch.ellipse(sketch.height/2, sketch.width/2, vol*500, vol*500);
			// console.log('volume', vol);
		};
	};

	// useEffect(() => {
	// 	// If you don't throw a useEffect, it will render multiple canvases. No no no.
	// 	new p5(s, 'p5sketch');
	// }, []);


	const CurrButton = () => {
		if (audioState) {
			return <PauseButton />
		}
		return <PlayButton />
	}

	return (
		<div className="VisualizerContainer">
			<div className="VisualizerField">
				<div>
					<CurrButton />
					<ReactPlayer loop={true} playing={audioState} className="audioSource" url="https://www.youtube.com/watch?v=2r3mx_8GF9E" onProgress={props.handleProgress}></ReactPlayer>
				</div>
			</div>
		</div>
	)
}

export default Visualizer
