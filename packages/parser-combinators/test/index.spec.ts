import {
  throws,
  parseWith,
  string,
  map,
  mapTo,
  sepBy,
  colon,
  many,
  or,
  eof,
  createCharStream,
  concat,
  optional,
  orDefault,
  manySatisfy,
  forwardSlash,
  regexp,
  char,
} from "../src";
import { pipe } from "@reactive-js/pipe";

test("many", () => {
  const parser = pipe(string("abc"), many());

  const result = pipe("abcabcabcabc", parseWith(parser));
  expect(result).toEqual(["abc", "abc", "abc", "abc"]);
});

test("manySatisyf", () => {
  const parser = concat(
    manySatisfy(forwardSlash),
    manySatisfy(char("z")),
  );

  const result = pipe("////zzz", parseWith(parser));
  expect(result).toEqual(["////", "zzz"]);
});

test("map", () => {
  const parser = pipe(
    string("ab"),
    map((x: string) => x + "cd"),
  );

  const result = pipe("ababababababababab", parseWith(parser));
  expect(result).toEqual("abcd");
});

test("mapTo", () => {
  const parser = pipe(string("ab"), mapTo("xyz"));

  const result = pipe("ababababababababab", parseWith(parser));
  expect(result).toEqual("xyz");
});

test("optional", () => {
  const parser = concat(
    string("ab"),
    pipe(optional(string("cd")), orDefault("ef")),
    eof,
  );

  const result1 = pipe("abcd", parseWith(parser));
  expect(result1).toEqual(["ab", "cd", undefined]);

  const result2 = pipe("ab", parseWith(parser));
  expect(result2).toEqual(["ab", "ef", undefined]);
});

test("or", () => {
  const parser = pipe(string("ab"), or(string("cd")));

  const result1 = pipe("abcd", parseWith(parser));
  expect(result1).toEqual("ab");

  const result2 = pipe("cdab", parseWith(parser));
  expect(result2).toEqual("cd");
});

describe("regexp", () => {
  const parser = regexp(/a+/);

  test("with match at the beginning of the string", () => {
    const result = pipe("aaabbb", parseWith(parser));
    expect(result).toEqual("aaa");
  });

  test("with match in the middle of the string", () => {
    const stream = createCharStream("bbbaaabbb");
    stream.index = 2;
    const result = parser(stream);
    expect(result).toEqual("aaa");
  });
});

test("sepBy", () => {
  const parser = pipe(string("ab"), sepBy(colon));
  const result = pipe("ab:ab:ab:ab", parseWith(parser));
  expect(result).toEqual(["ab", "ab", "ab", "ab"]);
});

test("string", () => {
  const parser = concat(
    string("ab"),
    string("cd")
  );

  const result = pipe("abcdabcdabcd", parseWith(parser));
  expect(result).toEqual(["ab", "cd"]);
});

test("throws", () => {
  expect(() => pipe("abc", createCharStream, throws)).toThrow();
});
