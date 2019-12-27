import { pipe } from "@reactive-js/pipe";
import { ignoreElements, takeFirst, ObservableLike } from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";
import { AsyncIteratorResourceLike, AsyncIterableLike } from "./interfaces";
import { createAsyncIteratorResource } from "./create";

const operator = <TReq, T>(obs: ObservableLike<TReq>): ObservableLike<T> =>
  pipe(obs, takeFirst(0), ignoreElements());

const emptyAsyncIterator = <TReq, T>(
  scheduler: SchedulerLike,
): AsyncIteratorResourceLike<TReq, T> =>
  createAsyncIteratorResource(operator, scheduler);

export const empty = <TReq, T>(): AsyncIterableLike<TReq, T> => ({
  getIXAsyncIterator: emptyAsyncIterator,
});
