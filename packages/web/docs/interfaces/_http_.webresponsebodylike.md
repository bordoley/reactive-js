[@reactive-js/web - v0.0.37](../README.md) › ["http"](../modules/_http_.md) › [WebResponseBodyLike](_http_.webresponsebodylike.md)

# Interface: WebResponseBodyLike

## Hierarchy

* DisposableLike

  ↳ **WebResponseBodyLike**

## Index

### Properties

* [arrayBuffer](_http_.webresponsebodylike.md#arraybuffer)
* [blob](_http_.webresponsebodylike.md#blob)
* [isDisposed](_http_.webresponsebodylike.md#isdisposed)
* [text](_http_.webresponsebodylike.md#text)

### Methods

* [add](_http_.webresponsebodylike.md#add)
* [dispose](_http_.webresponsebodylike.md#dispose)

## Properties

###  arrayBuffer

• **arrayBuffer**: *ObservableLike‹ArrayBuffer›*

___

###  blob

• **blob**: *ObservableLike‹Blob›*

___

###  isDisposed

• **isDisposed**: *boolean*

*Inherited from [WebResponseBodyLike](_http_.webresponsebodylike.md).[isDisposed](_http_.webresponsebodylike.md#isdisposed)*

___

###  text

• **text**: *ObservableLike‹string›*

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

###  dispose

▸ **dispose**(`error?`: Exception): *void*

*Inherited from [WebResponseBodyLike](_http_.webresponsebodylike.md).[dispose](_http_.webresponsebodylike.md#dispose)*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | Exception |

**Returns:** *void*
