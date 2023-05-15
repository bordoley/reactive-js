import * as ReadonlyObjectMap from "../ReadonlyObjectMap.js";
import { testModule } from "../__internal__/testing.js";
import AssociativeKeyedContainerTypeClassTests from "./fixtures/AssociativeKeyedContainerTypeClassTests.js";

testModule(
  "ReadonlyObjectMap",
  AssociativeKeyedContainerTypeClassTests(
    ReadonlyObjectMap.CreateModule<string>(),
  ),
);

((_: ReadonlyObjectMap.Signature) => {})(ReadonlyObjectMap);
