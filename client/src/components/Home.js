import React, { useState, useEffect, useRef } from 'react'
import RINGS from 'vanta/dist/vanta.rings.min'
import { CSSTransition } from "react-transition-group";
import * as THREE from 'three'
import '../styling/home.scss'

const Home = (props) => {
	const [vantaEffect, setVantaEffect] = useState(0)
	const [mounted, setMount] = useState(false)
	const myRef = useRef(null)

	useEffect(() => {
		setMount(true)
	}, [mounted])

	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(RINGS({
				el: myRef.current,
				scale: 1,
				color: '#08fdd8',
				backgroundColor: '#181818',
				THREE: THREE // use a custom THREE when initializing
			}))
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy()
		}
	}, [vantaEffect])

	return (
		<CSSTransition in={mounted} timeout={1200} classNames="home">
			<div ref={myRef} id="foreground-content"></div>
		</CSSTransition>
	)
}

export default Home