import { defer, pipe, returns } from "../functions";
import {
  char,
  concat,
  createCharStream,
  many,
  manySatisfy,
  map,
  mapTo,
  optional,
  or,
  orCompute,
  pColon,
  pEof,
  pForwardSlash,
  parseWithOrThrow,
  sepBy,
  string,
  throwParseError,
} from "../http/parserCombinators";
import { none } from "../option";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectToThrow,
  test,
} from "../testing";

export const tests = describe(
  "parser combinators",

  test("many", () => {
    const parser = pipe(string("abc"), many());
    pipe(
      "abcabcabcabc",
      parseWithOrThrow(parser),
      expectArrayEquals(["abc", "abc", "abc", "abc"]),
    );
  }),

  test("many", () => {
    const parser = pipe(string("abc"), many());
    pipe(
      "abcabcabcabc",
      parseWithOrThrow(parser),
      expectArrayEquals(["abc", "abc", "abc", "abc"]),
    );
  }),

  test("manySatisy", () => {
    const parser = concat(
      manySatisfy()(pForwardSlash),
      manySatisfy()(char("z")),
    );
    pipe(
      "////zzz",
      parseWithOrThrow(parser),
      expectArrayEquals(["////", "zzz"]),
    );
  }),

  test("map", () => {
    const parser = pipe(
      string("ab"),
      map((x: string) => x + "cd"),
    );

    pipe("ab", parseWithOrThrow(parser), expectEquals("abcd"));
  }),

  test("mapTo", () => {
    const parser = pipe(string("ab"), mapTo("xyz"));
    pipe("ab", parseWithOrThrow(parser), expectEquals("xyz"));
  }),

  test("optional", () => {
    const parser = concat(
      string("ab"),
      pipe(optional(string("cd")), orCompute(returns("ef"))),
      pEof,
    );

    pipe(
      "abcd",
      parseWithOrThrow(parser),
      expectArrayEquals(["ab", "cd", none]),
    );
    pipe("ab", parseWithOrThrow(parser)), expectArrayEquals(["ab", "ef", none]);
  }),

  test("or", () => {
    const parser = pipe(string("ab"), or(string("cd")));

    pipe("ab", parseWithOrThrow(parser), expectEquals("ab"));
    pipe("cd", parseWithOrThrow(parser), expectEquals("cd"));
  }),

  test("sepBy", () => {
    const parser = pipe(string("ab"), sepBy(pColon));
    pipe(
      "ab:ab:ab:ab",
      parseWithOrThrow(parser),
      expectArrayEquals(["ab", "ab", "ab", "ab"]),
    );
  }),

  test("string", () => {
    const parser = concat(string("ab"), string("cd"));
    pipe("abcd", parseWithOrThrow(parser), expectArrayEquals(["ab", "cd"]));
  }),

  test(
    "throwParseError",
    defer(defer("abc", createCharStream, throwParseError), expectToThrow),
  ),
);
