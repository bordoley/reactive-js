[@reactive-js/http-web](README.md)

# @reactive-js/http-web

## Index

### Enumerations

* [HttpClientRequestStatusType](enums/httpclientrequeststatustype.md)

### Interfaces

* [HttpClientRequestStatusBegin](interfaces/httpclientrequeststatusbegin.md)
* [HttpClientRequestStatusResponseReady](interfaces/httpclientrequeststatusresponseready.md)
* [HttpClientRequestStatusUploadComplete](interfaces/httpclientrequeststatusuploadcomplete.md)
* [HttpClientRequestStatusUploading](interfaces/httpclientrequeststatusuploading.md)

### Type aliases

* [HttpBody](README.md#httpbody)
* [HttpClientRequestStatus](README.md#httpclientrequeststatus)

### Functions

* [sendHttpRequest](README.md#const-sendhttprequest)

## Type aliases

###  HttpBody

Ƭ **HttpBody**: *string | Document | Blob | ArrayBufferView | ArrayBuffer | FormData | URLSearchParams | ReadableStream‹Uint8Array›*

___

###  HttpClientRequestStatus

Ƭ **HttpClientRequestStatus**: *[HttpClientRequestStatusBegin](interfaces/httpclientrequeststatusbegin.md) | [HttpClientRequestStatusUploading](interfaces/httpclientrequeststatusuploading.md) | [HttpClientRequestStatusUploadComplete](interfaces/httpclientrequeststatusuploadcomplete.md) | [HttpClientRequestStatusResponseReady](interfaces/httpclientrequeststatusresponseready.md)*

## Functions

### `Const` sendHttpRequest

▸ **sendHttpRequest**(`request`: HttpContentRequestLike‹[HttpBody](README.md#httpbody)›): *ObservableLike‹[HttpClientRequestStatus](README.md#httpclientrequeststatus)›*

**Parameters:**

Name | Type |
------ | ------ |
`request` | HttpContentRequestLike‹[HttpBody](README.md#httpbody)› |

**Returns:** *ObservableLike‹[HttpClientRequestStatus](README.md#httpclientrequeststatus)›*
