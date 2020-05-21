[@reactive-js/http - v0.0.42](../README.md) › ["httpServer"](_httpserver_.md)

# Module: "httpServer"

## Index

### Type aliases

* [HttpRoutedRequest](_httpserver_.md#httproutedrequest)
* [HttpServer](_httpserver_.md#httpserver)
* [HttpServerRequest](_httpserver_.md#httpserverrequest)

### Functions

* [createHttpServerRequest](_httpserver_.md#const-createhttpserverrequest)
* [createRoutingHttpServer](_httpserver_.md#const-createroutinghttpserver)
* [disallowProtocolAndHostForwarding](_httpserver_.md#const-disallowprotocolandhostforwarding)

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

### `Const` createHttpServerRequest

▸ **createHttpServerRequest**<**T**>(`__namedParameters`: object): *[HttpServerRequest](_httpserver_.md#httpserverrequest)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`headers` | object | - |
`httpVersionMajor` | number | 1 |
`httpVersionMinor` | number | 1 |
`isTransportSecure` | boolean | - |
`path` | string | - |
`rest` | rest | - |
`uri` | string &#124; [URILike](../interfaces/_http_.urilike.md) | - |

**Returns:** *[HttpServerRequest](_httpserver_.md#httpserverrequest)‹T›*

___

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
