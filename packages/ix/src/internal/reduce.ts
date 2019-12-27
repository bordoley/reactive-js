import {
  AsyncIterableLike,
  AsyncIteratorResourceLike,
} from "./interfaces";
import {
  using,
  onNext,
  withLatestFrom,
  map,
  switchAll,
  startWith,
  takeFirst,
  ObservableLike,
} from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";
import { pipe, OperatorLike } from "@reactive-js/pipe";
import { identity } from "./identity";
import { lift } from "./lift";

interface ReduceRequestLike<TReq, TAcc> {
  readonly request: TReq;
  readonly result: TAcc;
}

export const reduce = <TReq, TSrc, TAcc>(
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
    AsyncIteratorResourceLike<ReduceRequestLike<TReq, TAcc>, ReduceRequestLike<TReq, TAcc>>,
  ] => {
    const resource: AsyncIteratorResourceLike<
      TReq,
      TSrc
    > = iterable.getIXAsyncIterator(scheduler);

    const eventEmitter = pipe(
      identity<ReduceRequestLike<TReq, TAcc>>(),
      lift(onNext(({ request }) => resource.dispatch(request))),
    ).getIXAsyncIterator(scheduler, 1);

    return [resource, eventEmitter];
  };

  const observableFactory = ([iterator, eventEmitter]: [
    AsyncIteratorResourceLike<TReq, TSrc>,
    AsyncIteratorResourceLike<ReduceRequestLike<TReq, TAcc>, ReduceRequestLike<TReq, TAcc>>,
  ]) =>
    pipe(
      iterator,
      withLatestFrom(eventEmitter, (next, { result }) => reducer(result, next)),
      map(obs => pipe(obs, takeFirst())),
      switchAll(),
      startWith(initial()),
      onNext(next => eventEmitter.dispatch(next)),
      map(({ result }) => result),
    );

  return using(resourceFactory, observableFactory);
};
