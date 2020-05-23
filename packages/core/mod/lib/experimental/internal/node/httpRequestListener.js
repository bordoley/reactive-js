import { addDisposable, } from "../../../disposable.js";
import { defer, pipe, returns, } from "../../../functions.js";
import { createReadableIOSource, createWritableIOSink, createDisposableNodeStream, } from "../../../node.js";
import { await_, catchError, onNotify, subscribe, compute, } from "../../../observable.js";
import { sink } from "../../../streamable.js";
import { writeHttpResponseHeaders, createHttpServerRequest, } from "../../http.js";
const writeResponseMessage = (serverResponse) => (response) => {
    serverResponse.statusCode = response.statusCode;
    writeHttpResponseHeaders(response, (header, value) => serverResponse.setHeader(header, value));
    serverResponse.flushHeaders();
};
const writeResponseBody = (responseBody) => ({ body, }) => sink(body, responseBody);
const defaultOnError = (e) => {
    console.log(e);
};
export const createHttpRequestListener = (handler, scheduler, options = {}) => {
    const { onError = defaultOnError } = options;
    const handleRequest = (request, response) => {
        var _a;
        const { method, url: path = "/", headers, httpVersionMajor, httpVersionMinor, } = request.value;
        const isTransportSecure = (_a = request.value.socket.encrypted) !== null && _a !== void 0 ? _a : false;
        const requestBody = createReadableIOSource(returns(request));
        const responseBody = createWritableIOSink(returns(response));
        return pipe(defer({
            method: method,
            path,
            headers: headers,
            httpVersionMajor,
            httpVersionMinor,
            isTransportSecure,
            body: requestBody,
        }, createHttpServerRequest), compute(), await_(handler), onNotify(writeResponseMessage(response.value)), await_(writeResponseBody(responseBody)), catchError(onError));
    };
    return (req, resp) => {
        const request = createDisposableNodeStream(req);
        const response = createDisposableNodeStream(resp);
        const handlerSubscription = pipe(handleRequest(request, response), subscribe(scheduler));
        addDisposable(handlerSubscription, request);
        addDisposable(response, handlerSubscription);
    };
};
