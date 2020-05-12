import { pipe } from "../lib/functions";
import { ObservableLike, toValue } from "../lib/observable";

export const run = <T>(observable: ObservableLike<T>) => {
  pipe(observable, toValue());
};
