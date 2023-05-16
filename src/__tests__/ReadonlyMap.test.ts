import * as ReadonlyMap from "../ReadonlyMap.js";
import { testModule } from "../__internal__/testing.js";
import ConcreteAssociativeKeyedContainerTypeClassTests from "./fixtures/ConcreteAssociativeKeyedContainerTypeClassTests.js";

testModule(
  "ReadonlyMap",
  ConcreteAssociativeKeyedContainerTypeClassTests(
    ReadonlyMap.CreateModule<string>(),
  ),
);

((_: ReadonlyMap.Signature) => {})(ReadonlyMap);
