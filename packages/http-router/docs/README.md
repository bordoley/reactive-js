[@reactive-js/http-router](README.md)

# @reactive-js/http-router

## Index

### Interfaces

* [HttpRoutedRequestLike](interfaces/httproutedrequestlike.md)

### Type aliases

* [HttpRequestRouterHandler](README.md#httprequestrouterhandler)

### Functions

* [createRouter](README.md#const-createrouter)

## Type aliases

###  HttpRequestRouterHandler

Ƭ **HttpRequestRouterHandler**: *OperatorLike‹[HttpRoutedRequestLike](interfaces/httproutedrequestlike.md)‹TReq›, ObservableLike‹HttpResponseLike‹TResp›››*

## Functions

### `Const` createRouter

▸ **createRouter**<**TReq**, **TResp**>(`routes`: object, `notFoundHandler`: OperatorLike‹HttpRequestLike‹TReq›, ObservableLike‹HttpResponseLike‹TResp›››): *OperatorLike‹HttpRequestLike‹TReq›, ObservableLike‹HttpResponseLike‹TResp›››*

**Type parameters:**

▪ **TReq**

▪ **TResp**

**Parameters:**

Name | Type |
------ | ------ |
`routes` | object |
`notFoundHandler` | OperatorLike‹HttpRequestLike‹TReq›, ObservableLike‹HttpResponseLike‹TResp››› |

**Returns:** *OperatorLike‹HttpRequestLike‹TReq›, ObservableLike‹HttpResponseLike‹TResp›››*
