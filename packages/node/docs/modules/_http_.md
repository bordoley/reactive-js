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

Ƭ **HttpClientRequest**: *HttpRequest‹[BufferFlowableLike](../interfaces/_streams_.bufferflowablelike.md)› & object*

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

▸ **createHttpClient**(`options`: [HttpClientOptions](_http_.md#httpclientoptions)): *HttpClient‹HttpRequest‹[BufferFlowableLike](../interfaces/_streams_.bufferflowablelike.md)›, [BufferFlowableLike](../interfaces/_streams_.bufferflowablelike.md) & DisposableLike›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [HttpClientOptions](_http_.md#httpclientoptions) | {} |

**Returns:** *HttpClient‹HttpRequest‹[BufferFlowableLike](../interfaces/_streams_.bufferflowablelike.md)›, [BufferFlowableLike](../interfaces/_streams_.bufferflowablelike.md) & DisposableLike›*

___

### `Const` createHttpRequestListener

▸ **createHttpRequestListener**(`handler`: HttpServer‹HttpServerRequest‹[BufferFlowableLike](../interfaces/_streams_.bufferflowablelike.md)›, HttpResponse‹[BufferFlowableLike](../interfaces/_streams_.bufferflowablelike.md)››, `scheduler`: SchedulerLike, `options`: [HttpRequestListenerOptions](_http_.md#httprequestlisteneroptions)): *[HttpRequestListener](_http_.md#httprequestlistener)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`handler` | HttpServer‹HttpServerRequest‹[BufferFlowableLike](../interfaces/_streams_.bufferflowablelike.md)›, HttpResponse‹[BufferFlowableLike](../interfaces/_streams_.bufferflowablelike.md)›› | - |
`scheduler` | SchedulerLike | - |
`options` | [HttpRequestListenerOptions](_http_.md#httprequestlisteneroptions) | {} |

**Returns:** *[HttpRequestListener](_http_.md#httprequestlistener)*

___

### `Const` decodeHttpRequest

▸ **decodeHttpRequest**(`options`: BrotliOptions | ZlibOptions): *Operator‹HttpRequest‹[BufferFlowableLike](../interfaces/_streams_.bufferflowablelike.md)›, HttpRequest‹[BufferFlowableLike](../interfaces/_streams_.bufferflowablelike.md)››*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | BrotliOptions &#124; ZlibOptions | {} |

**Returns:** *Operator‹HttpRequest‹[BufferFlowableLike](../interfaces/_streams_.bufferflowablelike.md)›, HttpRequest‹[BufferFlowableLike](../interfaces/_streams_.bufferflowablelike.md)››*

___

### `Const` encodeCharsetHttpRequest

▸ **encodeCharsetHttpRequest**(`contentType`: string | MediaType): *Operator‹HttpRequest‹string›, HttpRequest‹[BufferFlowableLike](../interfaces/_streams_.bufferflowablelike.md)››*

**Parameters:**

Name | Type |
------ | ------ |
`contentType` | string &#124; MediaType |

**Returns:** *Operator‹HttpRequest‹string›, HttpRequest‹[BufferFlowableLike](../interfaces/_streams_.bufferflowablelike.md)››*

___

### `Const` encodeCharsetHttpResponse

▸ **encodeCharsetHttpResponse**(`contentType`: string | MediaType): *Operator‹HttpResponse‹string›, HttpResponse‹[BufferFlowableLike](../interfaces/_streams_.bufferflowablelike.md)››*

**Parameters:**

Name | Type |
------ | ------ |
`contentType` | string &#124; MediaType |

**Returns:** *Operator‹HttpResponse‹string›, HttpResponse‹[BufferFlowableLike](../interfaces/_streams_.bufferflowablelike.md)››*

___

### `Const` encodeHttpResponse

▸ **encodeHttpResponse**<**TReq**>(`request`: HttpRequest‹TReq›, `options`: [EncodeHttpResponseOptions](_http_.md#encodehttpresponseoptions) & ZlibOptions | BrotliOptions): *Operator‹HttpResponse‹[BufferFlowableLike](../interfaces/_streams_.bufferflowablelike.md)›, HttpResponse‹[BufferFlowableLike](../interfaces/_streams_.bufferflowablelike.md)››*

**Type parameters:**

▪ **TReq**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`request` | HttpRequest‹TReq› | - |
`options` | [EncodeHttpResponseOptions](_http_.md#encodehttpresponseoptions) & ZlibOptions &#124; BrotliOptions | {} |

**Returns:** *Operator‹HttpResponse‹[BufferFlowableLike](../interfaces/_streams_.bufferflowablelike.md)›, HttpResponse‹[BufferFlowableLike](../interfaces/_streams_.bufferflowablelike.md)››*

___

### `Const` withDefaultBehaviors

▸ **withDefaultBehaviors**(`options?`: ZlibOptions | BrotliOptions & object): *(Anonymous function)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | ZlibOptions &#124; BrotliOptions & object |

**Returns:** *(Anonymous function)*
