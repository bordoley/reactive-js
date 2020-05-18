import { dispose, addTeardown } from "../../../../../core/mod/lib/disposable.js";
import { bind, pipe } from "../../../../../core/mod/lib/functions.js";
import { dispatch, fromPromise, publish, fromValue, concat, map, using, switchMap, createObservable, } from "../../../../../core/mod/lib/observable.js";
import { isSome } from "../../../../../core/mod/lib/option.js";
import { httpRequestToUntypedHeaders, parseHttpResponseFromHeaders, } from "../../http.js";
import { supportsArrayBuffer, supportsBlob } from "./capabilities.js";
import { HttpResponseBodyImpl } from "./httpResponseBody.js";
const loadBodyContent = async (response) => {
    const { body, contentInfo } = response;
    if (isSome(contentInfo)) {
        const { contentLength, contentType: { type, subtype, params }, } = contentInfo;
        const hasCharset = isSome(params["charset"]);
        const responseIsText = hasCharset ||
            type === "text" ||
            subtype.includes("json") ||
            subtype.includes("text") ||
            subtype.includes("xml");
        if (responseIsText) {
            return body.text();
        }
        else if (contentLength > 0 && supportsArrayBuffer) {
            return body.arrayBuffer();
        }
        else if (supportsBlob) {
            return body.blob();
        }
    }
    return await "";
};
export const sendHttpRequestUsingFetch = request => {
    const { cache, credentials, integrity, method, mode, redirect, referrerPolicy, uri, } = request;
    const url = uri.toString();
    const headers = httpRequestToUntypedHeaders(request);
    const fetchResponse = createObservable(async (dispatcher) => {
        const abortController = new AbortController();
        addTeardown(dispatcher, () => abortController.abort());
        try {
            const fetchResponse = await fetch(url, {
                cache,
                credentials,
                headers,
                integrity,
                method,
                mode,
                redirect,
                referrerPolicy,
                signal: abortController.signal,
            });
            const responseHeaders = {};
            fetchResponse.headers.forEach((v, k) => {
                responseHeaders[k] = v;
            });
            const response = parseHttpResponseFromHeaders(fetchResponse.status, responseHeaders, fetchResponse);
            dispatch(dispatcher, response);
            dispose(dispatcher);
        }
        catch (cause) {
            dispose(dispatcher, { cause });
        }
    });
    const mapResponseBody = switchMap((response) => using(scheduler => pipe(bind(loadBodyContent, response), fromPromise, publish(scheduler, 1), body => new HttpResponseBodyImpl(body)), body => fromValue()({
        ...response,
        body,
    })));
    return concat(fromValue()({
        type: 1,
    }), pipe(fetchResponse, mapResponseBody, map(response => ({
        type: 4,
        response,
    }))));
};
