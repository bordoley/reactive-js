import {
  Option,
  ignore,
  isNone,
  isSome,
  none,
  pipe,
  returns,
} from "../../functions";
import {
  DisposableLike,
  DisposableLike_add,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  DisposableOrTeardown,
  Error,
  add,
  dispose,
  getError,
  isDisposed,
  onDisposed,
} from "./DisposableLikeInternal";
import { MutableRefLike, MutableRefLike_current } from "./MutableRefLike";
import {
  Object_init,
  Object_properties,
  PropertyTypeOf,
  createObjectFactory,
} from "./Object";

export const delegatingDisposableMixin: {
  [Object_properties]: {
    readonly [DisposableLike_isDisposed]: boolean;
  };
  [Object_init](this: unknown, delegate: DisposableLike): void;
  get [DisposableLike_error](): Option<Error>;
  [DisposableLike_add](
    disposable: DisposableOrTeardown,
    ignoreChildErrors: boolean,
  ): void;
  [DisposableLike_dispose](error?: Error): void;
} = /*@__PURE__*/ (() => {
  const DelegatingDisposable_private_delegate = Symbol(
    "DelegatingDisposable_private_delegate",
  );

  type TProperties = {
    [DisposableLike_isDisposed]: boolean;
    [DelegatingDisposable_private_delegate]: DisposableLike;
  };

  return {
    [Object_properties]: {
      [DelegatingDisposable_private_delegate]: none,
      [DisposableLike_isDisposed]: false,
    },
    [Object_init](this: TProperties, delegate: DisposableLike) {
      this[DelegatingDisposable_private_delegate] = delegate;

      pipe(
        delegate,
        onDisposed(_ => {
          this[DisposableLike_isDisposed] = true;
        }),
      );
    },
    get [DisposableLike_error](): Option<Error> {
      const self = this as unknown as TProperties;

      const delegate = self[DelegatingDisposable_private_delegate];
      return delegate[DisposableLike_error];
    },
    [DisposableLike_add](
      this: TProperties,
      disposable: DisposableOrTeardown,
      ignoreChildErrors: boolean,
    ) {
      const delegate = this[DelegatingDisposable_private_delegate];
      delegate[DisposableLike_add](disposable, ignoreChildErrors);
    },
    [DisposableLike_dispose](this: TProperties, error?: Error) {
      pipe(this[DelegatingDisposable_private_delegate], dispose(error));
    },
  };
})();

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

export const disposableMixin: {
  [Object_properties]: {
    [DisposableLike_error]: Option<Error>;
    [DisposableLike_isDisposed]: boolean;
  };
  [Object_init](this: {
    [DisposableLike_error]: Option<Error>;
    [DisposableLike_isDisposed]: boolean;
  }): void;
  [DisposableLike_dispose](error?: Error): void;
  [DisposableLike_add](
    disposable: DisposableOrTeardown,
    ignoreChildErrors: boolean,
  ): void;
} = /*@__PURE__*/ (() => {
  const Disposable_private_disposables = Symbol(
    "Disposable_private_disposables",
  );

  type TProperties = {
    [DisposableLike_error]: Option<Error>;
    [DisposableLike_isDisposed]: boolean;
    [Disposable_private_disposables]: Set<DisposableOrTeardown>;
  };

  return {
    [Object_properties]: {
      [DisposableLike_error]: none,
      [DisposableLike_isDisposed]: false,
      [Disposable_private_disposables]: none,
    },
    [Object_init](this: TProperties) {
      this[Disposable_private_disposables] = new Set();
    },
    [DisposableLike_dispose](
      this: TProperties & DisposableLike,
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
  };
})();

export const createDisposable = /*@__PURE__*/ pipe(
  disposableMixin,
  createObjectFactory<
    DisposableLike,
    PropertyTypeOf<[typeof disposableMixin]>
  >(),
);

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

export interface DisposableRefLike<
  TDisposable extends DisposableLike = DisposableLike,
> extends DisposableLike,
    MutableRefLike<TDisposable> {}

export const disposableRefMixin: <TDisposable extends DisposableLike>() => {
  [Object_properties]: unknown;
  [Object_init](this: unknown, defaultValue: TDisposable): void;
} & MutableRefLike<TDisposable> = /*@__PURE__*/ (<
  TDisposable extends DisposableLike,
>() => {
  const DisposableRef_private_current = Symbol("DisposableRef_private_current");

  type TProperties = {
    [DisposableRef_private_current]: TDisposable;
  };

  return pipe(
    {
      [Object_properties]: {
        [DisposableRef_private_current]: none,
      },
      [Object_init](
        this: TProperties & DisposableLike,
        defaultValue: TDisposable,
      ) {
        this[DisposableRef_private_current] = defaultValue;
        pipe(this, add(defaultValue));
      },
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
    returns,
  );
})();
