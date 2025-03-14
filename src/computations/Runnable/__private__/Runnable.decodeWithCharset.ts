import { Array_length } from "../../../__internal__/constants.js";
import { newInstance, none } from "../../../functions.js";
import {
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
  SinkLike_push,
} from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_lift from "./Runnable.lift.js";

class DecodeWithCharsetSink implements SinkLike<ArrayBuffer> {
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
    this.td = newInstance(TextDecoder, charset, options);
  }

  [SinkLike_push](next: ArrayBuffer): void {
    const data = this.td.decode(next, {
      stream: true,
    });
    if (data[Array_length] > 0) {
      this.sink[SinkLike_push](data);
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
        this.sink[SinkLike_push](data);
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
