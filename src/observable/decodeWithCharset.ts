import { fromValue } from "../container";
import {
  addOnDisposedWithError,
  addOnDisposedWithoutErrorTeardown,
} from "../disposable";
import { pipe } from "../functions";
import { ObservableOperator, ObserverLike } from "../observable";
import { notifyDecodeWithCharset } from "../sink";
import { lift } from "./lift";
import { AbstractDelegatingObserver, sink } from "./observer";
import { fromArrayT } from "./fromArray";

class DecodeWithCharsetObserver extends AbstractDelegatingObserver<
  ArrayBuffer,
  string
> {
  constructor(
    delegate: ObserverLike<string>,
    readonly textDecoder: TextDecoder,
  ) {
    super(delegate);
  }
}
DecodeWithCharsetObserver.prototype.notify = notifyDecodeWithCharset;

export const decodeWithCharset = (
  charset = "utf-8",
  options?: TextDecoderOptions,
): ObservableOperator<ArrayBuffer, string> => {
  const operator = (delegate: ObserverLike<string>) => {
    const observer = new DecodeWithCharsetObserver(
      delegate,
      new TextDecoder(charset, options),
    );
    addOnDisposedWithError(observer, delegate);
    addOnDisposedWithoutErrorTeardown(
      observer,
      function (this: DecodeWithCharsetObserver) {
        const data = this.textDecoder.decode();

        if (data.length > 0) {
          pipe(data, fromValue(fromArrayT), sink(this.delegate));
        }
        this.delegate.dispose();
      },
    );
    return observer;
  };
  operator.isSynchronous = true;
  return lift(operator);
};
