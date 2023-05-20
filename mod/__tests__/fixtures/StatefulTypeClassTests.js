/// <reference types="./StatefulTypeClassTests.d.ts" />

import { describe, expectArrayEquals, testAsync, } from "../../__internal__/testing.js";
import { alwaysTrue, increment, pipe, pipeLazyAsync, returns, } from "../../functions.js";
const StatefulTypeClassTests = (m, toReadonlyArrayAsync) => describe("StatefulTypeClassTests", describe("retry", testAsync("retrys the container on an exception", pipeLazyAsync(m.concat(pipe(m.generate(increment, returns(0)), m.takeFirst({ count: 3 })), m.throws()), m.retry(alwaysTrue), m.takeFirst({ count: 6 }), toReadonlyArrayAsync(), expectArrayEquals([1, 2, 3, 1, 2, 3])))));
export default StatefulTypeClassTests;
