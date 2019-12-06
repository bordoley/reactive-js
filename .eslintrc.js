module.exports = {
  root: true,
  ignorePatterns: ["coverage", "dist", "docs", "node_modules"],
  plugins: [
    "eslint-plugin",
    "@typescript-eslint",
    "jest",
    "import",
    "eslint-comments",
    "sort-class-members",
  ],
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/unbound-method": "off",
    "comma-dangle": ["error", "always-multiline"],
    "sort-class-members/sort-class-members": [
      2,
      {
        order: [
          "[static-properties]",
          "[static-methods]",
          "[conventional-private-properties]",
          "[properties]",
          "constructor",
          "[accessor-pairs]",
          "[methods]",
          "[conventional-private-methods]",
        ],
        accessorPairPositioning: "getThenSet",
      },
    ],
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: ["./tsconfig.eslint.json"],
    tsconfigRootDir: __dirname,
  },
};
