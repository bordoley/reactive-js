'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
var disposable = require('./disposable.js');
var observable = require('./observable.js');
var streamable = require('./streamable.js');
var http = require('./http.js');
var node = require('./node.js');

const writeResponseMessage = (serverResponse) => (response) => {
    serverResponse.statusCode = response.statusCode;
    http.writeHttpResponseHeaders(response, (header, value) => serverResponse.setHeader(header, value));
    serverResponse.flushHeaders();
};
const writeResponseBody = (responseBody) => ({ body, }) => streamable.sink(body, responseBody);
const defaultOnError = (e) => {
    console.log(e);
};
const createHttpRequestListener = (handler, scheduler, options = {}) => {
    const { onError = defaultOnError } = options;
    const handleRequest = (request, response) => {
        var _a;
        const { method, url: uri = "/", headers, httpVersionMajor, httpVersionMinor, } = request.value;
        const isTransportSecure = (_a = request.value.socket.encrypted) !== null && _a !== void 0 ? _a : false;
        const requestBody = node.createReadableIOSource(functions.returns(request));
        const responseBody = node.createWritableIOSink(functions.returns(response));
        return functions.pipe(functions.defer({
            method: method,
            uri,
            headers: headers,
            httpVersionMajor,
            httpVersionMinor,
            isTransportSecure,
            body: requestBody,
        }, http.createHttpRequest), observable.compute(), observable.await_(handler), observable.onNotify(writeResponseMessage(response.value)), observable.await_(writeResponseBody(responseBody)), observable.catchError(onError));
    };
    return (req, resp) => {
        const request = node.createDisposableNodeStream(req);
        const response = node.createDisposableNodeStream(resp);
        const handlerSubscription = functions.pipe(handleRequest(request, response), observable.subscribe(scheduler));
        disposable.addDisposable(handlerSubscription, request);
        disposable.addDisposable(response, handlerSubscription);
    };
};

const createContentEncodingDecompressTransforms = (options = {}) => ({
    ["br" /* Brotli */]: node.brotliDecompress(options),
    ["deflate" /* Deflate */]: node.deflate(options),
    ["gzip" /* GZip */]: node.gunzip(options),
});
const createContentEncodingCompressTransforms = (options = {}) => ({
    ["br" /* Brotli */]: node.brotliCompress(options),
    ["deflate" /* Deflate */]: node.inflate(options),
    ["gzip" /* GZip */]: node.gzip(options),
});

exports.createContentEncodingCompressTransforms = createContentEncodingCompressTransforms;
exports.createContentEncodingDecompressTransforms = createContentEncodingDecompressTransforms;
exports.createHttpRequestListener = createHttpRequestListener;
