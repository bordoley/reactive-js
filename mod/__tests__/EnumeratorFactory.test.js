/// <reference types="./EnumeratorFactory.test.d.ts" />

import * as EnumeratorFactory from "../EnumeratorFactory.js";
import { testModule } from "../__internal__/testing.js";
import EnumerableTypeClassTests from "./fixtures/EnumerableTypeClassTests.js";
testModule("EnumeratorFactory", EnumerableTypeClassTests(EnumeratorFactory));
((_) => { })(EnumeratorFactory);
