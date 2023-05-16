import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_delegatingMixin from "../../Disposable/__internal__/Disposable.delegatingMixin.js";
import {
  Mixin2,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  DelegatingLike,
  DelegatingLike_delegate,
  PredicatedLike,
  PredicatedLike_predicate,
} from "../../__internal__/types.js";
import { Predicate, none, returns } from "../../functions.js";
import { SinkLike, SinkLike_notify } from "../../types.js";

const Sink_keepMixin: <T>() => Mixin2<
  SinkLike<T>,
  SinkLike<T>,
  Predicate<T>,
  unknown,
  Pick<SinkLike<T>, typeof SinkLike_notify>
> = /*@__PURE__*/ (<T>() =>
  returns(
    mix(
      include(Disposable_delegatingMixin, Delegating_mixin()),
      function KeepSink(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> & PredicatedLike<T>,
        delegate: SinkLike<T>,
        predicate: Predicate<T>,
      ): SinkLike<T> {
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_delegatingMixin, instance, delegate);
        instance[PredicatedLike_predicate] = predicate;

        return instance;
      },
      props<PredicatedLike<T>>({
        [PredicatedLike_predicate]: none,
      }),
      {
        [SinkLike_notify](
          this: PredicatedLike<T> & DelegatingLike<SinkLike<T>> & SinkLike<T>,
          next: T,
        ) {
          if (this[PredicatedLike_predicate](next)) {
            this[DelegatingLike_delegate][SinkLike_notify](next);
          }
        },
      },
    ),
  ))();

export default Sink_keepMixin;
