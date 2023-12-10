/// <reference types="./ReadonlyMap.test.d.ts" />

import { testModule } from "../../__internal__/testing.js";
import { compose } from "../../functions.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import * as ReadonlyMap from "../ReadonlyMap.js";
import KeyedCollectionModuleTests from "./fixtures/KeyedCollectionModuleTests.js";
testModule("ReadonlyMap", KeyedCollectionModuleTests(ReadonlyMap, () => compose(ReadonlyArray.entries(), ReadonlyMap.fromEntries())));
((_) => { })(ReadonlyMap);
