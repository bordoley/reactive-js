import * as ReadonlyObjectMap from "../ReadonlyObjectMap.js";
import { testModule } from "../__internal__/testing.js";
import AssociativeCollectionContainerModuleTests from "./fixtures/AssociativeCollectionContainerModuleTests.js";

testModule(
  "ReadonlyObjectMap",
  ...AssociativeCollectionContainerModuleTests(
    ReadonlyObjectMap.CreateModule<string>(),
  ),
);

((_: ReadonlyObjectMap.Signature) => {})(ReadonlyObjectMap);
