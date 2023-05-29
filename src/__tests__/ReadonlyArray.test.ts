import * as ReadonlyArray from "../ReadonlyArray.js";
import { testModule } from "../__internal__/testing.js";
import IndexedCollectionContainerModuleTests from "./fixtures/IndexedCollectionContainerModuleTests.js";

testModule(
  "ReadonlyArray",
  ...IndexedCollectionContainerModuleTests(ReadonlyArray),
);

((_: ReadonlyArray.Signature) => {})(ReadonlyArray);
