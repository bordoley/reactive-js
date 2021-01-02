import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import fs from "fs";
import * as ts from "typescript";

const files = fs.readdirSync("./src");
const modules = files
  .filter(file => file.endsWith(".ts"))
  .map(file => file.replace(".ts", ""));

const external = [
  "http",
  "http2",
  "stream",
  "react",
  "scheduler",
  "svelte",
  "svelte/store",
  "fs",
  "zlib",
];

const input = {
  src: modules.map(m => `./src/${m}.ts`),
  "build-types": modules.map(m => `./build-types/${m}.d.ts`),
};

const output = {
  mod: {
    dir: "./mod",
    hoistTransitiveImports: false,
  },
  packages: {
    core: {
      dir: "./packages/core",
      hoistTransitiveImports: false,
    },
  },
};

const addDTSReferencesToMJSFilesForDeno = () => ({
  name: "addDTSReferencesToMJSFilesForDeno",
  renderChunk(code, info) {
    const dts = "./" + info.fileName.replace(/mjs$/, "d.ts");
    return info.isEntry ? `/// <reference types="${dts}" />\n` + code : code;
  },
});

const transformDTSImportsForDeno = () => {
  const transformerFactory = context => {
    const visitNode = node => {
      node = ts.visitEachChild(node, visitNode, context);
      const shouldTransform =
        ts.isImportDeclaration(node) &&
        ts.isStringLiteral(node.moduleSpecifier) &&
        node.moduleSpecifier.text.startsWith("./");

      return shouldTransform
        ? context.factory.updateImportDeclaration(
            node,
            node.decorators,
            node.modifiers,
            node.importClause,
            context.factory.createStringLiteral(
              node.moduleSpecifier.text.replace(".d.ts", ".mjs"),
            ),
          )
        : node;
    };

    return rootNode => {
      return ts.visitNode(rootNode, visitNode);
    };
  };

  return {
    name: "transformDTSImportsForDeno",
    renderChunk(code, chunk) {
      if (chunk.isEntry) {
        const sourceFile = ts.createSourceFile(
          chunk.fileName,
          code,
          ts.ScriptTarget.Latest,
          true,
        );
        const transformationResult = ts.transform(sourceFile, [
          transformerFactory,
        ]);
        const transformedSourceFile = transformationResult.transformed[0];
        const printer = ts.createPrinter();

        return printer.printNode(
          ts.EmitHint.Unspecified,
          transformedSourceFile,
          undefined,
        );
      }

      return code;
    },
  };
};

export default [
  {
    external,
    treeshake: false,
    input: input.src,
    output: [
      {
        ...output.packages.core,
        chunkFileNames: "[name]-[hash].mjs",
        entryFileNames: "[name].mjs",
        format: "esm",
      },
      {
        ...output.packages.core,
        chunkFileNames: "[name]-[hash].js",
        entryFileNames: "[name].js",
        format: "cjs",
      },
      {
        ...output.mod,
        chunkFileNames: "[name]-[hash].mjs",
        entryFileNames: "[name].mjs",
        format: "esm",
        plugins: [addDTSReferencesToMJSFilesForDeno()],
      },
    ],
    plugins: [
      typescript({
        tsconfig: "tsconfig.typecheck.json",
      }),
    ],
  },
  {
    external,
    input: input["build-types"],
    output: [
      {
        ...output.packages.core,
        format: "esm",
      },
      {
        ...output.mod,
        format: "esm",
        plugins: [transformDTSImportsForDeno()],
      },
    ],
    plugins: [dts()],
  },
];
