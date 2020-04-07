[@reactive-js/http-node](README.md)

# @reactive-js/http-node

## Index

### Enumerations

* [HttpClientRequestStatusType](enums/httpclientrequeststatustype.md)

### Interfaces

* [EncodeHttpResponseOptions](interfaces/encodehttpresponseoptions.md)
* [HttpClientOptions](interfaces/httpclientoptions.md)
* [HttpClientRequestStatusBegin](interfaces/httpclientrequeststatusbegin.md)
* [HttpClientRequestStatusResponseReady](interfaces/httpclientrequeststatusresponseready.md)
* [HttpClientRequestStatusUploadComplete](interfaces/httpclientrequeststatusuploadcomplete.md)
* [HttpClientRequestStatusUploading](interfaces/httpclientrequeststatusuploading.md)
* [HttpContentBodyLike](interfaces/httpcontentbodylike.md)
* [HttpRequestListenerOptions](interfaces/httprequestlisteneroptions.md)

### Type aliases

* [HttpClientRequestStatus](README.md#httpclientrequeststatus)

### Functions

* [createBufferContentBody](README.md#const-createbuffercontentbody)
* [createReadableContentBody](README.md#const-createreadablecontentbody)
* [createRequestListener](README.md#const-createrequestlistener)
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

### `Const` createReadableContentBody

▸ **createReadableContentBody**(`factory`: function, `contentType`: string, `contentLength`: number): *[HttpContentBodyLike](interfaces/httpcontentbodylike.md)*

**Parameters:**

▪ **factory**: *function*

▸ (): *Readable*

▪ **contentType**: *string*

▪`Default value`  **contentLength**: *number*=  -1

**Returns:** *[HttpContentBodyLike](interfaces/httpcontentbodylike.md)*

___

### `Const` createRequestListener

▸ **createRequestListener**(`handler`: function, `scheduler`: SchedulerLike, `options`: [HttpRequestListenerOptions](interfaces/httprequestlisteneroptions.md)): *RequestListener*

**Parameters:**

▪ **handler**: *function*

▸ (`req`: HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)›): *ObservableLike‹HttpResponseLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)››*

**Parameters:**

Name | Type |
------ | ------ |
`req` | HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)› |

▪ **scheduler**: *SchedulerLike*

▪`Default value`  **options**: *[HttpRequestListenerOptions](interfaces/httprequestlisteneroptions.md)*=  {}

**Returns:** *RequestListener*

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

▸ **decodeHttpRequest**(`options`: BrotliOptions | ZlibOptions): *OperatorLike‹HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)›, HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)››*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | BrotliOptions &#124; ZlibOptions |  {} |

**Returns:** *OperatorLike‹HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)›, HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)››*

___

### `Const` encodeHttpResponse

▸ **encodeHttpResponse**(`request`: HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)›, `options`: [EncodeHttpResponseOptions](interfaces/encodehttpresponseoptions.md) & BrotliOptions | ZlibOptions): *OperatorLike‹HttpResponseLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)›, HttpResponseLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)››*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`request` | HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)› | - |
`options` | [EncodeHttpResponseOptions](interfaces/encodehttpresponseoptions.md) & BrotliOptions &#124; ZlibOptions |  {} |

**Returns:** *OperatorLike‹HttpResponseLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)›, HttpResponseLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)››*

___

### `Const` sendHttpRequest

▸ **sendHttpRequest**(`options`: [HttpClientOptions](interfaces/httpclientoptions.md)): *(Anonymous function)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [HttpClientOptions](interfaces/httpclientoptions.md) |  {} |

**Returns:** *(Anonymous function)*
