import { Factory, Function2, pipe } from "../functions";
import { ObservableLike, ObservableOperator, dispatchTo } from "../observable";

import { createSubject } from "./createSubject";
import { onNotify } from "./onNotify";
import { onSubscribe } from "./onSubscribe";
import { switchAll } from "./switchAll";
import { takeFirst } from "./takeFirst";
import { using } from "./using";
import { zipWithLatestFrom } from "./zipWithLatestFrom";

export type AsyncReducer<TAcc, T> = Function2<TAcc, T, ObservableLike<TAcc>>;

/**
 * Returns the `ObservableLike` that applies an asynchronous accumulator function
 * over the source, and emits each intermediate result.
 *
 * @param scanner The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
export const scanAsync = <T, TAcc>(
  scanner: AsyncReducer<TAcc, T>,
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
