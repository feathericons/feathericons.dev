import { range } from "./lib"
import PlaceholderText from "./PlaceholderText"
import React from "react"

export default function TopRow() {
	return (
		<div className="hstack space-16 px-16 sm:px-24">
			<PlaceholderText />
			<div className="spacer"></div>
			{range(2).map(each => (
				<PlaceholderText key={each} />
			))}
		</div>
	)
}
