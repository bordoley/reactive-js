[@reactive-js/http](../README.md) › [HttpResponseLike](httpresponselike.md)

# Interface: HttpResponseLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **HttpResponseLike**

## Index

### Properties

* [acceptedEncodings](httpresponselike.md#acceptedencodings)
* [content](httpresponselike.md#optional-content)
* [headers](httpresponselike.md#headers)
* [location](httpresponselike.md#optional-location)
* [statusCode](httpresponselike.md#statuscode)
* [vary](httpresponselike.md#vary)

## Properties

###  acceptedEncodings

• **acceptedEncodings**: *keyof HttpContentEncoding[]*

___

### `Optional` content

• **content**? : *T*

___

###  headers

• **headers**: *[HttpHeadersLike](httpheaderslike.md)*

___

### `Optional` location

• **location**? : *[URI](uri.md)*

___

###  statusCode

• **statusCode**: *[HttpStatusCode](../enums/httpstatuscode.md)*

___

###  vary

• **vary**: *keyof string[]*
