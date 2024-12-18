import type { Metadata } from "next";
import "./globals.css";
import 'remixicon/fonts/remixicon.css'
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Medi-Track",
  description: "Medi-Track is a simple medication tracking app.",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
			<body className="flex flex-row min-h-screen w-screen gap-8">
				<Navbar />
				<main className="w-full">
					{children}
				</main>
			</body>
		</html>
	)
}
