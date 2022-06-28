import { dispatch } from "../dispatcher";
import {
  Factory,
  Function1,
  Function2,
  compose,
  flip,
  pipe,
} from "../functions";
import {
  ObservableLike,
  ObservableOperator,
  StreamLike,
  SubjectLike,
  __memo,
  __observe,
  __using,
  createSubject,
  map,
  observable,
  onNotify,
  onSubscribe,
  switchAll,
  takeFirst,
  zipWithLatestFrom,
} from "../observable";
import { none } from "../option";
import {
  AsyncEnumerableLike,
  ConsumeContinue,
  ConsumeDone,
} from "../streamable";
import { __stream } from "./streamable";

export const consumeContinue = <T>(data: T): ConsumeContinue<T> => ({
  type: "continue",
  data,
});

export const consumeDone = <T>(data: T): ConsumeDone<T> => ({
  type: "done",
  data,
});

const consumeImpl = <TSrc, TAcc>(
  consumer: (
    acc: ObservableLike<TAcc>,
  ) => ObservableOperator<TSrc, ConsumeContinue<TAcc> | ConsumeDone<TAcc>>,
  initial: Factory<TAcc>,
): Function1<AsyncEnumerableLike<TSrc>, ObservableLike<TAcc>> => {
  const createObservable = (
    accFeedback: SubjectLike<TAcc>,
    enumerator: StreamLike<void, TSrc>,
  ) =>
    pipe(
      enumerator,
      consumer(accFeedback),
      onNotify(ev => {
        switch (ev.type) {
          case "continue":
            pipe(accFeedback, dispatch(ev.data));
            pipe(enumerator, dispatch(none));
            break;
        }
      }),
      map(ev => ev.data),
      onSubscribe(() => {
        pipe(accFeedback, dispatch(initial()));
        pipe(enumerator, dispatch(none));
      }),
    );

  return enumerable =>
    observable(() => {
      const enumerator = __stream(enumerable);
      const accFeedback = __using(createSubject);
      const observable = __memo(createObservable, accFeedback, enumerator);

      return __observe(observable);
    });
};

export const consume = <T, TAcc>(
  consumer: Function2<TAcc, T, ConsumeContinue<TAcc> | ConsumeDone<TAcc>>,
  initial: Factory<TAcc>,
): Function1<AsyncEnumerableLike<T>, ObservableLike<TAcc>> =>
  consumeImpl(accObs => zipWithLatestFrom(accObs, flip(consumer)), initial);

export const consumeAsync = <T, TAcc>(
  consumer: Function2<
    TAcc,
    T,
    ObservableLike<ConsumeContinue<TAcc> | ConsumeDone<TAcc>>
  >,
  initial: Factory<TAcc>,
): Function1<AsyncEnumerableLike<T>, ObservableLike<TAcc>> =>
  consumeImpl(
    accObs =>
      compose(
        zipWithLatestFrom(accObs, (next, acc) =>
          pipe(consumer(acc, next), takeFirst()),
        ),
        switchAll(),
      ),
    initial,
  );
