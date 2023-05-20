/// <reference types="./EnumeratorFactory.test.d.ts" />

import * as EnumeratorFactory from "../EnumeratorFactory.js";
import { testModule } from "../__internal__/testing.js";
import EnumerableTypeClassTests from "./fixtures/EnumerableTypeClassTests.js";
import StatefulTypeClassTests from "./fixtures/StatefulTypeClassTests.js";
testModule("EnumeratorFactory", ...EnumerableTypeClassTests(EnumeratorFactory), StatefulTypeClassTests(EnumeratorFactory, () => async (f) => EnumeratorFactory.toReadonlyArray()(f)));
((_) => { })(EnumeratorFactory);
