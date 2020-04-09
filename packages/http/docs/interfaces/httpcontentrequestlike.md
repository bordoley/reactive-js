[@reactive-js/http](../README.md) › [HttpContentRequestLike](httpcontentrequestlike.md)

# Interface: HttpContentRequestLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [HttpRequestLike](httprequestlike.md)‹[HttpContentLike](httpcontentlike.md)‹T››

  ↳ **HttpContentRequestLike**

  ↳ [HttpServerRequestLike](httpserverrequestlike.md)

## Index

### Properties

* [content](httpcontentrequestlike.md#optional-content)
* [expectContinue](httpcontentrequestlike.md#expectcontinue)
* [headers](httpcontentrequestlike.md#headers)
* [httpVersionMajor](httpcontentrequestlike.md#httpversionmajor)
* [httpVersionMinor](httpcontentrequestlike.md#httpversionminor)
* [method](httpcontentrequestlike.md#method)
* [preconditions](httpcontentrequestlike.md#optional-preconditions)
* [preferences](httpcontentrequestlike.md#optional-preferences)
* [uri](httpcontentrequestlike.md#uri)

## Properties

### `Optional` content

• **content**? : *T*

*Inherited from [HttpRequestLike](httprequestlike.md).[content](httprequestlike.md#optional-content)*

___

###  expectContinue

• **expectContinue**: *boolean*

*Inherited from [HttpRequestLike](httprequestlike.md).[expectContinue](httprequestlike.md#expectcontinue)*

___

###  headers

• **headers**: *[HttpHeadersLike](httpheaderslike.md)*

*Inherited from [HttpRequestLike](httprequestlike.md).[headers](httprequestlike.md#headers)*

___

###  httpVersionMajor

• **httpVersionMajor**: *number*

*Inherited from [HttpRequestLike](httprequestlike.md).[httpVersionMajor](httprequestlike.md#httpversionmajor)*

___

###  httpVersionMinor

• **httpVersionMinor**: *number*

*Inherited from [HttpRequestLike](httprequestlike.md).[httpVersionMinor](httprequestlike.md#httpversionminor)*

___

###  method

• **method**: *[HttpMethod](../enums/httpmethod.md)*

*Inherited from [HttpRequestLike](httprequestlike.md).[method](httprequestlike.md#method)*

___

### `Optional` preconditions

• **preconditions**? : *[HttpRequestPreconditionsLike](httprequestpreconditionslike.md)*

*Inherited from [HttpRequestLike](httprequestlike.md).[preconditions](httprequestlike.md#optional-preconditions)*

___

### `Optional` preferences

• **preferences**? : *[HttpPreferencesLike](httppreferenceslike.md)*

*Inherited from [HttpRequestLike](httprequestlike.md).[preferences](httprequestlike.md#optional-preferences)*

___

###  uri

• **uri**: *[URI](uri.md)*

*Inherited from [HttpRequestLike](httprequestlike.md).[uri](httprequestlike.md#uri)*
