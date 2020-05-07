import { httpRequestToUntypedHeaders, parseHttpResponseFromHeaders, } from "../../http.js";
import { fromPromise, publish, ofValue, concat, map, using, switchMap, createObservable, } from "../../../../core/lib/observable.js";
import { supportsArrayBuffer, supportsBlob } from "./capabilities.js";
import { HttpResponseBodyImpl } from "./httpResponseBody.js";
import { isSome } from "../../../../core/lib/option.js";
import { pipe } from "../../../../core/lib/functions.js";
const loadBodyContent = async (response) => {
    const { body, contentInfo } = response;
    if (isSome(contentInfo)) {
        const { contentLength, contentType: { type, subtype, params }, } = contentInfo;
        const hasCharset = isSome(params["charset"]);
        const responseIsText = hasCharset ||
            type === "text" ||
            subtype.indexOf("json") >= 0 ||
            subtype.indexOf("text") >= 0 ||
            subtype.indexOf("xml") >= 0;
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
    const fetchResponse = createObservable(async (subscriber) => {
        const abortController = new AbortController();
        subscriber.add(() => abortController.abort());
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
            subscriber.dispatch(response);
            subscriber.dispose();
        }
        catch (cause) {
            subscriber.dispose({ cause });
        }
    });
    const mapResponseBody = switchMap((response) => using(scheduler => pipe(fromPromise(() => loadBodyContent(response)), publish(scheduler, 1), body => new HttpResponseBodyImpl(body)), body => ofValue({
        ...response,
        body,
    })));
    return concat(ofValue({
        type: 1,
    }), pipe(fetchResponse, mapResponseBody, map(response => ({
        type: 4,
        response,
    }))));
};
