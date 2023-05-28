/// <reference types="./ReadonlyMap.test.d.ts" />

import * as ReadonlyMap from "../ReadonlyMap.js";
import { testModule } from "../__internal__/testing.js";
import AssociativeKeyedContainerModuleTests from "./fixtures/AssociativeKeyedContainerModuleTests.js";
testModule("ReadonlyMap", AssociativeKeyedContainerModuleTests(ReadonlyMap.CreateModule()));
((_) => { })(ReadonlyMap);
