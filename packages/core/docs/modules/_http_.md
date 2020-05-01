[@reactive-js/core - v0.0.37](../README.md) › ["http"](_http_.md)

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
* [decodeHttpResponseContent](_http_.md#const-decodehttpresponsecontent)
* [disallowProtocolAndHostForwarding](_http_.md#const-disallowprotocolandhostforwarding)
* [encodeHttpClientRequestContent](_http_.md#const-encodehttpclientrequestcontent)
* [encodeHttpRequestWithCharset](_http_.md#const-encodehttprequestwithcharset)
* [encodeHttpResponseContent](_http_.md#const-encodehttpresponsecontent)
* [encodeHttpResponseWithCharset](_http_.md#const-encodehttpresponsewithcharset)
* [httpRequestIsCompressible](_http_.md#const-httprequestiscompressible)
* [httpRequestToUntypedHeaders](_http_.md#const-httprequesttountypedheaders)
* [httpResponseIsCompressible](_http_.md#const-httpresponseiscompressible)
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

▸ (`req`: THttpRequest): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[HttpClientRequestStatus](_http_.md#httpclientrequeststatus)‹TResp››*

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

▸ (`req`: THttpRequest): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹THttpResponse›*

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

▸ **checkIfNotModified**<**T**>(`__namedParameters`: object): *[Operator](_functions_.md#operator)‹[HttpResponse](_http_.md#httpresponse)‹T›, [HttpResponse](_http_.md#httpresponse)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`cacheControl` | ReadonlyArray‹object› |
`method` | [HttpMethod](../enums/_http_.httpmethod.md) |
`preconditions` | object |

**Returns:** *[Operator](_functions_.md#operator)‹[HttpResponse](_http_.md#httpresponse)‹T›, [HttpResponse](_http_.md#httpresponse)‹T››*

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

▸ **createRoutingHttpServer**<**TReq**, **TResp**>(`routes`: object, `notFoundHandler`: [Operator](_functions_.md#operator)‹[HttpRequest](_http_.md#httprequest)‹TReq›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹[HttpResponse](_http_.md#httpresponse)‹TResp›››): *[HttpServer](_http_.md#httpserver)‹[HttpRequest](_http_.md#httprequest)‹TReq›, [HttpResponse](_http_.md#httpresponse)‹TResp››*

**Type parameters:**

▪ **TReq**

▪ **TResp**

**Parameters:**

Name | Type |
------ | ------ |
`routes` | object |
`notFoundHandler` | [Operator](_functions_.md#operator)‹[HttpRequest](_http_.md#httprequest)‹TReq›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹[HttpResponse](_http_.md#httpresponse)‹TResp››› |

**Returns:** *[HttpServer](_http_.md#httpserver)‹[HttpRequest](_http_.md#httprequest)‹TReq›, [HttpResponse](_http_.md#httpresponse)‹TResp››*

___

### `Const` decodeHttpRequestContent

▸ **decodeHttpRequestContent**(`decoderProvider`: function): *[Operator](_functions_.md#operator)‹[HttpRequest](_http_.md#httprequest)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹Uint8Array››, [HttpRequest](_http_.md#httprequest)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹Uint8Array›››*

**Parameters:**

▪ **decoderProvider**: *function*

▸ (`encoding`: [HttpContentEncoding](../enums/_http_.httpcontentencoding.md)): *[Option](_option_.md#option)‹[FlowableOperator](_flowable_.md#flowableoperator)‹Uint8Array, Uint8Array››*

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | [HttpContentEncoding](../enums/_http_.httpcontentencoding.md) |

**Returns:** *[Operator](_functions_.md#operator)‹[HttpRequest](_http_.md#httprequest)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹Uint8Array››, [HttpRequest](_http_.md#httprequest)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹Uint8Array›››*

___

### `Const` decodeHttpResponseContent

▸ **decodeHttpResponseContent**(`decoderProvider`: function): *[Operator](_functions_.md#operator)‹[HttpResponse](_http_.md#httpresponse)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹Uint8Array››, [HttpResponse](_http_.md#httpresponse)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹Uint8Array›››*

**Parameters:**

▪ **decoderProvider**: *function*

▸ (`encoding`: [HttpContentEncoding](../enums/_http_.httpcontentencoding.md)): *[Option](_option_.md#option)‹[FlowableOperator](_flowable_.md#flowableoperator)‹Uint8Array, Uint8Array››*

**Parameters:**

Name | Type |
------ | ------ |
`encoding` | [HttpContentEncoding](../enums/_http_.httpcontentencoding.md) |

**Returns:** *[Operator](_functions_.md#operator)‹[HttpResponse](_http_.md#httpresponse)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹Uint8Array››, [HttpResponse](_http_.md#httpresponse)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹Uint8Array›››*

___

### `Const` disallowProtocolAndHostForwarding

▸ **disallowProtocolAndHostForwarding**<**T**>(): *[Operator](_functions_.md#operator)‹[HttpServerRequest](_http_.md#httpserverrequest)‹T›, [HttpServerRequest](_http_.md#httpserverrequest)‹T››*

**Type parameters:**

▪ **T**

**Returns:** *[Operator](_functions_.md#operator)‹[HttpServerRequest](_http_.md#httpserverrequest)‹T›, [HttpServerRequest](_http_.md#httpserverrequest)‹T››*

___

### `Const` encodeHttpClientRequestContent

▸ **encodeHttpClientRequestContent**(`encoderProvider`: function): *[Operator](_functions_.md#operator)‹[HttpClientRequest](_http_.md#httpclientrequest)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹Uint8Array››, [HttpClientRequest](_http_.md#httpclientrequest)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹Uint8Array›››*

**Parameters:**

▪ **encoderProvider**: *function*

▸ (`request`: [HttpClientRequest](_http_.md#httpclientrequest)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹Uint8Array››): *[Option](_option_.md#option)‹object›*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [HttpClientRequest](_http_.md#httpclientrequest)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹Uint8Array›› |

**Returns:** *[Operator](_functions_.md#operator)‹[HttpClientRequest](_http_.md#httpclientrequest)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹Uint8Array››, [HttpClientRequest](_http_.md#httpclientrequest)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹Uint8Array›››*

___

### `Const` encodeHttpRequestWithCharset

▸ **encodeHttpRequestWithCharset**(`encode`: function): *(Anonymous function)*

**Parameters:**

▪ **encode**: *function*

▸ (`v`: string, `charset`: string): *Uint8Array*

**Parameters:**

Name | Type |
------ | ------ |
`v` | string |
`charset` | string |

**Returns:** *(Anonymous function)*

___

### `Const` encodeHttpResponseContent

▸ **encodeHttpResponseContent**(`encoderProvider`: function): *[Operator](_functions_.md#operator)‹[HttpResponse](_http_.md#httpresponse)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹Uint8Array››, [HttpResponse](_http_.md#httpresponse)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹Uint8Array›››*

**Parameters:**

▪ **encoderProvider**: *function*

▸ (`response`: [HttpResponse](_http_.md#httpresponse)‹unknown›): *[Option](_option_.md#option)‹object›*

**Parameters:**

Name | Type |
------ | ------ |
`response` | [HttpResponse](_http_.md#httpresponse)‹unknown› |

**Returns:** *[Operator](_functions_.md#operator)‹[HttpResponse](_http_.md#httpresponse)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹Uint8Array››, [HttpResponse](_http_.md#httpresponse)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹Uint8Array›››*

___

### `Const` encodeHttpResponseWithCharset

▸ **encodeHttpResponseWithCharset**(`encode`: function): *(Anonymous function)*

**Parameters:**

▪ **encode**: *function*

▸ (`v`: string, `charset`: string): *Uint8Array*

**Parameters:**

Name | Type |
------ | ------ |
`v` | string |
`charset` | string |

**Returns:** *(Anonymous function)*

___

### `Const` httpRequestIsCompressible

▸ **httpRequestIsCompressible**<**T**>(`__namedParameters`: object, `db`: object): *boolean*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`contentInfo` | object |

▪ **db**: *object*

**Returns:** *boolean*

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

### `Const` httpResponseIsCompressible

▸ **httpResponseIsCompressible**<**T**>(`response`: [HttpResponse](_http_.md#httpresponse)‹T›, `db`: object): *boolean*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`response` | [HttpResponse](_http_.md#httpresponse)‹T› |
`db` | object |

**Returns:** *boolean*

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

▸ **toFlowableHttpRequest**<**TBody**>(`req`: [HttpRequest](_http_.md#httprequest)‹TBody›): *[HttpRequest](_http_.md#httprequest)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹TBody››*

**Type parameters:**

▪ **TBody**

**Parameters:**

Name | Type |
------ | ------ |
`req` | [HttpRequest](_http_.md#httprequest)‹TBody› |

**Returns:** *[HttpRequest](_http_.md#httprequest)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹TBody››*

___

### `Const` toFlowableHttpResponse

▸ **toFlowableHttpResponse**<**TBody**>(`resp`: [HttpResponse](_http_.md#httpresponse)‹TBody›): *[HttpResponse](_http_.md#httpresponse)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹TBody››*

**Type parameters:**

▪ **TBody**

**Parameters:**

Name | Type |
------ | ------ |
`resp` | [HttpResponse](_http_.md#httpresponse)‹TBody› |

**Returns:** *[HttpResponse](_http_.md#httpresponse)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹TBody››*

___

### `Const` withDefaultBehaviors

▸ **withDefaultBehaviors**<**TReq**, **TResp**>(): *(Anonymous function)*

**Type parameters:**

▪ **TReq**

▪ **TResp**: *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

**Returns:** *(Anonymous function)*

___

### `Const` writeHttpRequestHeaders

▸ **writeHttpRequestHeaders**<**T**>(`request`: [HttpRequest](_http_.md#httprequest)‹T›, `writeHeader`: function): *void*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **request**: *[HttpRequest](_http_.md#httprequest)‹T›*

▪ **writeHeader**: *function*

▸ (`header`: string, `value`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`header` | string |
`value` | string |

**Returns:** *void*

___

### `Const` writeHttpResponseHeaders

▸ **writeHttpResponseHeaders**<**T**>(`response`: [HttpResponse](_http_.md#httpresponse)‹T›, `writeHeader`: function): *void*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **response**: *[HttpResponse](_http_.md#httpresponse)‹T›*

▪ **writeHeader**: *function*

▸ (`header`: string, `value`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`header` | string |
`value` | string |

**Returns:** *void*
