[@reactive-js/node - v0.0.37](../README.md) › ["http"](_http_.md)

# Module: "http"

## Index

### Type aliases

* [EncodeHttpResponseOptions](_http_.md#encodehttpresponseoptions)
* [HttpClientOptions](_http_.md#httpclientoptions)
* [HttpClientRequest](_http_.md#httpclientrequest)
* [HttpRequestListener](_http_.md#httprequestlistener)
* [HttpRequestListenerOptions](_http_.md#httprequestlisteneroptions)

### Functions

* [createHttpClient](_http_.md#const-createhttpclient)
* [createHttpRequestListener](_http_.md#const-createhttprequestlistener)
* [decodeHttpRequest](_http_.md#const-decodehttprequest)
* [encodeCharsetHttpRequest](_http_.md#const-encodecharsethttprequest)
* [encodeCharsetHttpResponse](_http_.md#const-encodecharsethttpresponse)
* [encodeHttpResponse](_http_.md#const-encodehttpresponse)
* [withDefaultBehaviors](_http_.md#const-withdefaultbehaviors)

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

###  HttpClientRequest

Ƭ **HttpClientRequest**: *HttpRequest‹[BufferStreamLike](../interfaces/_streams_.bufferstreamlike.md)› & object*

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

▸ **createHttpClient**(`options`: [HttpClientOptions](_http_.md#httpclientoptions)): *HttpClient‹HttpRequest‹[BufferStreamLike](../interfaces/_streams_.bufferstreamlike.md)›, [BufferStreamLike](../interfaces/_streams_.bufferstreamlike.md) & DisposableLike›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [HttpClientOptions](_http_.md#httpclientoptions) | {} |

**Returns:** *HttpClient‹HttpRequest‹[BufferStreamLike](../interfaces/_streams_.bufferstreamlike.md)›, [BufferStreamLike](../interfaces/_streams_.bufferstreamlike.md) & DisposableLike›*

___

### `Const` createHttpRequestListener

▸ **createHttpRequestListener**(`handler`: HttpServer‹HttpServerRequest‹[BufferStreamLike](../interfaces/_streams_.bufferstreamlike.md)›, HttpResponse‹[BufferStreamLike](../interfaces/_streams_.bufferstreamlike.md)››, `scheduler`: SchedulerLike, `options`: [HttpRequestListenerOptions](_http_.md#httprequestlisteneroptions)): *[HttpRequestListener](_http_.md#httprequestlistener)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`handler` | HttpServer‹HttpServerRequest‹[BufferStreamLike](../interfaces/_streams_.bufferstreamlike.md)›, HttpResponse‹[BufferStreamLike](../interfaces/_streams_.bufferstreamlike.md)›› | - |
`scheduler` | SchedulerLike | - |
`options` | [HttpRequestListenerOptions](_http_.md#httprequestlisteneroptions) | {} |

**Returns:** *[HttpRequestListener](_http_.md#httprequestlistener)*

___

### `Const` decodeHttpRequest

▸ **decodeHttpRequest**(`options`: BrotliOptions | ZlibOptions): *Operator‹HttpRequest‹[BufferStreamLike](../interfaces/_streams_.bufferstreamlike.md)›, HttpRequest‹[BufferStreamLike](../interfaces/_streams_.bufferstreamlike.md)››*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | BrotliOptions &#124; ZlibOptions | {} |

**Returns:** *Operator‹HttpRequest‹[BufferStreamLike](../interfaces/_streams_.bufferstreamlike.md)›, HttpRequest‹[BufferStreamLike](../interfaces/_streams_.bufferstreamlike.md)››*

___

### `Const` encodeCharsetHttpRequest

▸ **encodeCharsetHttpRequest**(`contentType`: string | MediaType): *Operator‹HttpRequest‹string›, HttpRequest‹[BufferStreamLike](../interfaces/_streams_.bufferstreamlike.md)››*

**Parameters:**

Name | Type |
------ | ------ |
`contentType` | string &#124; MediaType |

**Returns:** *Operator‹HttpRequest‹string›, HttpRequest‹[BufferStreamLike](../interfaces/_streams_.bufferstreamlike.md)››*

___

### `Const` encodeCharsetHttpResponse

▸ **encodeCharsetHttpResponse**(`contentType`: string | MediaType): *Operator‹HttpResponse‹string›, HttpResponse‹[BufferStreamLike](../interfaces/_streams_.bufferstreamlike.md)››*

**Parameters:**

Name | Type |
------ | ------ |
`contentType` | string &#124; MediaType |

**Returns:** *Operator‹HttpResponse‹string›, HttpResponse‹[BufferStreamLike](../interfaces/_streams_.bufferstreamlike.md)››*

___

### `Const` encodeHttpResponse

▸ **encodeHttpResponse**<**TReq**>(`request`: HttpRequest‹TReq›, `options`: [EncodeHttpResponseOptions](_http_.md#encodehttpresponseoptions) & ZlibOptions | BrotliOptions): *Operator‹HttpResponse‹[BufferStreamLike](../interfaces/_streams_.bufferstreamlike.md)›, HttpResponse‹[BufferStreamLike](../interfaces/_streams_.bufferstreamlike.md)››*

**Type parameters:**

▪ **TReq**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`request` | HttpRequest‹TReq› | - |
`options` | [EncodeHttpResponseOptions](_http_.md#encodehttpresponseoptions) & ZlibOptions &#124; BrotliOptions | {} |

**Returns:** *Operator‹HttpResponse‹[BufferStreamLike](../interfaces/_streams_.bufferstreamlike.md)›, HttpResponse‹[BufferStreamLike](../interfaces/_streams_.bufferstreamlike.md)››*

___

### `Const` withDefaultBehaviors

▸ **withDefaultBehaviors**(`options?`: ZlibOptions | BrotliOptions & object): *(Anonymous function)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | ZlibOptions &#124; BrotliOptions & object |

**Returns:** *(Anonymous function)*
