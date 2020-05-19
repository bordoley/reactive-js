[@reactive-js/http - v0.0.39](../README.md) › ["node"](_node_.md)

# Module: "node"

## Index

### Type aliases

* [HttpClientOptions](_node_.md#httpclientoptions)
* [HttpRequestListener](_node_.md#httprequestlistener)
* [HttpRequestListenerOptions](_node_.md#httprequestlisteneroptions)

### Functions

* [createContentEncodingCompressTransforms](_node_.md#const-createcontentencodingcompresstransforms)
* [createContentEncodingDecompressTransforms](_node_.md#const-createcontentencodingdecompresstransforms)
* [createHttpClient](_node_.md#const-createhttpclient)
* [createHttpRequestListener](_node_.md#const-createhttprequestlistener)

## Type aliases

###  HttpClientOptions

Ƭ **HttpClientOptions**: *object*

#### Type declaration:

* **insecureHTTPParser**? : *boolean*

* **maxHeaderSize**? : *number*

___

###  HttpRequestListener

Ƭ **HttpRequestListener**: *SideEffect2‹IncomingMessage | Http2ServerRequest, ServerResponse | Http2ServerResponse›*

___

###  HttpRequestListenerOptions

Ƭ **HttpRequestListenerOptions**: *object*

#### Type declaration:

* **onError**? : *Function1‹unknown, void | ObservableLike‹unknown››*

## Functions

### `Const` createContentEncodingCompressTransforms

▸ **createContentEncodingCompressTransforms**(`options`: BrotliOptions | ZlibOptions): *object*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | BrotliOptions &#124; ZlibOptions | {} |

**Returns:** *object*

* \[ **key**: *string*\]: IOSourceOperator‹Uint8Array, Uint8Array›

___

### `Const` createContentEncodingDecompressTransforms

▸ **createContentEncodingDecompressTransforms**(`options`: BrotliOptions | ZlibOptions): *object*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | BrotliOptions &#124; ZlibOptions | {} |

**Returns:** *object*

* \[ **key**: *string*\]: IOSourceOperator‹Uint8Array, Uint8Array›

___

### `Const` createHttpClient

▸ **createHttpClient**(`options`: [HttpClientOptions](_node_.md#httpclientoptions)): *[HttpClient](_http_.md#httpclient)‹[HttpRequest](_http_.md#httprequest)‹IOSourceLike‹Uint8Array››, IOSourceLike‹Uint8Array› & DisposableLike›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [HttpClientOptions](_node_.md#httpclientoptions) | {} |

**Returns:** *[HttpClient](_http_.md#httpclient)‹[HttpRequest](_http_.md#httprequest)‹IOSourceLike‹Uint8Array››, IOSourceLike‹Uint8Array› & DisposableLike›*

___

### `Const` createHttpRequestListener

▸ **createHttpRequestListener**(`handler`: [HttpServer](_http_.md#httpserver)‹[HttpServerRequest](_http_.md#httpserverrequest)‹IOSourceLike‹Uint8Array››, [HttpResponse](_http_.md#httpresponse)‹IOSourceLike‹Uint8Array›››, `scheduler`: SchedulerLike, `options`: [HttpRequestListenerOptions](_node_.md#httprequestlisteneroptions)): *[HttpRequestListener](_node_.md#httprequestlistener)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`handler` | [HttpServer](_http_.md#httpserver)‹[HttpServerRequest](_http_.md#httpserverrequest)‹IOSourceLike‹Uint8Array››, [HttpResponse](_http_.md#httpresponse)‹IOSourceLike‹Uint8Array››› | - |
`scheduler` | SchedulerLike | - |
`options` | [HttpRequestListenerOptions](_node_.md#httprequestlisteneroptions) | {} |

**Returns:** *[HttpRequestListener](_node_.md#httprequestlistener)*
