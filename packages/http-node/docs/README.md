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
* [HttpRoutedRequestLike](interfaces/httproutedrequestlike.md)

### Type aliases

* [HttpClientRequestStatus](README.md#httpclientrequeststatus)
* [HttpRequestRouterHandler](README.md#httprequestrouterhandler)

### Functions

* [checkIfNotModified](README.md#const-checkifnotmodified)
* [creatHttpClient](README.md#const-creathttpclient)
* [createBufferHttpContent](README.md#const-createbufferhttpcontent)
* [createDefaultHttpResponseHandler](README.md#const-createdefaulthttpresponsehandler)
* [createHttpRequestListener](README.md#const-createhttprequestlistener)
* [createReadableHttpContent](README.md#const-createreadablehttpcontent)
* [createRouter](README.md#const-createrouter)
* [createStringHttpContent](README.md#const-createstringhttpcontent)
* [decodeHttpRequest](README.md#const-decodehttprequest)
* [encodeHttpResponse](README.md#const-encodehttpresponse)

## Type aliases

###  HttpClientRequestStatus

Ƭ **HttpClientRequestStatus**: *[HttpClientRequestStatusBegin](interfaces/httpclientrequeststatusbegin.md) | [HttpClientRequestStatusUploading](interfaces/httpclientrequeststatusuploading.md) | [HttpClientRequestStatusUploadComplete](interfaces/httpclientrequeststatusuploadcomplete.md) | [HttpClientRequestStatusResponseReady](interfaces/httpclientrequeststatusresponseready.md)*

___

###  HttpRequestRouterHandler

Ƭ **HttpRequestRouterHandler**: *OperatorLike‹[HttpRoutedRequestLike](interfaces/httproutedrequestlike.md)‹TReq›, ObservableLike‹HttpResponseLike‹TResp›››*

## Functions

### `Const` checkIfNotModified

▸ **checkIfNotModified**<**T**>(`__namedParameters`: object): *OperatorLike‹HttpResponseLike‹T›, HttpResponseLike‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *OperatorLike‹HttpResponseLike‹T›, HttpResponseLike‹T››*

___

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

### `Const` createRouter

▸ **createRouter**<**TReq**, **TResp**>(`routes`: object, `notFoundHandler`: OperatorLike‹HttpRequestLike‹TReq›, ObservableLike‹HttpResponseLike‹TResp›››): *OperatorLike‹HttpRequestLike‹TReq›, ObservableLike‹HttpResponseLike‹TResp›››*

**Type parameters:**

▪ **TReq**

▪ **TResp**

**Parameters:**

Name | Type |
------ | ------ |
`routes` | object |
`notFoundHandler` | OperatorLike‹HttpRequestLike‹TReq›, ObservableLike‹HttpResponseLike‹TResp››› |

**Returns:** *OperatorLike‹HttpRequestLike‹TReq›, ObservableLike‹HttpResponseLike‹TResp›››*

___

### `Const` createStringHttpContent

▸ **createStringHttpContent**(`content`: string, `contentType`: string): *HttpContentLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››*

**Parameters:**

Name | Type |
------ | ------ |
`content` | string |
`contentType` | string |

**Returns:** *HttpContentLike‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››*

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
