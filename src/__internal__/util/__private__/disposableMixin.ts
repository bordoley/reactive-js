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
} from "../../../util/DisposableLike";
import { Option, isNone, isSome } from "../../../util/Option";
import { ConstructorOf, pipe } from "../../../util/functions";
import { Mixin, Mixin1, Mixin2, Mixin3, addMethod } from "../mixins";

export const DisposableMixin_disposables = Symbol(
  "DisposableMixin_disposables",
);
export interface DisposableMixin {
  [DisposableLike_error]: Option<Error>;
  [DisposableLike_isDisposed]: boolean;
  readonly [DisposableMixin_disposables]: Set<DisposableOrTeardown>;
}

const doDispose = (
  self: {
    [DisposableLike_error]: Option<Error>;
  },
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

const disposableAdd = function (
  this: DisposableMixin & {
    [DisposableLike_dispose]: (e?: Option<Error>) => void;
  },
  disposable: DisposableOrTeardown,
  ignoreChildErrors: boolean,
) {
  const disposables = this[DisposableMixin_disposables];

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
};

function disposableDispose(this: DisposableMixin, error?: Error) {
  if (!isDisposed(this)) {
    this[DisposableLike_error] = error;
    this[DisposableLike_isDisposed] = true;

    const disposables: Option<Set<DisposableOrTeardown>> =
      this[DisposableMixin_disposables];

    if (isNone(disposables)) {
      return;
    }

    for (const disposable of disposables) {
      disposables.delete(disposable);
      doDispose(this, disposable);
    }
  }
}

interface MixinDisposable {
  <T extends DisposableMixin>(): Mixin<T, DisposableLike>;
  <T extends DisposableMixin, TA>(): Mixin1<TA, T, DisposableLike>;
  <T extends DisposableMixin, TA, TB>(): Mixin2<TA, TB, T, DisposableLike>;
  <T extends DisposableMixin, TA, TB, TC>(): Mixin3<
    TA,
    TB,
    TC,
    T,
    DisposableLike
  >;
}

export const mixinDisposable: MixinDisposable =
  <T extends DisposableMixin>() =>
  (Constructor: ConstructorOf<T>): ConstructorOf<T & DisposableLike> =>
    pipe(
      Constructor,
      addMethod<
        typeof DisposableLike_dispose,
        DisposableLike[typeof DisposableLike_dispose]
      >(DisposableLike_dispose, disposableDispose),
      addMethod<
        typeof DisposableLike_add,
        DisposableLike[typeof DisposableLike_add]
      >(DisposableLike_add, disposableAdd),
    );
