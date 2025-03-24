/// <reference types="./Collection.test.d.ts" />

import { describe, expectArrayEquals, test, testModule, } from "../../__internal__/testing.js";
import { pipeLazy } from "../../functions.js";
import * as Collection from "../Collection.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
testModule("Collection", describe("keyset", test("returns the keys of a collection", pipeLazy([5, 4, 3, 2, 1], ReadonlyArray.fromIterable(), Collection.keySet(ReadonlyArray), ReadonlyArray.fromIterable(), expectArrayEquals([0, 1, 2, 3, 4])))));
