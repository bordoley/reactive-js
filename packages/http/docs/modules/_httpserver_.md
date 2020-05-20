[@reactive-js/http - v0.0.42](../README.md) › ["httpServer"](_httpserver_.md)

# Module: "httpServer"

## Index

### Type aliases

* [HttpRoutedRequest](_httpserver_.md#httproutedrequest)
* [HttpServer](_httpserver_.md#httpserver)
* [HttpServerRequest](_httpserver_.md#httpserverrequest)

### Functions

* [createRoutingHttpServer](_httpserver_.md#const-createroutinghttpserver)
* [disallowProtocolAndHostForwarding](_httpserver_.md#const-disallowprotocolandhostforwarding)
* [parseHttpServerRequestFromHeaders](_httpserver_.md#const-parsehttpserverrequestfromheaders)

## Type aliases

###  HttpRoutedRequest

Ƭ **HttpRoutedRequest**: *[HttpRequest](_http_.md#httprequest)‹T› & object*

___

###  HttpServer

Ƭ **HttpServer**: *function*

#### Type declaration:

▸ (`req`: THttpRequest): *ObservableLike‹THttpResponse›*

**Parameters:**

Name | Type |
------ | ------ |
`req` | THttpRequest |

___

###  HttpServerRequest

Ƭ **HttpServerRequest**: *[HttpRequest](_http_.md#httprequest)‹T› & object*

## Functions

### `Const` createRoutingHttpServer

▸ **createRoutingHttpServer**<**TReq**, **TResp**>(`routes`: object, `notFoundHandler`: Function1‹[HttpRequest](_http_.md#httprequest)‹TReq›, ObservableLike‹[HttpResponse](_http_.md#httpresponse)‹TResp›››): *[HttpServer](_httpserver_.md#httpserver)‹[HttpRequest](_http_.md#httprequest)‹TReq›, [HttpResponse](_http_.md#httpresponse)‹TResp››*

**Type parameters:**

▪ **TReq**

▪ **TResp**

**Parameters:**

Name | Type |
------ | ------ |
`routes` | object |
`notFoundHandler` | Function1‹[HttpRequest](_http_.md#httprequest)‹TReq›, ObservableLike‹[HttpResponse](_http_.md#httpresponse)‹TResp››› |

**Returns:** *[HttpServer](_httpserver_.md#httpserver)‹[HttpRequest](_http_.md#httprequest)‹TReq›, [HttpResponse](_http_.md#httpresponse)‹TResp››*

___

### `Const` disallowProtocolAndHostForwarding

▸ **disallowProtocolAndHostForwarding**<**T**>(): *Function1‹[HttpServerRequest](_httpserver_.md#httpserverrequest)‹T›, [HttpServerRequest](_httpserver_.md#httpserverrequest)‹T››*

**Type parameters:**

▪ **T**

**Returns:** *Function1‹[HttpServerRequest](_httpserver_.md#httpserverrequest)‹T›, [HttpServerRequest](_httpserver_.md#httpserverrequest)‹T››*

___

### `Const` parseHttpServerRequestFromHeaders

▸ **parseHttpServerRequestFromHeaders**<**T**>(`__namedParameters`: object): *[HttpServerRequest](_httpserver_.md#httpserverrequest)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`body` | T |
`headers` | object |
`httpVersionMajor` | number |
`httpVersionMinor` | number |
`isTransportSecure` | boolean |
`method` | [HttpMethod](../enums/_http_.httpmethod.md) |
`path` | string |

**Returns:** *[HttpServerRequest](_httpserver_.md#httpserverrequest)‹T›*
