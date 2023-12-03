import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import './globals.css';
import './components.css';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: "Win's Personal Website",
	description: 'Powered by Next.js',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html className="text-black bg-white dark:text-white dark:bg-slate-900" lang="en">
			<body className="antialiased mt-8 mb-8 lg:max-w-4xl min-lg:flex min-lg:flex-col lg:mx-auto max-lg:grid max-lg:place-items-center max-sm:place-items-start">
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
