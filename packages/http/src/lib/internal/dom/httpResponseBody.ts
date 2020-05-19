import {
  AbstractDisposable,
  DisposableLike,
  dispose,
  bindDisposables,
} from "@reactive-js/core/lib/disposable";
import { pipe, defer } from "@reactive-js/core/lib/functions";
import {
  dispatchTo,
  ObservableLike,
  fromValue,
  createObservable,
  await_,
  DispatcherLike,
} from "@reactive-js/core/lib/observable";
import { WebResponseBodyLike } from "./interfaces";

const blobToString = (blob: Blob): ObservableLike<string> => {
  const onSubscribe = (dispatcher: DispatcherLike<string>) => {
    const reader = new FileReader();
    reader.onload = defer(reader.result as string, dispatchTo(dispatcher));

    reader.onerror = () => dispose(dispatcher, { cause: reader.error });
    reader.readAsText(blob);
  };

  return createObservable(onSubscribe);
};

const blobToArrayBuffer = (body: Blob): ObservableLike<ArrayBuffer> => {
  const onSubscribe = (dispatcher: DispatcherLike<ArrayBuffer>) => {
    const reader = new FileReader();
    reader.onload = defer(reader.result as ArrayBuffer, dispatchTo(dispatcher));
    reader.onerror = () => dispose(dispatcher, { cause: reader.error });
    reader.readAsArrayBuffer(body);
  };

  return createObservable(onSubscribe);
};

const throwTypeError = <T>(): T => {
  throw new TypeError("invalid type");
};

const bodyToArrayBuffer = (body: unknown): ObservableLike<ArrayBuffer> => {
  return typeof body === "string" || body instanceof Blob
    ? blobToArrayBuffer(new Blob([body]))
    : body instanceof ArrayBuffer
    ? fromValue()(body)
    : throwTypeError();
};

const bodyToBlob = (body: unknown): ObservableLike<Blob> => {
  return typeof body === "string" || body instanceof ArrayBuffer
    ? fromValue()(new Blob([body]))
    : body instanceof Blob
    ? fromValue()(body)
    : throwTypeError();
};

const bodyToText = (body: unknown): ObservableLike<string> => {
  return typeof body === "string"
    ? fromValue()(body)
    : body instanceof Blob
    ? blobToString(body)
    : body instanceof ArrayBuffer
    ? blobToString(new Blob([body]))
    : throwTypeError();
};

export class HttpResponseBodyImpl extends AbstractDisposable
  implements WebResponseBodyLike {
  constructor(readonly body: ObservableLike<unknown> & DisposableLike) {
    super();
    bindDisposables(this, body);
  }

  get arrayBuffer(): ObservableLike<ArrayBuffer> {
    return pipe(this.body, await_(bodyToArrayBuffer));
  }

  get blob(): ObservableLike<Blob> {
    return pipe(this.body, await_(bodyToBlob));
  }

  get text(): ObservableLike<string> {
    return pipe(this.body, await_(bodyToText));
  }
}
