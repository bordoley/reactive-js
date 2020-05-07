import { parseHeaders, parseHttpResponseFromHeaders, writeHttpRequestHeaders, } from "../../http.js";
import { createObservable, createSubject, } from "../../../../core/lib/observable.js";
import { supportsArrayBuffer, supportsBlob } from "./capabilities.js";
import { HttpResponseBodyImpl } from "./httpResponseBody.js";
import { isSome } from "../../../../core/lib/option.js";
export const sendHttpRequestUsingXHR = request => createObservable(subscriber => {
    const xhr = new XMLHttpRequest();
    const xhrSupportsResponseType = "responseType" in xhr;
    const bodyStream = createSubject(1);
    const body = new HttpResponseBodyImpl(bodyStream);
    body.add(subscriber);
    subscriber.add(() => xhr.abort()).add(body);
    xhr.onerror = () => {
        const cause = new Error("Network request failed");
        subscriber.dispose({ cause });
    };
    xhr.onreadystatechange = () => {
        var _a;
        if (xhr.readyState === 2) {
            const headersRaw = (_a = xhr.getAllResponseHeaders()) !== null && _a !== void 0 ? _a : "";
            const headers = parseHeaders(headersRaw);
            const response = parseHttpResponseFromHeaders(xhr.status, headers, body);
            subscriber.dispatch({
                type: 4,
                response,
            });
            const { contentInfo } = response;
            if (xhrSupportsResponseType && isSome(contentInfo)) {
                const { contentLength, contentType: { type, subtype, params }, } = contentInfo;
                const hasCharset = isSome(params["charset"]);
                const responseIsText = hasCharset ||
                    type === "text" ||
                    subtype.indexOf("json") >= 0 ||
                    subtype.indexOf("text") >= 0 ||
                    subtype.indexOf("xml") >= 0;
                xhr.responseType = responseIsText
                    ? "text"
                    : contentLength > 0 && supportsArrayBuffer
                        ? "arraybuffer"
                        : supportsBlob
                            ? "blob"
                            : "";
            }
        }
        else if (xhr.readyState === 4) {
            bodyStream.dispatch(xhr.response);
        }
    };
    xhr.onloadstart = () => {
        subscriber.dispatch({
            type: 1,
        });
    };
    xhr.upload.onprogress = ev => {
        const { loaded: count } = ev;
        subscriber.dispatch({
            type: 2,
            count,
        });
    };
    xhr.upload.onload = _ => {
        subscriber.dispatch({
            type: 3,
        });
    };
    xhr.ontimeout = () => {
        const cause = new Error("Network request failed");
        subscriber.dispose({ cause });
    };
    if (request.credentials === "include") {
        xhr.withCredentials = true;
    }
    else if (request.credentials === "omit") {
        xhr.withCredentials = false;
    }
    xhr.open(request.method, request.uri.toString(), true);
    writeHttpRequestHeaders(request, (k, v) => xhr.setRequestHeader(k, v));
    xhr.send(request.body);
});
