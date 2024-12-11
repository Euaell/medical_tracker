import type { Metadata } from "next";
import "./globals.css";
import 'remixicon/fonts/remixicon.css'
import Link from "next/link";


export const metadata: Metadata = {
  title: "Medi-Track",
  description: "Medi-Track is a simple medication tracking app.",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
			<body className="flex flex-row min-h-screen w-full">
				<nav className="flex flex-col min-h-full mr-8 gap-6 p-6">

					<div>
						{/* Logo */}
						<h1 className="text-cyan-700 text-5xl p-4 font-extrabold">Medi-Track</h1>
					</div>
					
					<ul className="flex flex-col border-r-2 border-slate-300 h-full gap-4">
						<li className="bg-cyan-100 rounded-full">
							<Link href="/" className="flex flex-row justify-between py-2 items-center px-4">
								<i className="ri-home-heart-line ri-lg"></i>
								<span>
									Home
								</span>
							</Link>
						</li>
						<li>
							<Link href="/medications">
								<i className="ri-medicine-bottle-line ri-lg"></i>
								Medications
							</Link>
						</li>
						<li>
							<Link href="/vitals">Vitals</Link>
						</li>
						<li className="mt-auto ml-auto mr-8">
							<Link href="/settings">
								<span className="sr-only">Settings</span>
								<i className="ri-settings-5-line ri-2x"></i>
							</Link>
						</li>
					</ul>
				</nav>
				<main>
					{children}
				</main>
			</body>
		</html>
	)
}
