import {
  DelegatingLike,
  DelegatingLike_delegate,
  createInstanceFactory,
  delegatingMixin,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { SinkLike, SinkLike_notify } from "../../../rx";
import Disposable_mixin from "../../../util/__internal__/Disposable/Disposable.mixin";

const DelegateSink_create: <T>(delegate: SinkLike<T>) => SinkLike<T> =
  /*@__PURE__*/ (<T>() =>
    createInstanceFactory(
      mix(
        include(Disposable_mixin, delegatingMixin()),
        function DelegatingSink(
          instance: Pick<SinkLike<T>, typeof SinkLike_notify>,
          delegate: SinkLike<T>,
        ): SinkLike<T> {
          init(Disposable_mixin, instance);
          init(delegatingMixin(), instance, delegate);

          return instance;
        },
        props({}),
        {
          [SinkLike_notify](this: DelegatingLike<SinkLike<T>>, v: T) {
            this[DelegatingLike_delegate][SinkLike_notify](v);
          },
        },
      ),
    ))();

export default DelegateSink_create;
