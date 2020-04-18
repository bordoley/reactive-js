[@reactive-js/http-web - v0.0.33](README.md)

# @reactive-js/http-web - v0.0.33

## Index

### Enumerations

* [HttpClientRequestStatusType](enums/httpclientrequeststatustype.md)

### Interfaces

* [WebResponseBodyLike](interfaces/webresponsebodylike.md)

### Type aliases

* [HttpClientRequestStatus](README.md#httpclientrequeststatus)
* [HttpClientRequestStatusBegin](README.md#httpclientrequeststatusbegin)
* [HttpClientRequestStatusResponseReady](README.md#httpclientrequeststatusresponseready)
* [HttpClientRequestStatusUploadComplete](README.md#httpclientrequeststatusuploadcomplete)
* [HttpClientRequestStatusUploading](README.md#httpclientrequeststatusuploading)
* [HttpWebRequest](README.md#httpwebrequest)
* [WebRequestBody](README.md#webrequestbody)

### Functions

* [sendHttpRequest](README.md#const-sendhttprequest)

## Type aliases

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

___

###  HttpWebRequest

Ƭ **HttpWebRequest**: *HttpContentRequest‹[WebRequestBody](README.md#webrequestbody)› & object*

___

###  WebRequestBody

Ƭ **WebRequestBody**: *Blob | BufferSource | FormData | ReadableStream‹Uint8Array› | string | URLSearchParams*

## Functions

### `Const` sendHttpRequest

▸ **sendHttpRequest**(`request`: [HttpWebRequest](README.md#httpwebrequest)): *ObservableLike‹[HttpClientRequestStatus](README.md#httpclientrequeststatus)›*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [HttpWebRequest](README.md#httpwebrequest) |

**Returns:** *ObservableLike‹[HttpClientRequestStatus](README.md#httpclientrequeststatus)›*
