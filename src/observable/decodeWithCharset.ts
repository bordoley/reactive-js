import { fromValue } from "../container";
import {
  addDisposable,
  addOnDisposedWithError,
  addOnDisposedWithoutErrorTeardown,
} from "../disposable";
import { pipe } from "../functions";
import { ObservableOperator } from "../observable";
import { notifyDecodeWithCharset } from "../sink";
import { fromArrayT } from "./fromArray";
import { lift } from "./lift";
import { Observer, sink } from "./observer";

class DecodeWithCharsetObserver extends Observer<ArrayBuffer> {
  constructor(
    readonly delegate: Observer<string>,
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
  const operator = (delegate: Observer<string>) => {
    const observer = new DecodeWithCharsetObserver(
      delegate,
      new TextDecoder(charset, options),
    );
    addDisposable(delegate, observer);
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
