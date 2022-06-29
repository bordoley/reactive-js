import { dispatch } from "../dispatcher";
import { addTo } from "../disposable";
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
  createObservable,
  createSubject,
  map,
  onNotify,
  onSubscribe,
  switchAll,
  takeFirst,
  zipWithLatestFrom,
} from "../observable";
import { scheduler } from "../observer";
import { none } from "../option";
import { sinkInto } from "../source";
import {
  AsyncEnumerableLike,
  ConsumeContinue,
  ConsumeDone,
} from "../streamable";
import { stream } from "./streamable";

export const consumeContinue = <T>(data: T): ConsumeContinue<T> => ({
  type: "continue",
  data,
});

export const consumeDone = <T>(data: T): ConsumeDone<T> => ({
  type: "done",
  data,
});

const consumeImpl =
  <TSrc, TAcc>(
    consumer: (
      acc: ObservableLike<TAcc>,
    ) => ObservableOperator<TSrc, ConsumeContinue<TAcc> | ConsumeDone<TAcc>>,
    initial: Factory<TAcc>,
  ): Function1<AsyncEnumerableLike<TSrc>, ObservableLike<TAcc>> =>
  enumerable =>
    createObservable(observer => {
      const enumerator = pipe(
        enumerable,
        stream(scheduler(observer)),
        addTo(observer),
      );
      const accFeedback = pipe(createSubject<TAcc>(), addTo(observer));

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
        sinkInto(observer),
      );
    });

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
