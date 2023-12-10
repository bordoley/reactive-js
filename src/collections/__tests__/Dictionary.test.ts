import { testModule } from "../../__internal__/testing.js";
import { compose } from "../../functions.js";
import * as Dictionary from "../Dictionary.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import KeyedCollectionModuleTests from "./fixtures/KeyedCollectionModuleTests.js";

testModule(
  "Dictionary",
  KeyedCollectionModuleTests(Dictionary, <T>() =>
    compose(ReadonlyArray.entries<T, number>(), Dictionary.fromEntries()),
  ),
);

((_: Dictionary.Signature) => {})(Dictionary);
