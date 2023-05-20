/// <reference types="./Enumerable.test.d.ts" />

import * as Enumerable from "../Enumerable.js";
import * as Observable from "../Observable.js";
import { testModule } from "../__internal__/testing.js";
import EnumerableContainerModuleTests from "./fixtures/EnumerableContainerModuleTests.js";
import StatefulContainerModuleTests from "./fixtures/StatefulContainerModuleTests.js";
testModule("Enumerable", ...EnumerableContainerModuleTests(Enumerable), StatefulContainerModuleTests(Enumerable, Observable.toReadonlyArrayAsync));
((_) => { })(Enumerable);
