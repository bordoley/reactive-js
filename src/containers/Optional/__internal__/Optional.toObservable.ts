import { Function1, Optional, compose, none } from "../../../functions.js";
import { EnumerableLike, ObservableLike, RunnableLike } from "../../../rx.js";
import ReadonlyArray_toObservable from "../../ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import Optional_toReadonlyArray from "./Optional.toReadonlyArray.js";

interface OptionalToObservable {
  <T>(): Function1<Optional<T>, EnumerableLike<T>>;
  <T>(options: { readonly delay: number }): Function1<
    Optional<T>,
    RunnableLike<T>
  >;
  <T>(options?: { readonly delay?: number }): Function1<
    Optional<T>,
    ObservableLike<T>
  >;
}

const Optional_toObservable: OptionalToObservable = ((options?: {
  delay: number;
}) => {
  const { delay = 0 } = options ?? {};
  const toObservableOptions = delay > 0 ? { delay, delayStart: true } : none;

  return compose(
    Optional_toReadonlyArray(),
    ReadonlyArray_toObservable(toObservableOptions),
  );
}) as OptionalToObservable;

export default Optional_toObservable;
