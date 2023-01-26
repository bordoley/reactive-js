import {
  Mixin2,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { isEmpty, newInstance, none, pipe } from "../../../functions";
import { ReactiveContainerLike, SinkLike, SinkLike_notify } from "../../../rx";
import Disposable$addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable$mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Disposable$onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import ReactiveContainer$sinkInto from "../ReactiveContainer/ReactiveContainer.sinkInto";
import { DelegatingSinkLike_delegate } from "../rx.internal";
import Sink$notify from "./Sink.notify";

const Sink$decodeWithCharsetMixin: <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<string>,
>(
  fromArray: (v: readonly string[]) => C,
) => Mixin2<SinkLike<ArrayBuffer>, SinkLike<string>, string> = <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<string>,
>(
  fromArray: (v: readonly string[]) => C,
) => {
  const DecodeWithCharsetSink_private_textDecoder = Symbol(
    "DecodeWithCharsetSink_private_textDecoder",
  );

  type TProperties = {
    readonly [DelegatingSinkLike_delegate]: SinkLike<string>;
    readonly [DecodeWithCharsetSink_private_textDecoder]: TextDecoder;
  };

  return mix(
    include(Disposable$mixin),
    function DecodeWithCharsetSink(
      instance: Pick<SinkLike<ArrayBuffer>, typeof SinkLike_notify> &
        Mutable<TProperties>,
      delegate: SinkLike<string>,
      charset: string,
    ): SinkLike<ArrayBuffer> {
      init(Disposable$mixin, instance);

      const textDecoder = newInstance(TextDecoder, charset, { fatal: true });
      instance[DecodeWithCharsetSink_private_textDecoder] = textDecoder;
      instance[DelegatingSinkLike_delegate] = delegate;

      pipe(
        instance,
        Disposable$addTo(delegate),
        Disposable$onComplete(() => {
          const data = textDecoder.decode();

          if (!isEmpty(data)) {
            pipe([data], fromArray, ReactiveContainer$sinkInto(delegate));
          } else {
            pipe(delegate, Disposable$dispose());
          }
        }),
      );

      return instance;
    },
    props<TProperties>({
      [DelegatingSinkLike_delegate]: none,
      [DecodeWithCharsetSink_private_textDecoder]: none,
    }),
    {
      [SinkLike_notify](this: TProperties, next: ArrayBuffer) {
        const data = this[DecodeWithCharsetSink_private_textDecoder].decode(
          next,
          { stream: true },
        );
        if (!isEmpty(data)) {
          pipe(this[DelegatingSinkLike_delegate], Sink$notify(data));
        }
      },
    },
  );
};

export default Sink$decodeWithCharsetMixin;
