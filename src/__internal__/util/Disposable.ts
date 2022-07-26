import {
  Factory,
  Option,
  ignore,
  isNone,
  isSome,
  none,
  pipe,
} from "../../functions";
import {
  DisposableLike,
  DisposableLike_add,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  DisposableOrTeardown,
  Error,
  dispose,
  getError,
  isDisposed,
} from "./DisposableLikeInternal";
import { Object_init, Object_properties, createObjectFactory } from "./Object";

const Disposable_private_disposables = Symbol("Disposable_private_disposables");

const properties = {
  [DisposableLike_error]: none as Option<Error>,
  [DisposableLike_isDisposed]: false,
  [Disposable_private_disposables]:
    none as unknown as Set<DisposableOrTeardown>,
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

export const prototype = {
  [Object_properties]: properties,
  [Object_init](this: typeof properties) {
    this[Disposable_private_disposables] = new Set();
  },
  [DisposableLike_dispose](
    this: typeof properties & DisposableLike,
    error?: Error,
  ) {
    if (!isDisposed(this)) {
      this[DisposableLike_error] = error;
      this[DisposableLike_isDisposed] = true;

      const disposables: Option<Set<DisposableOrTeardown>> =
        this[Disposable_private_disposables];

      if (isNone(disposables)) {
        return;
      }

      for (const disposable of disposables) {
        disposables.delete(disposable);
        doDispose(this, disposable);
      }
    }
  },
  [DisposableLike_add](
    this: typeof properties & DisposableLike,
    disposable: DisposableOrTeardown,
    ignoreChildErrors: boolean,
  ) {
    const disposables = this[Disposable_private_disposables];

    if ((this as unknown) === disposable) {
      return;
    } else if (isDisposed(this)) {
      doDispose(this, disposable);
    } else if (!disposables.has(disposable)) {
      disposables.add(disposable);

      if (!(disposable instanceof Function)) {
        disposable[DisposableLike_add](e => {
          disposables.delete(disposable);

          if (isSome(e) && !ignoreChildErrors) {
            this[DisposableLike_dispose](e);
          }
        }, true);
      }
    }
  },
};

export const createDisposable: Factory<DisposableLike> =
  /*@__PURE__*/ createObjectFactory(prototype);

export const disposed: DisposableLike = {
  [DisposableLike_error]: none,
  [DisposableLike_isDisposed]: true,
  [DisposableLike_add](
    this: DisposableLike,
    disposable: DisposableOrTeardown,
  ): void {
    doDispose(this, disposable);
  },
  [DisposableLike_dispose]: ignore,
};
