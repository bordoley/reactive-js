import { ObservableLike, toValue } from "@reactive-js/core/lib/observable";
import { pipe } from "@reactive-js/core/lib/functions";

export const run = <T>(observable: ObservableLike<T>) => {
  pipe(observable, toValue());
};
