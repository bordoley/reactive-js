import { AbstractDisposable, dispose, bindDisposables, } from "../../../../../core/mod/lib/disposable.js";
import { pipe, defer } from "../../../../../core/mod/lib/functions.js";
import { dispatchTo, fromValue, createObservable, await_, } from "../../../../../core/mod/lib/observable.js";
const blobToString = (blob) => {
    const onSubscribe = (dispatcher) => {
        const reader = new FileReader();
        reader.onload = defer(reader.result, dispatchTo(dispatcher));
        reader.onerror = () => dispose(dispatcher, { cause: reader.error });
        reader.readAsText(blob);
    };
    return createObservable(onSubscribe);
};
const blobToArrayBuffer = (body) => {
    const onSubscribe = (dispatcher) => {
        const reader = new FileReader();
        reader.onload = defer(reader.result, dispatchTo(dispatcher));
        reader.onerror = () => dispose(dispatcher, { cause: reader.error });
        reader.readAsArrayBuffer(body);
    };
    return createObservable(onSubscribe);
};
const throwTypeError = () => {
    throw new TypeError("invalid type");
};
const bodyToArrayBuffer = (body) => {
    return typeof body === "string" || body instanceof Blob
        ? blobToArrayBuffer(new Blob([body]))
        : body instanceof ArrayBuffer
            ? fromValue()(body)
            : throwTypeError();
};
const bodyToBlob = (body) => {
    return typeof body === "string" || body instanceof ArrayBuffer
        ? fromValue()(new Blob([body]))
        : body instanceof Blob
            ? fromValue()(body)
            : throwTypeError();
};
const bodyToText = (body) => {
    return typeof body === "string"
        ? fromValue()(body)
        : body instanceof Blob
            ? blobToString(body)
            : body instanceof ArrayBuffer
                ? blobToString(new Blob([body]))
                : throwTypeError();
};
export class HttpResponseBodyImpl extends AbstractDisposable {
    constructor(body) {
        super();
        this.body = body;
        bindDisposables(this, body);
    }
    get arrayBuffer() {
        return pipe(this.body, await_(bodyToArrayBuffer));
    }
    get blob() {
        return pipe(this.body, await_(bodyToBlob));
    }
    get text() {
        return pipe(this.body, await_(bodyToText));
    }
}
