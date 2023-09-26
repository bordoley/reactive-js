import {
  Mixin2,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Function1, none, returns } from "../../../functions.js";
import { SinkLike, SinkLike_notify } from "../../../rx.js";
import {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
} from "../../../utils.js";
import Disposable_delegatingMixin from "../../../utils/Disposable/__internal__/Disposable.delegatingMixin.js";

const MapSinkMixin_selector = Symbol("MapSinkMixin_selector");

export interface TProperties<TA, TB> {
  [MapSinkMixin_selector]: Function1<TA, TB>;
}

const Sink_mapMixin: <TA, TB>() => Mixin2<
  SinkLike<TA>,
  SinkLike<TB>,
  Function1<TA, TB>,
  unknown,
  Pick<SinkLike<TA>, typeof SinkLike_notify>
> = /*@__PURE__*/ (<TA, TB>() =>
  returns(
    mix(
      include(Disposable_delegatingMixin<SinkLike<TB>>()),
      function MapSinkMixin(
        instance: Pick<SinkLike<TA>, typeof SinkLike_notify> &
          TProperties<TA, TB>,
        delegate: SinkLike<TB>,
        selector: Function1<TA, TB>,
      ): SinkLike<TA> {
        init(Disposable_delegatingMixin<SinkLike<TB>>(), instance, delegate);
        instance[MapSinkMixin_selector] = selector;

        return instance;
      },
      props<TProperties<TA, TB>>({
        [MapSinkMixin_selector]: none,
      }),
      {
        [SinkLike_notify](
          this: TProperties<TA, TB> &
            DelegatingDisposableLike<SinkLike<TB>> &
            SinkLike<TA>,
          next: TA,
        ) {
          const mapped = this[MapSinkMixin_selector](next);
          this[DelegatingDisposableLike_delegate][SinkLike_notify](mapped);
        },
      },
    ),
  ))();

export default Sink_mapMixin;
