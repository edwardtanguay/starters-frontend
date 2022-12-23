import MarkdownIt from 'markdown-it';

export const convertMarkdownToHtml = (markdown: string) => {
	const md = new MarkdownIt();
	return md.render(markdown);
}