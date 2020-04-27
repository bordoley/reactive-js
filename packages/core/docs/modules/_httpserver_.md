[@reactive-js/core - v0.0.37](../README.md) › ["httpServer"](_httpserver_.md)

# Module: "httpServer"

## Index

### Type aliases

* [HttpRoutedRequest](_httpserver_.md#httproutedrequest)
* [HttpServer](_httpserver_.md#httpserver)

### Functions

* [createRouter](_httpserver_.md#const-createrouter)

## Type aliases

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

## Functions

### `Const` createRouter

▸ **createRouter**<**TReq**, **TResp**>(`routes`: object, `notFoundHandler`: [Operator](_functions_.md#operator)‹[HttpRequest](_http_.md#httprequest)‹TReq›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹[HttpResponse](_http_.md#httpresponse)‹TResp›››): *[Operator](_functions_.md#operator)‹[HttpRequest](_http_.md#httprequest)‹TReq›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹[HttpResponse](_http_.md#httpresponse)‹TResp›››*

**Type parameters:**

▪ **TReq**

▪ **TResp**

**Parameters:**

Name | Type |
------ | ------ |
`routes` | object |
`notFoundHandler` | [Operator](_functions_.md#operator)‹[HttpRequest](_http_.md#httprequest)‹TReq›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹[HttpResponse](_http_.md#httpresponse)‹TResp››› |

**Returns:** *[Operator](_functions_.md#operator)‹[HttpRequest](_http_.md#httprequest)‹TReq›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹[HttpResponse](_http_.md#httpresponse)‹TResp›››*
