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
} from "../../util/DisposableLike";
import { Option, isNone, isSome } from "../../util/Option";
import {
  AnyConstructor,
  Factory,
  Function1,
  newInstance,
  pipe,
} from "../../util/functions";
import { MutableRefLike, MutableRefLike_current } from "./MutableRefLike";
import {
  Mixin,
  Mixin1,
  Mixin2,
  Mixin3,
  addGetter,
  addMethod,
  addProperty,
} from "./mixins";

export interface SerialDisposableLike<TDisposable extends DisposableLike>
  extends DisposableLike,
    MutableRefLike<TDisposable> {}

const DisposableRefLike_private_current = Symbol(
  "DisposableRefLike_private_current",
);

interface MixinSerialDisposable {
  <
    T extends DisposableLike,
    TDisposable extends DisposableLike = DisposableLike,
  >(
    defaultValue: Factory<TDisposable>,
  ): Mixin<T, SerialDisposableLike<TDisposable>>;
  <
    TA,
    T extends DisposableLike,
    TDisposable extends DisposableLike = DisposableLike,
  >(
    defaultValue: Factory<TDisposable>,
  ): Mixin1<TA, T, SerialDisposableLike<TDisposable>>;
  <
    TA,
    TB,
    T extends DisposableLike,
    TDisposable extends DisposableLike = DisposableLike,
  >(
    defaultValue: Factory<TDisposable>,
  ): Mixin2<TA, TB, T, SerialDisposableLike<TDisposable>>;
  <
    TA,
    TB,
    TC,
    T extends DisposableLike,
    TDisposable extends DisposableLike = DisposableLike,
  >(
    defaultValue: Factory<TDisposable>,
  ): Mixin3<TA, TB, TC, T, SerialDisposableLike<TDisposable>>;
}

export const mixinSerialDisposable: MixinSerialDisposable = <
  TDisposable extends DisposableLike = DisposableLike,
>(
  defaultValue: Factory<TDisposable>,
) =>
  addProperty(MutableRefLike_current, {
    get: function (
      this: DisposableLike & {
        [DisposableRefLike_private_current]?: Option<TDisposable>;
      },
    ): TDisposable {
      let current = this[DisposableRefLike_private_current];
      if (isNone(current)) {
        current = defaultValue();
        this[DisposableRefLike_private_current] = current;
        this[DisposableLike_add](current, false);
      }
      return current;
    },
    set: function (
      this: DisposableLike & {
        [DisposableRefLike_private_current]?: Option<TDisposable>;
      },
      newCurrent: TDisposable,
    ) {
      const oldCurrent = this[DisposableRefLike_private_current];

      this[DisposableRefLike_private_current] = newCurrent;
      this[DisposableLike_add](newCurrent, false);

      if (isSome(oldCurrent) && oldCurrent !== newCurrent) {
        pipe(oldCurrent, dispose());
      }
    },
  });

interface MixinDelegatingDisposable {
  <T>(getDelegate: Function1<T, DisposableLike>): Mixin<T, DisposableLike>;
  <TA, T>(getDelegate: Function1<T, DisposableLike>): Mixin1<
    TA,
    T,
    DisposableLike
  >;
  <TA, TB, T>(getDelegate: Function1<T, DisposableLike>): Mixin2<
    TA,
    TB,
    T,
    DisposableLike
  >;
  <TA, TB, TC, T>(getDelegate: Function1<T, DisposableLike>): Mixin3<
    TA,
    TB,
    TC,
    T,
    DisposableLike
  >;
}

export const mixinDelegatingDisposable: MixinDelegatingDisposable =
  <T>(getDelegate: Function1<T, DisposableLike>) =>
  (Constructor: AnyConstructor) =>
    pipe(
      Constructor,
      addMethod(
        DisposableLike_add,
        function (
          this: T,
          disposable: DisposableOrTeardown,
          ignoreChildErrors: boolean,
        ) {
          const delegate = getDelegate(this);
          delegate[DisposableLike_add](disposable, ignoreChildErrors);
        },
      ),
      addMethod(DisposableLike_dispose, function (this: T, error?: Error) {
        const delegate = getDelegate(this);
        delegate[DisposableLike_dispose](error);
      }),
      addGetter(DisposableLike_error, function (this: T): Option<Error> {
        const delegate = getDelegate(this);
        return delegate[DisposableLike_error];
      }),
      addGetter(DisposableLike_isDisposed, function (this: T): boolean {
        const delegate = getDelegate(this);
        return delegate[DisposableLike_isDisposed];
      }),
    );

const Disposable_private_error = Symbol("Disposable_private_error");
const Disposable_private_isDisposed = Symbol("Disposable_private_isDisposed");
const Disposable_private_disposables = Symbol("Disposable_private_disposables");

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

function disposableGetError(this: {
  [Disposable_private_error]?: Option<Error>;
}): Option<Error> {
  return this[Disposable_private_error];
}

function disposableIsDisposed(this: {
  [Disposable_private_isDisposed]?: Option<boolean>;
}): boolean {
  return this[Disposable_private_isDisposed] ?? false;
}

function disposableAdd(
  this: DisposableLike & {
    [Disposable_private_disposables]?: Set<DisposableOrTeardown>;
  },
  disposable: DisposableOrTeardown,
  ignoreChildErrors: boolean,
) {
  const disposables =
    this[Disposable_private_disposables] ??
    newInstance<Set<DisposableOrTeardown>>(Set);
  this[Disposable_private_disposables] = disposables;

  if (this === disposable) {
    return;
  } else if (isDisposed(this)) {
    doDispose(this, disposable);
  } else if (!disposables.has(disposable)) {
    disposables.add(disposable);

    if (!(disposable instanceof Function)) {
      disposable[DisposableLike_add](e => {
        disposables.delete(disposable);

        if (isSome(e) && !ignoreChildErrors) {
          pipe(this, dispose(e));
        }
      }, true);
    }
  }
}

function disposableDispose(
  this: DisposableLike & {
    [Disposable_private_error]?: Option<Error>;
    [Disposable_private_isDisposed]?: Option<boolean>;
    [Disposable_private_disposables]?: Set<DisposableOrTeardown>;
  },
  error?: Error,
) {
  if (!isDisposed(this)) {
    this[Disposable_private_error] = error;
    this[Disposable_private_isDisposed] = true;

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
}

interface MixinDisposable {
  <T>(): Mixin<T, DisposableLike>;
  <TA, T>(): Mixin1<TA, T, DisposableLike>;
  <TA, TB, T>(): Mixin2<TA, TB, T, DisposableLike>;
  <TA, TB, TC, T>(): Mixin3<TA, TB, TC, T, DisposableLike>;
}

export const mixinDisposable: MixinDisposable =
  () => (Constructor: AnyConstructor) =>
    pipe(
      Constructor,
      addGetter(DisposableLike_error, disposableGetError),
      addGetter(DisposableLike_isDisposed, disposableIsDisposed),
      addMethod(DisposableLike_add, disposableAdd),
      addMethod(DisposableLike_dispose, disposableDispose),
    );
