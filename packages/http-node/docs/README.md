[@reactive-js/http-node - v0.0.35](README.md)

# @reactive-js/http-node - v0.0.35

## Index

### Type aliases

* [EncodeHttpResponseOptions](README.md#encodehttpresponseoptions)
* [HttpClientOptions](README.md#httpclientoptions)
* [HttpClientRequest](README.md#httpclientrequest)
* [HttpRequestListener](README.md#httprequestlistener)
* [HttpRequestListenerOptions](README.md#httprequestlisteneroptions)

### Functions

* [createBufferHttpContent](README.md#const-createbufferhttpcontent)
* [createHttpClient](README.md#const-createhttpclient)
* [createHttpRequestListener](README.md#const-createhttprequestlistener)
* [createReadableHttpContent](README.md#const-createreadablehttpcontent)
* [createStringHttpContent](README.md#const-createstringhttpcontent)
* [decodeHttpContentResponse](README.md#const-decodehttpcontentresponse)
* [decodeHttpRequest](README.md#const-decodehttprequest)
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

Ƭ **HttpClientRequest**: *HttpContentRequest‹BufferStreamLike› & object*

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

### `Const` createBufferHttpContent

▸ **createBufferHttpContent**(`chunk`: Buffer, `contentType`: MediaType | string): *HttpContent‹StreamLike‹Buffer››*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | Buffer |
`contentType` | MediaType &#124; string |

**Returns:** *HttpContent‹StreamLike‹Buffer››*

___

### `Const` createHttpClient

▸ **createHttpClient**(`options`: [HttpClientOptions](README.md#httpclientoptions)): *HttpClient‹BufferStreamLike, HttpContentRequest‹BufferStreamLike›, BufferStreamLike & DisposableLike›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [HttpClientOptions](README.md#httpclientoptions) |  {} |

**Returns:** *HttpClient‹BufferStreamLike, HttpContentRequest‹BufferStreamLike›, BufferStreamLike & DisposableLike›*

___

### `Const` createHttpRequestListener

▸ **createHttpRequestListener**(`handler`: HttpServer‹BufferStreamLike, BufferStreamLike›, `scheduler`: SchedulerLike, `options`: [HttpRequestListenerOptions](README.md#httprequestlisteneroptions)): *[HttpRequestListener](README.md#httprequestlistener)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`handler` | HttpServer‹BufferStreamLike, BufferStreamLike› | - |
`scheduler` | SchedulerLike | - |
`options` | [HttpRequestListenerOptions](README.md#httprequestlisteneroptions) |  {} |

**Returns:** *[HttpRequestListener](README.md#httprequestlistener)*

___

### `Const` createReadableHttpContent

▸ **createReadableHttpContent**(`factory`: function, `contentType`: MediaType | string, `contentLength`: number): *HttpContent‹StreamLike‹Buffer››*

**Parameters:**

▪ **factory**: *function*

▸ (): *Readable*

▪ **contentType**: *MediaType | string*

▪`Default value`  **contentLength**: *number*=  -1

**Returns:** *HttpContent‹StreamLike‹Buffer››*

___

### `Const` createStringHttpContent

▸ **createStringHttpContent**(`content`: string, `contentType`: MediaType | string): *HttpContent‹StreamLike‹Buffer››*

**Parameters:**

Name | Type |
------ | ------ |
`content` | string |
`contentType` | MediaType &#124; string |

**Returns:** *HttpContent‹StreamLike‹Buffer››*

___

### `Const` decodeHttpContentResponse

▸ **decodeHttpContentResponse**(`options`: BrotliOptions | ZlibOptions): *Operator‹HttpContentResponse‹BufferStreamLike›, HttpContentResponse‹BufferStreamLike››*

**Parameters:**

Name | Type |
------ | ------ |
`options` | BrotliOptions &#124; ZlibOptions |

**Returns:** *Operator‹HttpContentResponse‹BufferStreamLike›, HttpContentResponse‹BufferStreamLike››*

___

### `Const` decodeHttpRequest

▸ **decodeHttpRequest**(`options`: BrotliOptions | ZlibOptions): *Operator‹HttpContentRequest‹BufferStreamLike›, HttpContentRequest‹BufferStreamLike››*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | BrotliOptions &#124; ZlibOptions |  {} |

**Returns:** *Operator‹HttpContentRequest‹BufferStreamLike›, HttpContentRequest‹BufferStreamLike››*

___

### `Const` encodeHttpRequest

▸ **encodeHttpRequest**(`encoding`: HttpContentEncoding, `options`: BrotliOptions | ZlibOptions): *Operator‹HttpContentRequest‹BufferStreamLike›, HttpContentRequest‹BufferStreamLike››*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`encoding` | HttpContentEncoding | - |
`options` | BrotliOptions &#124; ZlibOptions |  {} |

**Returns:** *Operator‹HttpContentRequest‹BufferStreamLike›, HttpContentRequest‹BufferStreamLike››*

___

### `Const` encodeHttpResponse

▸ **encodeHttpResponse**<**TReq**>(`request`: HttpContentRequest‹TReq›, `options`: [EncodeHttpResponseOptions](README.md#encodehttpresponseoptions) & BrotliOptions | ZlibOptions): *Operator‹HttpContentResponse‹BufferStreamLike›, HttpContentResponse‹BufferStreamLike››*

**Type parameters:**

▪ **TReq**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`request` | HttpContentRequest‹TReq› | - |
`options` | [EncodeHttpResponseOptions](README.md#encodehttpresponseoptions) & BrotliOptions &#124; ZlibOptions |  {} |

**Returns:** *Operator‹HttpContentResponse‹BufferStreamLike›, HttpContentResponse‹BufferStreamLike››*

___

### `Const` withDefaultBehaviors

▸ **withDefaultBehaviors**(`options?`: ZlibOptions | BrotliOptions & object): *(Anonymous function)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | ZlibOptions &#124; BrotliOptions & object |

**Returns:** *(Anonymous function)*
