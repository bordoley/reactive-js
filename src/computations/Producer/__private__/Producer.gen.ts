import { pipe } from "../../../functions.js";
import * as Iterator from "../../../utils/__internal__/Iterator.js";
import type * as Producer from "../../Producer.js";
import {
  Producer_genAsyncEnumerator,
  Producer_genPureAsyncEnumerator,
} from "./Producer.genAsyncEnumerator.js";

export const Producer_gen: Producer.Signature["gen"] = (factory =>
  Producer_genAsyncEnumerator(() =>
    pipe(factory(), Iterator.toAsyncEnumerator()),
  )) as Producer.Signature["gen"];

export const Producer_genPure: Producer.Signature["genPure"] = (factory =>
  Producer_genPureAsyncEnumerator(() =>
    pipe(factory(), Iterator.toAsyncEnumerator()),
  )) as Producer.Signature["genPure"];
