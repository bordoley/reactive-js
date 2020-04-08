[@reactive-js/http-node](../README.md) › [HttpRoutedRequestLike](httproutedrequestlike.md)

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
* [method](httproutedrequestlike.md#method)
* [params](httproutedrequestlike.md#params)
* [preferences](httproutedrequestlike.md#optional-preferences)
* [uri](httproutedrequestlike.md#uri)

## Properties

### `Optional` content

• **content**? : *HttpContentLike‹T›*

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

###  method

• **method**: *HttpMethod*

*Inherited from void*

___

###  params

• **params**: *object*

#### Type declaration:

* \[ **param**: *string*\]: string

___

### `Optional` preferences

• **preferences**? : *HttpPreferencesLike*

*Inherited from void*

___

###  uri

• **uri**: *URI*

*Inherited from void*
