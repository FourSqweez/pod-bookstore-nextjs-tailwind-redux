import Navbar from '../src/components/Navbar'
import '../styles/globals.css'
import store from '../src/app/store'
import { Provider } from 'react-redux'
import React, { useState } from 'react'
import { ModalContext } from '../src/context/context'
import Router from 'next/router'
import ProgressBar from '@badrap/bar-of-progress'

const progress = new ProgressBar({
	size: 4,
	color: '#F692B2',
	className: 'z-50',
	delay: 100,
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function MyApp({ Component, pageProps }) {
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<Provider store={store}>
			<ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
				<Navbar />
				<Component {...pageProps} />
			</ModalContext.Provider>
		</Provider>
	)
}

export default MyApp