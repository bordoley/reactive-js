import { Option, ignore, isSome, none, pipe, returns } from "../../functions";
import {
  DisposableLike,
  DisposableLike_add,
  DisposableLike_dispose,
  DisposableLike_exception,
  DisposableLike_isDisposed,
  DisposableOrTeardown,
  Exception,
  add,
  dispose,
  getException,
  isDisposed,
  onDisposed,
} from "./DisposableLikeInternal";
import { MutableRefLike, MutableRefLike_current } from "./MutableRefLike";
import {
  Class,
  Class1,
  UnknownObject,
  clazz,
  createObjectFactory,
} from "./Object";

export const delegatingDisposableMixin: Class1<
  {
    readonly [DisposableLike_isDisposed]: boolean;
  },
  {
    get [DisposableLike_exception](): Option<Exception>;
    [DisposableLike_add](
      disposable: DisposableOrTeardown,
      ignoreChildErrors: boolean,
    ): void;
    [DisposableLike_dispose](error?: Exception): void;
  },
  DisposableLike
> = /*@__PURE__*/ (() => {
  const DelegatingDisposable_private_delegate = Symbol(
    "DelegatingDisposable_private_delegate",
  );

  type TProperties = {
    [DisposableLike_isDisposed]: boolean;
    [DelegatingDisposable_private_delegate]: DisposableLike;
  };

  return clazz(
    function DelegatingDisposableMixin(
      this: TProperties,
      delegate: DisposableLike,
    ) {
      this[DelegatingDisposable_private_delegate] = delegate;

      pipe(
        delegate,
        onDisposed(_ => {
          this[DisposableLike_isDisposed] = true;
        }),
      );
    },
    {
      [DelegatingDisposable_private_delegate]: none,
      [DisposableLike_isDisposed]: false,
    },
    {
      get [DisposableLike_exception](): Option<Exception> {
        const self = this as unknown as TProperties;

        const delegate = self[DelegatingDisposable_private_delegate];
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

const doDispose = (self: DisposableLike, disposable: DisposableOrTeardown) => {
  const error = getException(self);
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

export const disposableMixin: Class<
  {
    [DisposableLike_exception]: Option<Exception>;
    [DisposableLike_isDisposed]: boolean;
  },
  {
    [DisposableLike_dispose](error?: Exception): void;
    [DisposableLike_add](
      disposable: DisposableOrTeardown,
      ignoreChildErrors: boolean,
    ): void;
  }
> = /*@__PURE__*/ (() => {
  const Disposable_private_disposables = Symbol(
    "Disposable_private_disposables",
  );

  type TProperties = {
    [DisposableLike_exception]: Option<Exception>;
    [DisposableLike_isDisposed]: boolean;
    [Disposable_private_disposables]: Set<DisposableOrTeardown>;
  };

  return clazz(
    function DisposableMixin(this: TProperties) {
      this[Disposable_private_disposables] = new Set();
    },
    {
      [DisposableLike_exception]: none,
      [DisposableLike_isDisposed]: false,
      [Disposable_private_disposables]: none,
    },
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

export const createDisposable = /*@__PURE__*/ pipe(
  disposableMixin,
  createObjectFactory<DisposableLike>(),
);

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
>() => Class1<UnknownObject, MutableRefLike<TDisposable>, TDisposable> =
  /*@__PURE__*/ (<TDisposable extends DisposableLike>() => {
    const DisposableRef_private_current = Symbol(
      "DisposableRef_private_current",
    );

    type TProperties = {
      [DisposableRef_private_current]: TDisposable;
    };

    return pipe(
      clazz(
        function DisposableRef(
          this: TProperties & DisposableLike,
          defaultValue: TDisposable,
        ) {
          this[DisposableRef_private_current] = defaultValue;
          pipe(this, add(defaultValue));
        },
        {
          [DisposableRef_private_current]: none,
        },
        {
          get [MutableRefLike_current](): TDisposable {
            const self = this as unknown as TProperties;
            return self[DisposableRef_private_current];
          },
          set [MutableRefLike_current](v: TDisposable) {
            const self = this as unknown as TProperties & DisposableLike;
            const oldValue = self[DisposableRef_private_current];
            pipe(oldValue, dispose());

            self[DisposableRef_private_current] = v;
            pipe(self, add(v));
          },
        },
      ),
      returns,
    );
  })();
