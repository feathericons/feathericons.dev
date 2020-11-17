// import AppWrapper from "components/AppWrapper"
// import dataset from "data/dataset"
// import IconInfo from "components/IconInfo"
import { GetStaticPropsContext } from "next"

interface IconPageProps {
	name: string
}

export default function IconPage({ name }: IconPageProps) {
	return (
		// <AppWrapper>
		// 	<IconInfo icon={dataset.find(each => each.name.kebab === name)!} />
		// </AppWrapper>
		"TODO"
	)
}

// `getStaticProps` forwards parameters as props.
export async function getStaticProps(context: GetStaticPropsContext) {
	return { props: context.params }
}

// `getStaticPaths` enumerates pages as parameters.
export async function getStaticPaths() {
	return {
		paths: dataset.map(each => ({
			params: { name: each.name.kebab },
		})),
		fallback: false,
	}
}
