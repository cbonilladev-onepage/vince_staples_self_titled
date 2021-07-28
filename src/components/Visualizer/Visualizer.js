
import p5 from 'p5';
import "p5/lib/addons/p5.sound";
import React, { useEffect, useState } from 'react';
import AudioSpectrum from 'react-audio-spectrum';
// import ReactPlayer from 'react-player';
import apple from '../../assets/apple.mp3';
import pauseButton from '../../assets/pausebutton.svg';
import playButton from '../../assets/playbutton.svg';
import './Visualizer.css';

const Visualizer = (props) => {
	const [audioState, setAudioState] = useState(false);
	// const [playTime, setPlayTime] = useState(0)
	// const appleRef = useRef()
	// let song = new Audio(apple)

	const handleAudio = () => {
		setAudioState(!audioState)
	}

	useEffect(() => {
		if (audioState) {
			props.appleRef.current.play()
		} else {
			props.appleRef.current.pause()
		}
	}, [audioState, props.appleRef])

	const PlayButton = () => {
		return <img onClick={handleAudio} className="PlayButton" src={playButton} alt="play button" />
	}

	const PauseButton = () => {
		return <img onClick={handleAudio} className="PauseButton" src={pauseButton} alt="pause button" />
	}

	let song, amp;
	let volHistory = [];

	const s = (sketch) => {
		sketch.preload = () => {
			song = sketch.loadSound(apple)
			// sketch.getAudioContext().resume()
		}

		sketch.setup = () => {
			sketch.createCanvas(200, 200)
			amp = new p5.Amplitude();
		};

		sketch.draw = () => {
			sketch.background(0);
			let vol = amp.getLevel();
			volHistory.push(vol);
			// console.log(vol)
		};
	};

	// useEffect(() => {
	// 	// If you don't throw a useEffect, it will render multiple canvases. No no no.
	// 	new p5(s, 'p5sketch');
	// }, []);

	// const logChange = () => {
	// 	setPlayTime(Math.floor(appleRef.current.currentTime))
	// 	console.log(playTime)
	// }

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
					{/* <ReactPlayer loop={true} playing={audioState} className="audioSource" url="https://www.youtube.com/watch?v=2r3mx_8GF9E" onProgress={props.handleProgress}></ReactPlayer> */}
					<audio id="audio-element" src={apple} ref={props.appleRef} onTimeUpdate={props.logChange} loop />
					<AudioSpectrum
						id="audio-canvas"
						height={800}
						width={1500}
						audioId={'audio-element'}
						capColor={'#E7E4D1'}
						capHeight={10}
						meterWidth={10}
						meterCount={100}
						meterColor={[
							{ stop: 0, color: '#f00' },
							{ stop: 0.5, color: '#E7E4D1' },
							{ stop: 1, color: '#E7E4D1' }
						]}
						gap={10}
					/>
				</div>
			</div>
		</div>
	)
}

export default Visualizer
