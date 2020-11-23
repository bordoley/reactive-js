import {
  compose,
  Function1,
  pipe,
  Factory,
  flip,
  Function2,
} from "../../functions";
import {
  createSubject,
  map,
  ObservableLike,
  onNotify,
  onSubscribe,
  switchAll,
  SubjectLike,
  StreamLike,
  using,
  zipWithLatestFrom,
  takeFirst,
  ObservableOperator,
} from "../../observable";
import { none } from "../../option";
import { stream } from "../../streamable";
import { AsyncEnumerableLike } from "../../asyncEnumerable";

export const enum ConsumeRequestType {
  Notify = 1,
  Done = 2,
}

export type ConsumeRequest<TAcc> =
  | {
      readonly type: ConsumeRequestType.Notify;
      readonly acc: TAcc;
    }
  | {
      readonly type: ConsumeRequestType.Done;
      readonly acc: TAcc;
    };

export type Consumer<T, TAcc> = Function2<TAcc, T, ConsumeRequest<TAcc>>;
export type AsyncConsumer<T, TAcc> = Function2<
  TAcc,
  T,
  ObservableLike<ConsumeRequest<TAcc>>
>;

export const notify = <TAcc>(acc: TAcc): ConsumeRequest<TAcc> => ({
  type: ConsumeRequestType.Notify,
  acc,
});

export const done = <TAcc>(acc: TAcc): ConsumeRequest<TAcc> => ({
  type: ConsumeRequestType.Done,
  acc,
});

const consumeImpl = <TSrc, TAcc>(
  consumer: (
    acc: ObservableLike<TAcc>,
  ) => ObservableOperator<TSrc, ConsumeRequest<TAcc>>,
  initial: Factory<TAcc>,
): Function1<AsyncEnumerableLike<TSrc>, ObservableLike<TAcc>> => enumerable =>
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
            case ConsumeRequestType.Notify:
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
