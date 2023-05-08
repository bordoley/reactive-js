/// <reference types="./Enumerable.test.d.ts" />

import { describe, expectArrayEquals, test, testModule, } from "../../__internal__/testing.js";
import { pipe, returns } from "../../functions.js";
import * as Enumerable from "../Enumerable.js";
testModule("Enumerable", 
// FIXME
//Containers_test<EnumerableContainer>(Enumerable),
describe("enumerate", test("with higher order observable and no delay", () => {
    pipe(Enumerable.generate(_ => pipe(1, Enumerable.fromOptional()), returns(Enumerable.empty())), Enumerable.concatAll(), Enumerable.takeFirst({ count: 10 }), Enumerable.toReadonlyArray(), expectArrayEquals([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
})));
