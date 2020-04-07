[@reactive-js/http](../README.md) › [HttpResponseLike](httpresponselike.md)

# Interface: HttpResponseLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **HttpResponseLike**

## Index

### Properties

* [content](httpresponselike.md#optional-content)
* [headers](httpresponselike.md#headers)
* [location](httpresponselike.md#optional-location)
* [preferences](httpresponselike.md#optional-preferences)
* [statusCode](httpresponselike.md#statuscode)
* [vary](httpresponselike.md#vary)

## Properties

### `Optional` content

• **content**? : *[HttpContentLike](httpcontentlike.md)‹T›*

___

###  headers

• **headers**: *[HttpHeadersLike](httpheaderslike.md)*

___

### `Optional` location

• **location**? : *[URI](uri.md)*

___

### `Optional` preferences

• **preferences**? : *[HttpPreferencesLike](httppreferenceslike.md)*

___

###  statusCode

• **statusCode**: *[HttpStatusCode](../enums/httpstatuscode.md)*

___

###  vary

• **vary**: *keyof string[]*
