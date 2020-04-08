[@reactive-js/http](README.md)

# @reactive-js/http

## Index

### Enumerations

* [HttpContentEncoding](enums/httpcontentencoding.md)
* [HttpMethod](enums/httpmethod.md)
* [HttpStatusCode](enums/httpstatuscode.md)

### Interfaces

* [HttpContentLike](interfaces/httpcontentlike.md)
* [HttpHeadersLike](interfaces/httpheaderslike.md)
* [HttpPreferencesLike](interfaces/httppreferenceslike.md)
* [HttpRequestLike](interfaces/httprequestlike.md)
* [HttpResponseLike](interfaces/httpresponselike.md)
* [URI](interfaces/uri.md)

### Variables

* [contentEncodings](README.md#const-contentencodings)

### Functions

* [createHttpRequest](README.md#const-createhttprequest)
* [createHttpResponse](README.md#const-createhttpresponse)
* [createRedirectHttpRequest](README.md#const-createredirecthttprequest)
* [writeHttpRequestHeaders](README.md#const-writehttprequestheaders)
* [writeHttpResponseHeaders](README.md#const-writehttpresponseheaders)

## Variables

### `Const` contentEncodings

• **contentEncodings**: *[HttpContentEncoding](enums/httpcontentencoding.md)[]* =  [
  HttpContentEncoding.Brotli,
  HttpContentEncoding.Compress,
  HttpContentEncoding.Deflate,
  HttpContentEncoding.GZip,
  HttpContentEncoding.Identity,
]

## Functions

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
