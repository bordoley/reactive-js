[@reactive-js/web - v0.0.37](../README.md) › ["http"](../modules/_http_.md) › [WebResponseBodyLike](_http_.webresponsebodylike.md)

# Interface: WebResponseBodyLike

## Hierarchy

* DisposableLike

  ↳ **WebResponseBodyLike**

## Index

### Properties

* [isDisposed](_http_.webresponsebodylike.md#isdisposed)

### Methods

* [add](_http_.webresponsebodylike.md#add)
* [arrayBuffer](_http_.webresponsebodylike.md#arraybuffer)
* [blob](_http_.webresponsebodylike.md#blob)
* [dispose](_http_.webresponsebodylike.md#dispose)
* [text](_http_.webresponsebodylike.md#text)

## Properties

###  isDisposed

• **isDisposed**: *boolean*

*Inherited from [WebResponseBodyLike](_http_.webresponsebodylike.md).[isDisposed](_http_.webresponsebodylike.md#isdisposed)*

## Methods

###  add

▸ **add**(`disposable`: DisposableOrTeardown): *this*

*Inherited from [WebResponseBodyLike](_http_.webresponsebodylike.md).[add](_http_.webresponsebodylike.md#add)*

**Parameters:**

Name | Type |
------ | ------ |
`disposable` | DisposableOrTeardown |

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

*Inherited from [WebResponseBodyLike](_http_.webresponsebodylike.md).[dispose](_http_.webresponsebodylike.md#dispose)*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | Exception |

**Returns:** *void*

___

###  text

▸ **text**(): *ObservableLike‹string›*

**Returns:** *ObservableLike‹string›*
