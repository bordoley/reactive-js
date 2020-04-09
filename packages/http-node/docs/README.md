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
* [decodeDisposableHttpResponse](README.md#const-decodedisposablehttpresponse)
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

▸ **createBufferHttpContent**(`chunk`: Buffer, `contentType`: string): *HttpContentLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | Buffer |
`contentType` | string |

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

▸ **createReadableHttpContent**(`factory`: function, `contentType`: string, `contentLength`: number): *HttpContentLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››*

**Parameters:**

▪ **factory**: *function*

▸ (): *Readable*

▪ **contentType**: *string*

▪`Default value`  **contentLength**: *number*=  -1

**Returns:** *HttpContentLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››*

___

### `Const` createStringHttpContent

▸ **createStringHttpContent**(`content`: string, `contentType`: string, `charset`: string): *HttpContentLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`content` | string | - |
`contentType` | string | - |
`charset` | string | "utf-8" |

**Returns:** *HttpContentLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››*

___

### `Const` decodeDisposableHttpResponse

▸ **decodeDisposableHttpResponse**(`options`: BrotliOptions | ZlibOptions): *OperatorLike‹HttpResponseLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››, HttpResponseLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent›››*

**Parameters:**

Name | Type |
------ | ------ |
`options` | BrotliOptions &#124; ZlibOptions |

**Returns:** *OperatorLike‹HttpResponseLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››, HttpResponseLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent›››*

___

### `Const` decodeHttpRequest

▸ **decodeHttpRequest**(`options`: BrotliOptions | ZlibOptions): *OperatorLike‹HttpRequestLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››, HttpRequestLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent›››*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | BrotliOptions &#124; ZlibOptions |  {} |

**Returns:** *OperatorLike‹HttpRequestLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››, HttpRequestLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent›››*

___

### `Const` encodeHttpResponse

▸ **encodeHttpResponse**(`request`: HttpRequestLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››, `options`: [EncodeHttpResponseOptions](interfaces/encodehttpresponseoptions.md) & BrotliOptions | ZlibOptions): *OperatorLike‹HttpResponseLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››, HttpResponseLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent›››*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`request` | HttpRequestLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent›› | - |
`options` | [EncodeHttpResponseOptions](interfaces/encodehttpresponseoptions.md) & BrotliOptions &#124; ZlibOptions |  {} |

**Returns:** *OperatorLike‹HttpResponseLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››, HttpResponseLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent›››*
