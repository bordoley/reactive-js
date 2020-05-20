[@reactive-js/http - v0.0.41](../README.md) › ["node"](_node_.md)

# Module: "node"

## Index

### Type aliases

* [HttpRequestListener](_node_.md#httprequestlistener)
* [HttpRequestListenerOptions](_node_.md#httprequestlisteneroptions)

### Functions

* [createContentEncodingCompressTransforms](_node_.md#const-createcontentencodingcompresstransforms)
* [createContentEncodingDecompressTransforms](_node_.md#const-createcontentencodingdecompresstransforms)
* [createHttpRequestListener](_node_.md#const-createhttprequestlistener)

## Type aliases

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

### `Const` createHttpRequestListener

▸ **createHttpRequestListener**(`handler`: [HttpServer](_httpserver_.md#httpserver)‹[HttpServerRequest](_httpserver_.md#httpserverrequest)‹IOSourceLike‹Uint8Array››, [HttpResponse](_http_.md#httpresponse)‹IOSourceLike‹Uint8Array›››, `scheduler`: SchedulerLike, `options`: [HttpRequestListenerOptions](_node_.md#httprequestlisteneroptions)): *[HttpRequestListener](_node_.md#httprequestlistener)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`handler` | [HttpServer](_httpserver_.md#httpserver)‹[HttpServerRequest](_httpserver_.md#httpserverrequest)‹IOSourceLike‹Uint8Array››, [HttpResponse](_http_.md#httpresponse)‹IOSourceLike‹Uint8Array››› | - |
`scheduler` | SchedulerLike | - |
`options` | [HttpRequestListenerOptions](_node_.md#httprequestlisteneroptions) | {} |

**Returns:** *[HttpRequestListener](_node_.md#httprequestlistener)*
