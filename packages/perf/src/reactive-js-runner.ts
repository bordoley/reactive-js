import { ObservableLike } from "@reactive-js/rx";
import { pipe } from '@reactive-js/pipe';
import { toValue } from "@reactive-js/observable";

export const run = <T>(observable: ObservableLike<T>) => {
  pipe(observable, toValue());
};
