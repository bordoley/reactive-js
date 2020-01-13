import { ObservableLike, toValue } from "@reactive-js/rx";
import { pipe } from "@reactive-js/pipe";

export const run = <T>(observable: ObservableLike<T>) => {
  pipe(observable, toValue);
};
