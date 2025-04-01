import { Mixin1, mix, props, proto } from "../../__internal__/mixins.js";
import {
  BroadcasterLike,
  ComputationLike_isDeferred,
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ReactiveSourceLike_subscribe,
} from "../../computations.js";
import { none, returns } from "../../functions.js";
import { DisposableContainerLike, SinkLike } from "../../utils.js";

type TReturn<T> = Omit<BroadcasterLike<T>, keyof DisposableContainerLike>;

const DelegatingBroadcasterMixin: <T>() => Mixin1<
  TReturn<T>,
  BroadcasterLike<T>,
  TReturn<T>
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
        this: TReturn<T> & TProperties,
        delegate: TBroadcasterDelegate,
      ): TReturn<T> {
        this[DelegatingBroadcasterMixin_delegate] = delegate;

        return this;
      },
      props<TProperties>({
        [DelegatingBroadcasterMixin_delegate]: none,
      }),
      proto<TReturn<T>>({
        [ComputationLike_isDeferred]: false as const,
        [ComputationLike_isPure]: true as const,
        [ComputationLike_isSynchronous]: false as const,

        [ReactiveSourceLike_subscribe](this: TProperties, sink: SinkLike<T>) {
          this[DelegatingBroadcasterMixin_delegate][
            ReactiveSourceLike_subscribe
          ](sink);
        },
      }),
    ),
  );
})();

export default DelegatingBroadcasterMixin;
