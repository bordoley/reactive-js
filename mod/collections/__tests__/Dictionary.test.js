/// <reference types="./Dictionary.test.d.ts" />

import { testModule } from "../../__internal__/testing.js";
import { compose } from "../../functions.js";
import * as Dictionary from "../Dictionary.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
import KeyedCollectionModuleTests from "./fixtures/KeyedCollectionModuleTests.js";
testModule("Dictionary", KeyedCollectionModuleTests(Dictionary, () => compose(ReadonlyArray.entries(), Dictionary.fromEntries())));
((_) => { })(Dictionary);
