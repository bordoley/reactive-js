import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import Disposable_onDisposed from "../../Disposable/__internal__/Disposable.onDisposed.js";
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
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_isCompleted,
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

          pipe(
            instance,
            Disposable_onDisposed(_ => {
              textDecoder.decode();
            }),
          );

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
            if (this[MutableEnumeratorLike_reset]()) {
              return false;
            }

            const delegate = this[DelegatingLike_delegate];
            const decoder = this[DecodeWithCharsetLike_textDecoder];

            try {
              while (delegate[EnumeratorLike_move]()) {
                const data = decoder.decode(delegate[EnumeratorLike_current], {
                  stream: true,
                });

                if (data.length > 0) {
                  this[EnumeratorLike_current] = data;
                  break;
                }
              }

              if (!this[EnumeratorLike_hasCurrent]) {
                const data = decoder.decode();

                if (data.length > 0) {
                  this[EnumeratorLike_current] = data;
                }
              }
            } catch (e) {
              // Catch errors thrown by the text decoder
              this[DisposableLike_dispose](error(e));
              this[MutableEnumeratorLike_reset]();
            }

            this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];

            if (this[EnumeratorLike_isCompleted]) {
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
