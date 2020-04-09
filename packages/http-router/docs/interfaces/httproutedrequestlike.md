[@reactive-js/http-router](../README.md) › [HttpRoutedRequestLike](httproutedrequestlike.md)

# Interface: HttpRoutedRequestLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* HttpRequestLike‹T›

  ↳ **HttpRoutedRequestLike**

## Index

### Properties

* [content](httproutedrequestlike.md#optional-content)
* [expectContinue](httproutedrequestlike.md#expectcontinue)
* [headers](httproutedrequestlike.md#headers)
* [httpVersionMajor](httproutedrequestlike.md#httpversionmajor)
* [httpVersionMinor](httproutedrequestlike.md#httpversionminor)
* [method](httproutedrequestlike.md#method)
* [params](httproutedrequestlike.md#params)
* [preconditions](httproutedrequestlike.md#optional-preconditions)
* [preferences](httproutedrequestlike.md#optional-preferences)
* [uri](httproutedrequestlike.md#uri)

## Properties

### `Optional` content

• **content**? : *T*

*Inherited from void*

___

###  expectContinue

• **expectContinue**: *boolean*

*Inherited from void*

___

###  headers

• **headers**: *HttpHeadersLike*

*Inherited from void*

___

###  httpVersionMajor

• **httpVersionMajor**: *number*

*Inherited from void*

___

###  httpVersionMinor

• **httpVersionMinor**: *number*

*Inherited from void*

___

###  method

• **method**: *HttpMethod*

*Inherited from void*

___

###  params

• **params**: *object*

#### Type declaration:

* \[ **param**: *string*\]: string

___

### `Optional` preconditions

• **preconditions**? : *HttpRequestPreconditionsLike*

*Inherited from void*

___

### `Optional` preferences

• **preferences**? : *HttpPreferencesLike*

*Inherited from void*

___

###  uri

• **uri**: *URI*

*Inherited from void*
