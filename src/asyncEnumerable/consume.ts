import {
  AsyncConsumer,
  AsyncEnumerableLike,
  ConsumeRequest,
  Consumer,
} from "../asyncEnumerable";
import { Factory, Function1, compose, flip, pipe } from "../functions";
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
import { stream } from "../streamable";

export const notify = <TAcc>(acc: TAcc): ConsumeRequest<TAcc> => ({
  type: "notify",
  acc,
});

export const done = <TAcc>(acc: TAcc): ConsumeRequest<TAcc> => ({
  type: "done",
  acc,
});

const consumeImpl =
  <TSrc, TAcc>(
    consumer: (
      acc: ObservableLike<TAcc>,
    ) => ObservableOperator<TSrc, ConsumeRequest<TAcc>>,
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
              case "notify":
                accFeedback.dispatch(ev.acc);
                enumerator.dispatch(none);
                break;
            }
          }),
          map(ev => ev.acc),
          onSubscribe(() => {
            accFeedback.dispatch(initial());
            enumerator.dispatch(none);
          }),
        ),
    );

export const consume = <T, TAcc>(
  consumer: Consumer<T, TAcc>,
  initial: Factory<TAcc>,
): Function1<AsyncEnumerableLike<T>, ObservableLike<TAcc>> =>
  consumeImpl(accObs => zipWithLatestFrom(accObs, flip(consumer)), initial);

export const consumeAsync = <T, TAcc>(
  consumer: AsyncConsumer<T, TAcc>,
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
