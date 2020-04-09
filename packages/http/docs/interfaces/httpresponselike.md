[@reactive-js/http](../README.md) › [HttpResponseLike](httpresponselike.md)

# Interface: HttpResponseLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **HttpResponseLike**

  ↳ [HttpContentResponseLike](httpcontentresponselike.md)

## Index

### Properties

* [content](httpresponselike.md#optional-content)
* [etag](httpresponselike.md#optional-etag)
* [expires](httpresponselike.md#optional-expires)
* [headers](httpresponselike.md#headers)
* [lastModified](httpresponselike.md#optional-lastmodified)
* [location](httpresponselike.md#optional-location)
* [preferences](httpresponselike.md#optional-preferences)
* [statusCode](httpresponselike.md#statuscode)
* [vary](httpresponselike.md#vary)

## Properties

### `Optional` content

• **content**? : *T*

___

### `Optional` etag

• **etag**? : *[HttpEntityTagLike](httpentitytaglike.md)*

___

### `Optional` expires

• **expires**? : *[HttpDateTime](../README.md#httpdatetime)*

___

###  headers

• **headers**: *[HttpHeadersLike](httpheaderslike.md)*

___

### `Optional` lastModified

• **lastModified**? : *[HttpDateTime](../README.md#httpdatetime)*

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
