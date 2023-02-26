import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mixin2,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Function1, none, returns } from "../../../functions.js";
import { SinkLike, SinkLike_notify } from "../../../rx.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";

export const Sink_mapMixin: <TA, TB>() => Mixin2<
  SinkLike<TA>,
  SinkLike<TB>,
  Function1<TA, TB>,
  Pick<SinkLike<TA>, typeof SinkLike_notify>
> = /*@__PURE__*/ (<TA, TB>() => {
  const MapSinkMixin_mapper = Symbol("MapSinkMixin_mapper");

  type TProperties = {
    readonly [MapSinkMixin_mapper]: Function1<TA, TB>;
  };

  return returns(
    mix(
      include(Disposable_delegatingMixin()),
      function MapSinkMixin(
        instance: Pick<SinkLike<TA>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<TB>,
        mapper: Function1<TA, TB>,
      ): SinkLike<TA> {
        init(Disposable_delegatingMixin(), instance, delegate);
        instance[MapSinkMixin_mapper] = mapper;

        return instance;
      },
      props<TProperties>({
        [MapSinkMixin_mapper]: none,
      }),
      {
        [SinkLike_notify](
          this: TProperties & DelegatingLike<SinkLike<TB>>,
          next: TA,
        ) {
          const mapped = this[MapSinkMixin_mapper](next);
          this[DelegatingLike_delegate][SinkLike_notify](mapped);
        },
      },
    ),
  );
})();

export default Sink_mapMixin;
