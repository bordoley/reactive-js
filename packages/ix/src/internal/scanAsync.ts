import { AsyncEnumerableLike, AsyncEnumeratorResourceLike } from "./interfaces";
import {
  using,
  onNotify,
  withLatestFrom,
  map,
  switchAll,
  takeFirst,
  ObservableLike,
  merge,
  ofValue,
  throwIfEmpty,
  catchError,
  empty,
} from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";
import { pipe, OperatorLike } from "@reactive-js/pipe";
import { identity } from "./identity";
import { lift } from "./lift";

interface ReduceRequestLike<TReq, TAcc> {
  readonly request: TReq;
  readonly result: TAcc;
}

export const scanAsync = <TReq, TSrc, TAcc>(
  reducer: (
    acc: TAcc,
    next: TSrc,
  ) => ObservableLike<ReduceRequestLike<TReq, TAcc>>,
  initial: () => ReduceRequestLike<TReq, TAcc>,
  scheduler: SchedulerLike,
): OperatorLike<
  AsyncEnumerableLike<TReq, TSrc>,
  ObservableLike<TAcc>
> => iterable => {
  const resourceFactory = (): [
    AsyncEnumeratorResourceLike<TReq, TSrc>,
    AsyncEnumeratorResourceLike<
      ReduceRequestLike<TReq, TAcc>,
      ReduceRequestLike<TReq, TAcc>
    >,
  ] => {
    const resource: AsyncEnumeratorResourceLike<
      TReq,
      TSrc
    > = iterable.enumerateAsync(scheduler);

    const eventEmitter = pipe(
      identity<ReduceRequestLike<TReq, TAcc>>(),
      lift(onNotify(({ request }) => resource.notifySafe(request))),
    ).enumerateAsync(scheduler);

    return [resource, eventEmitter];
  };

  const emptyError = Symbol("empty");

  const withLatestSelector = (
    next: TSrc,
    { result }: ReduceRequestLike<TReq, TAcc>,
  ) => pipe(reducer(result, next), takeFirst(), throwIfEmpty(() => emptyError));

  const observableFactory = (
    iterator: AsyncEnumeratorResourceLike<TReq, TSrc>,
    eventEmitter: AsyncEnumeratorResourceLike<
      ReduceRequestLike<TReq, TAcc>,
      ReduceRequestLike<TReq, TAcc>
    >,
  ) =>
    pipe(
      merge(
        pipe(
          iterator,
          withLatestFrom(eventEmitter, withLatestSelector),
          switchAll(),
        ),
        ofValue(initial()),
      ),
      onNotify(next => eventEmitter.notifySafe(next)),
      map(({ result }) => result),
      catchError(e => e === emptyError ? empty() : undefined),
    );

  return using(resourceFactory, observableFactory);
};
