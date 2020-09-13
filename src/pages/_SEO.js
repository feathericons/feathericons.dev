const meta = {
	title: "Feather – Simply beautiful open source icons",
	description: "Feather is a collection of simply beautiful open source icons. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency and readability.",

	// TODO: Change to "https://feathericons.com".
	url: "https://feathericons.dev",
}

export default function SEO() {
	return (
		<Head>

			<meta
				charSet="utf-8"
			/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<link
				rel="icon"
				href={`${consts.url}/static/favicon.ico`}
			/>

			{/* Core */}
			<title>
				{consts.title}
			</title>
			<meta
				name="title"
				content={consts.title}
			/>
			<meta
				name="description"
				content={meta.description}
			/>

			{/* Facebook */}
			<meta
				property="og:type"
				content="website"
			/>
			<meta
				property="og:url"
				content={consts.url}
			/>
			<meta
				property="og:title"
				content={consts.title}
			/>
			<meta
				property="og:description"
				content={meta.description}
			/>
			<meta
				property="og:image"
				content={`https://${consts.url}/static/social.png`}
			/>

			{/* Twitter */}
			<meta
				property="twitter:card"
				content="summary_large_image"
			/>
			<meta
				property="twitter:url"
				content={consts.url}
			/>
			<meta
				property="twitter:title"
				content={consts.title}
			/>
			<meta
				property="twitter:description"
				content={meta.description}
			/>
			<meta
				property="twitter:image"
				content={`https://${consts.url}/static/social.png`}
			/>

			{/* NOTE: <meta name="twitter:creator" ...> is not
			generated by https://metatags.io but was present. */}
			<meta
				name="twitter:creator"
				content="@colebemis"
			/>

		</Head>
	)
}
