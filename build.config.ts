import { mdPlugin } from "./mdPlugin";

async function build() {
  const buildResult = await Bun.build({
    entrypoints: ["./index.ts"],
    target: "node",
    outdir: "./dist",
    plugins: [mdPlugin],
  });

  console.log(buildResult.success ? "Build successful" : "Build failed");
}

build();
