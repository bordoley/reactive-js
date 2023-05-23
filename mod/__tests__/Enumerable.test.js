/// <reference types="./Enumerable.test.d.ts" />

import * as Enumerable from "../Enumerable.js";
import { testModule } from "../__internal__/testing.js";
import EnumerableContainerModuleTests from "./fixtures/EnumerableContainerModuleTests.js";
testModule("Enumerable", ...EnumerableContainerModuleTests(Enumerable));
((_) => { })(Enumerable);
