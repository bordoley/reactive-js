import TypeDoc from "typedoc";
import fs from "fs";

const app = new TypeDoc.Application();
app.bootstrap({
  excludeNotExported: true,
  excludePrivate: true,
  hideSources: true,
  ignoreCompilerErrors: "true",
  mode: "library",
  module: "commonjs",
  moduleResolution: "node",
  preserveConstEnums: "true",
  readme: "none",
  target: "ES5",
  theme: "markdown",
});

const files = fs
  .readdirSync("./src")
  .filter(file => file.endsWith(".ts") && !file.endsWith(".test.ts"))
  .map(file => `./src/${file}`);

const project = app.convert(app.expandInputFiles(files));

if (project) {
  const outputDir = `./docs`;
  app.generateDocs(project, outputDir);
}
