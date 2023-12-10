import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  EventListenerLike,
  EventListenerLike_isErrorSafe,
  SinkLike_notify,
} from "../../../events.js";
import { newInstance, none, partial, pipe } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DisposableMixin from "../../../utils/__mixins__/DisposableMixin.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_lift from "./EventSource.lift.js";

const EventSource_decodeWithCharset: EventSource.Signature["decodeWithCharset"] =
  /*@__PURE__*/ (() => {
    const DecodeWithCharsetEventListener_delegate = Symbol(
      "DecodeWithCharsetEventListener_delegate",
    );
    const DecodeWithCharsetEventListener_textDecoder = Symbol(
      "DecodeWithCharsetEventListener_textDecoder",
    );

    type TProperties = {
      [DecodeWithCharsetEventListener_delegate]: EventListenerLike<string>;
      [DecodeWithCharsetEventListener_textDecoder]: TextDecoder;
    };

    const createDecodeWithCharsetEventListener: (
      delegate: EventListenerLike<string>,
      charset: string,
    ) => EventListenerLike<ArrayBuffer> = (() =>
      createInstanceFactory(
        mix(
          include(DisposableMixin),
          function DecodeWithCharsetEventListener(
            instance: Pick<
              EventListenerLike<ArrayBuffer>,
              typeof SinkLike_notify | typeof EventListenerLike_isErrorSafe
            > &
              TProperties,
            delegate: EventListenerLike<string>,
            charset: string,
          ): EventListenerLike<ArrayBuffer> {
            init(DisposableMixin, instance);

            instance[DecodeWithCharsetEventListener_delegate] = delegate;

            const textDecoder = newInstance(TextDecoder, charset, {
              fatal: true,
            });

            instance[DecodeWithCharsetEventListener_textDecoder] = textDecoder;

            pipe(
              instance,
              Disposable.onComplete(() => {
                const data = textDecoder.decode();

                if (data.length > 0) {
                  delegate[SinkLike_notify](data);
                }

                delegate[DisposableLike_dispose]();
              }),
            );
            return instance;
          },
          props<TProperties>({
            [DecodeWithCharsetEventListener_delegate]: none,
            [DecodeWithCharsetEventListener_textDecoder]: none,
          }),
          {
            [EventListenerLike_isErrorSafe]: false,
            [SinkLike_notify](
              this: TProperties & EventListenerLike<ArrayBuffer>,
              next: ArrayBuffer,
            ) {
              const data = this[
                DecodeWithCharsetEventListener_textDecoder
              ].decode(next, {
                stream: true,
              });
              if (data.length > 0) {
                this[DecodeWithCharsetEventListener_delegate][SinkLike_notify](
                  data,
                );
              }
            },
          },
        ),
      ))();

    return (options?: { readonly charset?: string | undefined }) =>
      pipe(
        createDecodeWithCharsetEventListener,
        partial(options?.charset ?? "utf-8"),
        EventSource_lift,
      );
  })();

export default EventSource_decodeWithCharset;
