import { pipe } from "../../functions.ts";
import { createSubject } from "./createSubject.ts";
import { ObservableLike, ObservableOperator } from "./interfaces.ts";
import { onNotify } from "./onNotify.ts";
import { switchAll } from "./switchAll.ts";
import { takeFirst } from "./takeFirst.ts";
import { onSubscribe } from "./onSubscribe.ts";
import { zipWithLatestFrom } from "./zipWithLatestFrom.ts";
import { using } from "./using.ts";

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
