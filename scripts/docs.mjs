import TypeDoc from "typedoc";
import fs from "fs";

const app = new TypeDoc.Application();
app.bootstrap({
  excludePrivate: true,
  hideSources: true,
  ignoreCompilerErrors: true,
  includeDeclarations: true,
  mode: "file",
  module: "commonjs",
  moduleResolution: "node",
  preserveConstEnums: true,
  readme: "none",
  target: "ES5",
  theme: "markdown",
});

let files = fs
  .readdirSync("./src")
  .filter(file => file.endsWith(".ts") && !file.endsWith(".test.ts"))
  .map(file => `./src/${file}`);

//files = ["./mod/functions.d.ts"];

const project = app.convert(app.expandInputFiles(files));

if (project) {
  const outputDir = `./docs`;
  app.generateDocs(project, outputDir);
}
