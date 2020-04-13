[@reactive-js/http-node](README.md)

# @reactive-js/http-node

## Index

### Enumerations

* [HttpClientRequestStatusType](enums/httpclientrequeststatustype.md)

### Interfaces

* [EncodeHttpResponseOptions](interfaces/encodehttpresponseoptions.md)
* [HttpClient](interfaces/httpclient.md)
* [HttpClientOptions](interfaces/httpclientoptions.md)
* [HttpClientRequestOptions](interfaces/httpclientrequestoptions.md)
* [HttpClientRequestStatusBegin](interfaces/httpclientrequeststatusbegin.md)
* [HttpClientRequestStatusResponseReady](interfaces/httpclientrequeststatusresponseready.md)
* [HttpClientRequestStatusUploadComplete](interfaces/httpclientrequeststatusuploadcomplete.md)
* [HttpClientRequestStatusUploading](interfaces/httpclientrequeststatusuploading.md)
* [HttpRequestListenerHandler](interfaces/httprequestlistenerhandler.md)
* [HttpRequestListenerOptions](interfaces/httprequestlisteneroptions.md)

### Type aliases

* [HttpClientRequestStatus](README.md#httpclientrequeststatus)

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

###  HttpClientRequestStatus

Ƭ **HttpClientRequestStatus**: *[HttpClientRequestStatusBegin](interfaces/httpclientrequeststatusbegin.md) | [HttpClientRequestStatusUploading](interfaces/httpclientrequeststatusuploading.md) | [HttpClientRequestStatusUploadComplete](interfaces/httpclientrequeststatusuploadcomplete.md) | [HttpClientRequestStatusResponseReady](interfaces/httpclientrequeststatusresponseready.md)*

## Functions

### `Const` creatHttpClient

▸ **creatHttpClient**(`clientOptions`: [HttpClientOptions](interfaces/httpclientoptions.md)): *[HttpClient](interfaces/httpclient.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`clientOptions` | [HttpClientOptions](interfaces/httpclientoptions.md) |  {} |

**Returns:** *[HttpClient](interfaces/httpclient.md)*

___

### `Const` createBufferHttpContent

▸ **createBufferHttpContent**(`chunk`: Buffer, `contentType`: MediaType | string): *HttpContentLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | Buffer |
`contentType` | MediaType &#124; string |

**Returns:** *HttpContentLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››*

___

### `Const` createDefaultHttpResponseHandler

▸ **createDefaultHttpResponseHandler**(`sendHttpRequest`: [HttpClient](interfaces/httpclient.md), `maxRedirects`: number): *ObservableOperatorLike‹[HttpClientRequestStatus](README.md#httpclientrequeststatus), [HttpClientRequestStatus](README.md#httpclientrequeststatus)›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`sendHttpRequest` | [HttpClient](interfaces/httpclient.md) | - |
`maxRedirects` | number | 10 |

**Returns:** *ObservableOperatorLike‹[HttpClientRequestStatus](README.md#httpclientrequeststatus), [HttpClientRequestStatus](README.md#httpclientrequeststatus)›*

___

### `Const` createHttpRequestListener

▸ **createHttpRequestListener**(`handler`: [HttpRequestListenerHandler](interfaces/httprequestlistenerhandler.md), `scheduler`: SchedulerLike, `options`: [HttpRequestListenerOptions](interfaces/httprequestlisteneroptions.md)): *RequestListener*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`handler` | [HttpRequestListenerHandler](interfaces/httprequestlistenerhandler.md) | - |
`scheduler` | SchedulerLike | - |
`options` | [HttpRequestListenerOptions](interfaces/httprequestlisteneroptions.md) |  {} |

**Returns:** *RequestListener*

___

### `Const` createReadableHttpContent

▸ **createReadableHttpContent**(`factory`: function, `contentType`: MediaType | string, `contentLength`: number): *HttpContentLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››*

**Parameters:**

▪ **factory**: *function*

▸ (): *Readable*

▪ **contentType**: *MediaType | string*

▪`Default value`  **contentLength**: *number*=  -1

**Returns:** *HttpContentLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››*

___

### `Const` createStringHttpContent

▸ **createStringHttpContent**(`content`: string, `contentType`: MediaType | string): *HttpContentLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››*

**Parameters:**

Name | Type |
------ | ------ |
`content` | string |
`contentType` | MediaType &#124; string |

**Returns:** *HttpContentLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››*

___

### `Const` decodeHttpContentResponse

▸ **decodeHttpContentResponse**(`options`: BrotliOptions | ZlibOptions): *OperatorLike‹HttpContentResponseLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››, HttpContentResponseLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent›››*

**Parameters:**

Name | Type |
------ | ------ |
`options` | BrotliOptions &#124; ZlibOptions |

**Returns:** *OperatorLike‹HttpContentResponseLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››, HttpContentResponseLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent›››*

___

### `Const` decodeHttpRequest

▸ **decodeHttpRequest**(`options`: BrotliOptions | ZlibOptions): *OperatorLike‹HttpContentRequestLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››, HttpContentRequestLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent›››*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | BrotliOptions &#124; ZlibOptions |  {} |

**Returns:** *OperatorLike‹HttpContentRequestLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››, HttpContentRequestLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent›››*

___

### `Const` encodeHttpResponse

▸ **encodeHttpResponse**<**TReq**>(`request`: HttpContentRequestLike‹TReq›, `options`: [EncodeHttpResponseOptions](interfaces/encodehttpresponseoptions.md) & BrotliOptions | ZlibOptions): *OperatorLike‹HttpContentResponseLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››, HttpContentResponseLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent›››*

**Type parameters:**

▪ **TReq**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`request` | HttpContentRequestLike‹TReq› | - |
`options` | [EncodeHttpResponseOptions](interfaces/encodehttpresponseoptions.md) & BrotliOptions &#124; ZlibOptions |  {} |

**Returns:** *OperatorLike‹HttpContentResponseLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››, HttpContentResponseLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent›››*
