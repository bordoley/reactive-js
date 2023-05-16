import * as Dictionary from "../Dictionary.js";
import { testModule } from "../__internal__/testing.js";
import AssociativeKeyedContainerTypeClassTests from "./fixtures/AssociativeKeyedContainerTypeClassTests.js";

testModule(
  "Dictionary",
  AssociativeKeyedContainerTypeClassTests(Dictionary.CreateModule<string>()),
);

((_: Dictionary.Signature) => {})(Dictionary);
