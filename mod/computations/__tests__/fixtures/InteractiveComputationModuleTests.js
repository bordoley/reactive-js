/// <reference types="./InteractiveComputationModuleTests.d.ts" />

import { describe, expectArrayEquals, testAsync, } from "../../../__internal__/testing.js";
import { arrayEquality, pipeLazyAsync, tuple, } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import * as Observable from "../../Observable.js";
const ObservableModule = Computation.makeModule()(Observable);
const InteractiveComputationModuleTests = (m) => describe("InteractiveComputationModuleTests", describe("toObservable", testAsync("The observable publishes all the values from the source", pipeLazyAsync(Computation.fromReadonlyArray(m)()([0, 1, 2, 3, 4]), m.toObservable(), Computation.toReadonlyArrayAsync(ObservableModule)(), expectArrayEquals([0, 1, 2, 3, 4])))), describe("zip", testAsync("different length iterables", pipeLazyAsync(m.zip(Computation.fromReadonlyArray(m)()([0, 1, 2, 3, 4]), Computation.fromReadonlyArray(m)()([0, 1, 2]), Computation.fromReadonlyArray(m)()([0, 1, 2, 3])), Computation.toReadonlyArrayAsync(m)(), expectArrayEquals([tuple(0, 0, 0), tuple(1, 1, 1), tuple(2, 2, 2)], {
    valuesEquality: arrayEquality(),
}))), testAsync("with empty iterable", pipeLazyAsync(m.zip(Computation.fromReadonlyArray(m)()([0, 1, 2, 3, 4]), Computation.fromReadonlyArray(m)()([]), Computation.fromReadonlyArray(m)()([0, 1, 2, 3])), Computation.toReadonlyArrayAsync(m)(), expectArrayEquals([], {
    valuesEquality: arrayEquality(),
})))));
export default InteractiveComputationModuleTests;
