import { ObservableLike, toValue } from "@reactive-js/core/dist/js/observable";
import { pipe } from "@reactive-js/core/dist/js/pipe";

export const run = <T>(observable: ObservableLike<T>) => {
  pipe(observable, toValue());
};
