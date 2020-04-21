[@reactive-js/http-common - v0.0.35](README.md)

# @reactive-js/http-common - v0.0.35

## Index

### Enumerations

* [HttpClientRequestStatusType](enums/httpclientrequeststatustype.md)

### Type aliases

* [HttpClient](README.md#httpclient)
* [HttpClientRequestStatus](README.md#httpclientrequeststatus)
* [HttpClientRequestStatusComplete](README.md#httpclientrequeststatuscomplete)
* [HttpClientRequestStatusHeaderReceived](README.md#httpclientrequeststatusheaderreceived)
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

Ƭ **HttpClientRequestStatus**: *[HttpClientRequestStatusStart](README.md#httpclientrequeststatusstart) | [HttpClientRequestStatusProgress](README.md#httpclientrequeststatusprogress) | [HttpClientRequestStatusComplete](README.md#httpclientrequeststatuscomplete) | [HttpClientRequestStatusHeaderReceived](README.md#httpclientrequeststatusheaderreceived)‹TResp›*

___

###  HttpClientRequestStatusComplete

Ƭ **HttpClientRequestStatusComplete**: *object*

#### Type declaration:

___

###  HttpClientRequestStatusHeaderReceived

Ƭ **HttpClientRequestStatusHeaderReceived**: *object*

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

▸ (`req`: HttpServerRequest‹TReq›): *ObservableLike‹HttpResponse‹TResp››*

**Parameters:**

Name | Type |
------ | ------ |
`req` | HttpServerRequest‹TReq› |
