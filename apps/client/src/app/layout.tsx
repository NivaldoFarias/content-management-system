import { Poppins } from "@next/font/google";

import { DataProvider } from "./data-provider";

import "react-toastify/dist/ReactToastify.css";
import "./styles/globals.scss";

const poppins = Poppins({
	weight: "700",
	style: ["normal", "italic"],
	preload: true,
	subsets: ["devanagari", "latin-ext", "latin"],
	fallback: ["ubuntu", "sans-serif"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-br" className={poppins.className}>
			<head>
				<title>Content Management Platform</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, minimum-scale=1.0"
				/>
				<meta name="description" content="Content Management Platform" />
				<meta
					name="Content Management Platform"
					content="Generated by create next app"
				/>
				<meta name="theme-color" content="#00D698" />
				<link rel="icon" href="favicon.ico" />
				<link rel="android-chrome" href="/favicon/android-chrome-192x192.png" />
				<link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
				<link rel="manifest" href="manifest.json" />
			</head>
			<body>
				<DataProvider>{children}</DataProvider>
			</body>
		</html>
	);
}
