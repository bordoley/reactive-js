import * as ReadonlyMap from "../ReadonlyMap.js";
import { testModule } from "../__internal__/testing.js";
import AssociativeKeyedContainerTypeClassTests from "./fixtures/AssociativeKeyedContainerTypeClassTests.js";

testModule(
  "ReadonlyMap",
  AssociativeKeyedContainerTypeClassTests(ReadonlyMap.CreateModule<string>()),
);

((_: ReadonlyMap.Signature) => {})(ReadonlyMap);
