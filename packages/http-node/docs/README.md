[@reactive-js/http-node](README.md)

# @reactive-js/http-node

## Index

### Enumerations

* [HttpContentEncoding](enums/httpcontentencoding.md)

### Interfaces

* [HttpClientResponseLike](interfaces/httpclientresponselike.md)
* [HttpContentBodyLike](interfaces/httpcontentbodylike.md)

### Functions

* [createBufferContentBody](README.md#const-createbuffercontentbody)
* [createHttpServer](README.md#const-createhttpserver)
* [createStringContentBody](README.md#const-createstringcontentbody)
* [decodeHttpRequest](README.md#const-decodehttprequest)
* [encodeHttpResponse](README.md#const-encodehttpresponse)
* [handleHttpClientReponseRedirect](README.md#const-handlehttpclientreponseredirect)
* [sendHttpRequest](README.md#const-sendhttprequest)

## Functions

### `Const` createBufferContentBody

▸ **createBufferContentBody**(`chunk`: Buffer, `contentType`: string, `contentEncodings`: keyof HttpContentEncoding[]): *BufferContentBodyImpl‹›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`chunk` | Buffer | - |
`contentType` | string | - |
`contentEncodings` | keyof HttpContentEncoding[] |  [] |

**Returns:** *BufferContentBodyImpl‹›*

___

### `Const` createHttpServer

▸ **createHttpServer**(`requestHandler`: function, `options`: object & SecureContextOptions & TlsOptions & ServerOptions): *OperatorLike‹void, ObservableLike‹void››*

**Parameters:**

▪ **requestHandler**: *function*

▸ (`req`: HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)›): *ObservableLike‹HttpResponseLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)››*

**Parameters:**

Name | Type |
------ | ------ |
`req` | HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)› |

▪ **options**: *object & SecureContextOptions & TlsOptions & ServerOptions*

**Returns:** *OperatorLike‹void, ObservableLike‹void››*

___

### `Const` createStringContentBody

▸ **createStringContentBody**(`content`: string, `contentType`: string, `contentEncodings`: keyof HttpContentEncoding[]): *BufferContentBodyImpl‹›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`content` | string | - |
`contentType` | string | - |
`contentEncodings` | keyof HttpContentEncoding[] |  [] |

**Returns:** *BufferContentBodyImpl‹›*

___

### `Const` decodeHttpRequest

▸ **decodeHttpRequest**(`request`: HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)›): *HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`request` | HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)› |

**Returns:** *HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)›*

___

### `Const` encodeHttpResponse

▸ **encodeHttpResponse**(`acceptedEncodings`: keyof HttpContentEncoding[]): *(Anonymous function)*

**Parameters:**

Name | Type |
------ | ------ |
`acceptedEncodings` | keyof HttpContentEncoding[] |

**Returns:** *(Anonymous function)*

___

### `Const` handleHttpClientReponseRedirect

▸ **handleHttpClientReponseRedirect**(`maxAttempts`: number): *ObservableOperatorLike‹[HttpClientResponseLike](interfaces/httpclientresponselike.md), [HttpClientResponseLike](interfaces/httpclientresponselike.md)›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`maxAttempts` | number | 10 |

**Returns:** *ObservableOperatorLike‹[HttpClientResponseLike](interfaces/httpclientresponselike.md), [HttpClientResponseLike](interfaces/httpclientresponselike.md)›*

___

### `Const` sendHttpRequest

▸ **sendHttpRequest**(`clientRequest`: HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)›): *ObservableLike‹[HttpClientResponseLike](interfaces/httpclientresponselike.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`clientRequest` | HttpRequestLike‹[HttpContentBodyLike](interfaces/httpcontentbodylike.md)› |

**Returns:** *ObservableLike‹[HttpClientResponseLike](interfaces/httpclientresponselike.md)›*
