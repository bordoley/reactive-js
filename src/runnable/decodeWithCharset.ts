import { fromValue } from "../container";
import {
  addDisposable,
  addOnDisposedWithError,
  addOnDisposedWithoutErrorTeardown,
} from "../disposable";
import { pipe } from "../functions";
import { RunnableOperator } from "../runnable";
import { SinkLike, notifyDecodeWithCharset } from "../sink";
import { fromArrayT } from "./fromArray";
import { lift } from "./lift";
import { AbstractSink, sink } from "./sinks";

class DecodeWithCharsetSink extends AbstractSink<ArrayBuffer> {
  constructor(
    readonly delegate: SinkLike<string>,
    readonly textDecoder: TextDecoder,
  ) {
    super();
  }
}
DecodeWithCharsetSink.prototype.notify = notifyDecodeWithCharset;

function onDispose(this: DecodeWithCharsetSink) {
  const data = this.textDecoder.decode();

  if (data.length > 0) {
    pipe(data, fromValue(fromArrayT), sink(this.delegate));
  }
  this.delegate.dispose();
}

export const decodeWithCharset = (
  charset = "utf-8",
  options?: TextDecoderOptions,
): RunnableOperator<ArrayBuffer, string> => {
  const operator = (delegate: SinkLike<string>) => {
    const sink = new DecodeWithCharsetSink(
      delegate,
      new TextDecoder(charset, options),
    );

    addDisposable(delegate, sink);
    addOnDisposedWithError(sink, delegate);
    addOnDisposedWithoutErrorTeardown(sink, onDispose);

    return sink;
  };
  return lift(operator);
};
