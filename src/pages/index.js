import SEO from "./_SEO"
import Style from "lib/x/Style"

// Converts px units to rem units.
function px(n) {
	n /= 16
	return n + "rem"
}

// Converts Tailwind units to rem units.
function tw(n) {
	n *= 4
	n /= 16
	return n + "rem"
}

// https://dev.to/patarapolw/fake-tagged-template-string-literal-to-enable-syntax-highlighting-in-vscode-34g1
function css/* tpl */(arr, ...args) {
	return arr.map((each, x) => `${each}${args[x] || ""}`).join("")
}

// TODO: Responsive CTA should use flex flex-row.
function LogoAndCTA() {
	return (
		// TODO: Add w-full max-w-* here.
		<div className="flex flex-col items-center">

			<div className="w-20 h-20 bg-gray-200 rounded-full" />

			<div className="h-6" />
			<div className="h-6 bg-gray-200 rounded-full" style={{ width: tw(112) }} />

			{/* <div className="hidden xl:block"> */}
			<div className="h-8" />
			<div className="flex flex-row">
				<div className="w-44 h-14 bg-gray-200 rounded-full" />
				<div className="w-4 h-4" />
				<div className="w-44 h-14 bg-gray-200 bg-opacity-50 rounded-full" />
			</div>
			{/* </div> */}

		</div>
	)
}

// TODO: Honeycomb UI breaks down for sm-lg breakpoints.
function SponsorHoneycomb() {
	return (
		<div className="flex flex-col items-center">

			<div className="flex flex-row">
				<div className="flex flex-col items-center">
					<div className="w-44 h-12 bg-gray-200 bg-opacity-50 rounded-full" />
					<div className="h-3" />
					<div className="w-32 h-3 bg-gray-200 bg-opacity-25 rounded-full" />
				</div>
				<div className="w-6" />
				<div className="flex flex-col items-center">
					<div className="w-44 h-12 bg-gray-200 bg-opacity-50 rounded-full" />
					<div className="h-3" />
					<div className="w-32 h-3 bg-gray-200 bg-opacity-25 rounded-full" />
				</div>
			</div>

			<div className="h-4" />
			<div className="flex flex-row">
				<div className="flex flex-col items-center">
					<div className="w-44 h-12 bg-gray-200 bg-opacity-50 rounded-full" />
					<div className="h-3" />
					<div className="w-32 h-3 bg-gray-200 bg-opacity-25 rounded-full" />
				</div>
				<div className="w-6" />
				<div className="flex flex-col items-center">
					<div className="w-44 h-12 bg-gray-200 bg-opacity-50 rounded-full" />
					<div className="h-3" />
					<div className="w-32 h-3 bg-gray-200 bg-opacity-25 rounded-full" />
				</div>
				<div className="w-6" />
				<div className="flex flex-col items-center">
					<div className="w-44 h-12 bg-gray-200 bg-opacity-50 rounded-full" />
					<div className="h-3" />
					<div className="w-32 h-3 bg-gray-200 bg-opacity-25 rounded-full" />
				</div>
			</div>

			<div className="h-4" />
			<div className="flex flex-row">
				<div className="flex flex-col items-center">
					<div className="w-44 h-12 bg-gray-200 bg-opacity-50 rounded-full" />
					<div className="h-3" />
					<div className="w-32 h-3 bg-gray-200 bg-opacity-25 rounded-full" />
				</div>
				<div className="w-6" />
				<div className="flex flex-col items-center">
					<div className="w-44 h-12 bg-gray-200 bg-opacity-50 rounded-full" />
					<div className="h-3" />
					<div className="w-32 h-3 bg-gray-200 bg-opacity-25 rounded-full" />
				</div>
			</div>

		</div>
	)
}

function Hero() {
	return (
		<header
			className="px-6 sm:px-4 py-16 xl:py-24 xl:pb-52 flex flex-row justify-center"
			style={{ backgroundImage: "linear-gradient(to right, hsl(215, 100%, 50%), hsl(255, 100%, 65%)" }}
		>

			{/* TL */}
			<div className="px-8 py-6 absolute top-0 left-0">
				<div className="flex flex-row">
					<div className="w-5 h-5 bg-gray-200 bg-opacity-25 rounded-full" />
					<div className="w-3" />
					<div className="w-24 h-5 bg-gray-200 bg-opacity-25 rounded-full" />
				</div>
			</div>

			{/* TR */}
			<div className="px-8 py-6 absolute top-0 right-0">
				<div className="flex flex-row">
					<div className="w-24 h-5 bg-gray-200 bg-opacity-25 rounded-full" />
					<div className="w-3" />
					<div className="w-5 h-5 bg-gray-200 bg-opacity-25 rounded-full" />
				</div>
			</div>

			{/* Logo and Sponsors */}
			{/* */}
			{/* NOTE: justify-normal is not a real class. */}
			<div
				className="flex flex-col xl:flex-row items-center justify-normal xl:justify-between"
				style={{
					width: "100%",
					maxWidth: px(1152),
				}}
			>

				{/* Logo */}
				<LogoAndCTA />

				{/* Sponsors */}
				<div className="hidden sm:block">
					<div className="h-16 xl:h-0" />
					<SponsorHoneycomb />
				</div>

			</div>

		</header>
	)
}

function SearchBar() {
	return (
		<div className="relative h-20">

			{/* LHS */}
			<div className="absolute left-0 inset-y-0">
				<div className="px-6 flex flex-row h-full">
					<div className="px-2 flex flex-row items-center">
						<div className="w-8 h-8 rounded-full bg-gray-100" />
					</div>
				</div>
			</div>

			{/* Search */}
			<div className="px-16">
				{/* ... */}
			</div>

			{/* RHS */}
			<div className="absolute right-0 inset-y-0">
				<div className="px-6 flex flex-row h-full">

					{/* Button */}
					<div className="px-2 hidden sm:flex sm:flex-row sm:items-center">
						<div className="px-2 flex flex-row items-center w-48 h-12 rounded-full bg-gray-100">
							<div className="w-8 h-8 rounded-full bg-gray-200" />
						</div>
					</div>

					{/* Button */}
					<div className="px-2 flex flex-row items-center">
						<div className="w-8 h-8 rounded-full bg-gray-100" />
					</div>

				</div>
			</div>

		</div>
	)
}

function IconApp() {
	return (
		<div className="mt-0 xl:-mt-36 px-0 xl:px-6 flex flex-row justify-center">
			<main
				// NOTE: Must use items-start because of sticky top-0.
				className="flex flex-row items-start bg-white border border-gray-200 rounded-none xl:rounded-6 shadow"
				style={{
					width: "100%",
					maxWidth: px(1280 + 64),
				}}
			>

				{/* LHS */}
				<Style className="flex-1">
					<div>

						<aside className="sticky top-0 z-10">
							{/* TODO */}
							<div className="bg-white !border-b !border-gray-200 rounded-tl-none xl:rounded-tl-6">
								<SearchBar />
							</div>
							<div className="w-full h-px bg-gray-200" />
						</aside>

						{/* Icons */}
						{/* */}
						{/* TODO: Add min-height constraint. */}
						<div className="px-4 sm:px-6 flex flex-row justify-center">
							<div
								className="pb-8"
								style={{
									width: "100%",
									maxWidth: px(56 * 16),
								}}
							>

								<style>
									{css`
										#grid {
											display: grid;
											grid-template-columns: repeat(auto-fill, minmax(128px, 1fr));
										}
									`}
								</style>

								{Array(6).fill(0).map((_, x) => (
									<section key={x} className="my-16">
										<div className="px-6 flex flex-row">
											<div className="w-5 h-5 bg-gray-100 rounded-full" />
											<div className="w-3" />
											<div className="w-32 h-5 bg-gray-100 rounded-full" />
										</div>
										<div className="h-4" />
										<div id="grid">
											{Array(12).fill(0).map((_, x) => (
												<article key={x} className="pb-full relative">
													<div className="absolute inset-0">
														<div className="flex flex-row justify-center items-center h-full">
															<div className="w-10 h-10 bg-gray-200 rounded-full" />
														</div>
														<div className="p-2 absolute inset-x-0 bottom-0">
															<div className="flex flex-row justify-center">
																<div className="w-20 h-4 bg-gray-100 rounded-full" />
															</div>
														</div>
													</div>
												</article>
											))}
										</div>
									</section>
								))}

							</div>
						</div>

					</div>
				</Style>

				{/* RHS */}
				<Style className="hidden xl:block">
					<div className="w-px h-full bg-gray-200" />
				</Style>
				<Style className="hidden xl:block">
				<div className="sticky top-0 w-80 bg-gray-50 rounded-r-none xl:rounded-r-6">
					<div className="w-80 h-80 bg-white rounded-tr-none xl:rounded-tr-6" />
					<div className="w-full h-px bg-gray-200" />

					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />

				</div>
				</Style>

			</main>
		</div>
	)
}

export default function Home() {
	return (
		<>
			<SEO />

			{/* Hero */}
			<Hero />

			{/* Rounded SVG */}
			<div className="hidden xl:block">
				<Style className="w-screen h-auto">
					<svg fill="url(#bg-grad)" viewBox="0 0 32 1" xmlns="http://www.w3.org/2000/svg">
						<path d="M16 1C4 1 0 0 0 0H32C32 0 28 1 16 1Z" />
						<defs>
							<linearGradient id="bg-grad">
								<stop offset="0%" stopColor="hsl(215, 100%, 50%)" />
								<stop offset="100%" stopColor="hsl(255, 100%, 65%)" />
							</linearGradient>
						</defs>
					</svg>
				</Style>
			</div>

			{/* App */}
			<IconApp />

			<div className="hidden xl:block">
				<br />
				<br />
				<br />
				<br />
			</div>

		</>
	)
}
