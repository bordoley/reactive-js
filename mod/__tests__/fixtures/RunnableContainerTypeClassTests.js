/// <reference types="./RunnableContainerTypeClassTests.d.ts" />

import { describe, expectArrayEquals, test, } from "../../__internal__/testing.js";
import { pipeLazy } from "../../functions.js";
import EnumeratorContainerTypeClassTests from "./EnumeratorContainerTypeClassTests.js";
const RunnableContainerTypeClassTests = (m) => describe("RunnableContainerTypeClass", ...EnumeratorContainerTypeClassTests(m).tests, describe("repeat", test("when repeating a finite amount of times.", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.repeat(3), m.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3])))));
export default RunnableContainerTypeClassTests;
