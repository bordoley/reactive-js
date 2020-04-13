[@reactive-js/http-web](README.md)

# @reactive-js/http-web

## Index

### Enumerations

* [HttpClientRequestStatusType](enums/httpclientrequeststatustype.md)

### Type aliases

* [HttpBody](README.md#httpbody)
* [HttpClientRequestStatus](README.md#httpclientrequeststatus)
* [HttpClientRequestStatusBegin](README.md#httpclientrequeststatusbegin)
* [HttpClientRequestStatusResponseReady](README.md#httpclientrequeststatusresponseready)
* [HttpClientRequestStatusUploadComplete](README.md#httpclientrequeststatusuploadcomplete)
* [HttpClientRequestStatusUploading](README.md#httpclientrequeststatusuploading)

### Functions

* [sendHttpRequest](README.md#const-sendhttprequest)

## Type aliases

###  HttpBody

Ƭ **HttpBody**: *string | Document | Blob | ArrayBufferView | ArrayBuffer | FormData | URLSearchParams | ReadableStream‹Uint8Array›*

___

###  HttpClientRequestStatus

Ƭ **HttpClientRequestStatus**: *[HttpClientRequestStatusBegin](README.md#httpclientrequeststatusbegin) | [HttpClientRequestStatusUploading](README.md#httpclientrequeststatusuploading) | [HttpClientRequestStatusUploadComplete](README.md#httpclientrequeststatusuploadcomplete) | [HttpClientRequestStatusResponseReady](README.md#httpclientrequeststatusresponseready)*

___

###  HttpClientRequestStatusBegin

Ƭ **HttpClientRequestStatusBegin**: *object*

#### Type declaration:

___

###  HttpClientRequestStatusResponseReady

Ƭ **HttpClientRequestStatusResponseReady**: *object*

#### Type declaration:

___

###  HttpClientRequestStatusUploadComplete

Ƭ **HttpClientRequestStatusUploadComplete**: *object*

#### Type declaration:

___

###  HttpClientRequestStatusUploading

Ƭ **HttpClientRequestStatusUploading**: *object*

#### Type declaration:

## Functions

### `Const` sendHttpRequest

▸ **sendHttpRequest**(`request`: HttpContentRequest‹[HttpBody](README.md#httpbody)›): *ObservableLike‹[HttpClientRequestStatus](README.md#httpclientrequeststatus)›*

**Parameters:**

Name | Type |
------ | ------ |
`request` | HttpContentRequest‹[HttpBody](README.md#httpbody)› |

**Returns:** *ObservableLike‹[HttpClientRequestStatus](README.md#httpclientrequeststatus)›*
