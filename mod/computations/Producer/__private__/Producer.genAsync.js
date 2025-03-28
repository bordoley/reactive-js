/// <reference types="./Producer.genAsync.d.ts" />

import { pipe } from "../../../functions.js";
import * as AsyncIterator from "../../../utils/__internal__/AsyncIterator.js";
import { Producer_genAsyncEnumerator, Producer_genPureAsyncEnumerator, } from "./Producer.genAsyncEnumerator.js";
export const Producer_genAsync = (factory => Producer_genAsyncEnumerator(() => pipe(factory(), AsyncIterator.toAsyncEnumerator())));
export const Producer_genPureAsync = (factory => Producer_genPureAsyncEnumerator(() => pipe(factory(), AsyncIterator.toAsyncEnumerator())));
