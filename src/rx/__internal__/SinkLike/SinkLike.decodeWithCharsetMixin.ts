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
import DisposableLike__addTo from "../../../util/__internal__/DisposableLike/DisposableLike.addTo";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import DisposableLike__onComplete from "../../../util/__internal__/DisposableLike/DisposableLike.onComplete";
import ReactiveContainerLike__sinkInto from "../ReactiveContainerLike/ReactiveContainerLike.sinkInto";
import { DelegatingSinkLike_delegate } from "../rx.internal";
import SinkLike__notify from "./SinkLike.notify";

const SinkLike__decodeWithCharsetMixin: <
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
    include(DisposableLike__mixin),
    function DecodeWithCharsetSink(
      instance: Pick<SinkLike<ArrayBuffer>, typeof SinkLike_notify> &
        Mutable<TProperties>,
      delegate: SinkLike<string>,
      charset: string,
    ): SinkLike<ArrayBuffer> {
      init(DisposableLike__mixin, instance);

      const textDecoder = newInstance(TextDecoder, charset, { fatal: true });
      instance[DecodeWithCharsetSink_private_textDecoder] = textDecoder;
      instance[DelegatingSinkLike_delegate] = delegate;

      pipe(
        instance,
        DisposableLike__addTo(delegate),
        DisposableLike__onComplete(() => {
          const data = textDecoder.decode();

          if (!isEmpty(data)) {
            pipe([data], fromArray, ReactiveContainerLike__sinkInto(delegate));
          } else {
            pipe(delegate, DisposableLike__dispose());
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
          pipe(this[DelegatingSinkLike_delegate], SinkLike__notify(data));
        }
      },
    },
  );
};

export default SinkLike__decodeWithCharsetMixin;
