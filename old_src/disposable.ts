import {
  Function1,
  SideEffect,
  SideEffect1,
  newInstance,
  pipe,
} from "./functions";
import { Option, isNone, isSome, none } from "./option";

/**
 * A wrapper around a caught error to handle corner cases such
 * as a function which throws undefined or string.
 */
export interface Error {
  /** The underlying cause of the error. */
  readonly cause: unknown;
}

export type DisposableOrTeardown = DisposableLike | SideEffect1<Option<Error>>;

/**
 * Represents an unmanaged resource that can be disposed.
 */
export interface DisposableLike {
  /**
   * The error the `Disposable` was disposed with if disposed.
   */
  readonly error: Option<Error>;

  /**
   * `true` if this resource has been disposed, otherwise false
   */
  readonly isDisposed: boolean;

  /**
   * Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.
   *
   * @param disposable
   * @returns `this`
   */
  add(
    this: this,
    disposable: DisposableOrTeardown,
    ignoreChildErrors: boolean,
  ): void;

  /**
   * Dispose the resource.
   *
   * @param error An optional error that signals the resource is being disposed due to an error.
   */
  dispose(this: this, error?: Error): void;
}

export class Disposable implements DisposableLike {
  /** @ignore */
  private _isDisposed = false;

  private readonly disposables: Set<DisposableOrTeardown> =
    newInstance<Set<DisposableOrTeardown>>(Set);
  private _error: Option<Error> = none;

  /**
   * The error the `Disposable` was disposed with if disposed.
   */
  get error() {
    return this._error;
  }

  /**
   * `true` if this resource has been disposed, otherwise false
   */
  get isDisposed() {
    return this._isDisposed;
  }

  /**
   * Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.
   *
   * @param disposable
   * @returns `this`
   */
  add(
    this: this,
    disposable: DisposableOrTeardown,
    ignoreChildErrors: boolean,
  ) {
    const { disposables } = this;

    if (this === disposable) {
      return;
    } else if (isDisposed(this)) {
      doDispose(this, disposable);
    } else if (!disposables.has(disposable)) {
      disposables.add(disposable);

      if (!(disposable instanceof Function)) {
        addDisposableOrTeardown(
          disposable,
          e => {
            disposables.delete(disposable);

            if (isSome(e) && !ignoreChildErrors) {
              pipe(this, dispose(e));
            }
          },
          true,
        );
      }
    }
  }

  /**
   * Dispose the resource.
   *
   * @param error An optional error that signals the resource is being disposed due to an error.
   */
  dispose(this: this, error?: Error) {
    if (!isDisposed(this)) {
      this._isDisposed = true;
      this._error = error;

      const { disposables } = this;
      for (const disposable of disposables) {
        disposables.delete(disposable);
        doDispose(this, disposable);
      }
    }
  }
}

/**
 * Dispose `disposable` with an optional error.
 */
export const dispose =
  <T extends DisposableLike>(e?: Error): Function1<T, T> =>
  disposable => {
    disposable.dispose(e);
    return disposable;
  };

export const isDisposed = (disposable: DisposableLike): boolean =>
  disposable.isDisposed;

function addDisposableOrTeardown(
  parent: DisposableLike,
  child: DisposableOrTeardown,
  ignoreChildErrors = false,
) {
  parent.add(child, ignoreChildErrors);
}

export const bindTo =
  <T extends DisposableLike>(child: DisposableLike): Function1<T, T> =>
  (parent: T): T => {
    addDisposableOrTeardown(parent, child);
    addDisposableOrTeardown(child, parent);
    return parent;
  };

export function add<T extends DisposableLike>(
  child: DisposableLike,
  ignoreChildErrors: true,
): Function1<T, T>;
export function add<T extends DisposableLike>(
  child: DisposableLike,
): Function1<T, T>;
export function add<T extends DisposableLike>(
  child: DisposableLike,
  ignoreChildErrors = false,
): Function1<T, T> {
  return (parent: T): T => {
    addDisposableOrTeardown(parent, child, ignoreChildErrors);
    return parent;
  };
}

export function addTo<T extends DisposableLike>(
  child: DisposableLike,
  ignoreChildErrors: true,
): Function1<T, T>;
export function addTo<T extends DisposableLike>(
  child: DisposableLike,
): Function1<T, T>;
export function addTo<T extends DisposableLike>(
  parent: DisposableLike,
  ignoreChildErrors = false,
): Function1<T, T> {
  return (child: T): T => {
    addDisposableOrTeardown(parent, child, ignoreChildErrors);
    return child;
  };
}

export const onDisposed =
  <T extends DisposableLike>(
    teardown: SideEffect1<Option<Error>>,
  ): Function1<T, T> =>
  disposable => {
    addDisposableOrTeardown(disposable, teardown);
    return disposable;
  };

export const onError =
  <T extends DisposableLike>(teardown: SideEffect1<Error>): Function1<T, T> =>
  disposable => {
    addDisposableOrTeardown(disposable, e => {
      if (isSome(e)) {
        teardown.call(disposable, e);
      }
    });
    return disposable;
  };

export const onComplete =
  <T extends DisposableLike>(teardown: SideEffect): Function1<T, T> =>
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

const doDispose = (self: DisposableLike, disposable: DisposableOrTeardown) => {
  const { error } = self;
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

export const disposed: DisposableLike = /*@__PURE__*/ pipe(
  newInstance(Disposable),
  dispose(),
);

export const toAbortSignal = (disposable: DisposableLike): AbortSignal => {
  const abortController = newInstance(AbortController);
  addDisposableOrTeardown(disposable, () => abortController.abort());
  return abortController.signal;
};
