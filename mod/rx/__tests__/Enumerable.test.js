/// <reference types="./Enumerable.test.d.ts" />

import { bufferTests, concatAllTests, concatMapTests, concatTests, concatWithTests, distinctUntilChangedTests, endWithTests, flatMapIterableTests, forEachTests, fromReadonlyArrayTests, ignoreElementsTests, keepTests, mapTests, mapToTests, pairwiseTests, 
//repeatTests,
scanTests, skipFirstTests, startWithTests, takeFirstTests, takeLastTests, takeWhileTests, throwIfEmptyTests, toObservableTests, zipTests, zipWithTests, } from "../../__tests__/operators.js";
import { describe, expectArrayEquals, test, testModule, } from "../../__tests__/testing.js";
import { pipe, returns } from "../../functions.js";
import { EnumeratorLike_current, EnumeratorLike_move } from "../../util.js";
import * as Enumerable from "../Enumerable.js";
testModule("Enumerable", bufferTests(Enumerable), concatTests(Enumerable), concatAllTests(Enumerable), concatMapTests(Enumerable), concatWithTests(Enumerable), distinctUntilChangedTests(Enumerable), endWithTests(Enumerable), forEachTests(Enumerable), fromReadonlyArrayTests(Enumerable), flatMapIterableTests(Enumerable), ignoreElementsTests(Enumerable), keepTests(Enumerable), mapTests(Enumerable), mapToTests(Enumerable), pairwiseTests(Enumerable), 
// FIXME
//repeatTests(Enumerable),
scanTests(Enumerable), skipFirstTests(Enumerable), startWithTests(Enumerable), takeFirstTests(Enumerable), takeLastTests(Enumerable), takeWhileTests(Enumerable), throwIfEmptyTests(Enumerable), toObservableTests(Enumerable), zipTests(Enumerable), zipWithTests(Enumerable), describe("enumerate", test("with higher order observable and no delay", () => {
    const enumerator = pipe(Enumerable.generate(_ => pipe(1, Enumerable.fromOptional()), returns(Enumerable.empty())), Enumerable.concatAll(), Enumerable.takeFirst({ count: 10 }), Enumerable.enumerate());
    const result = [];
    while (enumerator[EnumeratorLike_move]()) {
        result.push(enumerator[EnumeratorLike_current]);
    }
    pipe(result, expectArrayEquals([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
})));
