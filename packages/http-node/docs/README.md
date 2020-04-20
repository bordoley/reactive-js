[@reactive-js/http-node - v0.0.34](README.md)

# @reactive-js/http-node - v0.0.34

## Index

### Enumerations

* [HttpClientRequestStatusType](enums/httpclientrequeststatustype.md)

### Interfaces

* [HttpClientLike](interfaces/httpclientlike.md)

### Type aliases

* [EncodeHttpResponseOptions](README.md#encodehttpresponseoptions)
* [HttpClientOptions](README.md#httpclientoptions)
* [HttpClientRequestOptions](README.md#httpclientrequestoptions)
* [HttpClientRequestStatus](README.md#httpclientrequeststatus)
* [HttpClientRequestStatusBegin](README.md#httpclientrequeststatusbegin)
* [HttpClientRequestStatusResponseReady](README.md#httpclientrequeststatusresponseready)
* [HttpClientRequestStatusUploadComplete](README.md#httpclientrequeststatusuploadcomplete)
* [HttpClientRequestStatusUploading](README.md#httpclientrequeststatusuploading)
* [HttpRequestListener](README.md#httprequestlistener)
* [HttpRequestListenerHandler](README.md#httprequestlistenerhandler)
* [HttpRequestListenerOptions](README.md#httprequestlisteneroptions)

### Functions

* [creatHttpClient](README.md#const-creathttpclient)
* [createBufferHttpContent](README.md#const-createbufferhttpcontent)
* [createDefaultHttpResponseHandler](README.md#const-createdefaulthttpresponsehandler)
* [createHttpRequestListener](README.md#const-createhttprequestlistener)
* [createReadableHttpContent](README.md#const-createreadablehttpcontent)
* [createStringHttpContent](README.md#const-createstringhttpcontent)
* [decodeHttpContentResponse](README.md#const-decodehttpcontentresponse)
* [decodeHttpRequest](README.md#const-decodehttprequest)
* [encodeHttpResponse](README.md#const-encodehttpresponse)

## Type aliases

###  EncodeHttpResponseOptions

Ƭ **EncodeHttpResponseOptions**: *object*

#### Type declaration:

___

###  HttpClientOptions

Ƭ **HttpClientOptions**: *BrotliOptions & ZlibOptions & object*

___

###  HttpClientRequestOptions

Ƭ **HttpClientRequestOptions**: *object*

#### Type declaration:

___

###  HttpClientRequestStatus

Ƭ **HttpClientRequestStatus**: *[HttpClientRequestStatusBegin](README.md#httpclientrequeststatusbegin) | [HttpClientRequestStatusUploading](README.md#httpclientrequeststatusuploading) | [HttpClientRequestStatusUploadComplete](README.md#httpclientrequeststatusuploadcomplete) | [HttpClientRequestStatusResponseReady](README.md#httpclientrequeststatusresponseready)*

___

###  HttpClientRequestStatusBegin

Ƭ **HttpClientRequestStatusBegin**: *object*

#### Type declaration:

___

###  HttpClientRequestStatusResponseReady

Ƭ **HttpClientRequestStatusResponseReady**: *object*

#### Type declaration:

___

###  HttpClientRequestStatusUploadComplete

Ƭ **HttpClientRequestStatusUploadComplete**: *object*

#### Type declaration:

___

###  HttpClientRequestStatusUploading

Ƭ **HttpClientRequestStatusUploading**: *object*

#### Type declaration:

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

###  HttpRequestListenerHandler

Ƭ **HttpRequestListenerHandler**: *function*

#### Type declaration:

▸ (`req`: HttpServerRequest‹AsyncEnumerableLike‹StreamMode, StreamEvent‹Buffer›››): *ObservableLike‹HttpContentResponse‹AsyncEnumerableLike‹StreamMode, StreamEvent‹Buffer››››*

**Parameters:**

Name | Type |
------ | ------ |
`req` | HttpServerRequest‹AsyncEnumerableLike‹StreamMode, StreamEvent‹Buffer››› |

___

###  HttpRequestListenerOptions

Ƭ **HttpRequestListenerOptions**: *object*

#### Type declaration:

## Functions

### `Const` creatHttpClient

▸ **creatHttpClient**(`clientOptions`: [HttpClientOptions](README.md#httpclientoptions)): *[HttpClientLike](interfaces/httpclientlike.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`clientOptions` | [HttpClientOptions](README.md#httpclientoptions) |  {} |

**Returns:** *[HttpClientLike](interfaces/httpclientlike.md)*

___

### `Const` createBufferHttpContent

▸ **createBufferHttpContent**(`chunk`: Buffer, `contentType`: MediaType | string): *HttpContent‹StreamLike‹Buffer››*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | Buffer |
`contentType` | MediaType &#124; string |

**Returns:** *HttpContent‹StreamLike‹Buffer››*

___

### `Const` createDefaultHttpResponseHandler

▸ **createDefaultHttpResponseHandler**(`httpClient`: [HttpClientLike](interfaces/httpclientlike.md), `maxRedirects`: number): *ObservableOperator‹[HttpClientRequestStatus](README.md#httpclientrequeststatus), [HttpClientRequestStatus](README.md#httpclientrequeststatus)›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`httpClient` | [HttpClientLike](interfaces/httpclientlike.md) | - |
`maxRedirects` | number | 10 |

**Returns:** *ObservableOperator‹[HttpClientRequestStatus](README.md#httpclientrequeststatus), [HttpClientRequestStatus](README.md#httpclientrequeststatus)›*

___

### `Const` createHttpRequestListener

▸ **createHttpRequestListener**(`handler`: [HttpRequestListenerHandler](README.md#httprequestlistenerhandler), `scheduler`: SchedulerLike, `options`: [HttpRequestListenerOptions](README.md#httprequestlisteneroptions)): *[HttpRequestListener](README.md#httprequestlistener)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`handler` | [HttpRequestListenerHandler](README.md#httprequestlistenerhandler) | - |
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
