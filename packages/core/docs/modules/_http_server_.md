[@reactive-js/core - v0.0.37](../README.md) › ["http-server"](_http_server_.md)

# Module: "http-server"

## Index

### Type aliases

* [HttpRoutedRequest](_http_server_.md#httproutedrequest)
* [HttpServer](_http_server_.md#httpserver)

### Functions

* [createRouter](_http_server_.md#const-createrouter)

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

▸ **createRouter**<**TReq**, **TResp**>(`routes`: object, `notFoundHandler`: [Operator](_pipe_.md#operator)‹[HttpRequest](_http_.md#httprequest)‹TReq›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹[HttpResponse](_http_.md#httpresponse)‹TResp›››): *[Operator](_pipe_.md#operator)‹[HttpRequest](_http_.md#httprequest)‹TReq›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹[HttpResponse](_http_.md#httpresponse)‹TResp›››*

**Type parameters:**

▪ **TReq**

▪ **TResp**

**Parameters:**

Name | Type |
------ | ------ |
`routes` | object |
`notFoundHandler` | [Operator](_pipe_.md#operator)‹[HttpRequest](_http_.md#httprequest)‹TReq›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹[HttpResponse](_http_.md#httpresponse)‹TResp››› |

**Returns:** *[Operator](_pipe_.md#operator)‹[HttpRequest](_http_.md#httprequest)‹TReq›, [ObservableLike](../interfaces/_observable_.observablelike.md)‹[HttpResponse](_http_.md#httpresponse)‹TResp›››*
