/// <reference types="./Enumerator.test.d.ts" />

import * as Enumerator from "../Enumerator.js";
import { testModule } from "../__internal__/testing.js";
import EnumeratorContainerTypeClassTests from "./fixtures/EnumeratorContainerTypeClassTests.js";
testModule("Enumerator", EnumeratorContainerTypeClassTests(Enumerator));
((_) => { })(Enumerator);
