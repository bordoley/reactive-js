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
import Disposable_addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Disposable_onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import ReactiveContainer_sinkInto from "../ReactiveContainer/ReactiveContainer.sinkInto";
import { DelegatingSinkLike_delegate } from "../rx.internal";

const Sink_decodeWithCharsetMixin: <
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
  const DecodeWithCharsetSinkMixin_textDecoder = Symbol(
    "DecodeWithCharsetSinkMixin_textDecoder",
  );

  type TProperties = {
    readonly [DelegatingSinkLike_delegate]: SinkLike<string>;
    readonly [DecodeWithCharsetSinkMixin_textDecoder]: TextDecoder;
  };

  return mix(
    include(Disposable_mixin),
    function DecodeWithCharsetSinkMixin(
      instance: Pick<SinkLike<ArrayBuffer>, typeof SinkLike_notify> &
        Mutable<TProperties>,
      delegate: SinkLike<string>,
      charset: string,
    ): SinkLike<ArrayBuffer> {
      init(Disposable_mixin, instance);

      const textDecoder = newInstance(TextDecoder, charset, { fatal: true });
      instance[DecodeWithCharsetSinkMixin_textDecoder] = textDecoder;
      instance[DelegatingSinkLike_delegate] = delegate;

      pipe(
        instance,
        Disposable_addTo(delegate),
        Disposable_onComplete(() => {
          const data = textDecoder.decode();

          if (!isEmpty(data)) {
            pipe([data], fromArray, ReactiveContainer_sinkInto(delegate));
          } else {
            pipe(delegate, Disposable_dispose());
          }
        }),
      );

      return instance;
    },
    props<TProperties>({
      [DelegatingSinkLike_delegate]: none,
      [DecodeWithCharsetSinkMixin_textDecoder]: none,
    }),
    {
      [SinkLike_notify](this: TProperties, next: ArrayBuffer) {
        const data = this[DecodeWithCharsetSinkMixin_textDecoder].decode(next, {
          stream: true,
        });
        if (!isEmpty(data)) {
          this[DelegatingSinkLike_delegate][SinkLike_notify](data);
        }
      },
    },
  );
};

export default Sink_decodeWithCharsetMixin;
