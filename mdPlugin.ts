import { type BunPlugin } from "bun";

export const mdPlugin: BunPlugin = {
  name: "Markdown Plugin",
  setup(build) {
    build.onLoad({ filter: /\.md$/ }, async (args) => {
      console.log("Loading markdown file", args.path);
      const contents = await Bun.file(args.path).text();
      return {
        exports: { default: contents },
        contents: `export default ${JSON.stringify(contents)};`,
      };
    });
  },
};
