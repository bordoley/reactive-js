import * as ReadonlyMap from "../ReadonlyMap.js";
import { testModule } from "../__internal__/testing.js";
import ConcreteAssociativeKeyedContainerModuleTests from "./fixtures/ConcreteAssociativeKeyedContainerModuleTests.js";

testModule(
  "ReadonlyMap",
  ConcreteAssociativeKeyedContainerModuleTests(
    ReadonlyMap.CreateModule<string>(),
  ),
);

((_: ReadonlyMap.Signature) => {})(ReadonlyMap);
