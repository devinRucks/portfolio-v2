import React, { useState, useEffect, useRef } from 'react'
import RINGS from 'vanta/dist/vanta.rings.min'
import * as THREE from 'three'
import '../styling/home.scss'

const Home = (props) => {
	const [vantaEffect, setVantaEffect] = useState(0)
	const myRef = useRef(null)

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
		<div ref={myRef} id="foreground-content"></div>
	)
}

export default Home