import {
  DisposableLike,
  DisposableOrTeardown,
  Error,
} from "../../util/DisposableLike";
import { Option, isNone, isSome, none } from "../../util/Option";
import { pipe } from "../../util/functions";
import {
  DisposableLike_add,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  dispose,
  getError,
  isDisposed,
} from "./DisposableLike";

const Disposable_private_disposables = Symbol("Disposable_private_disposables");

export const properties: {
  [DisposableLike_error]: DisposableLike[typeof DisposableLike_error];
  [DisposableLike_isDisposed]: DisposableLike[typeof DisposableLike_isDisposed];
  [Disposable_private_disposables]: Set<DisposableOrTeardown>;
} = {
  [DisposableLike_error]: none,
  [DisposableLike_isDisposed]: false,
  [Disposable_private_disposables]:
    none as unknown as Set<DisposableOrTeardown>,
};

const doDispose = (
  self: typeof properties,
  disposable: DisposableOrTeardown,
) => {
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
  [DisposableLike_dispose](this: typeof properties, error?: Error) {
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

export const init = (self: typeof properties) => {
  self[Disposable_private_disposables] = new Set();
};
