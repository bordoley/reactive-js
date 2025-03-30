import { Mixin1, mix, props, proto } from "../../__internal__/mixins.js";
import {
  Optional,
  SideEffect1,
  bind,
  isFunction,
  none,
  returns,
} from "../../functions.js";
import {
  DisposableContainerLike,
  DisposableContainerLike_add,
  DisposableLike,
} from "../../utils.js";

const DelegatingDisposableContainerMixin: () => Mixin1<
  DisposableContainerLike,
  DisposableContainerLike,
  DisposableContainerLike
> = /*@__PURE__*/ (() => {
  const DelegatingDisposableContainerMixin_delegate = Symbol(
    "DelegatingDisposableContainerMixin_delegate",
  );

  type TProperties = {
    [DelegatingDisposableContainerMixin_delegate]: DisposableContainerLike;
  };

  return returns(
    mix(
      function DelegatingDisposableContainerMixin(
        this: Pick<
          DisposableContainerLike,
          typeof DisposableContainerLike_add
        > &
          TProperties,
        delegate: DisposableContainerLike,
      ): DisposableContainerLike {
        this[DelegatingDisposableContainerMixin_delegate] =
          (delegate as unknown as TProperties)[
            DelegatingDisposableContainerMixin_delegate
          ] ?? delegate;

        return this;
      },
      props<TProperties>({
        [DelegatingDisposableContainerMixin_delegate]: none,
      }),
      proto<DisposableContainerLike>({
        [DisposableContainerLike_add](
          this: TProperties,
          disposable: DisposableLike | SideEffect1<Optional<Error>>,
        ) {
          this[DelegatingDisposableContainerMixin_delegate][
            DisposableContainerLike_add
          ](
            // Cast to make the typechecker happy even though its a lie.
            (isFunction(disposable)
              ? bind(disposable, this)
              : disposable) as DisposableLike,
          );
        },
      }),
    ),
  );
})();

export default DelegatingDisposableContainerMixin;
