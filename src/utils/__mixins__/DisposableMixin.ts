import {
  Set,
  Set_add,
  Set_delete,
  Set_has,
} from "../../__internal__/constants.js";
import { Mixin, Mutable, mix, props } from "../../__internal__/mixins.js";
import {
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

const doDispose = (
  instance: DisposableLike,
  disposable: Disposable | SideEffect1<Optional<Error>>,
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
    (disposable as DisposableLike)[DisposableLike_dispose](error);
  }
};

type TProperties = {
  [DisposableLike_error]: Optional<Error>;
  [DisposableLike_isDisposed]: boolean;
  readonly [DisposableMixin_disposables]: Set<
    Disposable | SideEffect1<Optional<Error>>
  >;
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
          disposables[Set_delete](disposable);
          doDispose(this, disposable);
        }
      }
    },
    [DisposableContainerLike_add](
      this: TProperties & DisposableLike,
      disposable: Disposable | SideEffect1<Optional<Error>>,
    ) {
      const disposables = this[DisposableMixin_disposables];

      if ((this as unknown) === disposable) {
        return;
      } else if (this[DisposableLike_isDisposed]) {
        doDispose(this, disposable);
      } else if (!disposables[Set_has](disposable)) {
        disposables[Set_add](disposable);

        if (isDisposableContainer(disposable)) {
          disposable[DisposableContainerLike_add](_ => {
            disposables[Set_delete](disposable);
          });
        }
      }
    },
  },
);

export default DisposableMixin;
