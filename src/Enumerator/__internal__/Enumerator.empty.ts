import type * as Enumerator from "../../Enumerator.js";
import { Optional, SideEffect1, isFunction, none } from "../../functions.js";
import {
  DisposableLike,
  DisposableLike_add,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../types.js";

const empty: EnumeratorLike = {
  [EnumeratorLike_current]: none,
  [EnumeratorLike_hasCurrent]: false,
  [EnumeratorLike_move](): boolean {
    return false;
  },
  [DisposableLike_error]: none,
  [DisposableLike_isDisposed]: true,
  [DisposableLike_add](
    disposable: DisposableLike | SideEffect1<Optional<Error>>,
  ): void {
    if (isFunction(disposable)) {
      try {
        disposable(none);
      } catch (_) {
        /* Proactively catch Errors thrown in teardown logic. Teardown functions
         * shouldn't throw, so this is to prevent unexpected Errors.
         */
      }
    } else {
      disposable[DisposableLike_dispose]();
    }
  },
  [DisposableLike_dispose](_error?: Error): void {},
};

const Enumerator_empty: Enumerator.Signature["empty"] = <T>() =>
  empty as EnumeratorLike<T>;

export default Enumerator_empty;
