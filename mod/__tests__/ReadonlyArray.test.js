/// <reference types="./ReadonlyArray.test.d.ts" />

import * as ReadonlyArray from "../ReadonlyArray.js";
import { testModule } from "../__internal__/testing.js";
import KeyedContainerTests from "./fixtures/KeyedContainerTypeClassTests.js";
testModule("ReadonlyArray", KeyedContainerTests(ReadonlyArray));
