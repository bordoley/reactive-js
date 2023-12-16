/// <reference types="./Indexed.test.d.ts" />

import { testModule } from "../../__internal__/testing.js";
import * as Indexed from "../Indexed.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import IndexedCollectionModuleTests from "./fixtures/IndexedCollectionModuleTests.js";
import KeyedCollectionModuleTests from "./fixtures/KeyedCollectionModuleTests.js";
testModule("Indexed", KeyedCollectionModuleTests(Indexed, ReadonlyArray.toIndexed), IndexedCollectionModuleTests(Indexed, ReadonlyArray.toIndexed));
((_) => { })(Indexed);
