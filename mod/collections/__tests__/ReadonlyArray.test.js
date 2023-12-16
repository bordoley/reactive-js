/// <reference types="./ReadonlyArray.test.d.ts" />

import { testModule } from "../../__internal__/testing.js";
import { identity } from "../../functions.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import IndexedCollectionModuleTests from "./fixtures/IndexedCollectionModuleTests.js";
import KeyedCollectionModuleTests from "./fixtures/KeyedCollectionModuleTests.js";
testModule("ReadonlyArray", KeyedCollectionModuleTests(ReadonlyArray, () => identity), IndexedCollectionModuleTests(ReadonlyArray, () => identity));
((_) => { })(ReadonlyArray);
