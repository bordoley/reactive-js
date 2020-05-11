import { pipe, Factory } from "../../functions";
import { createSubject } from "./createSubject";
import { dispatchTo } from "./dispatcher";
import { ObservableLike, ObservableOperator } from "./interfaces";
import { onNotify } from "./onNotify";
import { onSubscribe } from "./onSubscribe";
import { switchAll } from "./switchAll";
import { takeFirst } from "./takeFirst";
import { using } from "./using";
import { zipWithLatestFrom } from "./zipWithLatestFrom";

/**
 * Returns the `ObservableLike` that applies an asynchronous accumulator function
 * over the source, and emits each intermediate result.
 *
 * @param scanner The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
export const scanAsync = <T, TAcc>(
  scanner: (acc: TAcc, next: T) => ObservableLike<TAcc>,
  initialValue: Factory<TAcc>,
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
        onNotify(dispatchTo(accFeedbackStream)),
        onSubscribe(() => {
          accFeedbackStream.dispatch(initialValue());
        }),
      ),
  );
