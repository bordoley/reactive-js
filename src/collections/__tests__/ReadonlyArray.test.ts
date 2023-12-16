import { testModule } from "../../__internal__/testing.js";
import { identity } from "../../functions.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import IndexedCollectionModuleTests from "./fixtures/IndexedCollectionModuleTests.js";
import KeyedCollectionModuleTests from "./fixtures/KeyedCollectionModuleTests.js";

testModule(
  "ReadonlyArray",
  KeyedCollectionModuleTests(ReadonlyArray, <T>() => identity<readonly T[]>),
  IndexedCollectionModuleTests(ReadonlyArray, <T>() => identity<readonly T[]>),
);

((_: ReadonlyArray.Signature) => {})(ReadonlyArray);
