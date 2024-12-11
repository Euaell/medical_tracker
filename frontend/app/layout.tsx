import type { Metadata } from "next";
import "./globals.css";
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
					
					<ul className="flex flex-col border-r-2 border-slate-300 h-full">
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/medications">Medications</Link>
						</li>
						<li>
							<Link href="/vitals">Vitals</Link>
						</li>
						<li className="mt-auto">
							<Link href="/settings">
								<span className="sr-only">Settings</span>
								{/* <CogIcon className="h-6 w-6" aria-hidden="true" /> */}
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
