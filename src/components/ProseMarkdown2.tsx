import gfm from "remark-gfm"
import ReactMarkdown from "react-markdown"

// Ex:
//
// const str = `
//   #foo {
//     bar: baz;
//   }
// `
// detab(str) // "#foo {\n\tbar: baz;\n}"
//
function detab(str: string) {
	let str2 = str
	// ^\n
	if (str2.length > 0 && str2[0] === "\n") {
		str2 = str2.slice(1)
	}
	// \n$
	if (str2.length > 0 && str[str.length - 1] === "\n") {
		str = str2.slice(0, -1)
	}
	// Iterate to non-tab:
	let tabCount = 0
	for (let x = 0; x < str2.length; x++) {
		if (str2[x] !== "\t") {
			// No-op
			break
		}
		tabCount++
	}
	if (tabCount > 0) {
		// prettier-ignore
		str2 = str2.split("\n").map(each => each.slice(tabCount)).join("\n")
	}
	return str2
}

interface ProseMarkdown2Props {
	children?: string
}

export default function Prose2({ children }: ProseMarkdown2Props) {
	return (
		<ReactMarkdown plugins={[gfm]} allowDangerousHtml>
			{detab(children || "")}
		</ReactMarkdown>
	)
}