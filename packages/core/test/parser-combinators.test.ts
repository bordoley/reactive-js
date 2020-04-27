import {
  test,
  describe,
  expectToEqual,
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
    pipe("abcabcabcabc", parseWithOrThrow(parser), expectToEqual(["abc", "abc", "abc", "abc"]));
  }),

  test("many", () => {
    const parser = pipe(string("abc"), many());
    pipe("abcabcabcabc", parseWithOrThrow(parser), expectToEqual(["abc", "abc", "abc", "abc"]));
  }),

  test("manySatisy", () => {
    const parser = concat(
      manySatisfy()(pForwardSlash),
      manySatisfy()(char("z")),
    );
    pipe("////zzz", parseWithOrThrow(parser), expectToEqual(["////", "zzz"]));
  }),

  test("map", () => {
    const parser = pipe(
      string("ab"),
      map((x: string) => x + "cd"),
    );

    pipe("ab", parseWithOrThrow(parser), expectToEqual("abcd"));
  }),

  test("mapTo", () => {
    const parser = pipe(string("ab"), mapTo("xyz"));
    pipe("ab", parseWithOrThrow(parser), expectToEqual("xyz"));
  }),

  test("optional", () => {
    const parser = concat(
      string("ab"),
      pipe(optional(string("cd")), orCompute(returns("ef"))),
      pEof,
    );

    pipe("abcd", parseWithOrThrow(parser), expectToEqual(["ab", "cd", none]));
    pipe("ab", parseWithOrThrow(parser)), expectToEqual(["ab", "ef", none]);
  }),

  test("or", () => {
    const parser = pipe(string("ab"), or(string("cd")));

    pipe("ab", parseWithOrThrow(parser), expectToEqual("ab"));
    pipe("cd", parseWithOrThrow(parser), expectToEqual("cd"));
  }),

  test("sepBy", () => {
    const parser = pipe(string("ab"), sepBy(pColon));
    pipe("ab:ab:ab:ab", parseWithOrThrow(parser), expectToEqual(["ab", "ab", "ab", "ab"]));
  }),

  test("string", () => {
    const parser = concat(string("ab"), string("cd"));
    pipe("abcd", parseWithOrThrow(parser), expectToEqual(["ab", "cd"]));
  }),

  test("throwParseError", () => {
    expectToThrow(() => pipe("abc", createCharStream, throwParseError));
  }),
);
