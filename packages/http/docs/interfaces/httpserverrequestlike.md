[@reactive-js/http](../README.md) › [HttpServerRequestLike](httpserverrequestlike.md)

# Interface: HttpServerRequestLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [HttpRequestLike](httprequestlike.md)‹T›

  ↳ **HttpServerRequestLike**

## Index

### Properties

* [content](httpserverrequestlike.md#optional-content)
* [expectContinue](httpserverrequestlike.md#expectcontinue)
* [headers](httpserverrequestlike.md#headers)
* [httpVersionMajor](httpserverrequestlike.md#httpversionmajor)
* [httpVersionMinor](httpserverrequestlike.md#httpversionminor)
* [isTransportSecure](httpserverrequestlike.md#istransportsecure)
* [method](httpserverrequestlike.md#method)
* [preconditions](httpserverrequestlike.md#optional-preconditions)
* [preferences](httpserverrequestlike.md#optional-preferences)
* [uri](httpserverrequestlike.md#uri)

## Properties

### `Optional` content

• **content**? : *[HttpContentLike](httpcontentlike.md)‹T›*

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

###  isTransportSecure

• **isTransportSecure**: *boolean*

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
