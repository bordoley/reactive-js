[@reactive-js/http-common - v0.0.37](README.md)

# @reactive-js/http-common - v0.0.37

## Index

### Enumerations

* [HttpClientRequestStatusType](enums/httpclientrequeststatustype.md)

### Type aliases

* [HttpClient](README.md#httpclient)
* [HttpClientRequestStatus](README.md#httpclientrequeststatus)
* [HttpClientRequestStatusComplete](README.md#httpclientrequeststatuscomplete)
* [HttpClientRequestStatusHeadersReceived](README.md#httpclientrequeststatusheadersreceived)
* [HttpClientRequestStatusProgress](README.md#httpclientrequeststatusprogress)
* [HttpClientRequestStatusStart](README.md#httpclientrequeststatusstart)
* [HttpServer](README.md#httpserver)

## Type aliases

###  HttpClient

Ƭ **HttpClient**: *function*

#### Type declaration:

▸ (`req`: THttpRequest): *ObservableLike‹[HttpClientRequestStatus](README.md#httpclientrequeststatus)‹TResp››*

**Parameters:**

Name | Type |
------ | ------ |
`req` | THttpRequest |

___

###  HttpClientRequestStatus

Ƭ **HttpClientRequestStatus**: *[HttpClientRequestStatusStart](README.md#httpclientrequeststatusstart) | [HttpClientRequestStatusProgress](README.md#httpclientrequeststatusprogress) | [HttpClientRequestStatusComplete](README.md#httpclientrequeststatuscomplete) | [HttpClientRequestStatusHeadersReceived](README.md#httpclientrequeststatusheadersreceived)‹TResp›*

___

###  HttpClientRequestStatusComplete

Ƭ **HttpClientRequestStatusComplete**: *object*

#### Type declaration:

___

###  HttpClientRequestStatusHeadersReceived

Ƭ **HttpClientRequestStatusHeadersReceived**: *object*

#### Type declaration:

___

###  HttpClientRequestStatusProgress

Ƭ **HttpClientRequestStatusProgress**: *object*

#### Type declaration:

___

###  HttpClientRequestStatusStart

Ƭ **HttpClientRequestStatusStart**: *object*

#### Type declaration:

___

###  HttpServer

Ƭ **HttpServer**: *function*

#### Type declaration:

▸ (`req`: THttpRequest): *ObservableLike‹THttpResponse›*

**Parameters:**

Name | Type |
------ | ------ |
`req` | THttpRequest |
