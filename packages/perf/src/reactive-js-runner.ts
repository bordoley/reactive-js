import { ObservableLike, toValue } from "@reactive-js/core/dist/js/observable";
import { pipe } from "@reactive-js/core/dist/js/functions";

export const run = <T>(observable: ObservableLike<T>) => {
  pipe(observable, toValue());
};
