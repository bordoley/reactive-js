import { Mixin1, mix, props, unsafeCast } from "../../__internal__/mixins.js";
import {
  Optional,
  SideEffect1,
  bind,
  isFunction,
  none,
  pipe,
} from "../../functions.js";
import {
  DisposableContainerLike_add,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
} from "../../utils.js";
import * as DisposableContainer from "../DisposableContainer.js";

const DelegatingDisposableMixin: Mixin1<DisposableLike, DisposableLike> =
  /*@__PURE__*/ (() => {
    const DelegatingDisposable_delegate = Symbol(
      "DelegatingDisposable_delegate",
    );
    type TProperties = {
      [DelegatingDisposable_delegate]: DisposableLike;
      [DisposableLike_isDisposed]: boolean;
    };

    function onDelegatingDisposableMixinDisposed(this: TProperties) {
      this[DisposableLike_isDisposed] = true;
    }

    return mix(
      function DelegatingDisposableMixin(
        instance: Pick<
          DisposableLike,
          | typeof DisposableLike_error
          | typeof DisposableContainerLike_add
          | typeof DisposableLike_dispose
        > &
          TProperties,
        delegate: DisposableLike,
      ): DisposableLike {
        instance[DelegatingDisposable_delegate] = delegate;

        instance[DelegatingDisposable_delegate] =
          (delegate as unknown as TProperties)[DelegatingDisposable_delegate] ??
          delegate;

        pipe(
          instance,
          DisposableContainer.onDisposed(onDelegatingDisposableMixinDisposed),
        );

        return instance;
      },
      props<TProperties>({
        [DelegatingDisposable_delegate]: none,
        [DisposableLike_isDisposed]: false,
      }),
      {
        get [DisposableLike_error](): Optional<Error> {
          unsafeCast<TProperties>(this);
          return this[DelegatingDisposable_delegate][DisposableLike_error];
        },
        [DisposableContainerLike_add](
          this: TProperties,
          disposable: Disposable | SideEffect1<Optional<Error>>,
        ) {
          this[DelegatingDisposable_delegate][DisposableContainerLike_add](
            // Cast to make the typechecker happy even though its a lie.
            (isFunction(disposable)
              ? bind(disposable, this)
              : disposable) as Disposable,
          );
        },
        [DisposableLike_dispose](this: TProperties, error?: Error) {
          this[DelegatingDisposable_delegate][DisposableLike_dispose](error);
        },
      },
    );
  })();

export default DelegatingDisposableMixin;
