/// <reference types="./EnumeratorFactory.test.d.ts" />

import * as EnumeratorFactory from "../EnumeratorFactory.js";
import { testModule } from "../__internal__/testing.js";
import EnumerableContainerModuleTests from "./fixtures/EnumerableContainerModuleTests.js";
import StatefulContainerModuleTests from "./fixtures/StatefulContainerModuleTests.js";
testModule("EnumeratorFactory", ...EnumerableContainerModuleTests(EnumeratorFactory), StatefulContainerModuleTests(EnumeratorFactory, () => async (f) => EnumeratorFactory.toReadonlyArray()(f)));
((_) => { })(EnumeratorFactory);
