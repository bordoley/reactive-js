import {
  addOnDisposedWithError,
  addOnDisposedWithoutErrorTeardown,
} from "../disposable";
import { ObservableOperator, ObserverLike } from "../observable";
import {
  notifyDecodeWithCharset,
  onDisposeWithoutErrorDecodeWithCharset,
} from "../sink";
import { lift } from "./lift";
import { AbstractDelegatingObserver } from "./observer";

class DecodeWithCharsetObserver extends AbstractDelegatingObserver<
  ArrayBuffer,
  string
> {
  constructor(
    delegate: ObserverLike<string>,
    readonly textDecoder: TextDecoder,
  ) {
    super(delegate);
    addOnDisposedWithError(this, delegate);
    addOnDisposedWithoutErrorTeardown(
      this,
      onDisposeWithoutErrorDecodeWithCharset,
    );
  }
}
DecodeWithCharsetObserver.prototype.notify = notifyDecodeWithCharset;

export const decodeWithCharset = (
  charset = "utf-8",
  options?: TextDecoderOptions,
): ObservableOperator<ArrayBuffer, string> => {
  const operator = (observer: ObserverLike<string>) =>
    new DecodeWithCharsetObserver(observer, new TextDecoder(charset, options));
  operator.isSynchronous = true;
  return lift(operator);
};
