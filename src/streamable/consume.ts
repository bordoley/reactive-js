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
  createSubject,
  map,
  onNotify,
  onSubscribe,
  switchAll,
  takeFirst,
  using,
  zipWithLatestFrom,
} from "../observable";
import { none } from "../option";
import {
  AsyncEnumerableLike,
  ConsumeContinue,
  ConsumeDone,
  stream,
} from "../streamable";

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
    using(
      scheduler => {
        const enumerator = pipe(enumerable, stream(scheduler));
        const accFeedback = createSubject<TAcc>();

        return [accFeedback, enumerator];
      },
      (accFeedback: SubjectLike<TAcc>, enumerator: StreamLike<void, TSrc>) =>
        pipe(
          enumerator,
          consumer(accFeedback),
          onNotify(ev => {
            switch (ev.type) {
              case "continue":
                accFeedback.dispatch(ev.data);
                enumerator.dispatch(none);
                break;
            }
          }),
          map(ev => ev.data),
          onSubscribe(() => {
            accFeedback.dispatch(initial());
            enumerator.dispatch(none);
          }),
        ),
    );

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
