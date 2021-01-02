[Reactive-JS](../README.md) / http

# Module: http

## Index

### Interfaces

* [URILike](../interfaces/http.urilike.md)

### Type aliases

* [CacheDirective](http.md#cachedirective)
* [EntityTag](http.md#entitytag)
* [HttpContentEncoding](http.md#httpcontentencoding)
* [HttpContentInfo](http.md#httpcontentinfo)
* [HttpDateTime](http.md#httpdatetime)
* [HttpExtensionHeader](http.md#httpextensionheader)
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
* [HttpStandardHeader](http.md#httpstandardheader)
* [HttpStatusCode](http.md#httpstatuscode)
* [MediaRange](http.md#mediarange)
* [MediaType](http.md#mediatype)

### Variables

* [HttpExtensionHeaders](http.md#httpextensionheaders)
* [HttpStandardHeaders](http.md#httpstandardheaders)
* [HttpStatusCodes](http.md#httpstatuscodes)

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

### HttpExtensionHeader

Ƭ **HttpExtensionHeader**: *typeof* [*HttpExtensionHeaders*](http.md#httpextensionheaders)[HttpExtensionHeadersKeys]

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

Ƭ **HttpResponse**<T\>: [*HttpMessage*](http.md#httpmessage)<T\> & { `etag?`: [*EntityTag*](http.md#entitytag) ; `expires?`: [*HttpDateTime*](http.md#httpdatetime) ; `lastModified?`: [*HttpDateTime*](http.md#httpdatetime) ; `location?`: [*URILike*](../interfaces/http.urilike.md) ; `statusCode`: [*HttpStatusCode*](http.md#httpstatuscode) ; `vary`: readonly *string*[]  }

#### Type parameters:

Name |
------ |
`T` |

___

### HttpResponseOptions

Ƭ **HttpResponseOptions**<T\>: [*HttpMessageOptions*](http.md#httpmessageoptions)<T\> & { `etag?`: *string* \| [*EntityTag*](http.md#entitytag) ; `expires?`: *number* \| *string* \| Date ; `headers?`: [*HttpHeaders*](http.md#httpheaders) ; `lastModified?`: *number* \| *string* \| Date ; `location?`: *string* \| [*URILike*](../interfaces/http.urilike.md) ; `statusCode`: [*HttpStatusCode*](http.md#httpstatuscode) ; `vary?`: readonly *string*[]  }

#### Type parameters:

Name |
------ |
`T` |

___

### HttpStandardHeader

Ƭ **HttpStandardHeader**: *typeof* [*HttpStandardHeaders*](http.md#httpstandardheaders)[HttpStandardHeadersKeys]

___

### HttpStatusCode

Ƭ **HttpStatusCode**: *typeof* [*HttpStatusCodes*](http.md#httpstatuscodes)[HttpStatusCodesKeys]

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

## Variables

### HttpExtensionHeaders

• `Const` **HttpExtensionHeaders**: object

#### Type declaration:

Name | Type | Value |
------ | ------ | ------ |
`XForwardedHost` | *string* | *string* |
`XForwardedProto` | *string* | *string* |
`XHttpMethod` | *string* | *string* |
`XHttpMethodOverride` | *string* | *string* |
`XMethodOverride` | *string* | *string* |

___

### HttpStandardHeaders

• `Const` **HttpStandardHeaders**: object

#### Type declaration:

Name | Type | Value |
------ | ------ | ------ |
`Accept` | *Accept* | *Accept* |
`AcceptCharset` | *Accept-Charset* | *Accept-Charset* |
`AcceptEncoding` | *Accept-Encoding* | *Accept-Encoding* |
`AcceptLanguage` | *Accept-Language* | *Accept-Language* |
`AcceptRanges` | *Accept-Ranges* | *Accept-Ranges* |
`Age` | *Age* | *Age* |
`Allow` | *Allow* | *Allow* |
`Authorization` | *Authorization* | *Authorization* |
`CacheControl` | *Cache-Control* | *Cache-Control* |
`Connection` | *Connection* | *Connection* |
`ContentEncoding` | *Content-Encoding* | *Content-Encoding* |
`ContentLanguage` | *Content-Language* | *Content-Language* |
`ContentLength` | *Content-Length* | *Content-Length* |
`ContentLocation` | *Content-Location* | *Content-Location* |
`ContentMD5` | *Content-MD5* | *Content-MD5* |
`ContentRange` | *Content-Range* | *Content-Range* |
`ContentType` | *Content-Type* | *Content-Type* |
`Cookie` | *Cookie* | *Cookie* |
`Date` | *Date* | *Date* |
`ETag` | *ETag* | *ETag* |
`Expect` | *Expect* | *Expect* |
`Expires` | *Expires* | *Expires* |
`From` | *From* | *From* |
`Host` | *Host* | *Host* |
`IfMatch` | *If-Match* | *If-Match* |
`IfModifiedSince` | *If-Modified-Since* | *If-Modified-Since* |
`IfNoneMatch` | *If-None-Match* | *If-None-Match* |
`IfRange` | *If-Range* | *If-Range* |
`IfUnmodifiedSince` | *If-Unmodified-Since* | *If-Unmodified-Since* |
`LastModified` | *Last-Modified* | *Last-Modified* |
`Location` | *Location* | *Location* |
`MaxForwards` | *Max-Forwards* | *Max-Forwards* |
`Pragma` | *Pragma* | *Pragma* |
`ProxyAuthenticate` | *Proxy-Authenticate* | *Proxy-Authenticate* |
`ProxyAuthorization` | *Proxy-Authorization* | *Proxy-Authorization* |
`Range` | *Range* | *Range* |
`Referer` | *Referer* | *Referer* |
`RetryAfter` | *Retry-After* | *Retry-After* |
`Server` | *Server* | *Server* |
`SetCookie` | *Set-Cookie* | *Set-Cookie* |
`TE` | *TE* | *TE* |
`Trailer` | *Trailer* | *Trailer* |
`TransferEncoding` | *Transfer-Encoding* | *Transfer-Encoding* |
`Upgrade` | *Upgrade* | *Upgrade* |
`UserAgent` | *User-Agent* | *User-Agent* |
`Vary` | *Vary* | *Vary* |
`Via` | *Via* | *Via* |
`WWWAuthenticate` | *WWW-Authenticate* | *WWW-Authenticate* |
`Warning` | *Warning* | *Warning* |

___

### HttpStatusCodes

• `Const` **HttpStatusCodes**: object

#### Type declaration:

Name | Type | Value |
------ | ------ | ------ |
`Accepted` | *202* | *202* |
`AlreadyReported` | *208* | *208* |
`BadGateway` | *502* | *502* |
`BadRequest` | *400* | *400* |
`Conflict` | *409* | *409* |
`Continue` | *100* | *100* |
`Created` | *201* | *201* |
`ExpectationFailed` | *417* | *417* |
`FailedDependency` | *424* | *424* |
`Forbidden` | *403* | *403* |
`Found` | *302* | *302* |
`GatewayTimeout` | *504* | *504* |
`Gone` | *410* | *410* |
`HTTPVersionNotSupported` | *505* | *505* |
`IMUsed` | *226* | *226* |
`InsufficientStorage` | *507* | *507* |
`InternalServerError` | *500* | *500* |
`LengthRequired` | *411* | *411* |
`Locked` | *423* | *423* |
`LoopDetected` | *508* | *508* |
`MethodNotAllowed` | *405* | *405* |
`MovedPermanently` | *301* | *301* |
`MultiStatus` | *207* | *207* |
`MultipleChoices` | *300* | *300* |
`NetworkAuthenticationRequired` | *511* | *511* |
`NoContent` | *204* | *204* |
`NonAuthoritativeInformation` | *203* | *203* |
`NotAcceptable` | *406* | *406* |
`NotExtended` | *510* | *510* |
`NotFound` | *404* | *404* |
`NotImplemented` | *501* | *501* |
`NotModified` | *304* | *304* |
`OK` | *200* | *200* |
`PartialContent` | *206* | *206* |
`PermanentRedirect` | *308* | *308* |
`PreconditionFailed` | *412* | *412* |
`PreconditionRequired` | *428* | *428* |
`Processing` | *102* | *102* |
`ProxyAuthenticationRequired` | *407* | *407* |
`RequestEntityTooLarge` | *413* | *413* |
`RequestHeaderFieldsTooLarge` | *431* | *431* |
`RequestTimeout` | *408* | *408* |
`RequestURITooLong` | *414* | *414* |
`RequestedRangeNotSatisfiable` | *416* | *416* |
`ResetContent` | *205* | *205* |
`SeeOther` | *303* | *303* |
`ServiceUnavailable` | *503* | *503* |
`SwitchingProtocols` | *101* | *101* |
`TemporaryRedirect` | *307* | *307* |
`TooManyRequests` | *429* | *429* |
`Unauthorized` | *401* | *401* |
`UnavailableForLegalReasons` | *451* | *451* |
`UnprocessableEntity` | *422* | *422* |
`UnsupportedMediaType` | *415* | *415* |
`UpgradeRequired` | *426* | *426* |
`UseProxy` | *305* | *305* |
`VariantAlsoNegotiates` | *506* | *506* |

## Functions

### checkIfNotModified

▸ `Const`**checkIfNotModified**\<T>(`__namedParameters`: [*HttpRequest*](http.md#httprequest)<*unknown*\>): [*Function1*](functions.md#function1)<[*HttpResponse*](http.md#httpresponse)<T\>, [*HttpResponse*](http.md#httpresponse)<T\>\>

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

▸ `Const`**createHttpRequest**\<T>(`options`: [*HttpRequestOptions*](http.md#httprequestoptions)<T\>): [*HttpRequest*](http.md#httprequest)<T\>

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

▸ `Const`**createHttpResponse**\<T>(`__namedParameters`: [*HttpResponseOptions*](http.md#httpresponseoptions)<T\>): [*HttpResponse*](http.md#httpresponse)<T\>

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

▸ `Const`**createRedirectHttpRequest**\<THttpRequest, TReq>(`request`: THttpRequest, `response`: [*HttpResponse*](http.md#httpresponse)<*unknown*\>): THttpRequest

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

▸ `Const`**disallowProtocolAndHostForwarding**\<T>(): [*Function1*](functions.md#function1)<[*HttpRequest*](http.md#httprequest)<T\>, [*HttpRequest*](http.md#httprequest)<T\>\>

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

▸ `Const`**toIOSourceHttpRequest**\<TBody>(`req`: [*HttpRequest*](http.md#httprequest)<TBody\>): [*HttpRequest*](http.md#httprequest)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<TBody\>\>

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

▸ `Const`**toIOSourceHttpResponse**\<TBody>(`resp`: [*HttpResponse*](http.md#httpresponse)<TBody\>): [*HttpResponse*](http.md#httpresponse)<[*IOSourceLike*](../interfaces/io.iosourcelike.md)<TBody\>\>

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

▸ `Const`**writeHttpRequestHeaders**\<T>(`request`: [*HttpRequest*](http.md#httprequest)<T\>, `writeHeader`: [*SideEffect2*](functions.md#sideeffect2)<*string*, *string*\>): *void*

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

▸ `Const`**writeHttpResponseHeaders**\<T>(`response`: [*HttpResponse*](http.md#httpresponse)<T\>, `writeHeader`: [*SideEffect2*](functions.md#sideeffect2)<*string*, *string*\>): *void*

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
