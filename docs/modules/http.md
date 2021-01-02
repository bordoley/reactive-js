[Reactive-JS](../README.md) / http

# Module: http

## Index

### Enumerations

* [HttpExtensionHeader](../enums/http.httpextensionheader.md)
* [HttpStandardHeader](../enums/http.httpstandardheader.md)
* [HttpStatusCode](../enums/http.httpstatuscode.md)

### Interfaces

* [URILike](../interfaces/http.urilike.md)

### Type aliases

* [CacheDirective](http.md#cachedirective)
* [EntityTag](http.md#entitytag)
* [HttpContentEncoding](http.md#httpcontentencoding)
* [HttpContentInfo](http.md#httpcontentinfo)
* [HttpDateTime](http.md#httpdatetime)
* [HttpHeaders](http.md#httpheaders)
* [HttpMessage](http.md#httpmessage)
* [HttpMessageOptions](http.md#httpmessageoptions)
* [HttpMethod](http.md#httpmethod)
* [HttpPreferences](http.md#httppreferences)
* [HttpRequest](http.md#httprequest)
* [HttpRequestOptions](http.md#httprequestoptions)
* [HttpRequestPreconditions](http.md#httprequestpreconditions)
* [HttpResponse](http.md#httpresponse)
* [HttpResponseOptions](http.md#httpresponseoptions)
* [MediaRange](http.md#mediarange)
* [MediaType](http.md#mediatype)

### Functions

* [checkIfNotModified](http.md#checkifnotmodified)
* [createHttpErrorResponse](http.md#createhttperrorresponse)
* [createHttpRequest](http.md#createhttprequest)
* [createHttpResponse](http.md#createhttpresponse)
* [createRedirectHttpRequest](http.md#createredirecthttprequest)
* [decodeHttpRequestContent](http.md#decodehttprequestcontent)
* [decodeHttpRequestWithCharset](http.md#decodehttprequestwithcharset)
* [decodeHttpResponseContent](http.md#decodehttpresponsecontent)
* [decodeHttpResponseWithCharset](http.md#decodehttpresponsewithcharset)
* [disallowProtocolAndHostForwarding](http.md#disallowprotocolandhostforwarding)
* [encodeHttpRequestWithUtf8](http.md#encodehttprequestwithutf8)
* [encodeHttpResponseContent](http.md#encodehttpresponsecontent)
* [encodeHttpResponseWithUtf8](http.md#encodehttpresponsewithutf8)
* [toIOSourceHttpRequest](http.md#toiosourcehttprequest)
* [toIOSourceHttpResponse](http.md#toiosourcehttpresponse)
* [writeHttpRequestHeaders](http.md#writehttprequestheaders)
* [writeHttpResponseHeaders](http.md#writehttpresponseheaders)

## Type aliases

### CacheDirective

Ƭ **CacheDirective**: { `directive`: *string* ; `value`: *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`directive` | *string* |
`value` | *string* |

___

### EntityTag

Ƭ **EntityTag**: { `isWeak`: *boolean* ; `tag`: *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`isWeak` | *boolean* |
`tag` | *string* |

___

### HttpContentEncoding

Ƭ **HttpContentEncoding**: *br* \| *compress* \| *deflate* \| *gzip* \| *identify*

___

### HttpContentInfo

Ƭ **HttpContentInfo**: { `contentEncodings`: readonly [*HttpContentEncoding*](http.md#httpcontentencoding)[] ; `contentLength`: *number* ; `contentType`: [*MediaType*](http.md#mediatype)  }

#### Type declaration:

Name | Type |
------ | ------ |
`contentEncodings` | readonly [*HttpContentEncoding*](http.md#httpcontentencoding)[] |
`contentLength` | *number* |
`contentType` | [*MediaType*](http.md#mediatype) |

___

### HttpDateTime

Ƭ **HttpDateTime**: *number*

___

### HttpHeaders

Ƭ **HttpHeaders**: [*ReadonlyObjectMap*](readonlyobjectmap.md#readonlyobjectmap)<*string*\>

___

### HttpMessage

Ƭ **HttpMessage**<T\>: { `body`: T ; `cacheControl`: readonly [*CacheDirective*](http.md#cachedirective)[] ; `contentInfo?`: [*HttpContentInfo*](http.md#httpcontentinfo) ; `headers`: [*HttpHeaders*](http.md#httpheaders) ; `preferences?`: [*HttpPreferences*](http.md#httppreferences)  }

#### Type parameters:

Name |
------ |
`T` |

#### Type declaration:

Name | Type |
------ | ------ |
`body` | T |
`cacheControl` | readonly [*CacheDirective*](http.md#cachedirective)[] |
`contentInfo?` | [*HttpContentInfo*](http.md#httpcontentinfo) |
`headers` | [*HttpHeaders*](http.md#httpheaders) |
`preferences?` | [*HttpPreferences*](http.md#httppreferences) |

___

### HttpMessageOptions

Ƭ **HttpMessageOptions**<T\>: { `body`: T ; `cacheControl?`: readonly (*string* \| [*CacheDirective*](http.md#cachedirective))[] ; `contentInfo?`: { `contentEncodings?`: readonly [*HttpContentEncoding*](http.md#httpcontentencoding)[] ; `contentLength?`: *number* ; `contentType`: [*MediaType*](http.md#mediatype) \| *string*  } ; `headers?`: [*HttpHeaders*](http.md#httpheaders) ; `preferences?`: { `acceptedCharsets?`: readonly *string*[] ; `acceptedEncodings?`: readonly [*HttpContentEncoding*](http.md#httpcontentencoding)[] ; `acceptedLanguages?`: readonly *string*[] ; `acceptedMediaRanges?`: readonly (*string* \| [*MediaRange*](http.md#mediarange))[]  }  }

#### Type parameters:

Name |
------ |
`T` |

#### Type declaration:

Name | Type |
------ | ------ |
`body` | T |
`cacheControl?` | readonly (*string* \| [*CacheDirective*](http.md#cachedirective))[] |
`contentInfo?` | { `contentEncodings?`: readonly [*HttpContentEncoding*](http.md#httpcontentencoding)[] ; `contentLength?`: *number* ; `contentType`: [*MediaType*](http.md#mediatype) \| *string*  } |
`headers?` | [*HttpHeaders*](http.md#httpheaders) |
`preferences?` | { `acceptedCharsets?`: readonly *string*[] ; `acceptedEncodings?`: readonly [*HttpContentEncoding*](http.md#httpcontentencoding)[] ; `acceptedLanguages?`: readonly *string*[] ; `acceptedMediaRanges?`: readonly (*string* \| [*MediaRange*](http.md#mediarange))[]  } |

___

### HttpMethod

Ƭ **HttpMethod**: *GET* \| *HEAD* \| *POST* \| *PUT* \| *DELETE*

___

### HttpPreferences

Ƭ **HttpPreferences**: { `acceptedCharsets`: readonly *string*[] ; `acceptedEncodings`: readonly [*HttpContentEncoding*](http.md#httpcontentencoding)[] ; `acceptedLanguages`: readonly *string*[] ; `acceptedMediaRanges`: readonly [*MediaRange*](http.md#mediarange)[]  }

#### Type declaration:

Name | Type |
------ | ------ |
`acceptedCharsets` | readonly *string*[] |
`acceptedEncodings` | readonly [*HttpContentEncoding*](http.md#httpcontentencoding)[] |
`acceptedLanguages` | readonly *string*[] |
`acceptedMediaRanges` | readonly [*MediaRange*](http.md#mediarange)[] |

___

### HttpRequest

Ƭ **HttpRequest**<T\>: [*HttpMessage*](http.md#httpmessage)<T\> & { `expectContinue`: *boolean* ; `httpVersionMajor`: *number* ; `httpVersionMinor`: *number* ; `isTransportSecure`: *boolean* ; `method`: [*HttpMethod*](http.md#httpmethod) ; `preconditions?`: [*HttpRequestPreconditions*](http.md#httprequestpreconditions) ; `uri`: [*URILike*](../interfaces/http.urilike.md)  }

#### Type parameters:

Name |
------ |
`T` |

___

### HttpRequestOptions

Ƭ **HttpRequestOptions**<T\>: [*HttpMessageOptions*](http.md#httpmessageoptions)<T\> & { `expectContinue?`: *boolean* ; `headers?`: [*HttpHeaders*](http.md#httpheaders) ; `httpVersionMajor?`: *number* ; `httpVersionMinor?`: *number* ; `isTransportSecure?`: *boolean* ; `method`: [*HttpMethod*](http.md#httpmethod) ; `preconditions?`: { `ifMatch?`: readonly (*string* \| [*EntityTag*](http.md#entitytag))[] \| *** ; `ifModifiedSince?`: *string* \| [*HttpDateTime*](http.md#httpdatetime) \| Date ; `ifNoneMatch?`: readonly (*string* \| [*EntityTag*](http.md#entitytag))[] \| *** ; `ifRange?`: *string* \| [*EntityTag*](http.md#entitytag) \| [*HttpDateTime*](http.md#httpdatetime) \| Date ; `ifUnmodifiedSince?`: *string* \| [*HttpDateTime*](http.md#httpdatetime) \| Date  } ; `uri`: *string* \| [*URILike*](../interfaces/http.urilike.md)  }

#### Type parameters:

Name |
------ |
`T` |

___

### HttpRequestPreconditions

Ƭ **HttpRequestPreconditions**: { `ifMatch?`: readonly [*EntityTag*](http.md#entitytag)[] \| *** ; `ifModifiedSince?`: [*HttpDateTime*](http.md#httpdatetime) ; `ifNoneMatch?`: readonly [*EntityTag*](http.md#entitytag)[] \| *** ; `ifRange?`: [*EntityTag*](http.md#entitytag) \| [*HttpDateTime*](http.md#httpdatetime) ; `ifUnmodifiedSince?`: [*HttpDateTime*](http.md#httpdatetime)  }

#### Type declaration:

Name | Type |
------ | ------ |
`ifMatch?` | readonly [*EntityTag*](http.md#entitytag)[] \| *** |
`ifModifiedSince?` | [*HttpDateTime*](http.md#httpdatetime) |
`ifNoneMatch?` | readonly [*EntityTag*](http.md#entitytag)[] \| *** |
`ifRange?` | [*EntityTag*](http.md#entitytag) \| [*HttpDateTime*](http.md#httpdatetime) |
`ifUnmodifiedSince?` | [*HttpDateTime*](http.md#httpdatetime) |

___

### HttpResponse

Ƭ **HttpResponse**<T\>: [*HttpMessage*](http.md#httpmessage)<T\> & { `etag?`: [*EntityTag*](http.md#entitytag) ; `expires?`: [*HttpDateTime*](http.md#httpdatetime) ; `lastModified?`: [*HttpDateTime*](http.md#httpdatetime) ; `location?`: [*URILike*](../interfaces/http.urilike.md) ; `statusCode`: [*HttpStatusCode*](../enums/http.httpstatuscode.md) ; `vary`: readonly *string*[]  }

#### Type parameters:

Name |
------ |
`T` |

___

### HttpResponseOptions

Ƭ **HttpResponseOptions**<T\>: [*HttpMessageOptions*](http.md#httpmessageoptions)<T\> & { `etag?`: *string* \| [*EntityTag*](http.md#entitytag) ; `expires?`: *number* \| *string* \| Date ; `headers?`: [*HttpHeaders*](http.md#httpheaders) ; `lastModified?`: *number* \| *string* \| Date ; `location?`: *string* \| [*URILike*](../interfaces/http.urilike.md) ; `statusCode`: [*HttpStatusCode*](../enums/http.httpstatuscode.md) ; `vary?`: readonly *string*[]  }

#### Type parameters:

Name |
------ |
`T` |

___

### MediaRange

Ƭ **MediaRange**: { `subtype`: *string* \| *** ; `type`: *string* \| ***  }

#### Type declaration:

Name | Type |
------ | ------ |
`subtype` | *string* \| *** |
`type` | *string* \| *** |

___

### MediaType

Ƭ **MediaType**: { `params`: [*ReadonlyObjectMap*](readonlyobjectmap.md#readonlyobjectmap)<*string*\> ; `subtype`: *string* ; `type`: *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`params` | [*ReadonlyObjectMap*](readonlyobjectmap.md#readonlyobjectmap)<*string*\> |
`subtype` | *string* |
`type` | *string* |

## Functions

### checkIfNotModified

▸ `Const`**checkIfNotModified**<T\>(`__namedParameters`: [*HttpRequest*](http.md#httprequest)<*unknown*\>): [*Function1*](functions.md#function1)<[*HttpResponse*](http.md#httpresponse)<T\>, [*HttpResponse*](http.md#httpresponse)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | [*HttpRequest*](http.md#httprequest)<*unknown*\> |

**Returns:** [*Function1*](functions.md#function1)<[*HttpResponse*](http.md#httpresponse)<T\>, [*HttpResponse*](http.md#httpresponse)<T\>\>

___

### createHttpErrorResponse

▸ `Const`**createHttpErrorResponse**(`e`: *unknown*): [*HttpResponse*](http.md#httpresponse)<*unknown*\>

#### Parameters:

Name | Type |
------ | ------ |
`e` | *unknown* |

**Returns:** [*HttpResponse*](http.md#httpresponse)<*unknown*\>

___

### createHttpRequest

▸ `Const`**createHttpRequest**<T\>(`options`: [*HttpRequestOptions*](http.md#httprequestoptions)<T\>): [*HttpRequest*](http.md#httprequest)<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`options` | [*HttpRequestOptions*](http.md#httprequestoptions)<T\> |

**Returns:** [*HttpRequest*](http.md#httprequest)<T\>

___

### createHttpResponse

▸ `Const`**createHttpResponse**<T\>(`__namedParameters`: [*HttpResponseOptions*](http.md#httpresponseoptions)<T\>): [*HttpResponse*](http.md#httpresponse)<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | [*HttpResponseOptions*](http.md#httpresponseoptions)<T\> |

**Returns:** [*HttpResponse*](http.md#httpresponse)<T\>

___

### createRedirectHttpRequest

▸ `Const`**createRedirectHttpRequest**<THttpRequest, TReq\>(`request`: THttpRequest, `response`: [*HttpResponse*](http.md#httpresponse)<*unknown*\>): THttpRequest

#### Type parameters:

Name | Type |
------ | ------ |
`THttpRequest` | [*HttpRequest*](http.md#httprequest)<TReq\> |
`TReq` | - |

#### Parameters:

Name | Type |
------ | ------ |
`request` | THttpRequest |
`response` | [*HttpResponse*](http.md#httpresponse)<*unknown*\> |

**Returns:** THttpRequest

___

### decodeHttpRequestContent

▸ `Const`**decodeHttpRequestContent**(`decoderProvider`: [*ReadonlyObjectMap*](readonlyobjectmap.md#readonlyobjectmap)<[*Function1*](functions.md#function1)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>\>): [*Function1*](functions.md#function1)<[*HttpRequest*](http.md#httprequest)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>, [*HttpRequest*](http.md#httprequest)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>\>

#### Parameters:

Name | Type |
------ | ------ |
`decoderProvider` | [*ReadonlyObjectMap*](readonlyobjectmap.md#readonlyobjectmap)<[*Function1*](functions.md#function1)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>\> |

**Returns:** [*Function1*](functions.md#function1)<[*HttpRequest*](http.md#httprequest)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>, [*HttpRequest*](http.md#httprequest)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>\>

___

### decodeHttpRequestWithCharset

▸ `Const`**decodeHttpRequestWithCharset**(`a`: [*HttpRequest*](http.md#httprequest)<*Uint8Array*\>): [*HttpRequest*](http.md#httprequest)<*string*\>

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*HttpRequest*](http.md#httprequest)<*Uint8Array*\> |

**Returns:** [*HttpRequest*](http.md#httprequest)<*string*\>

___

### decodeHttpResponseContent

▸ `Const`**decodeHttpResponseContent**(`decoderProvider`: [*ReadonlyObjectMap*](readonlyobjectmap.md#readonlyobjectmap)<[*Function1*](functions.md#function1)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>\>): [*Function1*](functions.md#function1)<[*HttpResponse*](http.md#httpresponse)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>, [*HttpResponse*](http.md#httpresponse)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>\>

#### Parameters:

Name | Type |
------ | ------ |
`decoderProvider` | [*ReadonlyObjectMap*](readonlyobjectmap.md#readonlyobjectmap)<[*Function1*](functions.md#function1)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>\> |

**Returns:** [*Function1*](functions.md#function1)<[*HttpResponse*](http.md#httpresponse)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>, [*HttpResponse*](http.md#httpresponse)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>\>

___

### decodeHttpResponseWithCharset

▸ `Const`**decodeHttpResponseWithCharset**(`a`: [*HttpResponse*](http.md#httpresponse)<*Uint8Array*\>): [*HttpResponse*](http.md#httpresponse)<*string*\>

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*HttpResponse*](http.md#httpresponse)<*Uint8Array*\> |

**Returns:** [*HttpResponse*](http.md#httpresponse)<*string*\>

___

### disallowProtocolAndHostForwarding

▸ `Const`**disallowProtocolAndHostForwarding**<T\>(): [*Function1*](functions.md#function1)<[*HttpRequest*](http.md#httprequest)<T\>, [*HttpRequest*](http.md#httprequest)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Function1*](functions.md#function1)<[*HttpRequest*](http.md#httprequest)<T\>, [*HttpRequest*](http.md#httprequest)<T\>\>

___

### encodeHttpRequestWithUtf8

▸ `Const`**encodeHttpRequestWithUtf8**(`a`: [*HttpRequest*](http.md#httprequest)<*string*\>): [*HttpRequest*](http.md#httprequest)<*Uint8Array*\>

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*HttpRequest*](http.md#httprequest)<*string*\> |

**Returns:** [*HttpRequest*](http.md#httprequest)<*Uint8Array*\>

___

### encodeHttpResponseContent

▸ `Const`**encodeHttpResponseContent**(`encoderProvider`: [*ReadonlyObjectMap*](readonlyobjectmap.md#readonlyobjectmap)<[*Function1*](functions.md#function1)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>\>, `db?`: [*ReadonlyObjectMap*](readonlyobjectmap.md#readonlyobjectmap)<{ `compressible?`: *undefined* \| *boolean*  }\>): [*Function1*](functions.md#function1)<[*HttpRequest*](http.md#httprequest)<*unknown*\>, [*Updater*](functions.md#updater)<[*HttpResponse*](http.md#httpresponse)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>\>\>

#### Parameters:

Name | Type |
------ | ------ |
`encoderProvider` | [*ReadonlyObjectMap*](readonlyobjectmap.md#readonlyobjectmap)<[*Function1*](functions.md#function1)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>, [*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>\> |
`db?` | [*ReadonlyObjectMap*](readonlyobjectmap.md#readonlyobjectmap)<{ `compressible?`: *undefined* \| *boolean*  }\> |

**Returns:** [*Function1*](functions.md#function1)<[*HttpRequest*](http.md#httprequest)<*unknown*\>, [*Updater*](functions.md#updater)<[*HttpResponse*](http.md#httpresponse)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<*Uint8Array*\>\>\>\>

___

### encodeHttpResponseWithUtf8

▸ `Const`**encodeHttpResponseWithUtf8**(`a`: [*HttpResponse*](http.md#httpresponse)<*string*\>): [*HttpResponse*](http.md#httpresponse)<*Uint8Array*\>

#### Parameters:

Name | Type |
------ | ------ |
`a` | [*HttpResponse*](http.md#httpresponse)<*string*\> |

**Returns:** [*HttpResponse*](http.md#httpresponse)<*Uint8Array*\>

___

### toIOSourceHttpRequest

▸ `Const`**toIOSourceHttpRequest**<TBody\>(`req`: [*HttpRequest*](http.md#httprequest)<TBody\>): [*HttpRequest*](http.md#httprequest)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<TBody\>\>

#### Type parameters:

Name |
------ |
`TBody` |

#### Parameters:

Name | Type |
------ | ------ |
`req` | [*HttpRequest*](http.md#httprequest)<TBody\> |

**Returns:** [*HttpRequest*](http.md#httprequest)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<TBody\>\>

___

### toIOSourceHttpResponse

▸ `Const`**toIOSourceHttpResponse**<TBody\>(`resp`: [*HttpResponse*](http.md#httpresponse)<TBody\>): [*HttpResponse*](http.md#httpresponse)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<TBody\>\>

#### Type parameters:

Name |
------ |
`TBody` |

#### Parameters:

Name | Type |
------ | ------ |
`resp` | [*HttpResponse*](http.md#httpresponse)<TBody\> |

**Returns:** [*HttpResponse*](http.md#httpresponse)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<TBody\>\>

___

### writeHttpRequestHeaders

▸ `Const`**writeHttpRequestHeaders**<T\>(`request`: [*HttpRequest*](http.md#httprequest)<T\>, `writeHeader`: [*SideEffect2*](functions.md#sideeffect2)<*string*, *string*\>): *void*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`request` | [*HttpRequest*](http.md#httprequest)<T\> |
`writeHeader` | [*SideEffect2*](functions.md#sideeffect2)<*string*, *string*\> |

**Returns:** *void*

___

### writeHttpResponseHeaders

▸ `Const`**writeHttpResponseHeaders**<T\>(`response`: [*HttpResponse*](http.md#httpresponse)<T\>, `writeHeader`: [*SideEffect2*](functions.md#sideeffect2)<*string*, *string*\>): *void*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`response` | [*HttpResponse*](http.md#httpresponse)<T\> |
`writeHeader` | [*SideEffect2*](functions.md#sideeffect2)<*string*, *string*\> |

**Returns:** *void*
