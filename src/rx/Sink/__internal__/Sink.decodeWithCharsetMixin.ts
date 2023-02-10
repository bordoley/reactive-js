import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mixin2,
  Mutable,
  delegatingMixin,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { isEmpty, newInstance, none, pipe } from "../../../functions";
import { ReactiveContainerLike, SinkLike, SinkLike_notify } from "../../../rx";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete";
import ReactiveContainer_sinkInto from "../../ReactiveContainer/__internal__/ReactiveContainer.sinkInto";

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
    readonly [DecodeWithCharsetSinkMixin_textDecoder]: TextDecoder;
  };

  return mix(
    include(Disposable_mixin, delegatingMixin()),
    function DecodeWithCharsetSinkMixin(
      instance: Pick<SinkLike<ArrayBuffer>, typeof SinkLike_notify> &
        Mutable<TProperties>,
      delegate: SinkLike<string>,
      charset: string,
    ): SinkLike<ArrayBuffer> {
      init(Disposable_mixin, instance);
      init(delegatingMixin(), instance, delegate);

      const textDecoder = newInstance(TextDecoder, charset, { fatal: true });
      instance[DecodeWithCharsetSinkMixin_textDecoder] = textDecoder;

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
      [DecodeWithCharsetSinkMixin_textDecoder]: none,
    }),
    {
      [SinkLike_notify](
        this: TProperties & DelegatingLike<SinkLike<string>>,
        next: ArrayBuffer,
      ) {
        const data = this[DecodeWithCharsetSinkMixin_textDecoder].decode(next, {
          stream: true,
        });
        if (!isEmpty(data)) {
          this[DelegatingLike_delegate][SinkLike_notify](data);
        }
      },
    },
  );
};

export default Sink_decodeWithCharsetMixin;
