import { Array_length } from "../../../__internal__/constants.js";
import { newInstance, none } from "../../../functions.js";
import AbstractDelegatingDisposableSink from "../../../utils/Sink/__internal__/AbstractDelegatingDisposableSink.js";
import {
  EventListenerLike_notify,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_lift from "./Runnable.lift.js";

class DecodeWithCharsetSink
  extends AbstractDelegatingDisposableSink<ArrayBuffer>
  implements SinkLike<ArrayBuffer>
{
  private td: TextDecoder;
  public [SinkLike_isCompleted] = false;

  constructor(
    private readonly sink: SinkLike<string>,
    charset: string,
    options?: {
      fatal?: boolean;
      ignoreBOM?: boolean;
    },
  ) {
    super(sink);
    this.td = newInstance(TextDecoder, charset, options);
  }

  [EventListenerLike_notify](next: ArrayBuffer): void {
    const data = this.td.decode(next, {
      stream: true,
    });
    if (data[Array_length] > 0) {
      this.sink[EventListenerLike_notify](data);
    }
  }

  [SinkLike_complete]() {
    if (!this[SinkLike_isCompleted]) {
      const data = this.td.decode(newInstance(Uint8Array, []), {
        stream: false,
      });

      this.td = none as unknown as TextDecoder;
      this[SinkLike_isCompleted] = true;

      if (data[Array_length] > 0) {
        this.sink[EventListenerLike_notify](data);
      }

      this.sink[SinkLike_complete]();
    }
  }
}

const Runnable_decodeWithCharset: Runnable.Signature["decodeWithCharset"] =
  (options?: {
    readonly charset?: string;
    readonly fatal?: boolean;
    readonly ignoreBOM?: boolean;
  }) =>
    Runnable_lift(
      (sink: SinkLike<string>) =>
        newInstance(
          DecodeWithCharsetSink,
          sink,
          options?.charset ?? "utf-8",
          options,
        ),
      true,
    );

export default Runnable_decodeWithCharset;
