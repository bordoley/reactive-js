import {
  test,
  describe,
  expectArraysEqual,
  expectEqual,
  expectToThrow,
} from "../src/testing";
import { none } from "../src/option";
import { pipe } from "../src/pipe";
import {
  string,
  map,
  mapTo,
  sepBy,
  pColon,
  many,
  or,
  createCharStream,
  concat,
  optional,
  orCompute,
  manySatisfy,
  pForwardSlash,
  char,
  pEof,
  parseWithOrThrow,
  throwParseError,
} from "../src/parser-combinators";
import { returns } from "../src/functions";

export const tests = describe(
  "parser combinators",

  test("many", () => {
    const parser = pipe(string("abc"), many());
    const result = pipe("abcabcabcabc", parseWithOrThrow(parser));

    expectArraysEqual(result, ["abc", "abc", "abc", "abc"]);
  }),

  test("many", () => {
    const parser = pipe(string("abc"), many());
    const result = pipe("abcabcabcabc", parseWithOrThrow(parser));

    expectArraysEqual(result, ["abc", "abc", "abc", "abc"]);
  }),

  test("manySatisy", () => {
    const parser = concat(
      manySatisfy()(pForwardSlash),
      manySatisfy()(char("z")),
    );
    const result = pipe("////zzz", parseWithOrThrow(parser));

    expectArraysEqual(result, ["////", "zzz"]);
  }),

  test("map", () => {
    const parser = pipe(
      string("ab"),
      map((x: string) => x + "cd"),
    );

    const result = pipe("ab", parseWithOrThrow(parser));
    expectEqual(result, "abcd");
  }),

  test("mapTo", () => {
    const parser = pipe(string("ab"), mapTo("xyz"));
    const result = pipe("ab", parseWithOrThrow(parser));
    expectEqual(result, "xyz");
  }),

  test("optional", () => {
    const parser = concat(
      string("ab"),
      pipe(optional(string("cd")), orCompute(returns("ef"))),
      pEof,
    );

    const result1 = pipe("abcd", parseWithOrThrow(parser));
    expectArraysEqual(result1, ["ab", "cd", none]);

    const result2 = pipe("ab", parseWithOrThrow(parser));
    expectArraysEqual(result2, ["ab", "ef", none]);
  }),

  test("or", () => {
    const parser = pipe(string("ab"), or(string("cd")));

    const result1 = pipe("ab", parseWithOrThrow(parser));
    expectEqual(result1, "ab");

    const result2 = pipe("cd", parseWithOrThrow(parser));
    expectEqual(result2, "cd");
  }),

  test("sepBy", () => {
    const parser = pipe(string("ab"), sepBy(pColon));
    const result = pipe("ab:ab:ab:ab", parseWithOrThrow(parser));

    expectArraysEqual(result, ["ab", "ab", "ab", "ab"]);
  }),

  test("string", () => {
    const parser = concat(string("ab"), string("cd"));
    const result = pipe("abcd", parseWithOrThrow(parser));

    expectArraysEqual(result, ["ab", "cd"]);
  }),

  test("throwParseError", () => {
    expectToThrow(() => pipe("abc", createCharStream, throwParseError));
  }),
);
