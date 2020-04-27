[@reactive-js/core - v0.0.37](../README.md) › ["httpClient"](_httpclient_.md)

# Module: "httpClient"

## Index

### Enumerations

* [HttpClientRequestStatusType](../enums/_httpclient_.httpclientrequeststatustype.md)

### Type aliases

* [HttpClient](_httpclient_.md#httpclient)
* [HttpClientRequest](_httpclient_.md#httpclientrequest)
* [HttpClientRequestStatus](_httpclient_.md#httpclientrequeststatus)
* [HttpClientRequestStatusComplete](_httpclient_.md#httpclientrequeststatuscomplete)
* [HttpClientRequestStatusHeadersReceived](_httpclient_.md#httpclientrequeststatusheadersreceived)
* [HttpClientRequestStatusProgress](_httpclient_.md#httpclientrequeststatusprogress)
* [HttpClientRequestStatusStart](_httpclient_.md#httpclientrequeststatusstart)

### Functions

* [withDefaultBehaviors](_httpclient_.md#const-withdefaultbehaviors)

## Type aliases

###  HttpClient

Ƭ **HttpClient**: *function*

#### Type declaration:

▸ (`req`: THttpRequest): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[HttpClientRequestStatus](_httpclient_.md#httpclientrequeststatus)‹TResp››*

**Parameters:**

Name | Type |
------ | ------ |
`req` | THttpRequest |

___

###  HttpClientRequest

Ƭ **HttpClientRequest**: *[HttpRequest](_http_.md#httprequest)‹T› & object*

___

###  HttpClientRequestStatus

Ƭ **HttpClientRequestStatus**: *[HttpClientRequestStatusStart](_httpclient_.md#httpclientrequeststatusstart) | [HttpClientRequestStatusProgress](_httpclient_.md#httpclientrequeststatusprogress) | [HttpClientRequestStatusComplete](_httpclient_.md#httpclientrequeststatuscomplete) | [HttpClientRequestStatusHeadersReceived](_httpclient_.md#httpclientrequeststatusheadersreceived)‹TResp›*

___

###  HttpClientRequestStatusComplete

Ƭ **HttpClientRequestStatusComplete**: *object*

#### Type declaration:

* **type**: *[Completed](../enums/_httpclient_.httpclientrequeststatustype.md#completed)*

___

###  HttpClientRequestStatusHeadersReceived

Ƭ **HttpClientRequestStatusHeadersReceived**: *object*

#### Type declaration:

* **response**: *[HttpResponse](_http_.md#httpresponse)‹TResp›*

* **type**: *[HeadersReceived](../enums/_httpclient_.httpclientrequeststatustype.md#headersreceived)*

___

###  HttpClientRequestStatusProgress

Ƭ **HttpClientRequestStatusProgress**: *object*

#### Type declaration:

* **count**: *number*

* **type**: *[Progress](../enums/_httpclient_.httpclientrequeststatustype.md#progress)*

___

###  HttpClientRequestStatusStart

Ƭ **HttpClientRequestStatusStart**: *object*

#### Type declaration:

* **type**: *[Start](../enums/_httpclient_.httpclientrequeststatustype.md#start)*

## Functions

### `Const` withDefaultBehaviors

▸ **withDefaultBehaviors**<**TReq**, **TResp**>(`encodeHttpRequest`: function): *(Anonymous function)*

**Type parameters:**

▪ **TReq**

▪ **TResp**: *[DisposableLike](../interfaces/_disposable_.disposablelike.md)*

**Parameters:**

▪`Default value`  **encodeHttpRequest**: *function*= identity

▸ (`req`: [HttpClientRequest](_httpclient_.md#httpclientrequest)‹TReq›): *[HttpClientRequest](_httpclient_.md#httpclientrequest)‹TReq›*

**Parameters:**

Name | Type |
------ | ------ |
`req` | [HttpClientRequest](_httpclient_.md#httpclientrequest)‹TReq› |

**Returns:** *(Anonymous function)*
