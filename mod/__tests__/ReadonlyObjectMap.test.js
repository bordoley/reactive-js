/// <reference types="./ReadonlyObjectMap.test.d.ts" />

import * as ReadonlyObjectMap from "../ReadonlyObjectMap.js";
import { testModule } from "../__internal__/testing.js";
import AssociativeCollectionContainerModuleTests from "./fixtures/AssociativeCollectionContainerModuleTests.js";
testModule("ReadonlyObjectMap", AssociativeCollectionContainerModuleTests(ReadonlyObjectMap.CreateModule()));
((_) => { })(ReadonlyObjectMap);
