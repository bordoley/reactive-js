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
  MappingLike,
  MappingLike_selector,
} from "../../__internal__/types.js";
import { Function1, none, returns } from "../../functions.js";
import { SinkLike, SinkLike_notify } from "../../types.js";

const Sink_mapMixin: <TA, TB>() => Mixin2<
  SinkLike<TA>,
  SinkLike<TB>,
  Function1<TA, TB>,
  unknown,
  Pick<SinkLike<TA>, typeof SinkLike_notify>
> = /*@__PURE__*/ (<TA, TB>() =>
  returns(
    mix(
      include(Disposable_delegatingMixin, Delegating_mixin()),
      function MapEventListener(
        instance: Pick<SinkLike<TA>, typeof SinkLike_notify> &
          MappingLike<TA, TB>,
        delegate: SinkLike<TB>,
        selector: Function1<TA, TB>,
      ): SinkLike<TA> {
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_delegatingMixin, instance, delegate);
        instance[MappingLike_selector] = selector;

        return instance;
      },
      props<MappingLike<TA, TB>>({
        [MappingLike_selector]: none,
      }),
      {
        [SinkLike_notify](
          this: MappingLike<TA, TB> &
            DelegatingLike<SinkLike<TB>> &
            SinkLike<TA>,
          next: TA,
        ) {
          const mapped = this[MappingLike_selector](next);
          this[DelegatingLike_delegate][SinkLike_notify](mapped);
        },
      },
    ),
  ))();

export default Sink_mapMixin;
