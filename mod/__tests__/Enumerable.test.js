/// <reference types="./Enumerable.test.d.ts" />

import * as Enumerable from "../Enumerable.js";
import { testModule } from "../__internal__/testing.js";
import EnumerableTypeClassTests from "./fixtures/EnumerableTypeClassTests.js";
testModule("Enumerable", EnumerableTypeClassTests(Enumerable));
((_) => { })(Enumerable);
