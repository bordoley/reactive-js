import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import fs from "fs";
import * as ts from "typescript";
import path from "path";

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

const allModules = fs
  .readdirSync("./src")
  .filter(file => file.endsWith(".ts"))
  .map(file => file.replace(".ts", ""));

const external = ["stream", "react", "scheduler", "fs", "zlib"];

const makeInput = modules => ({
  src: modules.map(m => `./src/${m}.ts`),
  // Resolve absolute path to work around oddness in rollup-plugin-dts
  // https://github.com/Swatinem/rollup-plugin-dts/blob/ced8c9d5aef7a5f65f9decfc7cc1d2ef46226bc8/src/index.ts#L66
  "build-types": modules.map(m => path.resolve(`./build-types/${m}.d.ts`)),
});

const makeCoreNPMPackage = () => {
  const packageModules = allModules.filter(
    file => !file.startsWith("__") && !file.startsWith("testing"),
  );
  const input = makeInput(packageModules);

  return [
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
      ],
      plugins: [dts()],
    },
  ];
};

const makeModules = () => {
  const input = makeInput(allModules);
  return [
    {
      external,
      treeshake: false,
      input: input.src,
      output: [
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
      treeshake: false,
      input: input["build-types"],
      output: [
        {
          ...output.mod,
          format: "esm",
          plugins: [transformDTSImportsForDeno()],
        },
      ],
      plugins: [dts()],
    },
  ];
};

export default [...makeCoreNPMPackage(), ...makeModules()];
