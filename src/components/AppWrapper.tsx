import Header from "./Header"
import React from "react"
import TopNav from "./TopNav"
import { px } from "@zaydek/sorcery/dist/runtime"
import { useBreakpoints } from "@zaydek/lib/hooks"

interface InteractiveWrapperProps {
	children?: React.ReactNode
}

// NOTE: Uses `overflow-x-hidden` because of `-mx-2`.

function StickyTopObscureEffect() {
	return (
		<div className="sticky t-0 -mx-8 -mb-24 z-10">
			{/* prettier-ignore */}
			<div className="hstack">
				<svg
					className="w-8 h-40"
					style={{ color: "hsl(215, 100%, 50%)" }}
					fill="currentColor"
					preserveAspectRatio="none"
					viewBox="0 0 1 1"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect width={1} height={1} />
				</svg>
				<svg
					className="w-24 h-40"
					style={{ color: "hsl(215, 100%, 50%)" }}
					fill="currentColor"
					viewBox="0 0 24 40"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path fillRule="evenodd" clipRule="evenodd" d="M24 0H0V40C0 26.7451 10.7451 16 24 16V0Z" />
				</svg>
				<svg
					className="w-full h-16"
					style={{ color: "hsl(215, 100%, 50%)" }}
					fill="currentColor"
					preserveAspectRatio="none"
					viewBox="0 0 1 1"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect width={1} height={1} />
				</svg>
				<svg
					className="w-24 h-40"
					style={{ color: "hsl(215, 100%, 50%)" }}
					fill="currentColor"
					viewBox="0 0 24 40"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path fillRule="evenodd" clipRule="evenodd" d="M0 0H24V40C24 26.7451 13.2549 16 0 16V0Z" />
				</svg>
				<svg
					className="w-8 h-40"
					style={{ color: "hsl(215, 100%, 50%)" }}
					fill="currentColor"
					preserveAspectRatio="none"
					viewBox="0 0 1 1"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect width={1} height={1} />
				</svg>
			</div>
		</div>
	)
}

function InteractiveWrapper({ children }: InteractiveWrapperProps) {
	const screen = useBreakpoints()
	return (
		// TODO: Add `transform-z`.
		<div className="hstack" style={{ transform: "translateZ(0)" }}>
			<div className="z-10" style={{ width: "100%", maxWidth: px(1344) }}>
				{screen.xl && <StickyTopObscureEffect />}
				<div className="hstack bg-white xl:rounded-24" style={{ boxShadow: "var(--shadow-xs), var(--shadow-md)" }}>
					{/* NOTE: Do not use a stack because of sticky. */}
					<div className="spacer">
						{/* prettier-ignore */}
						<div className="sticky t-0 -mt-16 pt-16">
							<div className="!bg-red-100">hello</div>
						</div>
						<div className="px-16 sm:px-24 xl:px-64 py-64 w-full">
							{/* prettier-ignore */}
							<div className="w-full max-w-md">
								{children}
							</div>
						</div>
					</div>
					{screen.md && (
						<div className="vstack bg-cool-gray-100 xl:rounded-r-24" style={{ width: px(20 * 16) /* 320px */ }}>
							<div className="sticky t-0 -mt-16 pt-16">
								<div className="!bg-red-100">hello</div>
							</div>
							<div className="spacer" />
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

interface AppWrapperProps {
	children?: React.ReactNode
}

export default function AppWrapper({ children }: AppWrapperProps) {
	const screen = useBreakpoints()
	return (
		<>
			<div className="absolute t-0 x-0 z-10">
				<div className="px-16 sm:px-24 py-12">
					<TopNav />
				</div>
			</div>
			{/* TODO: Extract to `<Header>`. */}
			<div className="relative px-16 sm:px-24 py-96" style={{ backgroundColor: "hsl(215, 100%, 50%)" }}>
				{screen.xl && (
					<>
						<div className="absolute t-full x-0">
							<div className="h-128" style={{ backgroundColor: "hsl(215, 100%, 50%)" }} />
							<svg style={{ color: "hsl(215, 100%, 50%)" }} fill="currentColor" viewBox="0 0 32 1" xmlns="http://www.w3.org/2000/svg">
								<path d="M16 1C4 1 0 0 0 0H32C32 0 28 1 16 1Z" />
							</svg>
						</div>
						<div className="fixed t-0 x-0 -z-1">
							<div className="h-128" style={{ backgroundColor: "hsl(215, 100%, 50%)" }} />
							<svg style={{ color: "hsl(215, 100%, 50%)" }} fill="currentColor" viewBox="0 0 32 1" xmlns="http://www.w3.org/2000/svg">
								<path d="M16 1C4 1 0 0 0 0H32C32 0 28 1 16 1Z" />
							</svg>
						</div>
					</>
				)}
				<Header />
			</div>
			{/* prettier-ignore */}
			<InteractiveWrapper>
				{children}
			</InteractiveWrapper>
			{screen.xl && (
				<div className="py-48">
					<div className="prose">
						<p className="text-center">
							{/* prettier-ignore */}
							<small>
								<a href="TODO">Feather</a>{" "}
								is by <a href="TODO">Cole Bemis</a>{" "}
								and the new <a href="TODO">feathericons.com</a>{" "}
								is by <a href="TODO">Zaydek MG</a>.
								<br />
								Both are licenesed as <a href="TODO">MIT open source</a>.
							</small>
						</p>
					</div>
				</div>
			)}
		</>
	)
}
