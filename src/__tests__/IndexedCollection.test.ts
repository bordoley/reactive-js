import * as IndexedCollection from "../IndexedCollection.js";
import { testModule } from "../__internal__/testing.js";
import IndexedKeyedContainerModuleTests from "./fixtures/IndexedKeyedContainerModuleTests.js";

testModule(
  "IndexedCollection",
  IndexedKeyedContainerModuleTests(IndexedCollection),
);

((_: IndexedCollection.Signature) => {})(IndexedCollection);
