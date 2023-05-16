/// <reference types="./ReadonlyObjectMap.test.d.ts" />

import * as ReadonlyObjectMap from "../ReadonlyObjectMap.js";
import { testModule } from "../__internal__/testing.js";
import ConcreteAssociativeKeyedContainerTypeClassTests from "./fixtures/ConcreteAssociativeKeyedContainerTypeClassTests.js";
testModule("ReadonlyObjectMap", ConcreteAssociativeKeyedContainerTypeClassTests(ReadonlyObjectMap.CreateModule()));
((_) => { })(ReadonlyObjectMap);
