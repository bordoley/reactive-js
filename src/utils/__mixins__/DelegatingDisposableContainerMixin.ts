import { Mixin1, mix, props } from "../../__internal__/mixins.js";
import {
  Optional,
  SideEffect1,
  bind,
  isFunction,
  none,
} from "../../functions.js";
import {
  DisposableContainerLike,
  DisposableContainerLike_add,
} from "../../utils.js";

const DelegatingDisposableContainerMixin: Mixin1<
  DisposableContainerLike,
  DisposableContainerLike
> = /*@__PURE__*/ (() => {
  const DelegatingDisposableContainer_delegate = Symbol(
    "DelegatingDisposableContainer_delegate",
  );
  type TProperties = {
    [DelegatingDisposableContainer_delegate]: DisposableContainerLike;
  };

  return mix(
    function DelegatingDisposableMixin(
      this: Pick<DisposableContainerLike, typeof DisposableContainerLike_add> &
        TProperties,
      delegate: DisposableContainerLike,
    ): DisposableContainerLike {
      this[DelegatingDisposableContainer_delegate] =
        (delegate as unknown as TProperties)[
          DelegatingDisposableContainer_delegate
        ] ?? delegate;

      return this;
    },
    props<TProperties>({
      [DelegatingDisposableContainer_delegate]: none,
    }),
    {
      [DisposableContainerLike_add](
        this: TProperties,
        disposable: Disposable | SideEffect1<Optional<Error>>,
      ) {
        this[DelegatingDisposableContainer_delegate][
          DisposableContainerLike_add
        ](
          // Cast to make the typechecker happy even though its a lie.
          (isFunction(disposable)
            ? bind(disposable, this)
            : disposable) as Disposable,
        );
      },
    },
  );
})();

export default DelegatingDisposableContainerMixin;
