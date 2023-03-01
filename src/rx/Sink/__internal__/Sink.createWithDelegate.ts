import {
  DelegatingLike,
  DelegatingLike_delegate,
  createInstanceFactory,
  delegatingMixin,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { ObserverLike_notify, SinkLike } from "../../../rx.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";

const Sink_createWithDelegate: <T>(delegate: SinkLike<T>) => SinkLike<T> =
  /*@__PURE__*/ (<T>() =>
    createInstanceFactory(
      mix(
        include(Disposable_mixin, delegatingMixin()),
        function DelegatingSink(
          instance: Pick<SinkLike<T>, typeof ObserverLike_notify>,
          delegate: SinkLike<T>,
        ): SinkLike<T> {
          init(Disposable_mixin, instance);
          init(delegatingMixin(), instance, delegate);

          return instance;
        },
        props({}),
        {
          [ObserverLike_notify](this: DelegatingLike<SinkLike<T>>, v: T) {
            this[DelegatingLike_delegate][ObserverLike_notify](v);
          },
        },
      ),
    ))();

export default Sink_createWithDelegate;
