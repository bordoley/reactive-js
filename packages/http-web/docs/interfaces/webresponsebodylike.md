[@reactive-js/http-web - v0.0.35](../README.md) › [WebResponseBodyLike](webresponsebodylike.md)

# Interface: WebResponseBodyLike

## Hierarchy

* DisposableLike

  ↳ **WebResponseBodyLike**

## Index

### Properties

* [isDisposed](webresponsebodylike.md#isdisposed)

### Methods

* [add](webresponsebodylike.md#add)
* [arrayBuffer](webresponsebodylike.md#arraybuffer)
* [blob](webresponsebodylike.md#blob)
* [dispose](webresponsebodylike.md#dispose)
* [text](webresponsebodylike.md#text)

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

###  arrayBuffer

▸ **arrayBuffer**(): *ObservableLike‹ArrayBuffer›*

**Returns:** *ObservableLike‹ArrayBuffer›*

___

###  blob

▸ **blob**(): *ObservableLike‹Blob›*

**Returns:** *ObservableLike‹Blob›*

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

###  text

▸ **text**(): *ObservableLike‹string›*

**Returns:** *ObservableLike‹string›*
