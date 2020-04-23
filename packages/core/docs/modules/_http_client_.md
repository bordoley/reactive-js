[@reactive-js/core - v0.0.37](../README.md) › ["http-client"](_http_client_.md)

# Module: "http-client"

## Index

### Enumerations

* [HttpClientRequestStatusType](../enums/_http_client_.httpclientrequeststatustype.md)

### Type aliases

* [HttpClient](_http_client_.md#httpclient)
* [HttpClientRequestStatus](_http_client_.md#httpclientrequeststatus)
* [HttpClientRequestStatusComplete](_http_client_.md#httpclientrequeststatuscomplete)
* [HttpClientRequestStatusHeadersReceived](_http_client_.md#httpclientrequeststatusheadersreceived)
* [HttpClientRequestStatusProgress](_http_client_.md#httpclientrequeststatusprogress)
* [HttpClientRequestStatusStart](_http_client_.md#httpclientrequeststatusstart)

## Type aliases

###  HttpClient

Ƭ **HttpClient**: *function*

#### Type declaration:

▸ (`req`: THttpRequest): *[ObservableLike](../interfaces/_observable_.observablelike.md)‹[HttpClientRequestStatus](_http_client_.md#httpclientrequeststatus)‹TResp››*

**Parameters:**

Name | Type |
------ | ------ |
`req` | THttpRequest |

___

###  HttpClientRequestStatus

Ƭ **HttpClientRequestStatus**: *[HttpClientRequestStatusStart](_http_client_.md#httpclientrequeststatusstart) | [HttpClientRequestStatusProgress](_http_client_.md#httpclientrequeststatusprogress) | [HttpClientRequestStatusComplete](_http_client_.md#httpclientrequeststatuscomplete) | [HttpClientRequestStatusHeadersReceived](_http_client_.md#httpclientrequeststatusheadersreceived)‹TResp›*

___

###  HttpClientRequestStatusComplete

Ƭ **HttpClientRequestStatusComplete**: *object*

#### Type declaration:

* **type**: *[Completed](../enums/_http_client_.httpclientrequeststatustype.md#completed)*

___

###  HttpClientRequestStatusHeadersReceived

Ƭ **HttpClientRequestStatusHeadersReceived**: *object*

#### Type declaration:

* **response**: *[HttpResponse](_http_.md#httpresponse)‹TResp›*

* **type**: *[HeadersReceived](../enums/_http_client_.httpclientrequeststatustype.md#headersreceived)*

___

###  HttpClientRequestStatusProgress

Ƭ **HttpClientRequestStatusProgress**: *object*

#### Type declaration:

* **count**: *number*

* **type**: *[Progress](../enums/_http_client_.httpclientrequeststatustype.md#progress)*

___

###  HttpClientRequestStatusStart

Ƭ **HttpClientRequestStatusStart**: *object*

#### Type declaration:

* **type**: *[Start](../enums/_http_client_.httpclientrequeststatustype.md#start)*
