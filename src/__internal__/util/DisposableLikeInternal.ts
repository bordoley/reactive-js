import { Identity, Option } from "../../functions";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  Error,
} from "../../util";

/**
 * Dispose `disposable` with an optional error.
 */
export const dispose =
  <T extends DisposableLike>(e?: Error): Identity<T> =>
  disposable => {
    disposable[DisposableLike_dispose](e);
    return disposable;
  };

export const getError = (disposable: {
  [DisposableLike_error]: Option<Error>;
}): Option<Error> => disposable[DisposableLike_error];

export const isDisposed = (disposable: {
  [DisposableLike_isDisposed]: boolean;
}): boolean => disposable[DisposableLike_isDisposed];
