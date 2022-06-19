import {
  addOnDisposedWithError,
  addOnDisposedWithoutErrorTeardown,
} from "../disposable";
import { RunnableOperator } from "../runnable";
import {
  SinkLike,
  notifyDecodeWithCharset,
  onDisposeWithoutErrorDecodeWithCharset,
} from "../sink";
import { lift } from "./lift";
import { AbstractDelegatingSink } from "./sinks";

class DecodeWithCharsetSink extends AbstractDelegatingSink<
  ArrayBuffer,
  string
> {
  constructor(delegate: SinkLike<string>, readonly textDecoder: TextDecoder) {
    super(delegate);
    addOnDisposedWithError(this, delegate);
    addOnDisposedWithoutErrorTeardown(
      this,
      onDisposeWithoutErrorDecodeWithCharset,
    );
  }
}
DecodeWithCharsetSink.prototype.notify = notifyDecodeWithCharset;

export const decodeWithCharset = (
  charset = "utf-8",
  options?: TextDecoderOptions,
): RunnableOperator<ArrayBuffer, string> => {
  const operator = (sink: SinkLike<string>) =>
    new DecodeWithCharsetSink(sink, new TextDecoder(charset, options));
  return lift(operator);
};
