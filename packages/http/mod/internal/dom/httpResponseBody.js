import { ofValue, createObservable, await_, } from "../../../../core/lib/observable.js";
import { pipe } from "../../../../core/lib/functions.js";
import { AbstractDisposable, } from "../../../../core/lib/disposable.js";
const blobToString = (blob) => {
    const onSubscribe = (subscriber) => {
        const reader = new FileReader();
        reader.onload = () => {
            subscriber.dispatch(reader.result);
        };
        reader.onerror = () => {
            subscriber.dispose({ cause: reader.error });
        };
        reader.readAsText(blob);
    };
    return createObservable(onSubscribe);
};
const blobToArrayBuffer = (body) => {
    const onSubscribe = (subscriber) => {
        const reader = new FileReader();
        reader.onload = () => {
            subscriber.dispatch(reader.result);
        };
        reader.onerror = () => {
            subscriber.dispose({ cause: reader.error });
        };
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
            ? ofValue(body)
            : throwTypeError();
};
const bodyToBlob = (body) => {
    return typeof body === "string" || body instanceof ArrayBuffer
        ? ofValue(new Blob([body]))
        : body instanceof Blob
            ? ofValue(body)
            : throwTypeError();
};
const bodyToText = (body) => {
    return typeof body === "string"
        ? ofValue(body)
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
        this.add(body);
        body.add(this);
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
