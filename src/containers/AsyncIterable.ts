import { AsyncIterableLike } from "../containers.js";
import { ToObservable } from "../rx.js";
import { ToFlowable } from "../streaming.js";
import AsyncIterable_toFlowable from "./AsyncIterable/__internal__/AsyncIterable.toFlowable.js";
import AsyncIterable_toObservable from "./AsyncIterable/__internal__/AsyncIterable.toObservable.js";

export const toFlowable: ToFlowable<
  AsyncIterableLike,
  { maxBuffer?: number }
>["toFlowable"] = AsyncIterable_toFlowable;

export const toObservable: ToObservable<
  AsyncIterableLike,
  { maxBuffer?: number }
>["toObservable"] = AsyncIterable_toObservable;
