/// <reference types="./ReadonlyMap.test.d.ts" />

import { testModule } from "../../__internal__/testing.js";
import { compose } from "../../functions.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import * as ReadonlyMap from "../ReadonlyMap.js";
import CollectionModuleTests from "./fixtures/CollectionModuleTests.js";
import DictionaryCollectionModuleTests from "./fixtures/DictionaryCollectionModuleTests.js";
testModule("ReadonlyMap", CollectionModuleTests(ReadonlyMap, () => compose(ReadonlyArray.entries(), ReadonlyMap.fromEntries())), DictionaryCollectionModuleTests(ReadonlyMap))();
((_) => { })(ReadonlyMap);
