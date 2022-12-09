import { Option, isSome, none, pipe, unsafeCast } from "../../functions";
import {
  DisposableLike,
  DisposableLike_add,
  DisposableLike_dispose,
  DisposableLike_exception,
  DisposableLike_isDisposed,
  DisposableOrTeardown,
  Exception,
} from "../../util";
import { dispose } from "../../util/__internal__/DisposableLike/DisposableLike.dispose";
import { getException } from "../../util/__internal__/DisposableLike/DisposableLike.getException";
import { isDisposed } from "../../util/__internal__/DisposableLike/DisposableLike.isDisposed";
import { onDisposed } from "../../util/__internal__/DisposableLike/DisposableLike.onDisposed";
import { Mixin, Mixin1, Mutable, mixin, props } from "../mixins";

export const delegatingDisposableMixin: Mixin1<DisposableLike, DisposableLike> =
  /*@__PURE__*/ (() => {
    const DelegatingDisposable_private_delegate = Symbol(
      "DelegatingDisposable_private_delegate",
    );

    type TProperties = {
      [DisposableLike_isDisposed]: boolean;
      readonly [DelegatingDisposable_private_delegate]: DisposableLike;
    };

    return mixin(
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

export const disposableMixin: Mixin<DisposableLike> = /*@__PURE__*/ (() => {
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

  const Disposable_private_disposables = Symbol(
    "Disposable_private_disposables",
  );

  type TProperties = {
    [DisposableLike_exception]: Option<Exception>;
    [DisposableLike_isDisposed]: boolean;
    readonly [Disposable_private_disposables]: Set<DisposableOrTeardown>;
  };

  return mixin(
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
