/// <reference types="./Producer.gen.d.ts" />

import { pipe } from "../../../functions.js";
import * as Iterator from "../../../utils/__internal__/Iterator.js";
import { Producer_genAsyncEnumerator, Producer_genPureAsyncEnumerator, } from "./Producer.genAsyncEnumerator.js";
export const Producer_gen = (factory => Producer_genAsyncEnumerator(() => pipe(factory(), Iterator.toAsyncEnumerator())));
export const Producer_genPure = (factory => Producer_genPureAsyncEnumerator(() => pipe(factory(), Iterator.toAsyncEnumerator())));
