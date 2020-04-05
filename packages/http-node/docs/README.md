[@reactive-js/http-node](README.md)

# @reactive-js/http-node

## Index

### Enumerations

* [HttpClientRequestStatusType](enums/httpclientrequeststatustype.md)
* [HttpContentEncoding](enums/httpcontentencoding.md)

### Interfaces

* [HttpClientOptions](interfaces/httpclientoptions.md)
* [HttpClientRequestStatusBegin](interfaces/httpclientrequeststatusbegin.md)
* [HttpClientRequestStatusResponseReady](interfaces/httpclientrequeststatusresponseready.md)
* [HttpClientRequestStatusUploadComplete](interfaces/httpclientrequeststatusuploadcomplete.md)
* [HttpClientRequestStatusUploading](interfaces/httpclientrequeststatusuploading.md)
* [HttpClientResponseLike](interfaces/httpclientresponselike.md)
* [HttpContentBodyLike](interfaces/httpcontentbodylike.md)

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

▸ **createHttpServer**(`requestHandler`: function, `options`: object & SecureContextOptions & TlsOptions & ServerOptions): *OperatorLike‹void, ObservableLike‹void››*

**Parameters:**

▪ **requestHandler**: *function*

▸ (`req`: HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)›): *ObservableLike‹HttpResponseLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)››*

**Parameters:**

Name | Type |
------ | ------ |
`req` | HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)› |

▪ **options**: *object & SecureContextOptions & TlsOptions & ServerOptions*

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

▸ **decodeHttpRequest**(`request`: HttpRequestLike‹HttpEncodingContentBodyLike›): *HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`request` | HttpRequestLike‹HttpEncodingContentBodyLike› |

**Returns:** *HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)›*

___

### `Const` encodeHttpResponse

▸ **encodeHttpResponse**(`acceptedEncodings`: keyof HttpContentEncoding[]): *(Anonymous function)*

**Parameters:**

Name | Type |
------ | ------ |
`acceptedEncodings` | keyof HttpContentEncoding[] |

**Returns:** *(Anonymous function)*

___

### `Const` sendHttpRequest

▸ **sendHttpRequest**(`options`: [HttpClientOptions](interfaces/httpclientoptions.md)): *(Anonymous function)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [HttpClientOptions](interfaces/httpclientoptions.md) |  {} |

**Returns:** *(Anonymous function)*
