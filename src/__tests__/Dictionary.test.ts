import * as Dictionary from "../Dictionary.js";
import { testModule } from "../__internal__/testing.js";
import AssociativeKeyedContainerModuleTests from "./fixtures/AssociativeKeyedContainerModuleTests.js";

testModule(
  "Dictionary",
  AssociativeKeyedContainerModuleTests(Dictionary.CreateModule<string>()),
);

((_: Dictionary.Signature) => {})(Dictionary);
