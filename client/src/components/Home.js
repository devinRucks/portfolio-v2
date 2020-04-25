import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import { CSSTransition } from "react-transition-group";
import Fade from 'react-reveal/Fade';
import * as THREE from 'three'
import '../styling/home.scss'

const Home = (props) => {
	const [vantaEffect, setVantaEffect] = useState(0)
	const [mounted, setMount] = useState(false)
	const [showTopHeading, setTopHeading] = useState(false)
	const [showMidHeading, setMidHeading] = useState(false)
	const [showBottomHeading, setBottomHeading] = useState(false)
	const myRef = useRef(null)

	useEffect(() => {
		setMount(true)
	}, [mounted])

	useEffect(() => {
		setTimeout(() => setTopHeading(true), 1000)
		setTimeout(() => setMidHeading(true), 1000)
		setTimeout(() => setBottomHeading(true), 1000)
	}, [showTopHeading, showMidHeading, showBottomHeading])

	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(NET({
				el: myRef.current,
				scale: 1,
				showDots: false,
				color: '#08fdd8',
				backgroundColor: '#1d1d1d',
				THREE: THREE // use a custom THREE when initializing
			}))
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy()
		}
	}, [vantaEffect])

	return (
		<CSSTransition in={mounted} timeout={1200} classNames="home">
			<div ref={myRef} id="foreground-content">
				<div id="heading-container">

					<Fade left opposite when={showTopHeading}>
						<div className="top-heading" >Hi, my name is</div>
					</Fade>

					<Fade left opposite when={showMidHeading}>
						<div className="mid-heading">Devin Rucks.</div>
					</Fade>

					<Fade left opposite when={showBottomHeading}>
						<div className="bottom-heading">I'm a Software Developer</div>
					</Fade>

				</div>
			</div>
		</CSSTransition>
	)
}

export default Home