import * as ReadonlyArray from "../ReadonlyArray.js";
import { testModule } from "../__internal__/testing.js";
import IndexedKeyedContainerModuleTests from "./fixtures/IndexedKeyedContainerModuleTests.js";

testModule(
  "ReadonlyArray",
  IndexedKeyedContainerModuleTests(ReadonlyArray),
);

((_: ReadonlyArray.Signature) => {})(ReadonlyArray);
