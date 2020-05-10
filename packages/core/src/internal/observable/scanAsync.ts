import { pipe } from "../../functions";
import { createSubject } from "./createSubject";
import { ObservableLike, ObservableOperator } from "./interfaces";
import { onNotify } from "./onNotify";
import { switchAll } from "./switchAll";
import { takeFirst } from "./takeFirst";
import { onSubscribe } from "./onSubscribe";
import { zipWithLatestFrom } from "./zipWithLatestFrom";
import { using } from "./using";

/**
 * Returns the `ObservableLike` that applies an asynchronous accumulator function
 * over the source, and emits each intermediate result.
 *
 * @param scanner The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
export const scanAsync = <T, TAcc>(
  scanner: (acc: TAcc, next: T) => ObservableLike<TAcc>,
  initialValue: () => TAcc,
): ObservableOperator<T, TAcc> => observable =>
  using(
    _ => createSubject<TAcc>(),
    accFeedbackStream =>
      pipe(
        observable,
        zipWithLatestFrom<T, TAcc, ObservableLike<TAcc>>(
          accFeedbackStream,
          (next, acc) => pipe(scanner(acc, next), takeFirst()),
        ),
        switchAll<TAcc>(),
        onNotify(next => accFeedbackStream.dispatch(next)),
        onSubscribe(() => {
          accFeedbackStream.dispatch(initialValue());
        }),
      ),
  );
