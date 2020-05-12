import {
  add,
  AbstractDisposable,
  DisposableLike,
  dispose,
} from "@reactive-js/core/lib/disposable";
import { pipe, bind } from "@reactive-js/core/lib/functions";
import {
  dispatch,
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
    reader.onload = bind(dispatch, dispatcher, reader.result as string);

    reader.onerror = bind(dispose, dispatcher, { cause: reader.error });
    reader.readAsText(blob);
  };

  return createObservable(onSubscribe);
};

const blobToArrayBuffer = (body: Blob): ObservableLike<ArrayBuffer> => {
  const onSubscribe = (dispatcher: DispatcherLike<ArrayBuffer>) => {
    const reader = new FileReader();
    reader.onload = bind(dispatch, dispatcher, reader.result as ArrayBuffer);
    reader.onerror = bind(dispose, dispatcher, { cause: reader.error });
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
    add(this, body);
    add(body, this);
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
