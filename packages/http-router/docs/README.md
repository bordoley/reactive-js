[@reactive-js/http-router - v0.0.33](README.md)

# @reactive-js/http-router - v0.0.33

## Index

### Type aliases

* [HttpRequestRouterHandler](README.md#httprequestrouterhandler)
* [HttpRoutedRequest](README.md#httproutedrequest)

### Functions

* [createRouter](README.md#const-createrouter)

## Type aliases

###  HttpRequestRouterHandler

Ƭ **HttpRequestRouterHandler**: *Operator‹[HttpRoutedRequest](README.md#httproutedrequest)‹TReq›, ObservableLike‹HttpResponse‹TResp›››*

___

###  HttpRoutedRequest

Ƭ **HttpRoutedRequest**: *HttpRequest‹T› & object*

## Functions

### `Const` createRouter

▸ **createRouter**<**TReq**, **TResp**>(`routes`: object, `notFoundHandler`: Operator‹HttpRequest‹TReq›, ObservableLike‹HttpResponse‹TResp›››): *Operator‹HttpRequest‹TReq›, ObservableLike‹HttpResponse‹TResp›››*

**Type parameters:**

▪ **TReq**

▪ **TResp**

**Parameters:**

Name | Type |
------ | ------ |
`routes` | object |
`notFoundHandler` | Operator‹HttpRequest‹TReq›, ObservableLike‹HttpResponse‹TResp››› |

**Returns:** *Operator‹HttpRequest‹TReq›, ObservableLike‹HttpResponse‹TResp›››*
