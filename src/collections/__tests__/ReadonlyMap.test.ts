import { testModule } from "../../__internal__/testing.js";
import { compose } from "../../functions.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import * as ReadonlyMap from "../ReadonlyMap.js";
import KeyedCollectionModuleTests from "./fixtures/KeyedCollectionModuleTests.js";

testModule(
  "ReadonlyMap",
  KeyedCollectionModuleTests(ReadonlyMap, <T>() =>
    compose(ReadonlyArray.entries<T, number>(), ReadonlyMap.fromEntries()),
  ),
);

((_: ReadonlyMap.Signature) => {})(ReadonlyMap);
