import {
  Option,
  SideEffect,
  SideEffect1,
  Updater,
  isNone,
  isSome,
} from "../../functions";
import {
  DisposableLike,
  DisposableLike_add,
  DisposableLike_dispose,
  DisposableLike_exception,
  DisposableLike_isDisposed,
  DisposableOrTeardown,
  Exception,
} from "../../util";
/**
 * Dispose `disposable` with an optional error.
 */
export const dispose =
  <T extends DisposableLike>(e?: Exception): Updater<T> =>
  disposable => {
    disposable[DisposableLike_dispose](e);
    return disposable;
  };

export const getException = (disposable: {
  [DisposableLike_exception]: Option<Exception>;
}): Option<Exception> => disposable[DisposableLike_exception];

export const isDisposed = (disposable: {
  [DisposableLike_isDisposed]: boolean;
}): boolean => disposable[DisposableLike_isDisposed];

const addDisposableOrTeardown = (
  parent: DisposableLike,
  child: DisposableOrTeardown,
  ignoreChildErrors = false,
) => {
  parent[DisposableLike_add](child, ignoreChildErrors);
};

export const bindTo =
  <T extends DisposableLike>(child: DisposableLike): Updater<T> =>
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
  <T extends DisposableLike>(parent: DisposableLike): Updater<T> =>
  (child: T): T => {
    addDisposableOrTeardown(parent, child);
    return child;
  };

export const addToIgnoringChildErrors =
  <T extends DisposableLike>(parent: DisposableLike): Updater<T> =>
  (child: T): T => {
    addDisposableOrTeardown(parent, child, true);
    return child;
  };

export const onDisposed =
  <T extends DisposableLike>(
    teardown: SideEffect1<Option<Exception>>,
  ): Updater<T> =>
  disposable => {
    addDisposableOrTeardown(disposable, teardown);
    return disposable;
  };

export const onError =
  <T extends DisposableLike>(teardown: SideEffect1<Exception>): Updater<T> =>
  disposable => {
    addDisposableOrTeardown(disposable, e => {
      if (isSome(e)) {
        teardown.call(disposable, e);
      }
    });
    return disposable;
  };

export const onComplete =
  <T extends DisposableLike>(teardown: SideEffect): Updater<T> =>
  disposable => {
    addDisposableOrTeardown(disposable, e => {
      if (isNone(e)) {
        teardown.call(disposable);
      }
    });
    return disposable;
  };
