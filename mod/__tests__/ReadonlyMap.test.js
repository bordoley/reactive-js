/// <reference types="./ReadonlyMap.test.d.ts" />

import * as ReadonlyMap from "../ReadonlyMap.js";
import { testModule } from "../__internal__/testing.js";
import ConcreteAssociativeKeyedContainerModuleTests from "./fixtures/ConcreteAssociativeKeyedContainerModuleTests.js";
testModule("ReadonlyMap", ConcreteAssociativeKeyedContainerModuleTests(ReadonlyMap.CreateModule()));
((_) => { })(ReadonlyMap);
