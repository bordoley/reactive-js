/// <reference types="./DeferredReactiveComputationModuleTests.d.ts" />

import { describe, expectArrayEquals, testAsync, } from "../../../__internal__/testing.js";
import { pipeLazyAsync } from "../../../functions.js";
import * as AsyncIterable from "../../AsyncIterable.js";
import * as Computation from "../../Computation.js";
import * as EventSource from "../../EventSource.js";
const DeferredReactiveComputationModuleTests = (m) => describe("DeferredReactiveComputationModule", describe("toAsyncIterable", testAsync("converting to an async iterable and back to a producer to iterate the data", pipeLazyAsync([1, 2, 3, 4, 5, 6, 7, 8], Computation.fromReadonlyArray(m), m.toAsyncIterable(), AsyncIterable.toProducer(), EventSource.toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3, 4, 5, 6, 7, 8])))));
export default DeferredReactiveComputationModuleTests;
