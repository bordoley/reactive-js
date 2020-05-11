import { AsyncEnumerableLike } from "./interfaces.ts";
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
} from "../../observable.ts";
import { compose, Operator, pipe } from "../../functions.ts";
import { ObservableOperator } from "../observable/interfaces.ts";

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
  initial: () => TAcc,
): Operator<AsyncEnumerableLike<TSrc>, ObservableLike<TAcc>> => enumerable =>
  using(
    scheduler => {
      const enumerator = enumerable.stream(scheduler);
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
              accFeedback.dispatch(ev.acc);
              enumerator.dispatch();
              break;
          }
        }),
        map(ev => ev.acc),
        onSubscribe(() => {
          accFeedback.dispatch(initial());
          enumerator.dispatch();
        }),
      ),
  );

export const reduce = <TSrc, TAcc>(
  reducer: (acc: TAcc, next: TSrc) => ReducerRequest<TAcc>,
  initial: () => TAcc,
): Operator<AsyncEnumerableLike<TSrc>, ObservableLike<TAcc>> =>
  reduceImpl(
    accObs => zipWithLatestFrom(accObs, (next, acc) => reducer(acc, next)),
    initial,
  );

export const reduceAsync = <TSrc, TAcc>(
  reducer: (acc: TAcc, next: TSrc) => ObservableLike<ReducerRequest<TAcc>>,
  initial: () => TAcc,
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
