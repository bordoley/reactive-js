import * as ReadonlyMap from "../ReadonlyMap.js";
import { testModule } from "../__internal__/testing.js";
import AssociativeCollectionContainerModuleTests from "./fixtures/AssociativeCollectionContainerModuleTests.js";

testModule(
  "ReadonlyMap",
  AssociativeCollectionContainerModuleTests(ReadonlyMap.CreateModule<string>()),
);

((_: ReadonlyMap.Signature) => {})(ReadonlyMap);
