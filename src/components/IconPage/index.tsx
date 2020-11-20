import * as Feather from "react-feather"
import Demos from "./Demos"
import Markdown from "./markdown.md"
import React from "react"
import { datasetAsMap } from "../../data/dataset"
import { IconGrid, IconSquare } from "../Icon"
import { IFeather } from "../../types"
import { MDXProvider } from "@mdx-js/react"
import { toTitleCase } from "@zaydek/lib/dist/helpers"

function BentoBox({ SVG }: { SVG: React.FC<React.SVGAttributes<SVGElement>> }) {
	return (
		<div className="bento-box group">
			{[104, 64, 40, 24].map(each => (
				<div className="relative">
					<div className="absolute br-0 opacity-0 group-on:opacity-100 transition">
						<div className="px-8 py-6">
							<div className="px-4 py-2 bg-gray-200 rounded-4">
								<div className="text-12 tracking-10 text-gray-400" style={{ fontFamily: "ui-monospace, monospace" }}>
									{each}x{each}
								</div>
							</div>
						</div>
					</div>
					<SVG />
				</div>
			))}
		</div>
	)
}

// function BentoBox({ SVG }: { SVG: React.FC<React.SVGAttributes<SVGElement>> }) {
// 	return (
// 		<div className="bento-box">
// 			{range(4).map(each => (
// 				<div key={each}>
// 					<SVG />
// 				</div>
// 			))}
// 		</div>
// 	)
// }

function More({ name }: { name: string }) {
	const metadata = datasetAsMap[name]
	return (
		<IconGrid>
			{metadata.more.map(each => (
				<IconSquare key={each} metadata={datasetAsMap[each]} />
			))}
		</IconGrid>
	)
}

export default function IconInfo({ name }: { name: string }) {
	const SVG = (Feather as IFeather)[toTitleCase(name)]
	const metadata = datasetAsMap[name]

	return (
		<div className="prose">
			<MDXProvider
				components={{
					KebabCase: () => name,
					TitleCase: () => toTitleCase(name),
					BentoBox: () => <BentoBox SVG={SVG} />,
					Demos,
					More: () =>
						!metadata.more.length ? null : (
							<>
								<br />
								<h2>
									More Icons Like <code>{name}</code>
								</h2>
								<div>
									<More name={name} />
								</div>
							</>
						),
				}}
			>
				<Markdown />
			</MDXProvider>
		</div>
	)
}
