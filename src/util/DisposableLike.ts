import { properties, prototype } from "../__internal__/util/Disposable";
import {
  DisposableLike_add,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  dispose,
  getError,
} from "../__internal__/util/DisposableLike";
import { createObjectFactory } from "../__internal__/util/Object";
import { Option, isNone, isSome, none } from "./Option";
import {
  Factory,
  Identity,
  SideEffect,
  SideEffect1,
  ignore,
  newInstance,
  pipe,
} from "./functions";

export type Error = {
  readonly cause: unknown;
};

export type DisposableOrTeardown = DisposableLike | SideEffect1<Option<Error>>;

/**
 * Represents an unmanaged resource that can be disposed.
 */
export interface DisposableLike {
  /**
   * The error the `Disposable` was disposed with if disposed.
   */
  readonly [DisposableLike_error]: Option<Error>;

  /**
   * `true` if this resource has been disposed, otherwise false
   */
  readonly [DisposableLike_isDisposed]: boolean;

  /**
   * Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.
   *
   * @param disposable
   * @returns `this`
   */
  [DisposableLike_add](
    disposable: DisposableOrTeardown,
    ignoreChildErrors: boolean,
  ): void;

  /**
   * Dispose the resource.
   *
   * @param error An optional error that signals the resource is being disposed due to an error.
   */
  [DisposableLike_dispose](error?: Error): void;
}

const addDisposableOrTeardown = (
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

/**
 * Returns a function that disposes `disposable` with an error wrapping the provided `cause`.
 */
export const toErrorHandler =
  (disposable: DisposableLike): SideEffect1<unknown> =>
  cause =>
    pipe(disposable, dispose({ cause }));

export const toAbortSignal = (disposable: DisposableLike): AbortSignal => {
  const abortController = newInstance(AbortController);
  addDisposableOrTeardown(disposable, () => abortController.abort());
  return abortController.signal;
};

const doDispose = (self: DisposableLike, disposable: DisposableOrTeardown) => {
  const error = getError(self);
  if (disposable instanceof Function) {
    try {
      disposable.call(self, error);
    } catch (_) {
      /* Proactively catch Errors thrown in teardown logic. Teardown functions
       * shouldn't throw, so this is to prevent unexpected Errors.
       */
    }
  } else {
    pipe(disposable, dispose(error));
  }
};

export const disposed: DisposableLike = {
  [DisposableLike_error]: none,
  [DisposableLike_isDisposed]: true,
  [DisposableLike_add]: function (
    this: DisposableLike,
    disposable: DisposableOrTeardown,
  ): void {
    doDispose(this, disposable);
  },
  [DisposableLike_dispose]: ignore,
};

export {
  DisposableLike_add,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  dispose,
  getError,
  isDisposed,
} from "../__internal__/util/DisposableLike";

export const create: Factory<DisposableLike> =
  /*@__PURE__*/ createObjectFactory(prototype, properties);
