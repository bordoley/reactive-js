import { returns, pipe, defer } from './functions.mjs';
import './option.mjs';
import { addDisposable } from './disposable.mjs';
import './readonlyArray.mjs';
import './enumerable.mjs';
import './runnable.mjs';
import './queues.mjs';
import './scheduler.mjs';
import { compute, await_, onNotify, catchError, subscribe } from './observable.mjs';
import './env.mjs';
import './dispatcher.mjs';
import { sink } from './streamable.mjs';
import './flowable.mjs';
import { writeHttpResponseHeaders, createHttpRequest } from './http.mjs';
import './io.mjs';
import './parserCombinators.mjs';
import { createReadableIOSource, createWritableIOSink, createDisposableNodeStream, brotliDecompress, deflate, gunzip, brotliCompress, inflate, gzip } from './node.mjs';
import 'fs';
import 'zlib';

const writeResponseMessage = (serverResponse) => (response) => {
    serverResponse.statusCode = response.statusCode;
    writeHttpResponseHeaders(response, (header, value) => serverResponse.setHeader(header, value));
    serverResponse.flushHeaders();
};
const writeResponseBody = (responseBody) => ({ body, }) => sink(body, responseBody);
const defaultOnError = (e) => {
    console.log(e);
};
const createHttpRequestListener = (handler, scheduler, options = {}) => {
    const { onError = defaultOnError } = options;
    const handleRequest = (request, response) => {
        var _a;
        const { method, url: uri = "/", headers, httpVersionMajor, httpVersionMinor, } = request.value;
        const isTransportSecure = (_a = request.value.socket.encrypted) !== null && _a !== void 0 ? _a : false;
        const requestBody = createReadableIOSource(returns(request));
        const responseBody = createWritableIOSink(returns(response));
        return pipe(defer({
            method: method,
            uri,
            headers: headers,
            httpVersionMajor,
            httpVersionMinor,
            isTransportSecure,
            body: requestBody,
        }, createHttpRequest), compute(), await_(handler), onNotify(writeResponseMessage(response.value)), await_(writeResponseBody(responseBody)), catchError(onError));
    };
    return (req, resp) => {
        const request = createDisposableNodeStream(req);
        const response = createDisposableNodeStream(resp);
        const handlerSubscription = pipe(handleRequest(request, response), subscribe(scheduler));
        addDisposable(handlerSubscription, request);
        addDisposable(response, handlerSubscription);
    };
};

const createContentEncodingDecompressTransforms = (options = {}) => ({
    ["br" /* Brotli */]: brotliDecompress(options),
    ["deflate" /* Deflate */]: deflate(options),
    ["gzip" /* GZip */]: gunzip(options),
});
const createContentEncodingCompressTransforms = (options = {}) => ({
    ["br" /* Brotli */]: brotliCompress(options),
    ["deflate" /* Deflate */]: inflate(options),
    ["gzip" /* GZip */]: gzip(options),
});

export { createContentEncodingCompressTransforms, createContentEncodingDecompressTransforms, createHttpRequestListener };
