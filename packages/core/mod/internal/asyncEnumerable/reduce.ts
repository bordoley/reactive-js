import { compose, Operator, pipe, Factory } from "../../functions.ts";
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
} from "../../observable.ts";
import { ObservableOperator } from "../observable/interfaces.ts";
import { AsyncEnumerableLike } from "./interfaces.ts";
import { none } from "../../option.ts";
import { stream } from "../../streamable.ts";

export const enum ReducerRequestType {
  Continue = 1,
  Done = 2,
}

export type ReducerRequest<TAcc> =
  | {
      readonly type: ReducerRequestType.Continue;
      readonly acc: TAcc;
    }
  | {
      readonly type: ReducerRequestType.Done;
      readonly acc: TAcc;
    };

export const continue_ = <TAcc>(acc: TAcc): ReducerRequest<TAcc> => ({
  type: ReducerRequestType.Continue,
  acc,
});

export const done = <TAcc>(acc: TAcc): ReducerRequest<TAcc> => ({
  type: ReducerRequestType.Done,
  acc,
});

const reduceImpl = <TSrc, TAcc>(
  reducer: (
    acc: ObservableLike<TAcc>,
  ) => ObservableOperator<TSrc, ReducerRequest<TAcc>>,
  initial: Factory<TAcc>,
): Operator<AsyncEnumerableLike<TSrc>, ObservableLike<TAcc>> => enumerable =>
  using(
    scheduler => {
      const enumerator = stream(enumerable, scheduler);
      const accFeedback = createSubject<TAcc>();

      return [accFeedback, enumerator];
    },
    (accFeedback: SubjectLike<TAcc>, enumerator: StreamLike<void, TSrc>) =>
      pipe(
        enumerator,
        reducer(accFeedback),
        onNotify(ev => {
          switch (ev.type) {
            case ReducerRequestType.Continue:
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

export const reduce = <TSrc, TAcc>(
  reducer: (acc: TAcc, next: TSrc) => ReducerRequest<TAcc>,
  initial: Factory<TAcc>,
): Operator<AsyncEnumerableLike<TSrc>, ObservableLike<TAcc>> =>
  reduceImpl(
    accObs => zipWithLatestFrom(accObs, (next, acc) => reducer(acc, next)),
    initial,
  );

export const reduceAsync = <TSrc, TAcc>(
  reducer: (acc: TAcc, next: TSrc) => ObservableLike<ReducerRequest<TAcc>>,
  initial: Factory<TAcc>,
): Operator<AsyncEnumerableLike<TSrc>, ObservableLike<TAcc>> =>
  reduceImpl(
    accObs =>
      compose(
        zipWithLatestFrom(accObs, (next, acc) =>
          pipe(reducer(acc, next), takeFirst()),
        ),
        switchAll(),
      ),
    initial,
  );
