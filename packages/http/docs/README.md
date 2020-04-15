[@reactive-js/http](README.md)

# @reactive-js/http

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

* [EntityTag](README.md#entitytag)
* [HttpContent](README.md#httpcontent)
* [HttpContentRequest](README.md#httpcontentrequest)
* [HttpContentResponse](README.md#httpcontentresponse)
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

* [parseMediaType](README.md#const-parsemediatype)
* [parseMediaTypeOrThrow](README.md#const-parsemediatypeorthrow)

### Functions

* [checkIfNotModified](README.md#const-checkifnotmodified)
* [createHttpRequest](README.md#const-createhttprequest)
* [createHttpResponse](README.md#const-createhttpresponse)
* [createRedirectHttpRequest](README.md#const-createredirecthttprequest)
* [disallowProtocolAndHostForwarding](README.md#const-disallowprotocolandhostforwarding)
* [getHeaderValue](README.md#getheadervalue)
* [httpRequestToUntypedHeaders](README.md#const-httprequesttountypedheaders)
* [mediaTypeToString](README.md#const-mediatypetostring)
* [parseHttpRequestFromHeaders](README.md#const-parsehttprequestfromheaders)
* [parseHttpResponseFromHeaders](README.md#const-parsehttpresponsefromheaders)
* [writeHttpRequestHeaders](README.md#const-writehttprequestheaders)
* [writeHttpResponseHeaders](README.md#const-writehttpresponseheaders)

## Type aliases

###  EntityTag

Ƭ **EntityTag**: *object*

#### Type declaration:

___

###  HttpContent

Ƭ **HttpContent**: *object*

#### Type declaration:

___

###  HttpContentRequest

Ƭ **HttpContentRequest**: *[HttpRequest](README.md#httprequest)‹[HttpContent](README.md#httpcontent)‹T››*

___

###  HttpContentResponse

Ƭ **HttpContentResponse**: *[HttpResponse](README.md#httpresponse)‹[HttpContent](README.md#httpcontent)‹T››*

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

Ƭ **HttpServerRequest**: *[HttpContentRequest](README.md#httpcontentrequest)‹T› & object*

___

###  MediaRange

Ƭ **MediaRange**: *object*

#### Type declaration:

___

###  MediaType

Ƭ **MediaType**: *object*

#### Type declaration:

## Variables

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

▸ **createHttpRequest**<**T**>(`method`: [HttpMethod](enums/httpmethod.md), `uri`: string | [URILike](interfaces/urilike.md), `options`: object): *[HttpRequest](README.md#httprequest)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`method` | [HttpMethod](enums/httpmethod.md) | - |
`uri` | string &#124; [URILike](interfaces/urilike.md) | - |
`options` | object |  {} |

**Returns:** *[HttpRequest](README.md#httprequest)‹T›*

___

### `Const` createHttpResponse

▸ **createHttpResponse**<**T**>(`statusCode`: [HttpStatusCode](enums/httpstatuscode.md), `options`: object): *[HttpResponse](README.md#httpresponse)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`statusCode` | [HttpStatusCode](enums/httpstatuscode.md) | - |
`options` | object |  {} |

**Returns:** *[HttpResponse](README.md#httpresponse)‹T›*

___

### `Const` createRedirectHttpRequest

▸ **createRedirectHttpRequest**<**TReq**, **TResp**>(`response`: [HttpResponse](README.md#httpresponse)‹TResp›): *Operator‹[HttpRequest](README.md#httprequest)‹TReq›, [HttpRequest](README.md#httprequest)‹TReq››*

**Type parameters:**

▪ **TReq**

▪ **TResp**

**Parameters:**

Name | Type |
------ | ------ |
`response` | [HttpResponse](README.md#httpresponse)‹TResp› |

**Returns:** *Operator‹[HttpRequest](README.md#httprequest)‹TReq›, [HttpRequest](README.md#httprequest)‹TReq››*

___

### `Const` disallowProtocolAndHostForwarding

▸ **disallowProtocolAndHostForwarding**<**T**>(): *Operator‹[HttpServerRequest](README.md#httpserverrequest)‹T›, [HttpServerRequest](README.md#httpserverrequest)‹T››*

**Type parameters:**

▪ **T**

**Returns:** *Operator‹[HttpServerRequest](README.md#httpserverrequest)‹T›, [HttpServerRequest](README.md#httpserverrequest)‹T››*

___

###  getHeaderValue

▸ **getHeaderValue**(`headers`: [HttpHeaders](README.md#httpheaders), `key`: [HttpStandardHeader](enums/httpstandardheader.md)): *string | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [HttpHeaders](README.md#httpheaders) |
`key` | [HttpStandardHeader](enums/httpstandardheader.md) |

**Returns:** *string | undefined*

▸ **getHeaderValue**(`headers`: [HttpHeaders](README.md#httpheaders), `key`: [HttpExtensiondHeader](enums/httpextensiondheader.md)): *string | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [HttpHeaders](README.md#httpheaders) |
`key` | [HttpExtensiondHeader](enums/httpextensiondheader.md) |

**Returns:** *string | undefined*

___

### `Const` httpRequestToUntypedHeaders

▸ **httpRequestToUntypedHeaders**(`request`: [HttpContentRequest](README.md#httpcontentrequest)‹unknown›): *object*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [HttpContentRequest](README.md#httpcontentrequest)‹unknown› |

**Returns:** *object*

* \[ **key**: *string*\]: string

___

### `Const` mediaTypeToString

▸ **mediaTypeToString**(`__namedParameters`: object): *string*

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *string*

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

▸ **parseHttpResponseFromHeaders**<**T**>(`statusCode`: number, `headers`: [HttpHeaders](README.md#httpheaders), `body`: T): *[HttpContentResponse](README.md#httpcontentresponse)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`statusCode` | number |
`headers` | [HttpHeaders](README.md#httpheaders) |
`body` | T |

**Returns:** *[HttpContentResponse](README.md#httpcontentresponse)‹T›*

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

▸ **writeHttpResponseHeaders**<**T**>(`response`: [HttpContentResponse](README.md#httpcontentresponse)‹T›, `writeHeader`: function): *void*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **response**: *[HttpContentResponse](README.md#httpcontentresponse)‹T›*

▪ **writeHeader**: *function*

▸ (`header`: string, `value`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`header` | string |
`value` | string |

**Returns:** *void*
