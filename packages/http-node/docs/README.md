[@reactive-js/http-node](README.md)

# @reactive-js/http-node

## Index

### Enumerations

* [HttpClientRequestStatusType](enums/httpclientrequeststatustype.md)

### Interfaces

* [HttpClientOptions](interfaces/httpclientoptions.md)
* [HttpClientRequestStatusBegin](interfaces/httpclientrequeststatusbegin.md)
* [HttpClientRequestStatusResponseReady](interfaces/httpclientrequeststatusresponseready.md)
* [HttpClientRequestStatusUploadComplete](interfaces/httpclientrequeststatusuploadcomplete.md)
* [HttpClientRequestStatusUploading](interfaces/httpclientrequeststatusuploading.md)
* [HttpClientResponseLike](interfaces/httpclientresponselike.md)
* [HttpContentBodyLike](interfaces/httpcontentbodylike.md)
* [HttpServerOptions](interfaces/httpserveroptions.md)

### Type aliases

* [HttpClientRequestStatus](README.md#httpclientrequeststatus)

### Variables

* [emptyContentBody](README.md#const-emptycontentbody)

### Functions

* [createBufferContentBody](README.md#const-createbuffercontentbody)
* [createHttpServer](README.md#const-createhttpserver)
* [createStringContentBody](README.md#const-createstringcontentbody)
* [decodeHttpRequest](README.md#const-decodehttprequest)
* [encodeHttpResponse](README.md#const-encodehttpresponse)
* [sendHttpRequest](README.md#const-sendhttprequest)

## Type aliases

###  HttpClientRequestStatus

Ƭ **HttpClientRequestStatus**: *[HttpClientRequestStatusBegin](interfaces/httpclientrequeststatusbegin.md) | [HttpClientRequestStatusUploading](interfaces/httpclientrequeststatusuploading.md) | [HttpClientRequestStatusUploadComplete](interfaces/httpclientrequeststatusuploadcomplete.md) | [HttpClientRequestStatusResponseReady](interfaces/httpclientrequeststatusresponseready.md)*

## Variables

### `Const` emptyContentBody

• **emptyContentBody**: *[HttpContentBodyLike](interfaces/httpcontentbodylike.md)* =  new ContentBodyImpl(
  emptyReadableAsyncEnumerable,
  [],
  0,
  "",
)

## Functions

### `Const` createBufferContentBody

▸ **createBufferContentBody**(`chunk`: Buffer, `contentType`: string): *ContentBodyImpl‹›*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | Buffer |
`contentType` | string |

**Returns:** *ContentBodyImpl‹›*

___

### `Const` createHttpServer

▸ **createHttpServer**(`requestHandler`: function, `options`: [HttpServerOptions](interfaces/httpserveroptions.md) & SecureContextOptions & TlsOptions & ServerOptions): *OperatorLike‹void, ObservableLike‹void››*

**Parameters:**

▪ **requestHandler**: *function*

▸ (`req`: HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)›): *ObservableLike‹HttpResponseLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)››*

**Parameters:**

Name | Type |
------ | ------ |
`req` | HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)› |

▪ **options**: *[HttpServerOptions](interfaces/httpserveroptions.md) & SecureContextOptions & TlsOptions & ServerOptions*

**Returns:** *OperatorLike‹void, ObservableLike‹void››*

___

### `Const` createStringContentBody

▸ **createStringContentBody**(`content`: string, `contentType`: string): *ContentBodyImpl‹›*

**Parameters:**

Name | Type |
------ | ------ |
`content` | string |
`contentType` | string |

**Returns:** *ContentBodyImpl‹›*

___

### `Const` decodeHttpRequest

▸ **decodeHttpRequest**(`request`: HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)›, `options`: BrotliOptions | ZlibOptions): *HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`request` | HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)› | - |
`options` | BrotliOptions &#124; ZlibOptions |  {} |

**Returns:** *HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)›*

___

### `Const` encodeHttpResponse

▸ **encodeHttpResponse**(`shouldEncode`: function, `options`: BrotliOptions | ZlibOptions): *(Anonymous function)*

**Parameters:**

▪ **shouldEncode**: *function*

▸ (`req`: HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)›, `resp`: HttpResponseLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)›): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`req` | HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)› |
`resp` | HttpResponseLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)› |

▪`Default value`  **options**: *BrotliOptions | ZlibOptions*=  {}

**Returns:** *(Anonymous function)*

___

### `Const` sendHttpRequest

▸ **sendHttpRequest**(`options`: [HttpClientOptions](interfaces/httpclientoptions.md)): *(Anonymous function)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [HttpClientOptions](interfaces/httpclientoptions.md) |  {} |

**Returns:** *(Anonymous function)*
