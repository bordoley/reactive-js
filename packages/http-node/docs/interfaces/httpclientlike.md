[@reactive-js/http-node - v0.0.33](../README.md) › [HttpClientLike](httpclientlike.md)

# Interface: HttpClientLike

## Hierarchy

* DisposableLike

  ↳ **HttpClientLike**

## Index

### Properties

* [isDisposed](httpclientlike.md#isdisposed)

### Methods

* [add](httpclientlike.md#add)
* [dispose](httpclientlike.md#dispose)
* [send](httpclientlike.md#send)

## Properties

###  isDisposed

• **isDisposed**: *boolean*

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

▸ **dispose**(`error?`: Exception): *void*

*Inherited from void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | Exception |

**Returns:** *void*

___

###  send

▸ **send**(`request`: HttpContentRequest‹BufferStreamLike›, `requestOptions?`: [HttpClientRequestOptions](../README.md#httpclientrequestoptions)): *ObservableLike‹[HttpClientRequestStatus](../README.md#httpclientrequeststatus)›*

**Parameters:**

Name | Type |
------ | ------ |
`request` | HttpContentRequest‹BufferStreamLike› |
`requestOptions?` | [HttpClientRequestOptions](../README.md#httpclientrequestoptions) |

**Returns:** *ObservableLike‹[HttpClientRequestStatus](../README.md#httpclientrequeststatus)›*
