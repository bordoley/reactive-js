[@reactive-js/http](../README.md) › [HttpRequestLike](httprequestlike.md)

# Interface: HttpRequestLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **HttpRequestLike**

  ↳ [HttpServerRequestLike](httpserverrequestlike.md)

## Index

### Properties

* [content](httprequestlike.md#optional-content)
* [expectContinue](httprequestlike.md#expectcontinue)
* [headers](httprequestlike.md#headers)
* [httpVersionMajor](httprequestlike.md#httpversionmajor)
* [httpVersionMinor](httprequestlike.md#httpversionminor)
* [method](httprequestlike.md#method)
* [preconditions](httprequestlike.md#optional-preconditions)
* [preferences](httprequestlike.md#optional-preferences)
* [uri](httprequestlike.md#uri)

## Properties

### `Optional` content

• **content**? : *[HttpContentLike](httpcontentlike.md)‹T›*

___

###  expectContinue

• **expectContinue**: *boolean*

___

###  headers

• **headers**: *[HttpHeadersLike](httpheaderslike.md)*

___

###  httpVersionMajor

• **httpVersionMajor**: *number*

___

###  httpVersionMinor

• **httpVersionMinor**: *number*

___

###  method

• **method**: *[HttpMethod](../enums/httpmethod.md)*

___

### `Optional` preconditions

• **preconditions**? : *[HttpRequestPreconditionsLike](httprequestpreconditionslike.md)*

___

### `Optional` preferences

• **preferences**? : *[HttpPreferencesLike](httppreferenceslike.md)*

___

###  uri

• **uri**: *[URI](uri.md)*
