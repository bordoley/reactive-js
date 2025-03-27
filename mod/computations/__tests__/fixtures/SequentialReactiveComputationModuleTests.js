/// <reference types="./SequentialReactiveComputationModuleTests.d.ts" />

import { describe, expectArrayEquals, testAsync, } from "../../../__internal__/testing.js";
import { pipeLazyAsync } from "../../../functions.js";
import * as Computation from "../../Computation.js";
const SequentialReactiveComputationModuleTests = (m) => describe("SequentialReactiveComputationModule", describe("takeLast", testAsync("with default count", pipeLazyAsync([1, 2, 3, 4, 5], Computation.fromReadonlyArray(m)(), m.takeLast(), Computation.toReadonlyArrayAsync(m)(), expectArrayEquals([5]))), testAsync("when count is 0", pipeLazyAsync([1, 2, 3, 4, 5], Computation.fromReadonlyArray(m)(), 
// Some implementations special case this
m.takeLast({ count: 0 }), Computation.toReadonlyArrayAsync(m)(), expectArrayEquals([]))), testAsync("when count is less than the total number of elements", pipeLazyAsync([1, 2, 3, 4, 5], Computation.fromReadonlyArray(m)(), m.takeLast({ count: 3 }), Computation.toReadonlyArrayAsync(m)(), expectArrayEquals([3, 4, 5]))), testAsync("when count is greater than the total number of elements", pipeLazyAsync([1, 2, 3, 4, 5], Computation.fromReadonlyArray(m)(), m.takeLast({ count: 10 }), Computation.toReadonlyArrayAsync(m)(), expectArrayEquals([1, 2, 3, 4, 5]))), testAsync("with default count", pipeLazyAsync([1, 2, 3, 4, 5], Computation.fromReadonlyArray(m)(), m.takeLast(), Computation.toReadonlyArrayAsync(m)(), expectArrayEquals([5])))));
export default SequentialReactiveComputationModuleTests;
