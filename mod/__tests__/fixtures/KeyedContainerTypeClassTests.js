/// <reference types="./KeyedContainerTypeClassTests.d.ts" />

import { describe, expectEquals, test } from "../../__internal__/testing.js";
import { pipe } from "../../functions.js";
const KeyedContainerTypeClassTests = (m) => describe("KeyedContainerTypeClass", describe("empty", test("has identity semantics", () => {
    const empty1 = m.empty();
    const empty2 = m.empty();
    pipe(empty2, expectEquals(empty1));
})));
export default KeyedContainerTypeClassTests;
