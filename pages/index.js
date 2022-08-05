import Head from 'next/head'
import Navbar from '../src/components/Navbar'
import Products from '../src/components/Products'
import Search from '../src/components/Search'

export default function Home() {
	return (
		<div className="px-8">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="m-5 flex flex-col justify-center items-center">
				<Navbar />
				<Products />
			</main>
		</div>
	)
}
