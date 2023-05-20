/// <reference types="./EnumerableTypeClassTests.d.ts" />

import * as Observable from "../../Observable.js";
import { describe, expectArrayEquals, test, } from "../../__internal__/testing.js";
import { pipe, returns } from "../../functions.js";
import RunnableTypeClassTests from "./RunnableTypeClassTests.js";
const EnumerableTypeClassTests = (m) => [
    ...RunnableTypeClassTests(m),
    describe("EnumerableTypeClass", describe("enumerate", test("with higher order observable and no delay", () => {
        pipe(Observable.generate(_ => pipe(1, m.fromValue()), returns(m.empty())), Observable.takeFirst({ count: 100 }), m.fromEnumerable(), m.concatAll(), m.takeFirst({ count: 10 }), m.toReadonlyArray(), expectArrayEquals([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
    }))),
];
export default EnumerableTypeClassTests;
