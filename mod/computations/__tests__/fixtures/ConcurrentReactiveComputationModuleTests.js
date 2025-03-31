/// <reference types="./ConcurrentReactiveComputationModuleTests.d.ts" />

import { describe, expectArrayEquals, testAsync, } from "../../../__internal__/testing.js";
import { pipeLazyAsync } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import * as Observable from "../../Observable.js";
import * as Source from "../../Source.js";
const ObservableModule = Computation.makeModule()(Observable);
const ConcurrentReactiveComputationModuleTests = (m) => describe("ConcurrentReactiveComputationModuleTests", describe("fromObservable", testAsync("publishes all the values produced by the observable", pipeLazyAsync([1, 2, 3], Computation.fromReadonlyArray(ObservableModule), m.fromObservable(), m.toProducer(), Source.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3])))));
export default ConcurrentReactiveComputationModuleTests;
