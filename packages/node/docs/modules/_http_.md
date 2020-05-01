[@reactive-js/node - v0.0.37](../README.md) › ["http"](_http_.md)

# Module: "http"

## Index

### Type aliases

* [HttpClientOptions](_http_.md#httpclientoptions)
* [HttpRequestListener](_http_.md#httprequestlistener)
* [HttpRequestListenerOptions](_http_.md#httprequestlisteneroptions)

### Functions

* [createContentEncodingCompressTransforms](_http_.md#const-createcontentencodingcompresstransforms)
* [createContentEncodingDecompressTransforms](_http_.md#const-createcontentencodingdecompresstransforms)
* [createHttpClient](_http_.md#const-createhttpclient)
* [createHttpRequestListener](_http_.md#const-createhttprequestlistener)

## Type aliases

###  HttpClientOptions

Ƭ **HttpClientOptions**: *object*

#### Type declaration:

* **insecureHTTPParser**? : *boolean*

* **maxHeaderSize**? : *number*

___

###  HttpRequestListener

Ƭ **HttpRequestListener**: *function*

#### Type declaration:

▸ (`req`: IncomingMessage | Http2ServerRequest, `resp`: ServerResponse | Http2ServerResponse): *void*

**Parameters:**

Name | Type |
------ | ------ |
`req` | IncomingMessage &#124; Http2ServerRequest |
`resp` | ServerResponse &#124; Http2ServerResponse |

___

###  HttpRequestListenerOptions

Ƭ **HttpRequestListenerOptions**: *object*

#### Type declaration:

* **onError**(): *function*

  * (`e`: unknown): *ObservableLike‹unknown›*

## Functions

### `Const` createContentEncodingCompressTransforms

▸ **createContentEncodingCompressTransforms**(`options`: BrotliOptions | ZlibOptions): *object*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | BrotliOptions &#124; ZlibOptions | {} |

**Returns:** *object*

* \[ **key**: *string*\]: FlowableOperator‹Uint8Array, Uint8Array›

___

### `Const` createContentEncodingDecompressTransforms

▸ **createContentEncodingDecompressTransforms**(`options`: BrotliOptions | ZlibOptions): *object*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | BrotliOptions &#124; ZlibOptions | {} |

**Returns:** *object*

* \[ **key**: *string*\]: FlowableOperator‹Uint8Array, Uint8Array›

___

### `Const` createHttpClient

▸ **createHttpClient**(`options`: [HttpClientOptions](_http_.md#httpclientoptions)): *HttpClient‹HttpRequest‹FlowableLike‹Uint8Array››, FlowableLike‹Uint8Array› & DisposableLike›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [HttpClientOptions](_http_.md#httpclientoptions) | {} |

**Returns:** *HttpClient‹HttpRequest‹FlowableLike‹Uint8Array››, FlowableLike‹Uint8Array› & DisposableLike›*

___

### `Const` createHttpRequestListener

▸ **createHttpRequestListener**(`handler`: HttpServer‹HttpServerRequest‹FlowableLike‹Uint8Array››, HttpResponse‹FlowableLike‹Uint8Array›››, `scheduler`: SchedulerLike, `options`: [HttpRequestListenerOptions](_http_.md#httprequestlisteneroptions)): *[HttpRequestListener](_http_.md#httprequestlistener)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`handler` | HttpServer‹HttpServerRequest‹FlowableLike‹Uint8Array››, HttpResponse‹FlowableLike‹Uint8Array››› | - |
`scheduler` | SchedulerLike | - |
`options` | [HttpRequestListenerOptions](_http_.md#httprequestlisteneroptions) | {} |

**Returns:** *[HttpRequestListener](_http_.md#httprequestlistener)*
