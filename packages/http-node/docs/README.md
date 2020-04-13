[@reactive-js/http-node](README.md)

# @reactive-js/http-node

## Index

### Enumerations

* [HttpClientRequestStatusType](enums/httpclientrequeststatustype.md)

### Type aliases

* [EncodeHttpResponseOptions](README.md#encodehttpresponseoptions)
* [HttpClient](README.md#httpclient)
* [HttpClientOptions](README.md#httpclientoptions)
* [HttpClientRequestOptions](README.md#httpclientrequestoptions)
* [HttpClientRequestStatus](README.md#httpclientrequeststatus)
* [HttpClientRequestStatusBegin](README.md#httpclientrequeststatusbegin)
* [HttpClientRequestStatusResponseReady](README.md#httpclientrequeststatusresponseready)
* [HttpClientRequestStatusUploadComplete](README.md#httpclientrequeststatusuploadcomplete)
* [HttpClientRequestStatusUploading](README.md#httpclientrequeststatusuploading)
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

###  HttpClient

Ƭ **HttpClient**: *function*

#### Type declaration:

▸ (`request`: HttpContentRequest‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››, `requestOptions?`: [HttpClientRequestOptions](README.md#httpclientrequestoptions)): *ObservableLike‹[HttpClientRequestStatus](README.md#httpclientrequeststatus)›*

**Parameters:**

Name | Type |
------ | ------ |
`request` | HttpContentRequest‹AsyncEnumerableLike‹ReadableMode, ReadableEvent›› |
`requestOptions?` | [HttpClientRequestOptions](README.md#httpclientrequestoptions) |

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

###  HttpRequestListenerHandler

Ƭ **HttpRequestListenerHandler**: *function*

#### Type declaration:

▸ (`req`: HttpServerRequest‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››): *ObservableLike‹HttpContentResponse‹AsyncEnumerableLike‹ReadableMode, ReadableEvent›››*

**Parameters:**

Name | Type |
------ | ------ |
`req` | HttpServerRequest‹AsyncEnumerableLike‹ReadableMode, ReadableEvent›› |

___

###  HttpRequestListenerOptions

Ƭ **HttpRequestListenerOptions**: *object*

#### Type declaration:

## Functions

### `Const` creatHttpClient

▸ **creatHttpClient**(`clientOptions`: [HttpClientOptions](README.md#httpclientoptions)): *[HttpClient](README.md#httpclient)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`clientOptions` | [HttpClientOptions](README.md#httpclientoptions) |  {} |

**Returns:** *[HttpClient](README.md#httpclient)*

___

### `Const` createBufferHttpContent

▸ **createBufferHttpContent**(`chunk`: Buffer, `contentType`: MediaType | string): *HttpContent‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››*

**Parameters:**

Name | Type |
------ | ------ |
`chunk` | Buffer |
`contentType` | MediaType &#124; string |

**Returns:** *HttpContent‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››*

___

### `Const` createDefaultHttpResponseHandler

▸ **createDefaultHttpResponseHandler**(`sendHttpRequest`: [HttpClient](README.md#httpclient), `maxRedirects`: number): *ObservableOperator‹[HttpClientRequestStatus](README.md#httpclientrequeststatus), [HttpClientRequestStatus](README.md#httpclientrequeststatus)›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`sendHttpRequest` | [HttpClient](README.md#httpclient) | - |
`maxRedirects` | number | 10 |

**Returns:** *ObservableOperator‹[HttpClientRequestStatus](README.md#httpclientrequeststatus), [HttpClientRequestStatus](README.md#httpclientrequeststatus)›*

___

### `Const` createHttpRequestListener

▸ **createHttpRequestListener**(`handler`: [HttpRequestListenerHandler](README.md#httprequestlistenerhandler), `scheduler`: SchedulerLike, `options`: [HttpRequestListenerOptions](README.md#httprequestlisteneroptions)): *RequestListener*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`handler` | [HttpRequestListenerHandler](README.md#httprequestlistenerhandler) | - |
`scheduler` | SchedulerLike | - |
`options` | [HttpRequestListenerOptions](README.md#httprequestlisteneroptions) |  {} |

**Returns:** *RequestListener*

___

### `Const` createReadableHttpContent

▸ **createReadableHttpContent**(`factory`: function, `contentType`: MediaType | string, `contentLength`: number): *HttpContent‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››*

**Parameters:**

▪ **factory**: *function*

▸ (): *Readable*

▪ **contentType**: *MediaType | string*

▪`Default value`  **contentLength**: *number*=  -1

**Returns:** *HttpContent‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››*

___

### `Const` createStringHttpContent

▸ **createStringHttpContent**(`content`: string, `contentType`: MediaType | string): *HttpContent‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››*

**Parameters:**

Name | Type |
------ | ------ |
`content` | string |
`contentType` | MediaType &#124; string |

**Returns:** *HttpContent‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››*

___

### `Const` decodeHttpContentResponse

▸ **decodeHttpContentResponse**(`options`: BrotliOptions | ZlibOptions): *Operator‹HttpContentResponse‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››, HttpContentResponse‹AsyncEnumerableLike‹ReadableMode, ReadableEvent›››*

**Parameters:**

Name | Type |
------ | ------ |
`options` | BrotliOptions &#124; ZlibOptions |

**Returns:** *Operator‹HttpContentResponse‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››, HttpContentResponse‹AsyncEnumerableLike‹ReadableMode, ReadableEvent›››*

___

### `Const` decodeHttpRequest

▸ **decodeHttpRequest**(`options`: BrotliOptions | ZlibOptions): *Operator‹HttpContentRequest‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››, HttpContentRequest‹AsyncEnumerableLike‹ReadableMode, ReadableEvent›››*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | BrotliOptions &#124; ZlibOptions |  {} |

**Returns:** *Operator‹HttpContentRequest‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››, HttpContentRequest‹AsyncEnumerableLike‹ReadableMode, ReadableEvent›››*

___

### `Const` encodeHttpResponse

▸ **encodeHttpResponse**<**TReq**>(`request`: HttpContentRequest‹TReq›, `options`: [EncodeHttpResponseOptions](README.md#encodehttpresponseoptions) & BrotliOptions | ZlibOptions): *Operator‹HttpContentResponse‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››, HttpContentResponse‹AsyncEnumerableLike‹ReadableMode, ReadableEvent›››*

**Type parameters:**

▪ **TReq**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`request` | HttpContentRequest‹TReq› | - |
`options` | [EncodeHttpResponseOptions](README.md#encodehttpresponseoptions) & BrotliOptions &#124; ZlibOptions |  {} |

**Returns:** *Operator‹HttpContentResponse‹AsyncEnumerableLike‹ReadableMode, ReadableEvent››, HttpContentResponse‹AsyncEnumerableLike‹ReadableMode, ReadableEvent›››*
