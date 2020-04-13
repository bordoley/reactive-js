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

* [EntityTag](interfaces/entitytag.md)
* [HttpContentLike](interfaces/httpcontentlike.md)
* [HttpContentRequestLike](interfaces/httpcontentrequestlike.md)
* [HttpContentResponseLike](interfaces/httpcontentresponselike.md)
* [HttpHeadersLike](interfaces/httpheaderslike.md)
* [HttpPreferencesLike](interfaces/httppreferenceslike.md)
* [HttpRequestLike](interfaces/httprequestlike.md)
* [HttpRequestPreconditionsLike](interfaces/httprequestpreconditionslike.md)
* [HttpResponseLike](interfaces/httpresponselike.md)
* [HttpServerRequestLike](interfaces/httpserverrequestlike.md)
* [MediaType](interfaces/mediatype.md)
* [URI](interfaces/uri.md)

### Type aliases

* [HttpDateTime](README.md#httpdatetime)

### Variables

* [httpContentEncodings](README.md#const-httpcontentencodings)
* [parseMediaType](README.md#const-parsemediatype)
* [parseMediaTypeOrThrow](README.md#const-parsemediatypeorthrow)

### Functions

* [checkIfNotModified](README.md#const-checkifnotmodified)
* [createHttpRequest](README.md#const-createhttprequest)
* [createHttpResponse](README.md#const-createhttpresponse)
* [createRedirectHttpRequest](README.md#const-createredirecthttprequest)
* [disallowProtocolAndHostForwarding](README.md#const-disallowprotocolandhostforwarding)
* [getHeaderValue](README.md#getheadervalue)
* [mediaTypeToString](README.md#const-mediatypetostring)
* [parseHttpRequestFromHeaders](README.md#const-parsehttprequestfromheaders)
* [parseHttpResponseFromHeaders](README.md#const-parsehttpresponsefromheaders)
* [toTokenOrQuotedString](README.md#const-totokenorquotedstring)
* [writeHttpRequestHeaders](README.md#const-writehttprequestheaders)
* [writeHttpResponseHeaders](README.md#const-writehttpresponseheaders)

## Type aliases

###  HttpDateTime

Ƭ **HttpDateTime**: *number*

## Variables

### `Const` httpContentEncodings

• **httpContentEncodings**: *[HttpContentEncoding](enums/httpcontentencoding.md)[]* =  [
  HttpContentEncoding.Brotli,
  HttpContentEncoding.Compress,
  HttpContentEncoding.Deflate,
  HttpContentEncoding.GZip,
  HttpContentEncoding.Identity,
]

___

### `Const` parseMediaType

• **parseMediaType**: *OperatorLike‹string, undefined | [MediaType](interfaces/mediatype.md)›* =  parseWith(pMediaType)

___

### `Const` parseMediaTypeOrThrow

• **parseMediaTypeOrThrow**: *OperatorLike‹string, [MediaType](interfaces/mediatype.md)›* = parseWithOrThrow(pMediaType)

## Functions

### `Const` checkIfNotModified

▸ **checkIfNotModified**<**T**>(`__namedParameters`: object): *OperatorLike‹[HttpResponseLike](interfaces/httpresponselike.md)‹T›, [HttpResponseLike](interfaces/httpresponselike.md)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *OperatorLike‹[HttpResponseLike](interfaces/httpresponselike.md)‹T›, [HttpResponseLike](interfaces/httpresponselike.md)‹T››*

___

### `Const` createHttpRequest

▸ **createHttpRequest**<**T**>(`method`: [HttpMethod](enums/httpmethod.md), `uri`: string | [URI](interfaces/uri.md), `options`: object): *[HttpRequestLike](interfaces/httprequestlike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`method` | [HttpMethod](enums/httpmethod.md) | - |
`uri` | string &#124; [URI](interfaces/uri.md) | - |
`options` | object |  {} |

**Returns:** *[HttpRequestLike](interfaces/httprequestlike.md)‹T›*

___

### `Const` createHttpResponse

▸ **createHttpResponse**<**T**>(`statusCode`: [HttpStatusCode](enums/httpstatuscode.md), `options`: object): *[HttpResponseLike](interfaces/httpresponselike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`statusCode` | [HttpStatusCode](enums/httpstatuscode.md) | - |
`options` | object |  {} |

**Returns:** *[HttpResponseLike](interfaces/httpresponselike.md)‹T›*

___

### `Const` createRedirectHttpRequest

▸ **createRedirectHttpRequest**<**TReq**, **TResp**>(`response`: [HttpResponseLike](interfaces/httpresponselike.md)‹TResp›): *OperatorLike‹[HttpRequestLike](interfaces/httprequestlike.md)‹TReq›, [HttpRequestLike](interfaces/httprequestlike.md)‹TReq››*

**Type parameters:**

▪ **TReq**

▪ **TResp**

**Parameters:**

Name | Type |
------ | ------ |
`response` | [HttpResponseLike](interfaces/httpresponselike.md)‹TResp› |

**Returns:** *OperatorLike‹[HttpRequestLike](interfaces/httprequestlike.md)‹TReq›, [HttpRequestLike](interfaces/httprequestlike.md)‹TReq››*

___

### `Const` disallowProtocolAndHostForwarding

▸ **disallowProtocolAndHostForwarding**<**T**>(): *OperatorLike‹[HttpServerRequestLike](interfaces/httpserverrequestlike.md)‹T›, [HttpServerRequestLike](interfaces/httpserverrequestlike.md)‹T››*

**Type parameters:**

▪ **T**

**Returns:** *OperatorLike‹[HttpServerRequestLike](interfaces/httpserverrequestlike.md)‹T›, [HttpServerRequestLike](interfaces/httpserverrequestlike.md)‹T››*

___

###  getHeaderValue

▸ **getHeaderValue**(`headers`: [HttpHeadersLike](interfaces/httpheaderslike.md), `key`: [HttpStandardHeader](enums/httpstandardheader.md)): *string*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [HttpHeadersLike](interfaces/httpheaderslike.md) |
`key` | [HttpStandardHeader](enums/httpstandardheader.md) |

**Returns:** *string*

▸ **getHeaderValue**(`headers`: [HttpHeadersLike](interfaces/httpheaderslike.md), `key`: [HttpExtensiondHeader](enums/httpextensiondheader.md)): *string*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [HttpHeadersLike](interfaces/httpheaderslike.md) |
`key` | [HttpExtensiondHeader](enums/httpextensiondheader.md) |

**Returns:** *string*

▸ **getHeaderValue**(`headers`: [HttpHeadersLike](interfaces/httpheaderslike.md), `key`: [HttpStandardHeader](enums/httpstandardheader.md), `orDefault`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [HttpHeadersLike](interfaces/httpheaderslike.md) |
`key` | [HttpStandardHeader](enums/httpstandardheader.md) |
`orDefault` | string |

**Returns:** *string*

▸ **getHeaderValue**(`headers`: [HttpHeadersLike](interfaces/httpheaderslike.md), `key`: [HttpExtensiondHeader](enums/httpextensiondheader.md), `orDefault`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`headers` | [HttpHeadersLike](interfaces/httpheaderslike.md) |
`key` | [HttpExtensiondHeader](enums/httpextensiondheader.md) |
`orDefault` | string |

**Returns:** *string*

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

▸ **parseHttpRequestFromHeaders**<**T**>(`__namedParameters`: object): *[HttpServerRequestLike](interfaces/httpserverrequestlike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *[HttpServerRequestLike](interfaces/httpserverrequestlike.md)‹T›*

___

### `Const` parseHttpResponseFromHeaders

▸ **parseHttpResponseFromHeaders**<**T**>(`statusCode`: number, `headers`: [HttpHeadersLike](interfaces/httpheaderslike.md), `body`: T): *[HttpContentResponseLike](interfaces/httpcontentresponselike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`statusCode` | number |
`headers` | [HttpHeadersLike](interfaces/httpheaderslike.md) |
`body` | T |

**Returns:** *[HttpContentResponseLike](interfaces/httpcontentresponselike.md)‹T›*

___

### `Const` toTokenOrQuotedString

▸ **toTokenOrQuotedString**(`input`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *string*

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

▸ **writeHttpResponseHeaders**<**T**>(`response`: [HttpContentResponseLike](interfaces/httpcontentresponselike.md)‹T›, `writeHeader`: function): *void*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **response**: *[HttpContentResponseLike](interfaces/httpcontentresponselike.md)‹T›*

▪ **writeHeader**: *function*

▸ (`header`: string, `value`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`header` | string |
`value` | string |

**Returns:** *void*
