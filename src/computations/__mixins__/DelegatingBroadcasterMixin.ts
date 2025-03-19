import { Mixin1, mix, props } from "../../__internal__/mixins.js";
import {
  BroadcasterLike,
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  SourceLike_subscribe,
} from "../../computations.js";
import { none, returns } from "../../functions.js";
import { DisposableContainerLike, SinkLike } from "../../utils.js";

const DelegatingBroadcasterMixin: <T>() => Mixin1<
  Omit<BroadcasterLike<T>, keyof DisposableContainerLike>,
  BroadcasterLike<T>
> = /*@__PURE__*/ (<
  T,
  TBroadcasterDelegate extends BroadcasterLike<T> = BroadcasterLike<T>,
>() => {
  const DelegatingBroadcasterMixin_delegate = Symbol(
    "DelegatingBroadcasterMixin_delegate",
  );
  type TProperties = {
    [DelegatingBroadcasterMixin_delegate]: TBroadcasterDelegate;
  };
  return returns(
    mix(
      function DelegatingBroadcasterMixin(
        this: Omit<BroadcasterLike<T>, keyof DisposableContainerLike> &
          TProperties,
        delegate: TBroadcasterDelegate,
      ): Omit<BroadcasterLike<T>, keyof DisposableContainerLike> {
        this[DelegatingBroadcasterMixin_delegate] = delegate;

        return this;
      },
      props<TProperties>({
        [DelegatingBroadcasterMixin_delegate]: none,
      }),
      {
        [ComputationLike_isDeferred]: false as const,
        [ComputationLike_isPure]: true as const,
        [ComputationLike_isSynchronous]: false as const,

        [SourceLike_subscribe](this: TProperties, sink: SinkLike<T>) {
          this[DelegatingBroadcasterMixin_delegate][SourceLike_subscribe](sink);
        },
      },
    ),
  );
})();

export default DelegatingBroadcasterMixin;
