/// <reference types="./Computation.test.d.ts" />

import { describe, expectArrayEquals, expectToHaveBeenCalledTimes, mockFn, test, testModule, } from "../../__internal__/testing.js";
import { Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, } from "../../computations.js";
import { ignore, isSome, none, pipe, pipeLazy, } from "../../functions.js";
import * as HostScheduler from "../../utils/HostScheduler.js";
import * as Computation from "../Computation.js";
import * as Iterable from "../Iterable.js";
import * as Observable from "../Observable.js";
import * as ComputationTest from "./fixtures/helpers/ComputationTest.js";
import AlwaysReturnsDeferredComputationWithSideEffectsComputationOperatorTests from "./fixtures/operators/AlwaysReturnsDeferredComputationWithSideEffectsComputationOperatorTests.js";
import ComputationOperatorWithSideEffectsTests from "./fixtures/operators/ComputationOperatorWithSideEffectsTests.js";
import StatefulAsynchronousComputationOperatorTests from "./fixtures/operators/StatefulAsynchronousComputationOperatorTests.js";
import StatefulSynchronousComputationOperatorTests from "./fixtures/operators/StatefulSynchronousComputationOperatorTests.js";
const ObservableTypes = {
    [Computation_pureSynchronousOfT]: Observable.empty({ delay: 1 }),
    [Computation_synchronousWithSideEffectsOfT]: pipe(Observable.empty(), Observable.forEach(ignore)),
    [Computation_pureDeferredOfT]: pipe(Observable.empty(), Observable.subscribeOn(HostScheduler.create())),
    [Computation_deferredWithSideEffectsOfT]: pipe(Observable.empty(), Observable.subscribeOn(HostScheduler.create()), Observable.forEach(ignore)),
    [Computation_multicastOfT]: Observable.never(),
};
testModule("Computation", describe("concatMany", test("concats the input containers in order", pipeLazy(Computation.concatMany(Iterable)([
    [1, 2, 3],
    [4, 5, 6],
]), Iterable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6]))), test("only consume partial number of events", pipeLazy(Computation.concatMany(Iterable)([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 8],
]), Iterable.takeFirst({ count: 5 }), Iterable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5])))), describe("concatWith", test("concats two containers together", pipeLazy([0, 1], Computation.concatWith(Iterable)([2, 3, 4]), Iterable.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4])))), describe("endWith", test("appends the additional values to the end of the container", pipeLazy([0, 1], Computation.endWith(Iterable)(2, 3, 4), Iterable.toReadonlyArray(), expectArrayEquals([0, 1, 2, 3, 4])))), describe("flatMap", test("maps each value to a container and flattens", pipeLazy([0, 1], Computation.concatMap(Iterable)(() => [1, 2, 3]), Iterable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3])))), describe("flatMapIterable", test("maps the incoming value with the inline generator function", pipeLazy([none, none], Computation.concatMapIterable(Iterable)(function* (_) {
    yield 1;
    yield 2;
    yield 3;
}), Iterable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3]))), test("maps the incoming value with the inline generator function, with delayed source", pipeLazy([none, none], Computation.concatMapIterable(Iterable)(function* (_) {
    yield 1;
    yield 2;
    yield 3;
}), Iterable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3])))), describe("ignoreElements", test("ignores all elements", pipeLazy([1, 2, 3], Computation.ignoreElements(Iterable)(), Iterable.toReadonlyArray(), expectArrayEquals([]))), test("invokes all side-effects", () => {
    const f = mockFn();
    pipe([1, 2, 3], Iterable.forEach(f), Computation.ignoreElements(Iterable)(), Iterable.toReadonlyArray(), expectArrayEquals([]));
    pipe(f, expectToHaveBeenCalledTimes(3));
})), describe("keepType", test("filters null values", pipeLazy(["b", none, "v"], Computation.keepType(Iterable)(isSome), Iterable.toReadonlyArray(), expectArrayEquals(["b", "v"])))), describe("mapTo", test("maps every value in the source to v", pipeLazy([
    ["a", "b"],
    ["c", "d"],
    ["e", "f"],
], Computation.mapTo(Iterable)(2), Iterable.toReadonlyArray(), expectArrayEquals([2, 2, 2])))), describe("mergeWith", StatefulSynchronousComputationOperatorTests(ObservableTypes, Computation.mergeWith(Observable)(Observable.empty(), Observable.empty())), ComputationOperatorWithSideEffectsTests(ObservableTypes, Computation.mergeWith(Observable)(pipe(Observable.empty(), Observable.forEach(ignore)), Observable.empty())), StatefulAsynchronousComputationOperatorTests(ObservableTypes, Computation.mergeWith(Observable)(ObservableTypes[Computation_pureDeferredOfT], Observable.empty())), AlwaysReturnsDeferredComputationWithSideEffectsComputationOperatorTests(ObservableTypes, Computation.mergeWith(Observable)(ObservableTypes[Computation_deferredWithSideEffectsOfT], Observable.empty())), ComputationTest.isMulticasted(pipe(ObservableTypes[Computation_multicastOfT], Computation.mergeWith(Observable)(ObservableTypes[Computation_multicastOfT])))), describe("pick", test("with object and symbol keys", () => {
    const keyA = Symbol();
    const keyB = Symbol();
    const obj = {
        [keyA]: {
            [keyB]: "value",
        },
    };
    pipe([obj], Computation.pick(Iterable)(keyA, keyB), Iterable.toReadonlyArray(), expectArrayEquals(["value"]));
}), test("with object and string keys", () => {
    const obj = {
        keyA: {
            keyB: "value",
        },
    };
    pipe([obj], Computation.pick(Iterable)("keyA", "keyB"), Iterable.toReadonlyArray(), expectArrayEquals(["value"]));
}), test("with array", pipeLazy([[1, 2, 3, 4, 5, 6]], Computation.pick(Iterable)(3), Iterable.toReadonlyArray(), expectArrayEquals([4])))), describe("startWith", test("appends the additional values to the start of the container", pipeLazy([0, 1], Computation.startWith(Iterable)(2, 3, 4), Iterable.toReadonlyArray(), expectArrayEquals([2, 3, 4, 0, 1])))));
((_) => { })(Computation);
