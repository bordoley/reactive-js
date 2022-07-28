import {
  Identity,
  Option,
  SideEffect,
  SideEffect1,
  isNone,
  isSome,
} from "../../functions";

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

export const addDisposableOrTeardown = (
  parent: DisposableLike,
  child: DisposableOrTeardown,
  ignoreChildErrors = false,
) => {
  parent[DisposableLike_add](child, ignoreChildErrors);
};

export const bindTo =
  <T extends DisposableLike>(child: DisposableLike): Identity<T> =>
  (parent: T): T => {
    addDisposableOrTeardown(parent, child);
    addDisposableOrTeardown(child, parent);
    return parent;
  };

export const add =
  <T extends DisposableLike>(child: DisposableLike) =>
  (parent: T): T => {
    addDisposableOrTeardown(parent, child);
    return parent;
  };

export const addIgnoringChildErrors =
  <T extends DisposableLike>(child: DisposableLike) =>
  (parent: T): T => {
    addDisposableOrTeardown(parent, child, true);
    return parent;
  };

export const addTo =
  <T extends DisposableLike>(parent: DisposableLike): Identity<T> =>
  (child: T): T => {
    addDisposableOrTeardown(parent, child);
    return child;
  };

export const addToIgnoringChildErrors =
  <T extends DisposableLike>(parent: DisposableLike): Identity<T> =>
  (child: T): T => {
    addDisposableOrTeardown(parent, child, true);
    return child;
  };

export const onDisposed =
  <T extends DisposableLike>(
    teardown: SideEffect1<Option<Error>>,
  ): Identity<T> =>
  disposable => {
    addDisposableOrTeardown(disposable, teardown);
    return disposable;
  };

export const onError =
  <T extends DisposableLike>(teardown: SideEffect1<Error>): Identity<T> =>
  disposable => {
    addDisposableOrTeardown(disposable, e => {
      if (isSome(e)) {
        teardown.call(disposable, e);
      }
    });
    return disposable;
  };

export const onComplete =
  <T extends DisposableLike>(teardown: SideEffect): Identity<T> =>
  disposable => {
    addDisposableOrTeardown(disposable, e => {
      if (isNone(e)) {
        teardown.call(disposable);
      }
    });
    return disposable;
  };
