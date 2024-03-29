import styled from "styled-components";
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { snazzy } from "./Theme";
import { useState } from "react";
import { mdCode } from "./Initcode";
import { autocompletion } from "@codemirror/autocomplete";
import MarkdownPreview from "@uiw/react-markdown-preview";
import mermaid from "mermaid";
import "./viewer.css";

const Container = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
`;

const LeftPanel = styled.div`
	flex: 1;
	overflow: auto;
`;

const RightPanel = styled.div`
	flex: 1;
	overflow: auto;
`;

const tableTemplate = `
| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |
`;

const taskTemplate = `- [x] step 1
- [ ] step 2
- [ ] step 3: profit
`;

const codeTemplate = `
\`\`\`go
  package main
  import "fmt"
  func main() {
    fmt.Println("Hello, 世界")
  }
  \`\`\`
  `;

const mermaidTemplate = `
\`\`\`mermaid
stateDiagram-v2
    state if_state <<choice>>
    [*] --> IsPositive
    IsPositive --> if_state
    if_state --> False: if n < 0
    if_state --> True : if n >= 0
\`\`\`
`;

function mdCompletion(context) {
	// match any string that starts with a / and followed by characters.
	let word = context.matchBefore(/\/\w*/);

	if (!word || (word.from === word.to && !context.explicit)) {
		return null;
	}

	return {
		from: word.from,
		options: [
			{ label: "/h1", type: "text", apply: "\n# " },
			{ label: "/h2", type: "text", apply: "\n## " },
			{ label: "/h3", type: "text", apply: "\n### " },
			{ label: "/bold", type: "text", apply: "**bold text**" },
			{ label: "/italic", type: "text", apply: "_italic text_" },
			{
				label: "/code2",
				type: "text",
				apply: '```printf ("hello world!");```',
				detail: "inline code",
			},
			{
				label: "/code",
				type: "text",
				apply: codeTemplate,
				detail: "code block",
			},
			{
				label: "/mermaid",
				type: "text",
				apply: mermaidTemplate,
				detail: "diagram",
			},
			{ label: "/quote", type: "text", apply: "\n> text here!\n>" },
			{
				label: "/list",
				type: "text",
				apply: "\n1. \n2. \n3.",
				detail: "ordered",
			},
			{
				label: "/list2",
				type: "text",
				apply: "\n- \n- \n-",
				detail: "unordered",
			},
			{ label: "/link", type: "text", apply: "[text](url)" },
			{ label: "/image", type: "text", apply: "![text](url)" },
			{
				label: "/image2",
				type: "text",
				apply: '<img src="url" width="800"/>',
				detail: "with size",
			},
			{ label: "/table", type: "text", apply: tableTemplate },
			{ label: "/task", type: "text", apply: taskTemplate },
		],
	};
}

// A component to markdown previewer to handle mermaid diagrams
const getCode = (arr = []) =>
	arr
		.map((dt) => {
			if (typeof dt === "string") {
				return dt;
			}

			if (dt.props && dt.props.children) {
				return getCode(dt.props.children);
			}

			return "";
		})
		.filter(Boolean)
		.join("");

const mermaidComponet = ({ inline, children = [], className, ...props }) => {
	const code = getCode(children);
	if (
		typeof code === "string" &&
		typeof className === "string" &&
		/^language-mermaid/.test(className.toLocaleLowerCase())
	) {
		const Elm = document.createElement("div");
		Elm.id = "demo";
		const svg = mermaid.render("demo", code);
		return <code dangerouslySetInnerHTML={{ __html: svg }} />;
	}
	return <code className={String(className)}>{children}</code>;
};

function MdEditor() {
	const [content, setContent] = useState(mdCode);
	// const { height } = useWindowSize({ width: 0, height: 8 });

	const onChange = (value, viewUpdate) => {
		setContent(value);
	};

	return (
		<Container>
			<LeftPanel>
				<CodeMirror
					value={mdCode}
					theme={snazzy}
					onChange={onChange}
					height={`calc(100vh)`}
					basicSetup
					extensions={[
						markdown({
							base: markdownLanguage,
							codeLanguages: languages,
						}),
						autocompletion({
							override: [mdCompletion],
						}),
					]}
				/>
			</LeftPanel>

			<RightPanel>
				<MarkdownPreview
					style={{ padding: 16 }}
					source={content}
					components={{ code: mermaidComponet }}
					linkTarget="_blank"
				/>
			</RightPanel>
		</Container>
	);
}

export default MdEditor;
