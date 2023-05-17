/// <reference types="./Runnable.test.d.ts" />

import * as Observable from "../Observable.js";
import * as Runnable from "../Runnable.js";
import { describe, expectArrayEquals, test, testModule, } from "../__internal__/testing.js";
import { identityLazy, none, pipe, pipeLazy } from "../functions.js";
import HigherOrderObservableBaseTypeClassTests from "./fixtures/HigherOrderObservableBaseTypeClassTests.js";
import RunnableContainerTypeClassTests from "./fixtures/RunnableContainerTypeClassTests.js";
testModule("Runnable", RunnableContainerTypeClassTests(Runnable), HigherOrderObservableBaseTypeClassTests(Runnable, identityLazy), describe("exhaust", test("when the initial observable never disposes", pipeLazy([
    pipe([1, 2, 3], Observable.fromReadonlyArray({ delay: 3 })),
    pipe([4, 5, 6], Observable.fromReadonlyArray()),
    pipe([7, 8, 9], Observable.fromReadonlyArray({ delay: 2 })),
], Observable.fromReadonlyArray({ delay: 5 }), Runnable.exhaust(), Runnable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 7, 8, 9])))), describe("switchMap", test("overlapping notification", pipeLazy([none, none, none], Observable.fromReadonlyArray({ delay: 4 }), Runnable.switchMap(_ => pipe([1, 2, 3], Runnable.fromReadonlyArray({ delay: 2 }))), Runnable.toReadonlyArray(), expectArrayEquals([1, 2, 1, 2, 1, 2, 3]))), test("concating arrays", pipeLazy([1, 2, 3], Runnable.fromReadonlyArray({ delay: 1 }), Runnable.switchMap(_ => pipe([1, 2, 3], Runnable.fromReadonlyArray({ delay: 0 }))), Runnable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3, 1, 2, 3])))));
((_) => { })(Runnable);
