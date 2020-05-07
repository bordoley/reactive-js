import { pipe } from "@reactive-js/core/lib/functions";
import { ObservableLike, toValue } from "@reactive-js/core/lib/observable";

export const run = <T>(observable: ObservableLike<T>) => {
  pipe(observable, toValue());
};
