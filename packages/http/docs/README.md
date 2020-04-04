[@reactive-js/http](README.md)

# @reactive-js/http

## Index

### Enumerations

* [HttpMethod](enums/httpmethod.md)

### Interfaces

* [HttpHeadersLike](interfaces/httpheaderslike.md)
* [HttpRequestLike](interfaces/httprequestlike.md)
* [HttpResponseLike](interfaces/httpresponselike.md)
* [URI](interfaces/uri.md)

### Functions

* [createHttpRequest](README.md#const-createhttprequest)
* [createHttpResponse](README.md#const-createhttpresponse)

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

▸ **createHttpResponse**<**T**>(`statusCode`: number, `options`: object): *[HttpResponseLike](interfaces/httpresponselike.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`statusCode` | number | - |
`options` | object |  {} |

**Returns:** *[HttpResponseLike](interfaces/httpresponselike.md)‹T›*
