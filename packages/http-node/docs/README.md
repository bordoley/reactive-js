[@reactive-js/http-node - v0.0.37](README.md)

# @reactive-js/http-node - v0.0.37

## Index

### Type aliases

* [EncodeHttpResponseOptions](README.md#encodehttpresponseoptions)
* [HttpClientOptions](README.md#httpclientoptions)
* [HttpClientRequest](README.md#httpclientrequest)
* [HttpRequestListener](README.md#httprequestlistener)
* [HttpRequestListenerOptions](README.md#httprequestlisteneroptions)

### Functions

* [createHttpClient](README.md#const-createhttpclient)
* [createHttpRequestListener](README.md#const-createhttprequestlistener)
* [decodeHttpRequest](README.md#const-decodehttprequest)
* [decodeHttpResponse](README.md#const-decodehttpresponse)
* [encodeCharsetHttpMessage](README.md#const-encodecharsethttpmessage)
* [encodeCharsetHttpRequest](README.md#const-encodecharsethttprequest)
* [encodeCharsetHttpResponse](README.md#const-encodecharsethttpresponse)
* [encodeHttpRequest](README.md#const-encodehttprequest)
* [encodeHttpResponse](README.md#const-encodehttpresponse)
* [withDefaultBehaviors](README.md#const-withdefaultbehaviors)

## Type aliases

###  EncodeHttpResponseOptions

Ƭ **EncodeHttpResponseOptions**: *object*

#### Type declaration:

___

###  HttpClientOptions

Ƭ **HttpClientOptions**: *object*

#### Type declaration:

___

###  HttpClientRequest

Ƭ **HttpClientRequest**: *HttpRequest‹BufferStreamLike› & object*

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

## Functions

### `Const` createHttpClient

▸ **createHttpClient**(`options`: [HttpClientOptions](README.md#httpclientoptions)): *HttpClient‹HttpRequest‹BufferStreamLike›, BufferStreamLike & DisposableLike›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [HttpClientOptions](README.md#httpclientoptions) |  {} |

**Returns:** *HttpClient‹HttpRequest‹BufferStreamLike›, BufferStreamLike & DisposableLike›*

___

### `Const` createHttpRequestListener

▸ **createHttpRequestListener**(`handler`: HttpServer‹HttpServerRequest‹BufferStreamLike›, HttpResponse‹BufferStreamLike››, `scheduler`: SchedulerLike, `options`: [HttpRequestListenerOptions](README.md#httprequestlisteneroptions)): *[HttpRequestListener](README.md#httprequestlistener)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`handler` | HttpServer‹HttpServerRequest‹BufferStreamLike›, HttpResponse‹BufferStreamLike›› | - |
`scheduler` | SchedulerLike | - |
`options` | [HttpRequestListenerOptions](README.md#httprequestlisteneroptions) |  {} |

**Returns:** *[HttpRequestListener](README.md#httprequestlistener)*

___

### `Const` decodeHttpRequest

▸ **decodeHttpRequest**(`options`: BrotliOptions | ZlibOptions): *Operator‹HttpRequest‹BufferStreamLike›, HttpRequest‹BufferStreamLike››*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | BrotliOptions &#124; ZlibOptions |  {} |

**Returns:** *Operator‹HttpRequest‹BufferStreamLike›, HttpRequest‹BufferStreamLike››*

___

### `Const` decodeHttpResponse

▸ **decodeHttpResponse**(`options`: BrotliOptions | ZlibOptions): *Operator‹HttpResponse‹BufferStreamLike›, HttpResponse‹BufferStreamLike››*

**Parameters:**

Name | Type |
------ | ------ |
`options` | BrotliOptions &#124; ZlibOptions |

**Returns:** *Operator‹HttpResponse‹BufferStreamLike›, HttpResponse‹BufferStreamLike››*

___

### `Const` encodeCharsetHttpMessage

▸ **encodeCharsetHttpMessage**(`contentType`: string | MediaType): *Operator‹HttpMessage‹string›, HttpMessage‹BufferStreamLike››*

**Parameters:**

Name | Type |
------ | ------ |
`contentType` | string &#124; MediaType |

**Returns:** *Operator‹HttpMessage‹string›, HttpMessage‹BufferStreamLike››*

___

### `Const` encodeCharsetHttpRequest

▸ **encodeCharsetHttpRequest**(`contentType`: string | MediaType): *Operator‹HttpRequest‹string›, HttpRequest‹BufferStreamLike››*

**Parameters:**

Name | Type |
------ | ------ |
`contentType` | string &#124; MediaType |

**Returns:** *Operator‹HttpRequest‹string›, HttpRequest‹BufferStreamLike››*

___

### `Const` encodeCharsetHttpResponse

▸ **encodeCharsetHttpResponse**(`contentType`: string | MediaType): *Operator‹HttpResponse‹string›, HttpResponse‹BufferStreamLike››*

**Parameters:**

Name | Type |
------ | ------ |
`contentType` | string &#124; MediaType |

**Returns:** *Operator‹HttpResponse‹string›, HttpResponse‹BufferStreamLike››*

___

### `Const` encodeHttpRequest

▸ **encodeHttpRequest**(`options`: BrotliOptions | ZlibOptions): *Operator‹[HttpClientRequest](README.md#httpclientrequest), HttpRequest‹BufferStreamLike››*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | BrotliOptions &#124; ZlibOptions |  {} |

**Returns:** *Operator‹[HttpClientRequest](README.md#httpclientrequest), HttpRequest‹BufferStreamLike››*

___

### `Const` encodeHttpResponse

▸ **encodeHttpResponse**<**TReq**>(`request`: HttpRequest‹TReq›, `options`: [EncodeHttpResponseOptions](README.md#encodehttpresponseoptions) & BrotliOptions | ZlibOptions): *Operator‹HttpResponse‹BufferStreamLike›, HttpResponse‹BufferStreamLike››*

**Type parameters:**

▪ **TReq**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`request` | HttpRequest‹TReq› | - |
`options` | [EncodeHttpResponseOptions](README.md#encodehttpresponseoptions) & BrotliOptions &#124; ZlibOptions |  {} |

**Returns:** *Operator‹HttpResponse‹BufferStreamLike›, HttpResponse‹BufferStreamLike››*

___

### `Const` withDefaultBehaviors

▸ **withDefaultBehaviors**(`options?`: ZlibOptions | BrotliOptions & object): *(Anonymous function)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | ZlibOptions &#124; BrotliOptions & object |

**Returns:** *(Anonymous function)*
