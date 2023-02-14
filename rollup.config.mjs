import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import fs from "fs";
import ts from "typescript";
import path from "path";
import { cwd } from "process";

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
    return info.isEntry
      ? `/// <reference types="${
          "./" + path.parse(info.fileName).name + ".d.ts"
        }" />\n` + code
      : code;
  },
});

const transformDTSImportsForDeno = () => {
  const transformerFactory = context => {
    const visitNode = node => {
      node = ts.visitEachChild(node, visitNode, context);
      const shouldTransform =
        ts.isImportDeclaration(node) &&
        ts.isStringLiteral(node.moduleSpecifier) &&
        node.moduleSpecifier.text.startsWith(".");

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

const getFileList = dirName => {
  let files = [];
  const items = fs.readdirSync(dirName, { withFileTypes: true });

  for (const item of items) {
    if (item.isDirectory()) {
      files = [...files, ...getFileList(`${dirName}/${item.name}`)];
    } else {
      files.push(`${dirName}/${item.name}`);
    }
  }

  return files;
};

const allModules = getFileList("./src")
  .filter(file => file.endsWith(".ts"))
  .map(file => file.replace(".ts", ""));

const external = ["stream", "react", "scheduler", "fs", "zlib"];

const makeInput = modules => ({
  src: modules.map(m => `${m}.ts`),
  // Resolve absolute path to work around oddness in rollup-plugin-dts
  // https://github.com/Swatinem/rollup-plugin-dts/blob/ced8c9d5aef7a5f65f9decfc7cc1d2ef46226bc8/src/index.ts#L66
  "build-types": modules
    .map(file => file.replace("./src", "./build-types") + ".d.ts")
    .map(m => path.resolve(m))
    .reduce((acc, next) => {
      acc[next]= next;
      return acc;
    }, {}),
});

const makeCoreNPMPackage = () => {
  const packageModules = allModules.filter(
    file => !file.startsWith("__tests__") && !file.startsWith("testing"),
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
          entryFileNames: x =>
            path
              .relative(cwd() + "/src/", x.facadeModuleId)
              .replace(".ts", ".mjs"),
          format: "esm",
        },
        {
          ...output.packages.core,
          chunkFileNames: "[name]-[hash].js",
          entryFileNames: x =>
            path
              .relative(cwd() + "/src/", x.facadeModuleId)
              .replace(".ts", ".js"),
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
          preserveModulesRoot: "build-types",
          entryFileNames: x =>
            path.relative(cwd() + "/build-types/", x.facadeModuleId),
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
          entryFileNames: x =>
            path
              .relative(cwd() + "/src/", x.facadeModuleId)
              .replace(".ts", ".mjs"),
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
          entryFileNames: x =>
            path.relative(cwd() + "/build-types/", x.facadeModuleId),
          plugins: [transformDTSImportsForDeno()],
        },
      ],
      plugins: [dts()],
    },
  ];
};

export default [...makeCoreNPMPackage(), ...makeModules()];
