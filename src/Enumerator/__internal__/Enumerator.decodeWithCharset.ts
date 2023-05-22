import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  DecodeWithCharsetLike,
  DecodeWithCharsetLike_textDecoder,
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import { error, newInstance, none, pipe } from "../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../types.js";
import MutableEnumerator_mixin, {
  MutableEnumeratorLike,
  MutableEnumeratorLike_reset,
} from "./MutableEnumerator.mixin.js";

const Enumerator_decodeWithCharset: (
  charset: string,
) => (delegate: EnumeratorLike<ArrayBuffer>) => EnumeratorLike<string> =
  /*@__PURE__*/ (() => {
    const createDecodeWithCharsetEnumerator = createInstanceFactory(
      mix(
        include(
          MutableEnumerator_mixin(),
          Delegating_mixin(),
          Disposable_mixin,
        ),
        function DecodeWithCharsetEnumerator(
          instance: Pick<EnumeratorLike<string>, typeof EnumeratorLike_move> &
            DecodeWithCharsetLike,
          delegate: EnumeratorLike<ArrayBuffer>,
          charset: string,
        ): EnumeratorLike<string> {
          init(MutableEnumerator_mixin<string>(), instance);
          init(Delegating_mixin(), instance, delegate);
          init(Disposable_mixin, instance);

          pipe(instance, Disposable_add(delegate));

          const textDecoder = newInstance(TextDecoder, charset, {
            fatal: true,
          });
          instance[DecodeWithCharsetLike_textDecoder] = textDecoder;

          return instance;
        },
        props<DecodeWithCharsetLike>({
          [DecodeWithCharsetLike_textDecoder]: none,
        }),
        {
          [EnumeratorLike_move](
            this: DecodeWithCharsetLike &
              MutableEnumeratorLike<string> &
              DelegatingLike<EnumeratorLike<ArrayBuffer>>,
          ): boolean {
            this[MutableEnumeratorLike_reset]();

            const delegate = this[DelegatingLike_delegate];

            try {
              while (delegate[EnumeratorLike_move]()) {
                const data = this[DecodeWithCharsetLike_textDecoder].decode(
                  delegate[EnumeratorLike_current],
                  {
                    stream: true,
                  },
                );

                if (data.length > 0) {
                  this[EnumeratorLike_current] = data;
                  break;
                }
              }
            } catch (e) {
              // Catch errors thrown by the text decoder
              this[DisposableLike_dispose](error(e));
              this[MutableEnumeratorLike_reset]();
            }

            if (delegate[DisposableLike_isDisposed]) {
              this[DisposableLike_dispose]();
            }

            return this[EnumeratorLike_hasCurrent];
          },
        },
      ),
    );

    return (charset: string) => (delegate: EnumeratorLike<ArrayBuffer>) =>
      createDecodeWithCharsetEnumerator(delegate, charset);
  })();

export default Enumerator_decodeWithCharset;
