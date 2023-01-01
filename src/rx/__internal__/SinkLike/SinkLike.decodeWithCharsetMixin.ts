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
import { addTo, dispose, onComplete } from "../../../util/DisposableLike";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import { sinkInto } from "../../ReactiveContainerLike";
import { notify } from "../../SinkLike";
import { DelegatingSinkLike_delegate } from "../rx.internal";

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
        addTo(delegate),
        onComplete(() => {
          const data = textDecoder.decode();

          if (!isEmpty(data)) {
            pipe([data], fromArray, sinkInto(delegate));
          } else {
            pipe(delegate, dispose());
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
          pipe(this[DelegatingSinkLike_delegate], notify(data));
        }
      },
    },
  );
};

export default SinkLike__decodeWithCharsetMixin;
