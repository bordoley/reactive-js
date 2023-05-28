import * as Dictionary from "../Dictionary.js";
import { testModule } from "../__internal__/testing.js";
import AssociativeCollectionContainerModuleTests from "./fixtures/AssociativeCollectionContainerModuleTests.js";

testModule(
  "Dictionary",
  AssociativeCollectionContainerModuleTests(Dictionary.CreateModule<string>()),
);

((_: Dictionary.Signature) => {})(Dictionary);
