module.exports = {
  env: {
    es6: true,
    node: true,
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  extends: ["plugin:import/errors", "plugin:import/typescript", "prettier"],
  ignorePatterns: [
    ".eslintrc.js",
    "coverage",
    "docs",
    "packages/*",
    "mod",
    "node_modules",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.typecheck.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "import", "unused-imports"],
  root: true,
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

    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/consistent-type-assertions": "error",

    "@typescript-eslint/init-declarations": "error",

    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-base-to-string": "error",

    "@typescript-eslint/no-for-in-array": "error",

    "@typescript-eslint/no-inferrable-types": "error",
    //"@typescript-eslint/no-invalid-void-type": "error",

    "no-magic-numbers": "off",
    //"@typescript-eslint/no-magic-numbers": "error",

    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-this-alias": "error",

    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error",

    //"@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",

    "@typescript-eslint/prefer-as-const": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",

    //"@typescript-eslint/prefer-readonly-parameter-types": "error",

    "@typescript-eslint/prefer-string-starts-ends-with": "error",

    //"@typescript-eslint/restrict-plus-operands": "error",

    //"@typescript-eslint/restrict-template-expressions": "error",

    //"@typescript-eslint/strict-boolean-expressions": "error",
  },
};
