import Navbar from '../src/components/Navbar'
import '../styles/globals.css'
import store from '../src/app/store'
import { Provider } from 'react-redux'
import React, { useState } from 'react'
import { ModalContext } from '../src/context/context'

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