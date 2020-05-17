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
  dispatch,
} from "../../observable";
import { none } from "../../option";
import { stream } from "../../streamable";
import { ObservableOperator } from "../observable/interfaces";
import { AsyncEnumerableLike } from "./interfaces";

export const enum ConsumeRequestType {
  Continue = 1,
  Done = 2,
}

export type ConsumeRequest<TAcc> =
  | {
      readonly type: ConsumeRequestType.Continue;
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

export const continue_ = <TAcc>(acc: TAcc): ConsumeRequest<TAcc> => ({
  type: ConsumeRequestType.Continue,
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
      const enumerator = stream(enumerable, scheduler);
      const accFeedback = createSubject<TAcc>();

      return [accFeedback, enumerator];
    },
    (accFeedback: SubjectLike<TAcc>, enumerator: StreamLike<void, TSrc>) =>
      pipe(
        enumerator,
        consumer(accFeedback),
        onNotify(ev => {
          switch (ev.type) {
            case ConsumeRequestType.Continue:
              dispatch(accFeedback, ev.acc);
              dispatch(enumerator, none);
              break;
          }
        }),
        map(ev => ev.acc),
        onSubscribe(() => {
          dispatch(accFeedback, initial());
          dispatch(enumerator, none);
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
