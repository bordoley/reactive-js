import { ObservableLike, toValue } from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";

export const run = <T>(observable: ObservableLike<T>) => {
  pipe(observable, toValue);
};
