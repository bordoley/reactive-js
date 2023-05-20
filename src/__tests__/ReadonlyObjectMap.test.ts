import * as ReadonlyObjectMap from "../ReadonlyObjectMap.js";
import { testModule } from "../__internal__/testing.js";
import ConcreteAssociativeKeyedContainerModuleTests from "./fixtures/ConcreteAssociativeKeyedContainerModuleTests.js";

testModule(
  "ReadonlyObjectMap",
  ConcreteAssociativeKeyedContainerModuleTests(
    ReadonlyObjectMap.CreateModule<string>(),
  ),
);

((_: ReadonlyObjectMap.Signature) => {})(ReadonlyObjectMap);
