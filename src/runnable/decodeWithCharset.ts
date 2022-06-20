import {
  addOnDisposedWithError,
  addOnDisposedWithoutErrorTeardown,
} from "../disposable";
import { pipe } from "../functions";
import { RunnableOperator } from "../runnable";
import { SinkLike, notifyDecodeWithCharset } from "../sink";
import { lift } from "./lift";
import { AbstractDelegatingSink, sink } from "./sinks";
import { fromValue } from "../container";
import { fromArrayT } from "./fromArray";

class DecodeWithCharsetSink extends AbstractDelegatingSink<
  ArrayBuffer,
  string
> {
  constructor(delegate: SinkLike<string>, readonly textDecoder: TextDecoder) {
    super(delegate);
  }
}
DecodeWithCharsetSink.prototype.notify = notifyDecodeWithCharset;

export const decodeWithCharset = (
  charset = "utf-8",
  options?: TextDecoderOptions,
): RunnableOperator<ArrayBuffer, string> => {
  const operator = (delegate: SinkLike<string>) => {
    const parent = new DecodeWithCharsetSink(
      delegate,
      new TextDecoder(charset, options),
    );

    addOnDisposedWithError(parent, delegate);
    addOnDisposedWithoutErrorTeardown(
      parent,
      function (this: DecodeWithCharsetSink) {
        const data = this.textDecoder.decode();

        if (data.length > 0) {
          pipe(data, fromValue(fromArrayT), sink(this.delegate));
        }
        this.delegate.dispose();
      },
    );
    return parent;
  };
  return lift(operator);
};
