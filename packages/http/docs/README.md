[@reactive-js/http - v0.0.35](README.md)

# @reactive-js/http - v0.0.35

## Index

### Enumerations

* [HttpContentEncoding](enums/httpcontentencoding.md)
* [HttpExtensiondHeader](enums/httpextensiondheader.md)
* [HttpMethod](enums/httpmethod.md)
* [HttpStandardHeader](enums/httpstandardheader.md)
* [HttpStatusCode](enums/httpstatuscode.md)

### Interfaces

* [URILike](interfaces/urilike.md)

### Type aliases

* [CacheDirective](README.md#cachedirective)
* [EntityTag](README.md#entitytag)
* [HttpContentInfo](README.md#httpcontentinfo)
* [HttpDateTime](README.md#httpdatetime)
* [HttpHeaders](README.md#httpheaders)
* [HttpPreferences](README.md#httppreferences)
* [HttpRequest](README.md#httprequest)
* [HttpRequestPreconditions](README.md#httprequestpreconditions)
* [HttpResponse](README.md#httpresponse)
* [HttpServerRequest](README.md#httpserverrequest)
* [MediaRange](README.md#mediarange)
* [MediaType](README.md#mediatype)

### Variables

* [parseCacheDirective](README.md#const-parsecachedirective)
* [parseCacheDirectiveOrThrow](README.md#const-parsecachedirectiveorthrow)
* [parseMediaType](README.md#const-parsemediatype)
* [parseMediaTypeOrThrow](README.md#const-parsemediatypeorthrow)

### Functions

* [cacheDirectiveToString](README.md#const-cachedirectivetostring)
* [checkIfNotModified](README.md#const-checkifnotmodified)
* [createHttpRequest](README.md#const-createhttprequest)
* [createHttpResponse](README.md#const-createhttpresponse)
* [createRedirectHttpRequest](README.md#const-createredirecthttprequest)
* [disallowProtocolAndHostForwarding](README.md#const-disallowprotocolandhostforwarding)
* [getHeaderValue](README.md#getheadervalue)
* [httpRequestIsCompressible](README.md#const-httprequestiscompressible)
* [httpRequestToUntypedHeaders](README.md#const-httprequesttountypedheaders)
* [httpResponseIsCompressible](README.md#const-httpresponseiscompressible)
* [maxAge](README.md#const-maxage)
* [maxStale](README.md#const-maxstale)
* [mediaTypeToString](README.md#const-mediatypetostring)
* [minFresh](README.md#const-minfresh)
* [noCache](README.md#const-nocache)
* [parseHeaders](README.md#const-parseheaders)
* [parseHttpRequestFromHeaders](README.md#const-parsehttprequestfromheaders)
* [parseHttpResponseFromHeaders](README.md#const-parsehttpresponsefromheaders)
* [private_](README.md#const-private_)
* [sharedMaxAge](README.md#const-sharedmaxage)
* [writeHttpRequestHeaders](README.md#const-writehttprequestheaders)
* [writeHttpResponseHeaders](README.md#const-writehttpresponseheaders)

### Object literals

* [mustRevalidate](README.md#const-mustrevalidate)
* [noStore](README.md#const-nostore)
* [noTransform](README.md#const-notransform)
* [onlyIfCached](README.md#const-onlyifcached)
* [proxyRevalidate](README.md#const-proxyrevalidate)
* [public_](README.md#const-public_)

## Type aliases

###  CacheDirective

Ƭ **CacheDirective**: *object*

#### Type declaration:

___

###  EntityTag

Ƭ **EntityTag**: *object*

#### Type declaration:

___

###  HttpContentInfo

Ƭ **HttpContentInfo**: *object*

#### Type declaration:

___

###  HttpDateTime

Ƭ **HttpDateTime**: *number*

___

###  HttpHeaders

Ƭ **HttpHeaders**: *object*

#### Type declaration:

* \[ **header**: *string*\]: string

___

###  HttpPreferences

Ƭ **HttpPreferences**: *object*

#### Type declaration:

___

###  HttpRequest

Ƭ **HttpRequest**: *object*

#### Type declaration:

___

###  HttpRequestPreconditions

Ƭ **HttpRequestPreconditions**: *object*

#### Type declaration:

___

###  HttpResponse

Ƭ **HttpResponse**: *object*

#### Type declaration:

___

###  HttpServerRequest

Ƭ **HttpServerRequest**: *[HttpRequest](README.md#httprequest)‹T› & object*

___

###  MediaRange

Ƭ **MediaRange**: *object*

#### Type declaration:

___

###  MediaType

Ƭ **MediaType**: *object*

#### Type declaration:

## Variables

### `Const` parseCacheDirective

• **parseCacheDirective**: *function* =  parseWith(pCacheDirective)

#### Type declaration:

▸ (`src`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`src` | A |

___

### `Const` parseCacheDirectiveOrThrow

• **parseCacheDirectiveOrThrow**: *function* =  parseWithOrThrow(pCacheDirective)

#### Type declaration:

▸ (`src`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`src` | A |

___

### `Const` parseMediaType

• **parseMediaType**: *function* =  parseWith(pMediaType)

#### Type declaration:

▸ (`src`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`src` | A |

___

### `Const` parseMediaTypeOrThrow

• **parseMediaTypeOrThrow**: *function* =  parseWithOrThrow(pMediaType)

#### Type declaration:

▸ (`src`: A): *B*

**Parameters:**

Name | Type |
------ | ------ |
`src` | A |

## Functions

### `Const` cacheDirectiveToString

▸ **cacheDirectiveToString**(`__namedParameters`: object): *string*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *string*

___

### `Const` checkIfNotModified

▸ **checkIfNotModified**<**T**>(`__namedParameters`: object): *Operator‹[HttpResponse](README.md#httpresponse)‹T›, [HttpResponse](README.md#httpresponse)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *Operator‹[HttpResponse](README.md#httpresponse)‹T›, [HttpResponse](README.md#httpresponse)‹T››*

___

### `Const` createHttpRequest

▸ **createHttpRequest**<**T**>(`__namedParameters`: object): *[HttpRequest](README.md#httprequest)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[HttpRequest](README.md#httprequest)‹T›*

___

### `Const` createHttpResponse

▸ **createHttpResponse**<**T**>(`__namedParameters`: object): *[HttpResponse](README.md#httpresponse)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[HttpResponse](README.md#httpresponse)‹T›*

___

### `Const` createRedirectHttpRequest

▸ **createRedirectHttpRequest**<**THttpRequest**, **TReq**>(`request`: THttpRequest, `response`: [HttpResponse](README.md#httpresponse)‹unknown›): *THttpRequest*

**Type parameters:**

▪ **THttpRequest**: *[HttpRequest](README.md#httprequest)‹TReq›*

▪ **TReq**

**Parameters:**

Name | Type |
------ | ------ |
`request` | THttpRequest |
`response` | [HttpResponse](README.md#httpresponse)‹unknown› |

**Returns:** *THttpRequest*

___

### `Const` disallowProtocolAndHostForwarding

▸ **disallowProtocolAndHostForwarding**<**T**>(): *Operator‹[HttpServerRequest](README.md#httpserverrequest)‹T›, [HttpServerRequest](README.md#httpserverrequest)‹T››*

**Type parameters:**

▪ **T**

**Returns:** *Operator‹[HttpServerRequest](README.md#httpserverrequest)‹T›, [HttpServerRequest](README.md#httpserverrequest)‹T››*

___

###  getHeaderValue

▸ **getHeaderValue**(`headers`: [HttpHeaders](README.md#httpheaders), `key`: [HttpStandardHeader](enums/httpstandardheader.md)): *Option‹string›*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [HttpHeaders](README.md#httpheaders) |
`key` | [HttpStandardHeader](enums/httpstandardheader.md) |

**Returns:** *Option‹string›*

▸ **getHeaderValue**(`headers`: [HttpHeaders](README.md#httpheaders), `key`: [HttpExtensiondHeader](enums/httpextensiondheader.md)): *Option‹string›*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [HttpHeaders](README.md#httpheaders) |
`key` | [HttpExtensiondHeader](enums/httpextensiondheader.md) |

**Returns:** *Option‹string›*

___

### `Const` httpRequestIsCompressible

▸ **httpRequestIsCompressible**<**T**>(`__namedParameters`: object, `db`: object): *boolean*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |
`db` | object |

**Returns:** *boolean*

___

### `Const` httpRequestToUntypedHeaders

▸ **httpRequestToUntypedHeaders**(`request`: [HttpRequest](README.md#httprequest)‹unknown›): *object*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [HttpRequest](README.md#httprequest)‹unknown› |

**Returns:** *object*

* \[ **key**: *string*\]: string

___

### `Const` httpResponseIsCompressible

▸ **httpResponseIsCompressible**<**T**>(`response`: [HttpResponse](README.md#httpresponse)‹T›, `db`: object): *boolean*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`response` | [HttpResponse](README.md#httpresponse)‹T› |
`db` | object |

**Returns:** *boolean*

___

### `Const` maxAge

▸ **maxAge**(`value`: number): *[CacheDirective](README.md#cachedirective)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[CacheDirective](README.md#cachedirective)*

___

### `Const` maxStale

▸ **maxStale**(`value`: number): *[CacheDirective](README.md#cachedirective)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[CacheDirective](README.md#cachedirective)*

___

### `Const` mediaTypeToString

▸ **mediaTypeToString**(`__namedParameters`: object): *string*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *string*

___

### `Const` minFresh

▸ **minFresh**(`value`: number): *[CacheDirective](README.md#cachedirective)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[CacheDirective](README.md#cachedirective)*

___

### `Const` noCache

▸ **noCache**(`headers`: keyof string[]): *object*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`headers` | keyof string[] |  [] |

**Returns:** *object*

___

### `Const` parseHeaders

▸ **parseHeaders**(`rawHeaders`: string): *[HttpHeaders](README.md#httpheaders)*

**Parameters:**

Name | Type |
------ | ------ |
`rawHeaders` | string |

**Returns:** *[HttpHeaders](README.md#httpheaders)*

___

### `Const` parseHttpRequestFromHeaders

▸ **parseHttpRequestFromHeaders**<**T**>(`__namedParameters`: object): *[HttpServerRequest](README.md#httpserverrequest)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[HttpServerRequest](README.md#httpserverrequest)‹T›*

___

### `Const` parseHttpResponseFromHeaders

▸ **parseHttpResponseFromHeaders**<**T**>(`statusCode`: number, `headers`: [HttpHeaders](README.md#httpheaders), `body`: T): *[HttpResponse](README.md#httpresponse)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`statusCode` | number |
`headers` | [HttpHeaders](README.md#httpheaders) |
`body` | T |

**Returns:** *[HttpResponse](README.md#httpresponse)‹T›*

___

### `Const` private_

▸ **private_**(`headers`: keyof string[]): *object*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`headers` | keyof string[] |  [] |

**Returns:** *object*

___

### `Const` sharedMaxAge

▸ **sharedMaxAge**(`value`: number): *[CacheDirective](README.md#cachedirective)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *[CacheDirective](README.md#cachedirective)*

___

### `Const` writeHttpRequestHeaders

▸ **writeHttpRequestHeaders**<**T**>(`__namedParameters`: object, `writeHeader`: function): *void*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **__namedParameters**: *object*

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

▸ **writeHttpResponseHeaders**<**T**>(`__namedParameters`: object, `writeHeader`: function): *void*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **__namedParameters**: *object*

▪ **writeHeader**: *function*

▸ (`header`: string, `value`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`header` | string |
`value` | string |

**Returns:** *void*

## Object literals

### `Const` mustRevalidate

### ▪ **mustRevalidate**: *object*

###  directive

• **directive**: *string* = "must-revalidate"

###  value

• **value**: *string* = ""

___

### `Const` noStore

### ▪ **noStore**: *object*

###  directive

• **directive**: *string* = "no-store"

###  value

• **value**: *string* = ""

___

### `Const` noTransform

### ▪ **noTransform**: *object*

###  directive

• **directive**: *string* = "no-transform"

###  value

• **value**: *string* = ""

___

### `Const` onlyIfCached

### ▪ **onlyIfCached**: *object*

###  directive

• **directive**: *string* = "only-if-cached"

###  value

• **value**: *string* = ""

___

### `Const` proxyRevalidate

### ▪ **proxyRevalidate**: *object*

###  directive

• **directive**: *string* = "proxy-revalidate"

###  value

• **value**: *string* = ""

___

### `Const` public_

### ▪ **public_**: *object*

###  directive

• **directive**: *string* = "public"

###  value

• **value**: *string* = ""
