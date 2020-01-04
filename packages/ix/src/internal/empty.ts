import { empty as emptyObs, ObservableLike } from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";
import { AsyncEnumeratorResourceLike, AsyncEnumerableLike } from "./interfaces";
import { createAsyncEnumerator } from "./createAsyncEnumerator";

const operator = <TReq, T>(_: ObservableLike<TReq>): ObservableLike<T> =>
  emptyObs();

const enumerateAsync = <TReq, T>(
  scheduler: SchedulerLike,
  replayCount?: number,
): AsyncEnumeratorResourceLike<TReq, T> =>
  createAsyncEnumerator(operator, scheduler, replayCount);

const instance = { enumerateAsync };

export const empty = <TReq, T>(): AsyncEnumerableLike<TReq, T> => instance;
