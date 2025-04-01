/// <reference types="./ReactiveComputationModuleTests.d.ts" />

import { describe, expectArrayEquals, testAsync, } from "../../../__internal__/testing.js";
import { pipeLazyAsync } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import * as EventSource from "../../EventSource.js";
import * as Observable from "../../Observable.js";
const ObservableModule = Computation.makeModule()(Observable);
const ReactiveComputationModuleTests = (m) => describe("ReactiveComputationModuleTests", describe("fromObservable", testAsync("publishes all the values produced by the observable", pipeLazyAsync([1, 2, 3], Computation.fromReadonlyArray(ObservableModule), m.fromObservable(), m.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3])))));
export default ReactiveComputationModuleTests;
