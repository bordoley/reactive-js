import { Array_length } from "../../../__internal__/constants.js";
import {
  SinkLike,
  SinkLike_complete,
  SinkLike_isComplete,
  SinkLike_next,
} from "../../../computations.js";
import { newInstance, none } from "../../../functions.js";
import type * as Runnable from "../../Runnable.js";
import Runnable_lift from "./Runnable.lift.js";

class DecodeWithCharsetSink implements SinkLike<ArrayBuffer> {
  private td: TextDecoder;
  public [SinkLike_isComplete] = false;

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

  [SinkLike_next](next: ArrayBuffer): void {
    const data = this.td.decode(next, {
      stream: true,
    });
    if (data[Array_length] > 0) {
      this.sink[SinkLike_next](data);
    }
  }

  [SinkLike_complete]() {
    if (!this[SinkLike_isComplete]) {
      const data = this.td.decode(newInstance(Uint8Array, []), {
        stream: false,
      });

      this.td = none as unknown as TextDecoder;
      this[SinkLike_isComplete] = true;

      if (data[Array_length] > 0) {
        this.sink[SinkLike_next](data);
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
