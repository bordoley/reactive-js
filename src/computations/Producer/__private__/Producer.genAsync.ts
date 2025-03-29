import { pipe } from "../../../functions.js";
import * as AsyncIterator from "../../../utils/__internal__/AsyncIterator.js";
import type * as Producer from "../../Producer.js";
import {
  Producer_genAsyncEnumerator,
  Producer_genPureAsyncEnumerator,
} from "./Producer.genAsyncEnumerator.js";

export const Producer_genAsync: Producer.Signature["genAsync"] = (factory =>
  Producer_genAsyncEnumerator(() =>
    pipe(factory(), AsyncIterator.toAsyncEnumerator()),
  )) as Producer.Signature["genAsync"];

export const Producer_genPureAsync: Producer.Signature["genPureAsync"] =
  (factory =>
    Producer_genPureAsyncEnumerator(() =>
      pipe(factory(), AsyncIterator.toAsyncEnumerator()),
    )) as Producer.Signature["genPureAsync"];
