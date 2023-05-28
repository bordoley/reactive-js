/// <reference types="./ReadonlyObjectMap.test.d.ts" />

import * as ReadonlyObjectMap from "../ReadonlyObjectMap.js";
import { testModule } from "../__internal__/testing.js";
import AssociativeKeyedContainerModuleTests from "./fixtures/AssociativeKeyedContainerModuleTests.js";
testModule("ReadonlyObjectMap", AssociativeKeyedContainerModuleTests(ReadonlyObjectMap.CreateModule()));
((_) => { })(ReadonlyObjectMap);
