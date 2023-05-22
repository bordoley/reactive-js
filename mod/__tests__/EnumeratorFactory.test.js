/// <reference types="./EnumeratorFactory.test.d.ts" />

import * as Disposable from "../Disposable.js";
import * as EnumeratorFactory from "../EnumeratorFactory.js";
import { testModule } from "../__internal__/testing.js";
import EffectsContainerModuleTests from "./fixtures/EffectsContainerModuleTests.js";
import EnumerableContainerModuleTests from "./fixtures/EnumerableContainerModuleTests.js";
import StatefulContainerModuleTests from "./fixtures/StatefulContainerModuleTests.js";
testModule("EnumeratorFactory", ...EnumerableContainerModuleTests(EnumeratorFactory), StatefulContainerModuleTests(EnumeratorFactory, () => async (f) => EnumeratorFactory.toReadonlyArray()(f)), EffectsContainerModuleTests(EnumeratorFactory, () => Disposable.disposed, () => (arr) => EnumeratorFactory.fromReadonlyArray()(arr), () => (c) => EnumeratorFactory.toReadonlyArray()(c)));
((_) => { })(EnumeratorFactory);
