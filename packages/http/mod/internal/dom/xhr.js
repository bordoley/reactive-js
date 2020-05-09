import { createObservable, createSubject, } from "../../../../core/lib/observable.js";
import { isSome } from "../../../../core/lib/option.js";
import { parseHeaders, parseHttpResponseFromHeaders, writeHttpRequestHeaders, } from "../../http.js";
import { supportsArrayBuffer, supportsBlob } from "./capabilities.js";
import { HttpResponseBodyImpl } from "./httpResponseBody.js";
export const sendHttpRequestUsingXHR = request => createObservable(dispatcher => {
    const xhr = new XMLHttpRequest();
    const xhrSupportsResponseType = "responseType" in xhr;
    const bodyStream = createSubject(1);
    const body = new HttpResponseBodyImpl(bodyStream);
    body.add(dispatcher);
    dispatcher.add(() => xhr.abort()).add(body);
    xhr.onerror = () => {
        const cause = new Error("Network request failed");
        dispatcher.dispose({ cause });
    };
    xhr.onreadystatechange = () => {
        var _a;
        if (xhr.readyState === 2) {
            const headersRaw = (_a = xhr.getAllResponseHeaders()) !== null && _a !== void 0 ? _a : "";
            const headers = parseHeaders(headersRaw);
            const response = parseHttpResponseFromHeaders(xhr.status, headers, body);
            dispatcher.dispatch({
                type: 4,
                response,
            });
            const { contentInfo } = response;
            if (xhrSupportsResponseType && isSome(contentInfo)) {
                const { contentLength, contentType: { type, subtype, params }, } = contentInfo;
                const hasCharset = isSome(params["charset"]);
                const responseIsText = hasCharset ||
                    type === "text" ||
                    subtype.includes("json") ||
                    subtype.includes("text") ||
                    subtype.includes("xml");
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
        dispatcher.dispatch({
            type: 1,
        });
    };
    xhr.upload.onprogress = ev => {
        const { loaded: count } = ev;
        dispatcher.dispatch({
            type: 2,
            count,
        });
    };
    xhr.upload.onload = _ => {
        dispatcher.dispatch({
            type: 3,
        });
    };
    xhr.ontimeout = () => {
        const cause = new Error("Network request failed");
        dispatcher.dispose({ cause });
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
