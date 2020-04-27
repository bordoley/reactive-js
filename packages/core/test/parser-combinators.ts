import { none } from "../src/option";
import { pipe } from "../src/pipe";
import {
  throwParseError,
  parseWith,
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
} from "../src/parser-combinators";
import { returns } from "../src/functions";

test("many", () => {
  const parser = pipe(string("abc"), many());
  const result = pipe("abcabcabcabc", parseWith(parser));

  expect(result).toEqual(["abc", "abc", "abc", "abc"]);
});

test("manySatisy", () => {
  const parser = concat(manySatisfy()(pForwardSlash), manySatisfy()(char("z")));
  const result = pipe("////zzz", parseWith(parser));

  expect(result).toEqual(["////", "zzz"]);
});

test("map", () => {
  const parser = pipe(
    string("ab"),
    map((x: string) => x + "cd"),
  );

  const result = pipe("ab", parseWith(parser));
  expect(result).toEqual("abcd");
});

test("mapTo", () => {
  const parser = pipe(string("ab"), mapTo("xyz"));
  const result = pipe("ab", parseWith(parser));

  expect(result).toEqual("xyz");
});

test("optional", () => {
  const parser = concat(
    string("ab"),
    pipe(optional(string("cd")), orCompute(returns("ef"))),
    pEof,
  );

  const result1 = pipe("abcd", parseWith(parser));
  expect(result1).toEqual(["ab", "cd", none]);

  const result2 = pipe("ab", parseWith(parser));
  expect(result2).toEqual(["ab", "ef", none]);
});

test("or", () => {
  const parser = pipe(string("ab"), or(string("cd")));

  const result1 = pipe("ab", parseWith(parser));
  expect(result1).toEqual("ab");

  const result2 = pipe("cd", parseWith(parser));
  expect(result2).toEqual("cd");
});

test("sepBy", () => {
  const parser = pipe(string("ab"), sepBy(pColon));
  const result = pipe("ab:ab:ab:ab", parseWith(parser));

  expect(result).toEqual(["ab", "ab", "ab", "ab"]);
});

test("string", () => {
  const parser = concat(string("ab"), string("cd"));
  const result = pipe("abcd", parseWith(parser));

  expect(result).toEqual(["ab", "cd"]);
});

test("throwParseError", () => {
  expect(() => pipe("abc", createCharStream, throwParseError)).toThrow();
});
