import { Mixin, Mutable, mix, props } from "../../../__internal__/mixins";
import { Optional, isSome, none, pipe } from "../../../functions";
import {
  DisposableLike,
  DisposableLike_add,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  DisposableOrTeardown,
} from "../../../util";
import dispose from "./Disposable.dispose";
import getError from "./Disposable.getError";
import isDisposed from "./Disposable.isDisposed";

const Disposable_mixin: Mixin<DisposableLike> = /*@__PURE__*/ (() => {
  const doDispose = (
    instance: DisposableLike,
    disposable: DisposableOrTeardown,
  ) => {
    const error = getError(instance);
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

  const DisposableMixin_disposables = Symbol("DisposableMixin_disposables");

  type TProperties = {
    [DisposableLike_error]: Optional<Error>;
    [DisposableLike_isDisposed]: boolean;
    readonly [DisposableMixin_disposables]: Set<DisposableOrTeardown>;
  };

  return mix(
    function DisposableMixin(
      instance: Pick<
        DisposableLike,
        typeof DisposableLike_dispose | typeof DisposableLike_add
      > &
        Mutable<TProperties>,
    ): DisposableLike {
      instance[DisposableMixin_disposables] = new Set();

      return instance;
    },
    props<TProperties>({
      [DisposableLike_error]: none,
      [DisposableLike_isDisposed]: false,
      [DisposableMixin_disposables]: none,
    }),
    {
      [DisposableLike_dispose](
        this: TProperties & DisposableLike,
        error?: Error,
      ) {
        if (!isDisposed(this)) {
          this[DisposableLike_error] = error;
          this[DisposableLike_isDisposed] = true;

          const disposables = this[DisposableMixin_disposables];

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
      },
    },
  );
})();

export default Disposable_mixin;
