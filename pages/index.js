import Head from 'next/head'
import Navbar from '../src/components/Navbar'
import Products from '../src/components/Products'
import { getBooksAPI } from './api/booksApi'

export default function Home({ books }) {
	console.log('test books : ', books)

	return (
		<div className="mx-10">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="mt-5 flex flex-col justify-center items-center">
				<Navbar />
				<Products />
			</main>
		</div>
	)
}

export async function getServerSideProps() {
	const res = await getBooksAPI()
	const data = await res.data
	console.log('Data : ', data)
		
	return {
		props: {
			books: data
		},
	}
}



// const response = await (
// 	await fetch('http://localhost:8000/books', {
// 		method: 'GET',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		body: JSON.stringify(data),
// 	})
// )
// 	.then((response) => response.json())
// 	.catch((error) => console.error('Error: ', error))
// 	.then((response) => console.log('Success:', JSON.stringify(response)))
// const data = await response.json()