import {
  Option,
  ignore,
  isSome,
  none,
  pipe,
  returns,
  unsafeCast,
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
import {
  add,
  dispose,
  getException,
  isDisposed,
  onDisposed,
} from "./__internal__DisposableLike";
import {
  MutableRefLike,
  MutableRefLike_current,
} from "./__internal__MutableRefLike";
import {
  Mixin,
  Mixin1,
  Mutable,
  __extends,
  clazz,
  createInstanceFactory,
  init,
  props,
} from "./__internal__Objects";

export const delegatingDisposableMixin: Mixin1<DisposableLike, DisposableLike> =
  /*@__PURE__*/ (() => {
    const DelegatingDisposable_private_delegate = Symbol(
      "DelegatingDisposable_private_delegate",
    );

    type TProperties = {
      [DisposableLike_isDisposed]: boolean;
      readonly [DelegatingDisposable_private_delegate]: DisposableLike;
    };

    return clazz(
      function DelegatingDisposableMixin(
        instance: Pick<
          DisposableLike,
          | typeof DisposableLike_exception
          | typeof DisposableLike_add
          | typeof DisposableLike_dispose
        > &
          Mutable<TProperties>,
        delegate: DisposableLike,
      ): DisposableLike {
        instance[DelegatingDisposable_private_delegate] = delegate;

        pipe(
          delegate,
          onDisposed(_ => {
            instance[DisposableLike_isDisposed] = true;
          }),
        );

        return instance;
      },
      props<TProperties>({
        [DelegatingDisposable_private_delegate]: none,
        [DisposableLike_isDisposed]: false,
      }),
      {
        get [DisposableLike_exception](): Option<Exception> {
          unsafeCast<TProperties>(this);

          const delegate = this[DelegatingDisposable_private_delegate];
          return delegate[DisposableLike_exception];
        },
        [DisposableLike_add](
          this: TProperties,
          disposable: DisposableOrTeardown,
          ignoreChildErrors: boolean,
        ) {
          const delegate = this[DelegatingDisposable_private_delegate];
          delegate[DisposableLike_add](disposable, ignoreChildErrors);
        },
        [DisposableLike_dispose](this: TProperties, error?: Exception) {
          pipe(this[DelegatingDisposable_private_delegate], dispose(error));
        },
      },
    );
  })();

const doDispose = (
  instance: DisposableLike,
  disposable: DisposableOrTeardown,
) => {
  const error = getException(instance);
  if (disposable instanceof Function) {
    try {
      disposable.call(instance, error);
    } catch (_) {
      /* Proactively catch Errors thrown in teardown logic. Teardown functions
       * shouldn't throw, so this is to prevent unexpected Errors.
       */
    }
  } else {
    pipe(disposable, dispose(error));
  }
};

export const disposableMixin: Mixin<DisposableLike> = /*@__PURE__*/ (() => {
  const Disposable_private_disposables = Symbol(
    "Disposable_private_disposables",
  );

  type TProperties = {
    [DisposableLike_exception]: Option<Exception>;
    [DisposableLike_isDisposed]: boolean;
    readonly [Disposable_private_disposables]: Set<DisposableOrTeardown>;
  };

  return clazz(
    function DisposableMixin(
      instance: Pick<
        DisposableLike,
        typeof DisposableLike_dispose | typeof DisposableLike_add
      > &
        Mutable<TProperties>,
    ): DisposableLike {
      instance[Disposable_private_disposables] = new Set();

      return instance;
    },
    props<TProperties>({
      [DisposableLike_exception]: none,
      [DisposableLike_isDisposed]: false,
      [Disposable_private_disposables]: none,
    }),
    {
      [DisposableLike_dispose](
        this: TProperties & DisposableLike,
        error?: Exception,
      ) {
        if (!isDisposed(this)) {
          this[DisposableLike_exception] = error;
          this[DisposableLike_isDisposed] = true;

          const disposables = this[Disposable_private_disposables];

          for (const disposable of disposables) {
            disposables.delete(disposable);
            doDispose(this, disposable);
          }
        }
      },
      [DisposableLike_add](
        this: TProperties & DisposableLike,
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
    },
  );
})();

export const createDisposable =
  /*@__PURE__*/ createInstanceFactory(disposableMixin);

export const disposed: DisposableLike = {
  [DisposableLike_exception]: none,
  [DisposableLike_isDisposed]: true,
  [DisposableLike_add](
    this: DisposableLike,
    disposable: DisposableOrTeardown,
  ): void {
    doDispose(this, disposable);
  },
  [DisposableLike_dispose]: ignore,
};

export interface DisposableRefLike<
  TDisposable extends DisposableLike = DisposableLike,
> extends DisposableLike,
    MutableRefLike<TDisposable> {}

export const disposableRefMixin: <
  TDisposable extends DisposableLike,
>() => Mixin1<MutableRefLike<TDisposable>, TDisposable> = /*@__PURE__*/ (<
  TDisposable extends DisposableLike,
>() => {
  const DisposableRef_private_current = Symbol("DisposableRef_private_current");

  type TProperties = {
    [DisposableRef_private_current]: TDisposable;
  };

  return pipe(
    clazz(
      function DisposableRef(
        instance: Pick<
          DisposableRefLike<TDisposable>,
          typeof MutableRefLike_current
        > &
          Mutable<TProperties>,
        defaultValue: TDisposable,
      ): MutableRefLike<TDisposable> {
        unsafeCast<DisposableLike>(instance);

        instance[DisposableRef_private_current] = defaultValue;
        pipe(instance, add(defaultValue));

        return instance;
      },
      props<TProperties>({
        [DisposableRef_private_current]: none,
      }),
      {
        get [MutableRefLike_current](): TDisposable {
          unsafeCast<TProperties>(this);
          return this[DisposableRef_private_current];
        },
        set [MutableRefLike_current](v: TDisposable) {
          unsafeCast<TProperties & DisposableLike>(this);
          const oldValue = this[DisposableRef_private_current];
          pipe(oldValue, dispose());

          this[DisposableRef_private_current] = v;
          pipe(this, add(v));
        },
      },
    ),
    returns,
  );
})();

export const createDisposableRef: <TDisposable extends DisposableLike>(
  initialValue: TDisposable,
) => DisposableRefLike<TDisposable> = /*@__PURE__*/ (<
  TDisposable extends DisposableLike,
>() => {
  const typedDisposableRefMixin = disposableRefMixin<TDisposable>();

  return createInstanceFactory(
    clazz(
      __extends(disposableMixin, typedDisposableRefMixin),
      function DisposableRef(
        instance: unknown,
        initialValue: TDisposable,
      ): DisposableRefLike<TDisposable> {
        init(disposableMixin, instance);
        init(typedDisposableRefMixin, instance, initialValue);
        return instance;
      },
    ),
  );
})();
