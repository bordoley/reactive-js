import { pipe } from "@reactive-js/pipe";
import { ignoreElements, takeFirst, ObservableLike } from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";
import { AsyncEnumeratorResourceLike, AsyncEnumerableLike } from "./interfaces";
import { createAsyncEnumeratorResource } from "./createAsyncEnumerator";

const operator = <TReq, T>(obs: ObservableLike<TReq>): ObservableLike<T> =>
  pipe(obs, takeFirst(0), ignoreElements());

const emptyAsyncEnumerator = <TReq, T>(
  scheduler: SchedulerLike,
  replayCount?: number,
): AsyncEnumeratorResourceLike<TReq, T> =>
  createAsyncEnumeratorResource(operator, scheduler, replayCount);

const instance = {
  enumerateAsync: emptyAsyncEnumerator,
};

export const empty = <TReq, T>(): AsyncEnumerableLike<TReq, T> => instance;
