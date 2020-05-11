[@reactive-js/http - v0.0.37](../README.md) › ["http"](_http_.md)

# Module: "http"

## Index

### Enumerations

* [HttpClientRequestStatusType](../enums/_http_.httpclientrequeststatustype.md)
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
* [HttpClient](_http_.md#httpclient)
* [HttpClientRequest](_http_.md#httpclientrequest)
* [HttpClientRequestStatus](_http_.md#httpclientrequeststatus)
* [HttpClientRequestStatusComplete](_http_.md#httpclientrequeststatuscomplete)
* [HttpClientRequestStatusHeadersReceived](_http_.md#httpclientrequeststatusheadersreceived)
* [HttpClientRequestStatusProgress](_http_.md#httpclientrequeststatusprogress)
* [HttpClientRequestStatusStart](_http_.md#httpclientrequeststatusstart)
* [HttpContentInfo](_http_.md#httpcontentinfo)
* [HttpDateTime](_http_.md#httpdatetime)
* [HttpHeaders](_http_.md#httpheaders)
* [HttpMessage](_http_.md#httpmessage)
* [HttpPreferences](_http_.md#httppreferences)
* [HttpRequest](_http_.md#httprequest)
* [HttpResponse](_http_.md#httpresponse)
* [HttpRoutedRequest](_http_.md#httproutedrequest)
* [HttpServer](_http_.md#httpserver)
* [HttpServerRequest](_http_.md#httpserverrequest)
* [MediaType](_http_.md#mediatype)

### Functions

* [checkIfNotModified](_http_.md#const-checkifnotmodified)
* [createHttpRequest](_http_.md#const-createhttprequest)
* [createHttpResponse](_http_.md#const-createhttpresponse)
* [createRedirectHttpRequest](_http_.md#const-createredirecthttprequest)
* [createRoutingHttpServer](_http_.md#const-createroutinghttpserver)
* [decodeHttpRequestContent](_http_.md#const-decodehttprequestcontent)
* [decodeHttpRequestWithCharset](_http_.md#const-decodehttprequestwithcharset)
* [decodeHttpResponseContent](_http_.md#const-decodehttpresponsecontent)
* [decodeHttpResponseWithCharset](_http_.md#const-decodehttpresponsewithcharset)
* [disallowProtocolAndHostForwarding](_http_.md#const-disallowprotocolandhostforwarding)
* [encodeHttpClientRequestContent](_http_.md#const-encodehttpclientrequestcontent)
* [encodeHttpRequestWithCharset](_http_.md#const-encodehttprequestwithcharset)
* [encodeHttpResponseContent](_http_.md#const-encodehttpresponsecontent)
* [encodeHttpResponseWithCharset](_http_.md#const-encodehttpresponsewithcharset)
* [httpRequestToUntypedHeaders](_http_.md#const-httprequesttountypedheaders)
* [parseHeaders](_http_.md#const-parseheaders)
* [parseHttpRequestFromHeaders](_http_.md#const-parsehttprequestfromheaders)
* [parseHttpResponseFromHeaders](_http_.md#const-parsehttpresponsefromheaders)
* [toFlowableHttpRequest](_http_.md#const-toflowablehttprequest)
* [toFlowableHttpResponse](_http_.md#const-toflowablehttpresponse)
* [withDefaultBehaviors](_http_.md#const-withdefaultbehaviors)
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

###  HttpClient

Ƭ **HttpClient**: *function*

#### Type declaration:

▸ (`req`: THttpRequest): *ObservableLike‹[HttpClientRequestStatus](_http_.md#httpclientrequeststatus)‹TResp››*

**Parameters:**

Name | Type |
------ | ------ |
`req` | THttpRequest |

___

###  HttpClientRequest

Ƭ **HttpClientRequest**: *[HttpRequest](_http_.md#httprequest)‹T› & object*

___

###  HttpClientRequestStatus

Ƭ **HttpClientRequestStatus**: *[HttpClientRequestStatusStart](_http_.md#httpclientrequeststatusstart) | [HttpClientRequestStatusProgress](_http_.md#httpclientrequeststatusprogress) | [HttpClientRequestStatusComplete](_http_.md#httpclientrequeststatuscomplete) | [HttpClientRequestStatusHeadersReceived](_http_.md#httpclientrequeststatusheadersreceived)‹TResp›*

___

###  HttpClientRequestStatusComplete

Ƭ **HttpClientRequestStatusComplete**: *object*

#### Type declaration:

* **type**: *[Completed](../enums/_http_.httpclientrequeststatustype.md#completed)*

___

###  HttpClientRequestStatusHeadersReceived

Ƭ **HttpClientRequestStatusHeadersReceived**: *object*

#### Type declaration:

* **response**: *[HttpResponse](_http_.md#httpresponse)‹TResp›*

* **type**: *[HeadersReceived](../enums/_http_.httpclientrequeststatustype.md#headersreceived)*

___

###  HttpClientRequestStatusProgress

Ƭ **HttpClientRequestStatusProgress**: *object*

#### Type declaration:

* **count**: *number*

* **type**: *[Progress](../enums/_http_.httpclientrequeststatustype.md#progress)*

___

###  HttpClientRequestStatusStart

Ƭ **HttpClientRequestStatusStart**: *object*

#### Type declaration:

* **type**: *[Start](../enums/_http_.httpclientrequeststatustype.md#start)*

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

###  HttpResponse

Ƭ **HttpResponse**: *[HttpMessage](_http_.md#httpmessage)‹T› & object*

___

###  HttpRoutedRequest

Ƭ **HttpRoutedRequest**: *[HttpRequest](_http_.md#httprequest)‹T› & object*

___

###  HttpServer

Ƭ **HttpServer**: *function*

#### Type declaration:

▸ (`req`: THttpRequest): *ObservableLike‹THttpResponse›*

**Parameters:**

Name | Type |
------ | ------ |
`req` | THttpRequest |

___

###  HttpServerRequest

Ƭ **HttpServerRequest**: *[HttpRequest](_http_.md#httprequest)‹T› & object*

___

###  MediaType

Ƭ **MediaType**: *object*

#### Type declaration:

* **params**(): *object*

* **subtype**: *string*

* **type**: *string*

## Functions

### `Const` checkIfNotModified

▸ **checkIfNotModified**<**T**>(`__namedParameters`: object): *Operator‹[HttpResponse](_http_.md#httpresponse)‹T›, [HttpResponse](_http_.md#httpresponse)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`cacheControl` | ReadonlyArray‹object› |
`method` | [HttpMethod](../enums/_http_.httpmethod.md) |
`preconditions` | object |

**Returns:** *Operator‹[HttpResponse](_http_.md#httpresponse)‹T›, [HttpResponse](_http_.md#httpresponse)‹T››*

___

### `Const` createHttpRequest

▸ **createHttpRequest**<**T**>(`__namedParameters`: object): *[HttpRequest](_http_.md#httprequest)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`body` | T |
`cacheControl` | ReadonlyArray‹string &#124; object› |
`contentInfo` | object |
`expectContinue` | boolean |
`headers` | object |
`httpVersionMajor` | number |
`httpVersionMinor` | number |
`method` | [HttpMethod](../enums/_http_.httpmethod.md) |
`preconditions` | object |
`preferences` | object |
`rest` | rest |
`uri` | string &#124; [URILike](../interfaces/_http_.urilike.md) |

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
`body` | T |
`cacheControl` | ReadonlyArray‹string &#124; object› |
`contentInfo` | object |
`etag` | string &#124; object |
`expires` | number |
`headers` | object |
`lastModified` | string &#124; number &#124; Date |
`location` | string &#124; [URILike](../interfaces/_http_.urilike.md) |
`preferences` | object |
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

### `Const` createRoutingHttpServer

▸ **createRoutingHttpServer**<**TReq**, **TResp**>(`routes`: object, `notFoundHandler`: Operator‹[HttpRequest](_http_.md#httprequest)‹TReq›, ObservableLike‹[HttpResponse](_http_.md#httpresponse)‹TResp›››): *[HttpServer](_http_.md#httpserver)‹[HttpRequest](_http_.md#httprequest)‹TReq›, [HttpResponse](_http_.md#httpresponse)‹TResp››*

**Type parameters:**

▪ **TReq**

▪ **TResp**

**Parameters:**

Name | Type |
------ | ------ |
`routes` | object |
`notFoundHandler` | Operator‹[HttpRequest](_http_.md#httprequest)‹TReq›, ObservableLike‹[HttpResponse](_http_.md#httpresponse)‹TResp››› |

**Returns:** *[HttpServer](_http_.md#httpserver)‹[HttpRequest](_http_.md#httprequest)‹TReq›, [HttpResponse](_http_.md#httpresponse)‹TResp››*

___

### `Const` decodeHttpRequestContent

▸ **decodeHttpRequestContent**(`decoderProvider`: object): *Operator‹[HttpRequest](_http_.md#httprequest)‹FlowableLike‹Uint8Array››, [HttpRequest](_http_.md#httprequest)‹FlowableLike‹Uint8Array›››*

**Parameters:**

Name | Type |
------ | ------ |
`decoderProvider` | object |

**Returns:** *Operator‹[HttpRequest](_http_.md#httprequest)‹FlowableLike‹Uint8Array››, [HttpRequest](_http_.md#httprequest)‹FlowableLike‹Uint8Array›››*

___

### `Const` decodeHttpRequestWithCharset

▸ **decodeHttpRequestWithCharset**(`decode`: Selector2‹Uint8Array, string, string›): *Operator‹[HttpRequest](_http_.md#httprequest)‹Uint8Array›, [HttpRequest](_http_.md#httprequest)‹string››*

**Parameters:**

Name | Type |
------ | ------ |
`decode` | Selector2‹Uint8Array, string, string› |

**Returns:** *Operator‹[HttpRequest](_http_.md#httprequest)‹Uint8Array›, [HttpRequest](_http_.md#httprequest)‹string››*

___

### `Const` decodeHttpResponseContent

▸ **decodeHttpResponseContent**(`decoderProvider`: object): *Operator‹[HttpResponse](_http_.md#httpresponse)‹FlowableLike‹Uint8Array››, [HttpResponse](_http_.md#httpresponse)‹FlowableLike‹Uint8Array›››*

**Parameters:**

Name | Type |
------ | ------ |
`decoderProvider` | object |

**Returns:** *Operator‹[HttpResponse](_http_.md#httpresponse)‹FlowableLike‹Uint8Array››, [HttpResponse](_http_.md#httpresponse)‹FlowableLike‹Uint8Array›››*

___

### `Const` decodeHttpResponseWithCharset

▸ **decodeHttpResponseWithCharset**(`decode`: Selector2‹Uint8Array, string, string›): *Operator‹[HttpResponse](_http_.md#httpresponse)‹Uint8Array›, [HttpResponse](_http_.md#httpresponse)‹string››*

**Parameters:**

Name | Type |
------ | ------ |
`decode` | Selector2‹Uint8Array, string, string› |

**Returns:** *Operator‹[HttpResponse](_http_.md#httpresponse)‹Uint8Array›, [HttpResponse](_http_.md#httpresponse)‹string››*

___

### `Const` disallowProtocolAndHostForwarding

▸ **disallowProtocolAndHostForwarding**<**T**>(): *Operator‹[HttpServerRequest](_http_.md#httpserverrequest)‹T›, [HttpServerRequest](_http_.md#httpserverrequest)‹T››*

**Type parameters:**

▪ **T**

**Returns:** *Operator‹[HttpServerRequest](_http_.md#httpserverrequest)‹T›, [HttpServerRequest](_http_.md#httpserverrequest)‹T››*

___

### `Const` encodeHttpClientRequestContent

▸ **encodeHttpClientRequestContent**(`encoderProvider`: object, `db`: object): *Operator‹[HttpClientRequest](_http_.md#httpclientrequest)‹FlowableLike‹Uint8Array››, [HttpClientRequest](_http_.md#httpclientrequest)‹FlowableLike‹Uint8Array›››*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`encoderProvider` | object | - |
`db` | object | {} |

**Returns:** *Operator‹[HttpClientRequest](_http_.md#httpclientrequest)‹FlowableLike‹Uint8Array››, [HttpClientRequest](_http_.md#httpclientrequest)‹FlowableLike‹Uint8Array›››*

___

### `Const` encodeHttpRequestWithCharset

▸ **encodeHttpRequestWithCharset**(`encode`: Selector2‹string, string, Uint8Array›): *(Anonymous function)*

**Parameters:**

Name | Type |
------ | ------ |
`encode` | Selector2‹string, string, Uint8Array› |

**Returns:** *(Anonymous function)*

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

### `Const` encodeHttpResponseWithCharset

▸ **encodeHttpResponseWithCharset**(`encode`: Selector2‹string, string, Uint8Array›): *(Anonymous function)*

**Parameters:**

Name | Type |
------ | ------ |
`encode` | Selector2‹string, string, Uint8Array› |

**Returns:** *(Anonymous function)*

___

### `Const` httpRequestToUntypedHeaders

▸ **httpRequestToUntypedHeaders**(`request`: [HttpRequest](_http_.md#httprequest)‹unknown›): *object*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [HttpRequest](_http_.md#httprequest)‹unknown› |

**Returns:** *object*

* \[ **key**: *string*\]: string

___

### `Const` parseHeaders

▸ **parseHeaders**(`rawHeaders`: string): *[HttpHeaders](_http_.md#httpheaders)*

**Parameters:**

Name | Type |
------ | ------ |
`rawHeaders` | string |

**Returns:** *[HttpHeaders](_http_.md#httpheaders)*

___

### `Const` parseHttpRequestFromHeaders

▸ **parseHttpRequestFromHeaders**<**T**>(`__namedParameters`: object): *[HttpServerRequest](_http_.md#httpserverrequest)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`body` | T |
`headers` | object |
`httpVersionMajor` | number |
`httpVersionMinor` | number |
`isTransportSecure` | boolean |
`method` | [HttpMethod](../enums/_http_.httpmethod.md) |
`path` | string |

**Returns:** *[HttpServerRequest](_http_.md#httpserverrequest)‹T›*

___

### `Const` parseHttpResponseFromHeaders

▸ **parseHttpResponseFromHeaders**<**T**>(`statusCode`: number, `headers`: [HttpHeaders](_http_.md#httpheaders), `body`: T): *[HttpResponse](_http_.md#httpresponse)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`statusCode` | number |
`headers` | [HttpHeaders](_http_.md#httpheaders) |
`body` | T |

**Returns:** *[HttpResponse](_http_.md#httpresponse)‹T›*

___

### `Const` toFlowableHttpRequest

▸ **toFlowableHttpRequest**<**TBody**>(`req`: [HttpRequest](_http_.md#httprequest)‹TBody›): *[HttpRequest](_http_.md#httprequest)‹FlowableLike‹TBody››*

**Type parameters:**

▪ **TBody**

**Parameters:**

Name | Type |
------ | ------ |
`req` | [HttpRequest](_http_.md#httprequest)‹TBody› |

**Returns:** *[HttpRequest](_http_.md#httprequest)‹FlowableLike‹TBody››*

___

### `Const` toFlowableHttpResponse

▸ **toFlowableHttpResponse**<**TBody**>(`resp`: [HttpResponse](_http_.md#httpresponse)‹TBody›): *[HttpResponse](_http_.md#httpresponse)‹FlowableLike‹TBody››*

**Type parameters:**

▪ **TBody**

**Parameters:**

Name | Type |
------ | ------ |
`resp` | [HttpResponse](_http_.md#httpresponse)‹TBody› |

**Returns:** *[HttpResponse](_http_.md#httpresponse)‹FlowableLike‹TBody››*

___

### `Const` withDefaultBehaviors

▸ **withDefaultBehaviors**<**TReq**, **TResp**>(`encodeHttpRequest`: Operator‹[HttpClientRequest](_http_.md#httpclientrequest)‹TReq›, [HttpClientRequest](_http_.md#httpclientrequest)‹TReq››): *(Anonymous function)*

**Type parameters:**

▪ **TReq**

▪ **TResp**: *DisposableLike*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`encodeHttpRequest` | Operator‹[HttpClientRequest](_http_.md#httpclientrequest)‹TReq›, [HttpClientRequest](_http_.md#httpclientrequest)‹TReq›› | identity |

**Returns:** *(Anonymous function)*

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
