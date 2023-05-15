import type * as Observable from "../../Observable.js";
import ReadonlyArray_toObservable from "../../ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { none, pipe } from "../../functions.js";

const Observable_fromValue: Observable.Signature["fromValue"] = (<T>(options?: {
    readonly delay?: number;
  }) =>
  (value: T) => {
    const { delay = 0 } = options ?? {};
    return pipe(
      [value],
      ReadonlyArray_toObservable(
        delay > 0 ? { delay, delayStart: true } : (none as any),
      ),
    );
  }) as Observable.Signature["fromValue"];

export default Observable_fromValue;
