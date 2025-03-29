import { Equality, Factory, Reducer } from "../../../functions.js";
import type * as Producer from "../../Producer.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import Producer_concat from "./Producer.concat.js";
import Producer_distinctUntilChanged from "./Producer.distinctUntilChanged.js";
import { Producer_genPure } from "./Producer.gen.js";
import Producer_scan from "./Producer.scan.js";

const m = {
  concat: Producer_concat,
  distinctUntilChanged: Producer_distinctUntilChanged,
  genPure: Producer_genPure,
  scan: Producer_scan,
};

const Producer_scanDistinct: Producer.Signature["scanDistinct"] = (<TAction, T>(
  reducer: Reducer<TAction, T>,
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
) =>
  DeferredSource.scanDistinct(m)(
    reducer,
    initialState,
    options,
  )) as Producer.Signature["scanDistinct"];

export default Producer_scanDistinct;
