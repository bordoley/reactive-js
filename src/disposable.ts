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

export type DisposableOrTeardown = Disposable | SideEffect1<Option<Error>>;

/**
 * Represents an unmanaged resource that can be disposed.
 */
export class Disposable {
  /** @ignore */
  public _isDisposed = false;

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

    if (isDisposed(this)) {
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
  <T extends Disposable>(e?: Error): Function1<T, T> =>
  disposable => {
    disposable.dispose(e);
    return disposable;
  };

export const isDisposed = (disposable: Disposable): boolean =>
  disposable.isDisposed;

function addDisposableOrTeardown(
  parent: Disposable,
  child: Disposable | SideEffect1<Option<Error>>,
  ignoreChildErrors = false,
) {
  parent.add(child, ignoreChildErrors);
}

export const bindTo =
  <T extends Disposable>(child: Disposable): Function1<T, T> =>
  (parent: T): T => {
    addDisposableOrTeardown(parent, child);
    addDisposableOrTeardown(child, parent);
    return parent;
  };

export function add<T extends Disposable>(
  child: Disposable,
  ignoreChildErrors: true,
): Function1<T, T>;
export function add<T extends Disposable>(child: Disposable): Function1<T, T>;
export function add<T extends Disposable>(
  child: Disposable,
  ignoreChildErrors = false,
): Function1<T, T> {
  return (parent: T): T => {
    addDisposableOrTeardown(parent, child, ignoreChildErrors);
    return parent;
  };
}

export function addTo<T extends Disposable>(
  child: Disposable,
  ignoreChildErrors: true,
): Function1<T, T>;
export function addTo<T extends Disposable>(child: Disposable): Function1<T, T>;
export function addTo<T extends Disposable>(
  parent: Disposable,
  ignoreChildErrors = false,
): Function1<T, T> {
  return (child: T): T => {
    addDisposableOrTeardown(parent, child, ignoreChildErrors);
    return child;
  };
}

export const onDisposed =
  <T extends Disposable>(
    teardown: SideEffect1<Option<Error>>,
  ): Function1<T, T> =>
  disposable => {
    addDisposableOrTeardown(disposable, teardown);
    return disposable;
  };

export const onError =
  <T extends Disposable>(teardown: SideEffect1<Error>): Function1<T, T> =>
  disposable => {
    addDisposableOrTeardown(disposable, e => {
      if (isSome(e)) {
        teardown.call(disposable, e);
      }
    });
    return disposable;
  };

export const onComplete =
  <T extends Disposable>(teardown: SideEffect): Function1<T, T> =>
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
  (disposable: Disposable): SideEffect1<unknown> =>
  cause =>
    pipe(disposable, dispose({ cause }));

const doDispose = (self: Disposable, disposable: DisposableOrTeardown) => {
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

export const disposed = /*@__PURE__*/ pipe(newInstance(Disposable), dispose());

/**
 * A `Disposable` container that allows replacing an inner `Disposable` with another,
 * disposing the previous inner `Disposable` in the process. Disposing the
 * container also disposes the inner `Disposable`. Disposing the inner `Disposable`
 * with an error, disposes the container with the error.
 *
 * @noInheritDoc
 */
export class SerialDisposable extends Disposable {
  private _inner: Disposable = disposed;

  /**
   *  The inner `Disposable` that may be get or set. Setting the inner
   *  `Disposable` disposes the old `Disposable` unless it is strictly equal
   *  to the new one.
   */
  get inner() {
    return this._inner;
  }

  /** @ignore */
  set inner(newInner: Disposable) {
    const oldInner = this._inner;
    this._inner = newInner;

    if (oldInner !== newInner) {
      addDisposableOrTeardown(this, newInner);
      pipe(oldInner, dispose());
    }
  }
}

export const toAbortSignal = (disposable: Disposable): AbortSignal => {
  const abortController = newInstance(AbortController);
  addDisposableOrTeardown(disposable, () => abortController.abort());
  return abortController.signal;
};
