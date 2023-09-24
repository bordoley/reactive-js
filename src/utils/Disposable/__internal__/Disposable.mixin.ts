import { Mixin, Mutable, mix, props } from "../../../__internal__/mixins.js";
import {
  Optional,
  SideEffect1,
  isFunction,
  newInstance,
  none,
} from "../../../functions.js";
import {
  DisposableLike,
  DisposableLike_add,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
} from "../../../utils.js";

const DisposableMixin_disposables = Symbol("DisposableMixin_disposables");

const doDispose = (
  instance: DisposableLike,
  disposable: DisposableLike | SideEffect1<Optional<Error>>,
) => {
  const error = instance[DisposableLike_error];
  if (isFunction(disposable)) {
    try {
      disposable(error);
    } catch (_) {
      /* Proactively catch Errors thrown in teardown logic. Teardown functions
       * shouldn't throw, so this is to prevent unexpected Errors.
       */
    }
  } else {
    disposable[DisposableLike_dispose](error);
  }
};

type TProperties = {
  [DisposableLike_error]: Optional<Error>;
  [DisposableLike_isDisposed]: boolean;
  readonly [DisposableMixin_disposables]: Set<
    DisposableLike | SideEffect1<Optional<Error>>
  >;
};

const Disposable_mixin: Mixin<DisposableLike> = /*@__PURE__*/ mix(
  function DisposableMixin(
    instance: Pick<
      DisposableLike,
      typeof DisposableLike_dispose | typeof DisposableLike_add
    > &
      Mutable<TProperties>,
  ): DisposableLike {
    instance[DisposableMixin_disposables] =
      newInstance<Set<DisposableLike | SideEffect1<Optional<Error>>>>(Set);

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
      if (!this[DisposableLike_isDisposed]) {
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
      disposable: DisposableLike | SideEffect1<Optional<Error>>,
    ) {
      const disposables = this[DisposableMixin_disposables];

      if ((this as unknown) === disposable) {
        return;
      } else if (this[DisposableLike_isDisposed]) {
        doDispose(this, disposable);
      } else if (!disposables.has(disposable)) {
        disposables.add(disposable);

        if (!isFunction(disposable)) {
          disposable[DisposableLike_add](_ => {
            disposables.delete(disposable);
          });
        }
      }
    },
  },
);

export default Disposable_mixin;
