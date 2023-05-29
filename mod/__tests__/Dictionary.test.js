/// <reference types="./Dictionary.test.d.ts" />

import * as Dictionary from "../Dictionary.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import { testModule } from "../__internal__/testing.js";
import AssociativeCollectionContainerModuleTests from "./fixtures/AssociativeCollectionContainerModuleTests.js";
import CollectionContainerModuleTests from "./fixtures/CollectionContainerModuleTests.js";
testModule("Dictionary", ...AssociativeCollectionContainerModuleTests(Dictionary.CreateModule()), ...CollectionContainerModuleTests(Dictionary.CreateModule(), () => ReadonlyArray.toDictionary()));
((_) => { })(Dictionary);
