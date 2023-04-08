import {
  Mixin1,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { DelegatingHotObservableMixin_delegate } from "../../../__internal__/symbols.js";
import { returns } from "../../../functions.js";
import { MulticastObservableLike } from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import HotObservable_delegatingMixin from "../../HotObservable/__internal__/HotObservable.delegatingMixin.js";

type TReturn<
  T,
  TMulticastObservable extends MulticastObservableLike<T>,
> = MulticastObservableLike<T> & {
  [DelegatingHotObservableMixin_delegate]: TMulticastObservable;
};

const MulticastObservable_delegatingMixin: <
  T,
  TMulticastObservable extends MulticastObservableLike<T> = MulticastObservableLike<T>,
>() => Mixin1<TReturn<T, TMulticastObservable>, TMulticastObservable> =
  /*@__PURE__*/ (<
    T,
    TMulticastObservable extends MulticastObservableLike<T> = MulticastObservableLike<T>,
  >() => {
    return returns(
      mix(
        include(HotObservable_delegatingMixin(), Disposable_delegatingMixin()),
        function DelegatingMulticastObservableMixin(
          instance: unknown,
          delegate: TMulticastObservable,
        ): TReturn<T, TMulticastObservable> {
          init(Disposable_delegatingMixin(), instance, delegate);
          init(
            HotObservable_delegatingMixin<T, TMulticastObservable>(),
            instance,
            delegate,
          );

          return instance;
        },
        props({}),
        {},
      ),
    );
  })();

export default MulticastObservable_delegatingMixin;
