/// <reference types="./HigherOrderObservableModuleTests.d.ts" />

import * as Observable from "../../Observable.js";
import * as Runnable from "../../Runnable.js";
import { describe, expectArrayEquals, expectToThrowAsync, test, testAsync, } from "../../__internal__/testing.js";
import { identity, pipe, pipeAsync, pipeLazyAsync, returns, } from "../../functions.js";
const HigherOrderObservableModuleTests = (m, fromRunnable) => describe("HigherOrderObservableModule", describe("catchError", testAsync("when source throws", async () => {
    const e = {};
    await pipeAsync(Observable.throws({ raise: returns(e) }), fromRunnable(), m.catchError(_ => pipe([1, 2, 3], Observable.fromReadonlyArray())), Observable.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3]));
}), testAsync("when source does not throw", pipeLazyAsync([4, 5, 6], Observable.fromReadonlyArray(), fromRunnable(), m.catchError(_ => pipe([1, 2, 3], Observable.fromReadonlyArray())), Observable.toReadonlyArrayAsync(), expectArrayEquals([4, 5, 6])))), describe("switchAll", testAsync("with empty source", pipeLazyAsync(Observable.empty({ delay: 1 }), fromRunnable(), m.switchAll(), Observable.toReadonlyArrayAsync(), expectArrayEquals([]))), test("when source throw", pipeLazyAsync(pipeLazyAsync(Observable.throws(), fromRunnable(), m.switchAll(), Observable.toReadonlyArrayAsync()), expectToThrowAsync))), describe("scanLast", testAsync("fast src, slow acc", pipeLazyAsync([1, 2, 3], Observable.fromReadonlyArray(), fromRunnable(), m.scanLast((acc, x) => pipe([x + acc], Observable.fromReadonlyArray({ delay: 4 })), returns(0)), Observable.toReadonlyArrayAsync(), expectArrayEquals([1, 3, 6]))), testAsync("slow src, fast acc", pipeLazyAsync([1, 2, 3], Observable.fromReadonlyArray({ delay: 4 }), fromRunnable(), m.scanLast((acc, x) => pipe([x + acc], Observable.fromReadonlyArray({ delay: 4 })), returns(0)), Observable.toReadonlyArrayAsync(), expectArrayEquals([1, 3, 6]))), testAsync("slow src, slow acc", pipeLazyAsync([1, 2, 3], Observable.fromReadonlyArray({ delay: 4 }), fromRunnable(), m.scanLast((acc, x) => pipe([x + acc], Observable.fromReadonlyArray({ delay: 4 })), returns(0)), Observable.toReadonlyArrayAsync(), expectArrayEquals([1, 3, 6]))), testAsync("fast src, fast acc", pipeLazyAsync([1, 2, 3], Observable.fromReadonlyArray(), fromRunnable(), m.scanLast((acc, x) => pipe([x + acc], Runnable.fromReadonlyArray()), returns(0)), Observable.toReadonlyArrayAsync(), expectArrayEquals([1, 3, 6])))), describe("scanMany", 
// FIXME: This test succeeds on DENO, but fails in node with timeout
/* testAsync(
  "slow src, fast acc",
  pipeLazyAsync(
    [1, 1, 1],
    Observable.fromReadonlyArray({ delay: 10 }),
    fromRunnable<number>(),
    m.scanMany<number, number>(
      (acc, next) =>
        pipe(
          Observable.generate<number>(identity, returns(next + acc), {
            delay: 1,
          }),
          Observable.takeFirst({ count: 3 }),
        ),
      returns(0),
    ),
    Observable.forEach(console.log),
    Observable.toReadonlyArrayAsync(),
    expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3]),
  ),
),*/
testAsync("fast src, slow acc", pipeLazyAsync([1, 1, 1], Observable.fromReadonlyArray({ delay: 1 }), fromRunnable(), m.scanMany((acc, next) => pipe(Observable.generate(identity, returns(next + acc), {
    delay: 10,
}), Observable.takeFirst({ count: 3 })), returns(0)), Observable.toReadonlyArrayAsync(), expectArrayEquals([1, 1, 1, 2, 2, 2, 3, 3, 3])))));
export default HigherOrderObservableModuleTests;
