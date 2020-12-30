import Header from "./Header"
import IconInfo from "./SearchApp/IconInfo"
import Icons from "./SearchApp/Icons"
import React from "react"
import SearchApp from "./SearchApp"
import { DocumentTitle } from "./lib"
import { Route, Switch } from "react-router-dom"

function Homepage() {
	return (
		<DocumentTitle title="Feathericons">
			<div className="xl:pb-64">
				<Header />
				<SearchApp>
					<Icons />
				</SearchApp>
			</div>
		</DocumentTitle>
	)
}

// TODO: Add `const { name } = useParams()`.
function IconPage() {
	return (
		<DocumentTitle title="Feathericons">
			<div className="xl:pb-64">
				<Header />
				<SearchApp>
					<IconInfo />
				</SearchApp>
			</div>
		</DocumentTitle>
	)
}

export default function Router() {
	return (
		<Switch>
			<Route path="/:name">
				<IconPage />
			</Route>
			<Route path="*">
				<Homepage />
			</Route>
		</Switch>
	)
}
