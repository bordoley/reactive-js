[@reactive-js/http-node](../README.md) › [HttpClientResponseLike](httpclientresponselike.md)

# Interface: HttpClientResponseLike

## Hierarchy

* HttpResponseLike‹[HttpContentBodyLike](httpcontentbodylike.md)›

* DisposableLike

  ↳ **HttpClientResponseLike**

## Index

### Properties

* [acceptedEncodings](httpclientresponselike.md#acceptedencodings)
* [content](httpclientresponselike.md#optional-content)
* [headers](httpclientresponselike.md#headers)
* [isDisposed](httpclientresponselike.md#isdisposed)
* [location](httpclientresponselike.md#optional-location)
* [statusCode](httpclientresponselike.md#statuscode)
* [vary](httpclientresponselike.md#vary)

### Methods

* [add](httpclientresponselike.md#add)
* [dispose](httpclientresponselike.md#dispose)

## Properties

###  acceptedEncodings

• **acceptedEncodings**: *keyof HttpContentEncoding[]*

*Inherited from void*

___

### `Optional` content

• **content**? : *T*

*Inherited from void*

___

###  headers

• **headers**: *HttpHeadersLike*

*Inherited from void*

___

###  isDisposed

• **isDisposed**: *boolean*

*Inherited from void*

___

### `Optional` location

• **location**? : *URI*

*Inherited from void*

___

###  statusCode

• **statusCode**: *HttpStatusCode*

*Inherited from void*

___

###  vary

• **vary**: *keyof string[]*

*Inherited from void*

## Methods

###  add

▸ **add**(`disposable`: DisposableLike | function): *this*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`disposable` | DisposableLike &#124; function |

**Returns:** *this*

___

###  dispose

▸ **dispose**(`error?`: ErrorLike): *void*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | ErrorLike |

**Returns:** *void*
