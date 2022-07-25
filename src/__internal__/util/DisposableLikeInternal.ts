import { Identity, Option, SideEffect1 } from "../../functions";

export const DisposableLike_add = Symbol("DisposableLike_add");
export const DisposableLike_dispose = Symbol("DisposableLike_dispose");
export const DisposableLike_error = Symbol("DisposableLike_error");
export const DisposableLike_isDisposed = Symbol("DisposableLike_isDisposed");

export type Error = {
  readonly cause: unknown;
};

export type DisposableOrTeardown = DisposableLike | SideEffect1<Option<Error>>;

export interface DisposableLike {
  readonly [DisposableLike_error]: Option<Error>;
  readonly [DisposableLike_isDisposed]: boolean;
  [DisposableLike_add](
    disposable: DisposableOrTeardown,
    ignoreChildErrors: boolean,
  ): void;
  [DisposableLike_dispose](error?: Error): void;
}

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
