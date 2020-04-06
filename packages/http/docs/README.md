[@reactive-js/http](README.md)

# @reactive-js/http

## Index

### Enumerations

* [HttpContentEncoding](enums/httpcontentencoding.md)
* [HttpMethod](enums/httpmethod.md)
* [HttpStatusCode](enums/httpstatuscode.md)

### Interfaces

* [HttpHeadersLike](interfaces/httpheaderslike.md)
* [HttpRequestLike](interfaces/httprequestlike.md)
* [HttpResponseLike](interfaces/httpresponselike.md)
* [URI](interfaces/uri.md)

### Functions

* [createHttpRequest](README.md#const-createhttprequest)
* [createHttpResponse](README.md#const-createhttpresponse)
* [makeRedirectRequest](README.md#const-makeredirectrequest)

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

### `Const` makeRedirectRequest

▸ **makeRedirectRequest**<**TReq**, **TResp**>(`request`: [HttpRequestLike](interfaces/httprequestlike.md)‹TReq›, `response`: [HttpResponseLike](interfaces/httpresponselike.md)‹TResp›): *[HttpRequestLike](interfaces/httprequestlike.md)‹TReq›*

**Type parameters:**

▪ **TReq**

▪ **TResp**

**Parameters:**

Name | Type |
------ | ------ |
`request` | [HttpRequestLike](interfaces/httprequestlike.md)‹TReq› |
`response` | [HttpResponseLike](interfaces/httpresponselike.md)‹TResp› |

**Returns:** *[HttpRequestLike](interfaces/httprequestlike.md)‹TReq›*
