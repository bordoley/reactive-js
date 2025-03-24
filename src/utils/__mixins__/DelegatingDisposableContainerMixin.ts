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
} from "../../utils.js";

export const DelegatingDisposableContainerLike_delegate = Symbol(
  "DelegatingDisposableContainerLike_delegate",
);

export interface DelegatingDisposableContainerLike<
  TDisposableContainer extends DisposableContainerLike,
> extends DisposableContainerLike {
  readonly [DelegatingDisposableContainerLike_delegate]: TDisposableContainer;
}

const DelegatingDisposableContainerMixin: <
  TDisposableContainer extends DisposableContainerLike,
>() => Mixin1<
  DelegatingDisposableContainerLike<TDisposableContainer>,
  TDisposableContainer,
  DisposableContainerLike
> = /*@__PURE__*/ (<TDisposableContainer extends DisposableContainerLike>() => {
  type TProperties = {
    [DelegatingDisposableContainerLike_delegate]: TDisposableContainer;
  };

  return returns(
    mix(
      function DelegatingDisposableMixin(
        this: Pick<
          DisposableContainerLike,
          typeof DisposableContainerLike_add
        > &
          TProperties,
        delegate: DisposableContainerLike,
      ): DelegatingDisposableContainerLike<TDisposableContainer> {
        this[DelegatingDisposableContainerLike_delegate] =
          (delegate as unknown as TProperties)[
            DelegatingDisposableContainerLike_delegate
          ] ?? delegate;

        return this;
      },
      props<TProperties>({
        [DelegatingDisposableContainerLike_delegate]: none,
      }),
      proto<DisposableContainerLike>({
        [DisposableContainerLike_add](
          this: TProperties,
          disposable: Disposable | SideEffect1<Optional<Error>>,
        ) {
          this[DelegatingDisposableContainerLike_delegate][
            DisposableContainerLike_add
          ](
            // Cast to make the typechecker happy even though its a lie.
            (isFunction(disposable)
              ? bind(disposable, this)
              : disposable) as Disposable,
          );
        },
      }),
    ),
  );
})();

export default DelegatingDisposableContainerMixin;
