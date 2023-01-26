import {
  Mixin2,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Function1, none, pipe, returns } from "../../../functions";
import { SinkLike, SinkLike_notify } from "../../../rx";
import Disposable_delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import { DelegatingSinkLike_delegate } from "../rx.internal";
import Sink_notify from "./Sink.notify";

export const Sink_mapMixin: <TA, TB>() => Mixin2<
  SinkLike<TA>,
  SinkLike<TB>,
  Function1<TA, TB>
> = /*@__PURE__*/ (<TA, TB>() => {
  const MapSink_private_mapper = Symbol("MapSink_private_mapper");

  type TProperties = {
    readonly [DelegatingSinkLike_delegate]: SinkLike<TB>;
    readonly [MapSink_private_mapper]: Function1<TA, TB>;
  };

  return returns(
    mix(
      include(Disposable_delegatingMixin),
      function MapSink(
        instance: Pick<SinkLike<TA>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        delegate: SinkLike<TB>,
        mapper: Function1<TA, TB>,
      ): SinkLike<TA> {
        init(Disposable_delegatingMixin, instance, delegate);

        instance[DelegatingSinkLike_delegate] = delegate;
        instance[MapSink_private_mapper] = mapper;

        return instance;
      },
      props<TProperties>({
        [DelegatingSinkLike_delegate]: none,
        [MapSink_private_mapper]: none,
      }),
      {
        [SinkLike_notify](this: TProperties, next: TA) {
          const mapped = this[MapSink_private_mapper](next);
          pipe(this[DelegatingSinkLike_delegate], Sink_notify(mapped));
        },
      },
    ),
  );
})();

export default Sink_mapMixin;
