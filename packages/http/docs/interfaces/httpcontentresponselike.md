[@reactive-js/http](../README.md) › [HttpContentResponseLike](httpcontentresponselike.md)

# Interface: HttpContentResponseLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [HttpResponseLike](httpresponselike.md)‹[HttpContentLike](httpcontentlike.md)‹T››

  ↳ **HttpContentResponseLike**

## Index

### Properties

* [content](httpcontentresponselike.md#optional-content)
* [etag](httpcontentresponselike.md#optional-etag)
* [expires](httpcontentresponselike.md#optional-expires)
* [headers](httpcontentresponselike.md#headers)
* [lastModified](httpcontentresponselike.md#optional-lastmodified)
* [location](httpcontentresponselike.md#optional-location)
* [preferences](httpcontentresponselike.md#optional-preferences)
* [statusCode](httpcontentresponselike.md#statuscode)
* [vary](httpcontentresponselike.md#vary)

## Properties

### `Optional` content

• **content**? : *T*

*Inherited from [HttpResponseLike](httpresponselike.md).[content](httpresponselike.md#optional-content)*

___

### `Optional` etag

• **etag**? : *[EntityTag](entitytag.md)*

*Inherited from [HttpResponseLike](httpresponselike.md).[etag](httpresponselike.md#optional-etag)*

___

### `Optional` expires

• **expires**? : *[HttpDateTime](../README.md#httpdatetime)*

*Inherited from [HttpResponseLike](httpresponselike.md).[expires](httpresponselike.md#optional-expires)*

___

###  headers

• **headers**: *[HttpHeadersLike](httpheaderslike.md)*

*Inherited from [HttpResponseLike](httpresponselike.md).[headers](httpresponselike.md#headers)*

___

### `Optional` lastModified

• **lastModified**? : *[HttpDateTime](../README.md#httpdatetime)*

*Inherited from [HttpResponseLike](httpresponselike.md).[lastModified](httpresponselike.md#optional-lastmodified)*

___

### `Optional` location

• **location**? : *[URI](uri.md)*

*Inherited from [HttpResponseLike](httpresponselike.md).[location](httpresponselike.md#optional-location)*

___

### `Optional` preferences

• **preferences**? : *[HttpPreferencesLike](httppreferenceslike.md)*

*Inherited from [HttpResponseLike](httpresponselike.md).[preferences](httpresponselike.md#optional-preferences)*

___

###  statusCode

• **statusCode**: *[HttpStatusCode](../enums/httpstatuscode.md)*

*Inherited from [HttpResponseLike](httpresponselike.md).[statusCode](httpresponselike.md#statuscode)*

___

###  vary

• **vary**: *keyof string[]*

*Inherited from [HttpResponseLike](httpresponselike.md).[vary](httpresponselike.md#vary)*
