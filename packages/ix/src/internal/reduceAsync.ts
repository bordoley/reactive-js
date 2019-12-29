import { AsyncIterableLike, AsyncIteratorResourceLike } from "./interfaces";
import {
  using,
  onNext,
  withLatestFrom,
  map,
  switchAll,
  takeFirst,
  ObservableLike,
  merge,
  ofValue,
  takeLast,
} from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";
import { pipe, OperatorLike } from "@reactive-js/pipe";
import { identity } from "./identity";
import { lift } from "./lift";

interface ReduceRequestLike<TReq, TAcc> {
  readonly request: TReq;
  readonly result: TAcc;
}

export const reduceAsync = <TReq, TSrc, TAcc>(
  reducer: (
    acc: TAcc,
    next: TSrc,
  ) => ObservableLike<ReduceRequestLike<TReq, TAcc>>,
  initial: () => ReduceRequestLike<TReq, TAcc>,
  scheduler: SchedulerLike,
): OperatorLike<
  AsyncIterableLike<TReq, TSrc>,
  ObservableLike<TAcc>
> => iterable => {
  const resourceFactory = (): [
    AsyncIteratorResourceLike<TReq, TSrc>,
    AsyncIteratorResourceLike<
      ReduceRequestLike<TReq, TAcc>,
      ReduceRequestLike<TReq, TAcc>
    >,
  ] => {
    const resource: AsyncIteratorResourceLike<
      TReq,
      TSrc
    > = iterable.getIXAsyncIterator(scheduler);

    const eventEmitter = pipe(
      identity<ReduceRequestLike<TReq, TAcc>>(),
      lift(onNext(({ request }) => resource.dispatch(request))),
    ).getIXAsyncIterator(scheduler);

    return [resource, eventEmitter];
  };

  const withLatestSelector = (
    next: TSrc,
    { result }: ReduceRequestLike<TReq, TAcc>,
  ) => pipe(reducer(result, next), takeFirst());

  const observableFactory = (
    iterator: AsyncIteratorResourceLike<TReq, TSrc>,
    eventEmitter: AsyncIteratorResourceLike<
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
      onNext(next => eventEmitter.dispatch(next)),
      map(({ result }) => result),
      takeLast(),
    );

  return using(resourceFactory, observableFactory);
};
