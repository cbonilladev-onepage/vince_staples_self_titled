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

	// const s = (sketch) => {
	// 	var mic;
		
	// 	sketch.setup = () => {
	// 		sketch.createCanvas(800, 600)
	// 		mic = new p5.AudioIn();
	// 		mic.start();
	// 	};

	// 	sketch.draw = () => {
	// 		sketch.background(51);
	// 		let vol = mic.getLevel();
	// 		sketch.ellipse(sketch.height/2, sketch.height/2, vol*500, vol*500);
	// 	};
	// };

	// useEffect(() => {
	// 	//If you don't throw a useEffect, it will render multiple canvas. No no no.
	// 	var myp5 = new p5(s, 'p5sketch');
	// }, [])


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
					{/* <p>VISUALIZER</p> */}
					{/* <div id="p5sketch" className="visualizer">

					</div> */}
				</div>
			</div>
		</div>
	)
}

export default Visualizer
