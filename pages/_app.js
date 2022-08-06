import Navbar from '../src/components/Navbar'
import '../styles/globals.css'
import store from '../src/app/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Navbar />
			<Component {...pageProps} />
		</Provider>
	)
}

export default MyApp
