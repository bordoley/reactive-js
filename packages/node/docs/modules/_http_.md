[@reactive-js/node - v0.0.37](../README.md) › ["http"](_http_.md)

# Module: "http"

## Index

### Type aliases

* [EncodeHttpResponseOptions](_http_.md#encodehttpresponseoptions)
* [HttpClientOptions](_http_.md#httpclientoptions)
* [HttpRequestListener](_http_.md#httprequestlistener)
* [HttpRequestListenerOptions](_http_.md#httprequestlisteneroptions)

### Functions

* [createHttpClient](_http_.md#const-createhttpclient)
* [createHttpRequestListener](_http_.md#const-createhttprequestlistener)
* [decodeHttpRequest](_http_.md#const-decodehttprequest)
* [encodeCharsetHttpRequest](_http_.md#const-encodecharsethttprequest)
* [encodeCharsetHttpResponse](_http_.md#const-encodecharsethttpresponse)
* [encodeHttpClientRequest](_http_.md#const-encodehttpclientrequest)
* [encodeHttpResponse](_http_.md#const-encodehttpresponse)

## Type aliases

###  EncodeHttpResponseOptions

Ƭ **EncodeHttpResponseOptions**: *object*

#### Type declaration:

* **shouldEncode**(): *function*

  * <**T**, **TResp**>(`req`: HttpRequest‹T›, `resp`: HttpResponse‹TResp›): *Option‹boolean›*

___

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

___

### `Const` decodeHttpRequest

▸ **decodeHttpRequest**(`options`: BrotliOptions | ZlibOptions): *Operator‹HttpRequest‹FlowableLike‹Uint8Array››, HttpRequest‹FlowableLike‹Uint8Array›››*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | BrotliOptions &#124; ZlibOptions | {} |

**Returns:** *Operator‹HttpRequest‹FlowableLike‹Uint8Array››, HttpRequest‹FlowableLike‹Uint8Array›››*

___

### `Const` encodeCharsetHttpRequest

▸ **encodeCharsetHttpRequest**(`contentType`: string | MediaType): *Operator‹HttpRequest‹string›, HttpRequest‹FlowableLike‹Uint8Array›››*

**Parameters:**

Name | Type |
------ | ------ |
`contentType` | string &#124; MediaType |

**Returns:** *Operator‹HttpRequest‹string›, HttpRequest‹FlowableLike‹Uint8Array›››*

___

### `Const` encodeCharsetHttpResponse

▸ **encodeCharsetHttpResponse**(`contentType`: string | MediaType): *Operator‹HttpResponse‹string›, HttpResponse‹FlowableLike‹Uint8Array›››*

**Parameters:**

Name | Type |
------ | ------ |
`contentType` | string &#124; MediaType |

**Returns:** *Operator‹HttpResponse‹string›, HttpResponse‹FlowableLike‹Uint8Array›››*

___

### `Const` encodeHttpClientRequest

▸ **encodeHttpClientRequest**(`options`: BrotliOptions | ZlibOptions): *Operator‹HttpClientRequest‹FlowableLike‹Uint8Array››, HttpClientRequest‹FlowableLike‹Uint8Array›››*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | BrotliOptions &#124; ZlibOptions | {} |

**Returns:** *Operator‹HttpClientRequest‹FlowableLike‹Uint8Array››, HttpClientRequest‹FlowableLike‹Uint8Array›››*

___

### `Const` encodeHttpResponse

▸ **encodeHttpResponse**<**TReq**>(`request`: HttpRequest‹TReq›, `options`: [EncodeHttpResponseOptions](_http_.md#encodehttpresponseoptions) & BrotliOptions | ZlibOptions): *Operator‹HttpResponse‹FlowableLike‹Uint8Array››, HttpResponse‹FlowableLike‹Uint8Array›››*

**Type parameters:**

▪ **TReq**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`request` | HttpRequest‹TReq› | - |
`options` | [EncodeHttpResponseOptions](_http_.md#encodehttpresponseoptions) & BrotliOptions &#124; ZlibOptions | {} |

**Returns:** *Operator‹HttpResponse‹FlowableLike‹Uint8Array››, HttpResponse‹FlowableLike‹Uint8Array›››*
