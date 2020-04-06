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

### Functions

* [createBufferContentBody](README.md#const-createbuffercontentbody)
* [createHttpServer](README.md#const-createhttpserver)
* [createReadableContentBody](README.md#const-createreadablecontentbody)
* [createStringContentBody](README.md#const-createstringcontentbody)
* [decodeHttpRequest](README.md#const-decodehttprequest)
* [encodeHttpResponse](README.md#const-encodehttpresponse)
* [sendHttpRequest](README.md#const-sendhttprequest)

## Type aliases

###  HttpClientRequestStatus

Ƭ **HttpClientRequestStatus**: *[HttpClientRequestStatusBegin](interfaces/httpclientrequeststatusbegin.md) | [HttpClientRequestStatusUploading](interfaces/httpclientrequeststatusuploading.md) | [HttpClientRequestStatusUploadComplete](interfaces/httpclientrequeststatusuploadcomplete.md) | [HttpClientRequestStatusResponseReady](interfaces/httpclientrequeststatusresponseready.md)*

## Functions

### `Const` createBufferContentBody

▸ **createBufferContentBody**(`chunk`: Buffer, `contentType`: string): *[HttpContentBodyLike](interfaces/httpcontentbodylike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | Buffer |
`contentType` | string |

**Returns:** *[HttpContentBodyLike](interfaces/httpcontentbodylike.md)*

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

### `Const` createReadableContentBody

▸ **createReadableContentBody**(`factory`: function, `contentType`: string, `contentLength`: number): *[HttpContentBodyLike](interfaces/httpcontentbodylike.md)*

**Parameters:**

▪ **factory**: *function*

▸ (): *Readable*

▪ **contentType**: *string*

▪`Default value`  **contentLength**: *number*=  -1

**Returns:** *[HttpContentBodyLike](interfaces/httpcontentbodylike.md)*

___

### `Const` createStringContentBody

▸ **createStringContentBody**(`content`: string, `contentType`: string): *[HttpContentBodyLike](interfaces/httpcontentbodylike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`content` | string |
`contentType` | string |

**Returns:** *[HttpContentBodyLike](interfaces/httpcontentbodylike.md)*

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

▸ **encodeHttpResponse**(`request`: HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)›, `options`: object): *OperatorLike‹HttpResponseLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)›, HttpResponseLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)››*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`request` | HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)› | - |
`options` | object |  {} |

**Returns:** *OperatorLike‹HttpResponseLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)›, HttpResponseLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)››*

___

### `Const` sendHttpRequest

▸ **sendHttpRequest**(`options`: [HttpClientOptions](interfaces/httpclientoptions.md)): *(Anonymous function)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [HttpClientOptions](interfaces/httpclientoptions.md) |  {} |

**Returns:** *(Anonymous function)*
