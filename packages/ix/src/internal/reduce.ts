import {
  AsyncIterableLike,
  AsyncIteratorResourceLike,
  EventEmitterResourceLike,
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
  publish,
  MulticastObservableResourceLike,
} from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";
import { createEventEmitter } from "./create";
import { pipe, OperatorLike } from "@reactive-js/pipe";

interface ReduceRequestLike<TReq, TAcc> {
  readonly request: TReq;
  readonly result: TAcc;
}

export const reduce = <TReq, TSrc, TAcc>(
  reducer: (
    acc: TAcc,
    next: TSrc,
  ) => ObservableLike<ReduceRequestLike<TReq, TAcc>>,
  initial: ReduceRequestLike<TReq, TAcc>,
  scheduler: SchedulerLike,
): OperatorLike<
  AsyncIterableLike<TReq, TSrc>,
  ObservableLike<TAcc>
> => iterable => {
  const resourceFactory = (): [
    AsyncIteratorResourceLike<TReq, TSrc>,
    EventEmitterResourceLike<ReduceRequestLike<TReq, TAcc>>,
    MulticastObservableResourceLike<ReduceRequestLike<TReq, TAcc>>,
  ] => {
    const resource: AsyncIteratorResourceLike<
      TReq,
      TSrc
    > = iterable.getIXAsyncIterator(scheduler);
    const eventEmitter: EventEmitterResourceLike<ReduceRequestLike<
      TReq,
      TAcc
    >> = createEventEmitter();
    const onResultStream: MulticastObservableResourceLike<ReduceRequestLike<
      TReq,
      TAcc
    >> = pipe(
      eventEmitter,
      onNext(({ request }) => resource.dispatch(request)),
      publish(scheduler, 1),
    );

    return [resource, eventEmitter, onResultStream];
  };

  const observableFactory = ([iterator, resultEmitter, onResultStream]: [
    AsyncIteratorResourceLike<TReq, TSrc>,
    EventEmitterResourceLike<ReduceRequestLike<TReq, TAcc>>,
    MulticastObservableResourceLike<ReduceRequestLike<TReq, TAcc>>,
  ]) =>
    pipe(
      iterator,
      withLatestFrom(onResultStream, (next, { result }) =>
        reducer(result, next),
      ),
      map(obs => pipe(obs, takeFirst())),
      switchAll(),
      startWith(initial),
      onNext(next => resultEmitter.dispatch(next)),
      map(next => {
        const { result } = next;
        return result;
      }),
    );

  return using(resourceFactory, observableFactory);
};
