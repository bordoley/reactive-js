import { Mixin1, Mutable, mix, props } from "../../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../../__internal__/util.js";
import { none, pipe, returns } from "../../../functions.js";

const Delegating_mixin: <TDelegate>() => Mixin1<
  DelegatingLike<TDelegate>,
  TDelegate
> = /*@__PURE__*/ (<TDelegate>() => {
  type TProperties = {
    readonly [DelegatingLike_delegate]: TDelegate;
  };

  return pipe(
    mix(
      function DelegatingDisposableMixin(
        instance: Mutable<TProperties>,
        delegate: TDelegate,
      ): DelegatingLike<TDelegate> {
        instance[DelegatingLike_delegate] = delegate;
        return instance;
      },
      props<TProperties>({
        [DelegatingLike_delegate]: none,
      }),
      {},
    ),
    returns,
  );
})();

export default Delegating_mixin;
