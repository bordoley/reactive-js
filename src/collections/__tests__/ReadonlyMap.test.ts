import { testModule } from "../../__internal__/testing.js";
import { compose } from "../../functions.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import * as ReadonlyMap from "../ReadonlyMap.js";
import CollectionModuleTests from "./fixtures/CollectionModuleTests.js";
import DictionaryCollectionModuleTests from "./fixtures/DictionaryCollectionModuleTests.js";

testModule(
  "ReadonlyMap",
  CollectionModuleTests(ReadonlyMap, <T>() =>
    compose(ReadonlyArray.entries<T, number>(), ReadonlyMap.fromEntries()),
  ),
  DictionaryCollectionModuleTests(ReadonlyMap),
);

((_: ReadonlyMap.Signature) => {})(ReadonlyMap);
