[@reactive-js/node - v0.0.37](../README.md) › ["http"](_http_.md)

# Module: "http"

## Index

### Type aliases

* [HttpClientOptions](_http_.md#httpclientoptions)
* [HttpRequestListener](_http_.md#httprequestlistener)
* [HttpRequestListenerOptions](_http_.md#httprequestlisteneroptions)

### Functions

* [createContentEncodingCompressTransform](_http_.md#const-createcontentencodingcompresstransform)
* [createContentEncodingDecompressTransform](_http_.md#const-createcontentencodingdecompresstransform)
* [createHttpClient](_http_.md#const-createhttpclient)
* [createHttpClientRequestContentEncoderProvider](_http_.md#const-createhttpclientrequestcontentencoderprovider)
* [createHttpClientResponseContentEncoderProvider](_http_.md#const-createhttpclientresponsecontentencoderprovider)
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

### `Const` createContentEncodingCompressTransform

▸ **createContentEncodingCompressTransform**(`options`: BrotliOptions | ZlibOptions): *(Anonymous function)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | BrotliOptions &#124; ZlibOptions |

**Returns:** *(Anonymous function)*

___

### `Const` createContentEncodingDecompressTransform

▸ **createContentEncodingDecompressTransform**(`options`: BrotliOptions | ZlibOptions): *(Anonymous function)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | BrotliOptions &#124; ZlibOptions | {} |

**Returns:** *(Anonymous function)*

___

### `Const` createHttpClient

▸ **createHttpClient**(`options`: [HttpClientOptions](_http_.md#httpclientoptions)): *HttpClient‹HttpRequest‹FlowableLike‹Uint8Array››, FlowableLike‹Uint8Array› & DisposableLike›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [HttpClientOptions](_http_.md#httpclientoptions) | {} |

**Returns:** *HttpClient‹HttpRequest‹FlowableLike‹Uint8Array››, FlowableLike‹Uint8Array› & DisposableLike›*

___

### `Const` createHttpClientRequestContentEncoderProvider

▸ **createHttpClientRequestContentEncoderProvider**(`options`: BrotliOptions | ZlibOptions): *(Anonymous function)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | BrotliOptions &#124; ZlibOptions | {} |

**Returns:** *(Anonymous function)*

___

### `Const` createHttpClientResponseContentEncoderProvider

▸ **createHttpClientResponseContentEncoderProvider**(`options`: BrotliOptions | ZlibOptions): *(Anonymous function)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | BrotliOptions &#124; ZlibOptions | {} |

**Returns:** *(Anonymous function)*

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
