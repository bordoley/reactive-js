[@reactive-js/http - v0.0.42](../README.md) › ["http"](_http_.md)

# Module: "http"

## Index

### Enumerations

* [HttpContentEncoding](../enums/_http_.httpcontentencoding.md)
* [HttpExtensionHeader](../enums/_http_.httpextensionheader.md)
* [HttpMethod](../enums/_http_.httpmethod.md)
* [HttpStandardHeader](../enums/_http_.httpstandardheader.md)
* [HttpStatusCode](../enums/_http_.httpstatuscode.md)

### Interfaces

* [URILike](../interfaces/_http_.urilike.md)

### Type aliases

* [CacheDirective](_http_.md#cachedirective)
* [EntityTag](_http_.md#entitytag)
* [HttpContentInfo](_http_.md#httpcontentinfo)
* [HttpDateTime](_http_.md#httpdatetime)
* [HttpHeaders](_http_.md#httpheaders)
* [HttpMessage](_http_.md#httpmessage)
* [HttpMessageOptions](_http_.md#httpmessageoptions)
* [HttpPreferences](_http_.md#httppreferences)
* [HttpRequest](_http_.md#httprequest)
* [HttpRequestOptions](_http_.md#httprequestoptions)
* [HttpResponse](_http_.md#httpresponse)
* [MediaType](_http_.md#mediatype)

### Variables

* [decodeHttpRequestWithCharset](_http_.md#const-decodehttprequestwithcharset)
* [decodeHttpResponseWithCharset](_http_.md#const-decodehttpresponsewithcharset)
* [encodeHttpRequestWithUtf8](_http_.md#const-encodehttprequestwithutf8)
* [encodeHttpResponseWithUtf8](_http_.md#const-encodehttpresponsewithutf8)

### Functions

* [checkIfNotModified](_http_.md#const-checkifnotmodified)
* [createHttpErrorResponse](_http_.md#const-createhttperrorresponse)
* [createHttpRequest](_http_.md#const-createhttprequest)
* [createHttpResponse](_http_.md#const-createhttpresponse)
* [createRedirectHttpRequest](_http_.md#const-createredirecthttprequest)
* [decodeHttpRequestContent](_http_.md#const-decodehttprequestcontent)
* [decodeHttpResponseContent](_http_.md#const-decodehttpresponsecontent)
* [encodeHttpResponseContent](_http_.md#const-encodehttpresponsecontent)
* [toIOSourceHttpRequest](_http_.md#const-toiosourcehttprequest)
* [toIOSourceHttpResponse](_http_.md#const-toiosourcehttpresponse)
* [writeHttpRequestHeaders](_http_.md#const-writehttprequestheaders)
* [writeHttpResponseHeaders](_http_.md#const-writehttpresponseheaders)

## Type aliases

###  CacheDirective

Ƭ **CacheDirective**: *object*

#### Type declaration:

* **directive**: *string*

* **value**: *string*

___

###  EntityTag

Ƭ **EntityTag**: *object*

#### Type declaration:

* **isWeak**: *boolean*

* **tag**: *string*

___

###  HttpContentInfo

Ƭ **HttpContentInfo**: *object*

#### Type declaration:

* **contentEncodings**: *keyof HttpContentEncoding[]*

* **contentLength**: *number*

* **contentType**: *[MediaType](_http_.md#mediatype)*

___

###  HttpDateTime

Ƭ **HttpDateTime**: *number*

___

###  HttpHeaders

Ƭ **HttpHeaders**: *object*

#### Type declaration:

* \[ **header**: *string*\]: string

___

###  HttpMessage

Ƭ **HttpMessage**: *object*

#### Type declaration:

* **body**: *T*

* **cacheControl**: *keyof CacheDirective[]*

* **contentInfo**? : *[HttpContentInfo](_http_.md#httpcontentinfo)*

* **headers**: *[HttpHeaders](_http_.md#httpheaders)*

* **preferences**? : *[HttpPreferences](_http_.md#httppreferences)*

___

###  HttpMessageOptions

Ƭ **HttpMessageOptions**: *object*

#### Type declaration:

* **body**: *T*

* **cacheControl**? : *keyof (string | object)[]*

* **contentInfo**(): *object*

  * **contentEncodings**? : *keyof HttpContentEncoding[]*

  * **contentLength**? : *number*

  * **contentType**: *[MediaType](_http_.md#mediatype) | string*

* **headers**? : *[HttpHeaders](_http_.md#httpheaders)*

* **preferences**(): *object*

  * **acceptedCharsets**? : *keyof string[]*

  * **acceptedEncodings**? : *keyof HttpContentEncoding[]*

  * **acceptedLanguages**? : *keyof string[]*

  * **acceptedMediaRanges**? : *keyof (string | object)[]*

___

###  HttpPreferences

Ƭ **HttpPreferences**: *object*

#### Type declaration:

* **acceptedCharsets**: *keyof string[]*

* **acceptedEncodings**: *keyof HttpContentEncoding[]*

* **acceptedLanguages**: *keyof string[]*

* **acceptedMediaRanges**: *keyof MediaRange[]*

___

###  HttpRequest

Ƭ **HttpRequest**: *[HttpMessage](_http_.md#httpmessage)‹T› & object*

___

###  HttpRequestOptions

Ƭ **HttpRequestOptions**: *[HttpMessageOptions](_http_.md#httpmessageoptions)‹T› & object*

___

###  HttpResponse

Ƭ **HttpResponse**: *[HttpMessage](_http_.md#httpmessage)‹T› & object*

___

###  MediaType

Ƭ **MediaType**: *object*

#### Type declaration:

* **params**(): *object*

* **subtype**: *string*

* **type**: *string*

## Variables

### `Const` decodeHttpRequestWithCharset

• **decodeHttpRequestWithCharset**: *Function1‹[HttpRequest](_http_.md#httprequest)‹Uint8Array›, [HttpRequest](_http_.md#httprequest)‹string››* = _decodeHttpRequestWithCharset

___

### `Const` decodeHttpResponseWithCharset

• **decodeHttpResponseWithCharset**: *Function1‹[HttpResponse](_http_.md#httpresponse)‹Uint8Array›, [HttpResponse](_http_.md#httpresponse)‹string››* = _decodeHttpResponseWithCharset

___

### `Const` encodeHttpRequestWithUtf8

• **encodeHttpRequestWithUtf8**: *Function1‹[HttpRequest](_http_.md#httprequest)‹string›, [HttpRequest](_http_.md#httprequest)‹Uint8Array››* = _encodeHttpRequestWithUtf8

___

### `Const` encodeHttpResponseWithUtf8

• **encodeHttpResponseWithUtf8**: *Function1‹[HttpResponse](_http_.md#httpresponse)‹string›, [HttpResponse](_http_.md#httpresponse)‹Uint8Array››* = _encodeHttpResponseWithUtf8

## Functions

### `Const` checkIfNotModified

▸ **checkIfNotModified**<**T**>(`__namedParameters`: object): *Function1‹[HttpResponse](_http_.md#httpresponse)‹T›, [HttpResponse](_http_.md#httpresponse)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`cacheControl` | ReadonlyArray‹object› |
`method` | [HttpMethod](../enums/_http_.httpmethod.md) |
`preconditions` | object |

**Returns:** *Function1‹[HttpResponse](_http_.md#httpresponse)‹T›, [HttpResponse](_http_.md#httpresponse)‹T››*

___

### `Const` createHttpErrorResponse

▸ **createHttpErrorResponse**(`e`: unknown): *[HttpResponse](_http_.md#httpresponse)‹unknown›*

**Parameters:**

Name | Type |
------ | ------ |
`e` | unknown |

**Returns:** *[HttpResponse](_http_.md#httpresponse)‹unknown›*

___

### `Const` createHttpRequest

▸ **createHttpRequest**<**T**>(`__namedParameters`: object): *[HttpRequest](_http_.md#httprequest)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`expectContinue` | boolean | - |
`headers` | object | - |
`httpVersionMajor` | number | 1 |
`httpVersionMinor` | number | 1 |
`method` | [HttpMethod](../enums/_http_.httpmethod.md) | - |
`preconditions` | object | - |
`rest` | rest | - |
`uri` | string &#124; [URILike](../interfaces/_http_.urilike.md) | - |

**Returns:** *[HttpRequest](_http_.md#httprequest)‹T›*

___

### `Const` createHttpResponse

▸ **createHttpResponse**<**T**>(`__namedParameters`: object): *[HttpResponse](_http_.md#httpresponse)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`etag` | string &#124; object |
`expires` | string &#124; number &#124; Date |
`headers` | object |
`lastModified` | string &#124; number &#124; Date |
`location` | string &#124; [URILike](../interfaces/_http_.urilike.md) |
`rest` | rest |
`statusCode` | [HttpStatusCode](../enums/_http_.httpstatuscode.md) |
`vary` | ReadonlyArray‹string› |

**Returns:** *[HttpResponse](_http_.md#httpresponse)‹T›*

___

### `Const` createRedirectHttpRequest

▸ **createRedirectHttpRequest**<**THttpRequest**, **TReq**>(`request`: THttpRequest, `response`: [HttpResponse](_http_.md#httpresponse)‹unknown›): *THttpRequest*

**Type parameters:**

▪ **THttpRequest**: *[HttpRequest](_http_.md#httprequest)‹TReq›*

▪ **TReq**

**Parameters:**

Name | Type |
------ | ------ |
`request` | THttpRequest |
`response` | [HttpResponse](_http_.md#httpresponse)‹unknown› |

**Returns:** *THttpRequest*

___

### `Const` decodeHttpRequestContent

▸ **decodeHttpRequestContent**(`decoderProvider`: object): *Function1‹[HttpRequest](_http_.md#httprequest)‹IOSourceLike‹Uint8Array››, [HttpRequest](_http_.md#httprequest)‹IOSourceLike‹Uint8Array›››*

**Parameters:**

Name | Type |
------ | ------ |
`decoderProvider` | object |

**Returns:** *Function1‹[HttpRequest](_http_.md#httprequest)‹IOSourceLike‹Uint8Array››, [HttpRequest](_http_.md#httprequest)‹IOSourceLike‹Uint8Array›››*

___

### `Const` decodeHttpResponseContent

▸ **decodeHttpResponseContent**(`decoderProvider`: object): *Function1‹[HttpResponse](_http_.md#httpresponse)‹IOSourceLike‹Uint8Array››, [HttpResponse](_http_.md#httpresponse)‹IOSourceLike‹Uint8Array›››*

**Parameters:**

Name | Type |
------ | ------ |
`decoderProvider` | object |

**Returns:** *Function1‹[HttpResponse](_http_.md#httpresponse)‹IOSourceLike‹Uint8Array››, [HttpResponse](_http_.md#httpresponse)‹IOSourceLike‹Uint8Array›››*

___

### `Const` encodeHttpResponseContent

▸ **encodeHttpResponseContent**(`encoderProvider`: object, `db`: object): *(Anonymous function)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`encoderProvider` | object | - |
`db` | object | {} |

**Returns:** *(Anonymous function)*

___

### `Const` toIOSourceHttpRequest

▸ **toIOSourceHttpRequest**<**TBody**>(`req`: [HttpRequest](_http_.md#httprequest)‹TBody›): *[HttpRequest](_http_.md#httprequest)‹IOSourceLike‹TBody››*

**Type parameters:**

▪ **TBody**

**Parameters:**

Name | Type |
------ | ------ |
`req` | [HttpRequest](_http_.md#httprequest)‹TBody› |

**Returns:** *[HttpRequest](_http_.md#httprequest)‹IOSourceLike‹TBody››*

___

### `Const` toIOSourceHttpResponse

▸ **toIOSourceHttpResponse**<**TBody**>(`resp`: [HttpResponse](_http_.md#httpresponse)‹TBody›): *[HttpResponse](_http_.md#httpresponse)‹IOSourceLike‹TBody››*

**Type parameters:**

▪ **TBody**

**Parameters:**

Name | Type |
------ | ------ |
`resp` | [HttpResponse](_http_.md#httpresponse)‹TBody› |

**Returns:** *[HttpResponse](_http_.md#httpresponse)‹IOSourceLike‹TBody››*

___

### `Const` writeHttpRequestHeaders

▸ **writeHttpRequestHeaders**<**T**>(`request`: [HttpRequest](_http_.md#httprequest)‹T›, `writeHeader`: SideEffect2‹string, string›): *void*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`request` | [HttpRequest](_http_.md#httprequest)‹T› |
`writeHeader` | SideEffect2‹string, string› |

**Returns:** *void*

___

### `Const` writeHttpResponseHeaders

▸ **writeHttpResponseHeaders**<**T**>(`response`: [HttpResponse](_http_.md#httpresponse)‹T›, `writeHeader`: SideEffect2‹string, string›): *void*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`response` | [HttpResponse](_http_.md#httpresponse)‹T› |
`writeHeader` | SideEffect2‹string, string› |

**Returns:** *void*
