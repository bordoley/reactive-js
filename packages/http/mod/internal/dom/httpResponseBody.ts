import {
  AbstractDisposable,
  DisposableLike,
} from "../../../../core/lib/disposable.ts";
import { pipe } from "../../../../core/lib/functions.ts";
import {
  ObservableLike,
  ofValue,
  createObservable,
  await_,
  DispatcherLike,
} from "../../../../core/lib/observable.ts";
import { WebResponseBodyLike } from "./interfaces.ts";

const blobToString = (blob: Blob): ObservableLike<string> => {
  const onSubscribe = (subscriber: DispatcherLike<string>) => {
    const reader = new FileReader();
    reader.onload = () => {
      subscriber.dispatch(reader.result as string);
    };

    reader.onerror = () => {
      subscriber.dispose({ cause: reader.error });
    };

    reader.readAsText(blob);
  };

  return createObservable(onSubscribe);
};

const blobToArrayBuffer = (body: Blob): ObservableLike<ArrayBuffer> => {
  const onSubscribe = (subscriber: DispatcherLike<ArrayBuffer>) => {
    const reader = new FileReader();
    reader.onload = () => {
      subscriber.dispatch(reader.result as ArrayBuffer);
    };

    reader.onerror = () => {
      subscriber.dispose({ cause: reader.error });
    };

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
    ? ofValue(body)
    : throwTypeError();
};

const bodyToBlob = (body: unknown): ObservableLike<Blob> => {
  return typeof body === "string" || body instanceof ArrayBuffer
    ? ofValue(new Blob([body]))
    : body instanceof Blob
    ? ofValue(body)
    : throwTypeError();
};

const bodyToText = (body: unknown): ObservableLike<string> => {
  return typeof body === "string"
    ? ofValue(body)
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
    this.add(body);
    body.add(this);
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
