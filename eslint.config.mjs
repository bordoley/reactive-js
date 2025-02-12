import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import _import from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      "**/.eslintrc.js",
      "**/coverage",
      "**/docs",
      "packages/*",
      "**/mod",
      "**/node_modules",
      ".sl",
      "testDeno.js",
    ],
  },
  ...fixupConfigRules(
    compat.extends(
      "plugin:import/errors",
      "plugin:import/typescript",
      "prettier",
    ),
  ).map(config => ({
    ...config,
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
  })),
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],

    plugins: {
      "@typescript-eslint": typescriptEslint,
      import: fixupPluginRules(_import),
      "unused-imports": unusedImports,
    },

    languageOptions: {
      globals: {
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 5,
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },

        project: "./tsconfig.typecheck.json",
      },
    },

    settings: {
      "import/resolver": {
        typescript: {},
      },
    },

    rules: {
      curly: ["error"],
      "no-debugger": ["error"],

      "sort-imports": [
        "error",
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
          allowSeparatedGroups: false,
        },
      ],

      "import/no-cycle": "error",
      "import/no-duplicates": "error",

      "import/order": [
        "error",
        {
          alphabetize: {
            order: "asc",
          },
        },
      ],

      "unused-imports/no-unused-imports": "error",
      "@typescript-eslint/no-restricted-types": "error",
      "@typescript-eslint/consistent-type-assertions": "error",
      "@typescript-eslint/init-declarations": "error",
      "no-array-constructor": "off",
      "@typescript-eslint/no-array-constructor": "error",
      "@typescript-eslint/no-base-to-string": "error",
      "@typescript-eslint/no-for-in-array": "error",
      "@typescript-eslint/no-inferrable-types": "error",
      "no-magic-numbers": "off",
      "@typescript-eslint/no-misused-new": "error",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-this-alias": "error",
      "no-useless-constructor": "off",
      "@typescript-eslint/no-useless-constructor": "error",
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
      "@typescript-eslint/prefer-as-const": "error",
      "@typescript-eslint/prefer-includes": "error",
      "@typescript-eslint/prefer-nullish-coalescing": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/prefer-string-starts-ends-with": "error",
    },
  },
];
