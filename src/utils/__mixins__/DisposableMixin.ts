import {
  Set,
  Set_add,
  Set_delete,
  Set_has,
} from "../../__internal__/constants.js";
import { Mixin, mix, props } from "../../__internal__/mixins.js";
import {
  Method1,
  Optional,
  SideEffect1,
  isFunction,
  isSome,
  newInstance,
  none,
} from "../../functions.js";
import {
  DisposableContainerLike,
  DisposableContainerLike_add,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
} from "../../utils.js";

const DisposableMixin_disposables = Symbol("DisposableMixin_disposables");
const DisposableMixin_onChildDisposed = Symbol(
  "DisposableMixin_onChildDisposed",
);

const doDispose = (
  instance: Disposable,
  disposable: Disposable | SideEffect1<Optional<Error>>,
  error?: Error,
) => {
  if (isFunction(disposable)) {
    try {
      disposable.call(instance, error);
    } catch (_) {
      /* Proactively catch Errors thrown in teardown logic. Teardown functions
       * shouldn't throw, so this is to prevent unexpected Errors.
       */
    }
  } else {
    (disposable as DisposableLike)[DisposableLike_dispose](error);
  }
};

type TProperties = {
  [DisposableMixin_onChildDisposed]: Optional<
    Method1<DisposableLike, Optional<Error>>
  >;
  [DisposableLike_error]: Optional<Error>;
  [DisposableLike_isDisposed]: boolean;
  [DisposableMixin_disposables]:
    | Disposable
    | SideEffect1<Optional<Error>>
    | Set<Disposable | SideEffect1<Optional<Error>>>
    | typeof none;
};

const isDisposableContainer = (
  disposable: Disposable | SideEffect1<Optional<Error>>,
): disposable is DisposableContainerLike & Disposable => {
  return (
    !isFunction(disposable) &&
    isSome((disposable as any)[DisposableContainerLike_add])
  );
};

const DisposableMixin: Mixin<DisposableLike> = /*@__PURE__*/ mix(
  function DisposableMixin(
    instance: Pick<
      DisposableLike,
      typeof DisposableLike_dispose | typeof DisposableContainerLike_add
    > &
      TProperties,
  ): DisposableLike {
    return instance;
  },
  props<TProperties>({
    [DisposableMixin_onChildDisposed]: none,
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
        this[DisposableMixin_disposables] = none;
        this[DisposableMixin_onChildDisposed] = none;

        if (disposables instanceof Set) {
          for (const disposable of disposables) {
            disposables[Set_delete](disposable);
            doDispose(this, disposable, error);
          }
        } else if (isSome(disposables)) {
          doDispose(this, disposables, error);
        }
      }
    },
    [DisposableContainerLike_add](
      this: TProperties & DisposableLike,
      disposable: Disposable | SideEffect1<Optional<Error>>,
    ) {
      const disposables = this[DisposableMixin_disposables];

      const containsDisposable =
        (disposables instanceof Set && disposables[Set_has](disposable)) ||
        disposables === disposable;

      if ((this as unknown) === disposable || containsDisposable) {
        return;
      } else if (this[DisposableLike_isDisposed]) {
        doDispose(this, disposable, this[DisposableLike_error]);
        return;
      }

      if (disposables instanceof Set) {
        disposables[Set_add](disposable);
      } else if (isSome(disposables)) {
        const newDisposables = (this[DisposableMixin_disposables] =
          newInstance<Set<Disposable | SideEffect1<Optional<Error>>>>(Set));
        newDisposables[Set_add](disposables);
        newDisposables[Set_add](disposable);
      } else {
        this[DisposableMixin_disposables] = disposable;
      }

      if (isDisposableContainer(disposable)) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const instance = this;
        this[DisposableMixin_onChildDisposed] =
          this[DisposableMixin_onChildDisposed] ??
          function disposableMixinOnChildDisposed(this: DisposableLike) {
            const disposables = instance[DisposableMixin_disposables];
            const disposablesIsSet = disposables instanceof Set;

            if (disposables === this) {
              instance[DisposableMixin_disposables] = none;
            } else if (disposablesIsSet) {
              disposables[Set_delete](this);
            }

            if (disposablesIsSet && disposables.size === 1) {
              instance[DisposableMixin_disposables] = disposables
                .values()
                .next().value;
            }
          };

        disposable[DisposableContainerLike_add](
          this[DisposableMixin_onChildDisposed],
        );
      }
    },
  },
);

export default DisposableMixin;
