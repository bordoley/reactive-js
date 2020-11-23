/// <reference types="node" />
import { Function1, SideEffect2 } from './functions';
import './option';
import './disposable';
import './dispatcher';
import { SchedulerLike } from './scheduler';
import { ObservableLike } from './observable';
import './enumerable';
import './runnable';
import './streamable';
import './flowable';
import { IncomingMessage, ServerResponse } from 'http';
import { Http2ServerRequest, Http2ServerResponse } from 'http2';
import { ReadonlyObjectMap } from './readonlyObjectMap';
import { IOSourceLike, IOSourceOperator } from './io';
import { HttpRequest, HttpResponse } from './http';
import { BrotliOptions, ZlibOptions } from 'zlib';

declare type HttpRequestListenerOptions = {
    readonly onError?: Function1<unknown, void | ObservableLike<unknown>>;
};
declare const createHttpRequestListener: (handler: Function1<HttpRequest<IOSourceLike<Uint8Array>>, ObservableLike<HttpResponse<IOSourceLike<Uint8Array>>>>, scheduler: SchedulerLike, options?: HttpRequestListenerOptions) => SideEffect2<IncomingMessage | Http2ServerRequest, ServerResponse | Http2ServerResponse>;

declare const createContentEncodingDecompressTransforms: (options?: BrotliOptions | ZlibOptions) => ReadonlyObjectMap<IOSourceOperator<Uint8Array, Uint8Array>>;
declare const createContentEncodingCompressTransforms: (options?: BrotliOptions | ZlibOptions) => ReadonlyObjectMap<IOSourceOperator<Uint8Array, Uint8Array>>;

export { HttpRequestListenerOptions, createContentEncodingCompressTransforms, createContentEncodingDecompressTransforms, createHttpRequestListener };
