[@reactive-js/http - v0.0.39](../README.md) › ["dom"](../modules/_dom_.md) › [WebResponseBodyLike](_dom_.webresponsebodylike.md)

# Interface: WebResponseBodyLike

## Hierarchy

* DisposableLike

  ↳ **WebResponseBodyLike**

## Index

### Properties

* [arrayBuffer](_dom_.webresponsebodylike.md#arraybuffer)
* [blob](_dom_.webresponsebodylike.md#blob)
* [error](_dom_.webresponsebodylike.md#error)
* [isDisposed](_dom_.webresponsebodylike.md#isdisposed)
* [text](_dom_.webresponsebodylike.md#text)

### Methods

* [add](_dom_.webresponsebodylike.md#add)
* [dispose](_dom_.webresponsebodylike.md#dispose)

## Properties

###  arrayBuffer

• **arrayBuffer**: *ObservableLike‹ArrayBuffer›*

___

###  blob

• **blob**: *ObservableLike‹Blob›*

___

###  error

• **error**: *Option‹Exception›*

*Inherited from [WebResponseBodyLike](_dom_.webresponsebodylike.md).[error](_dom_.webresponsebodylike.md#error)*

___

###  isDisposed

• **isDisposed**: *boolean*

*Inherited from [WebResponseBodyLike](_dom_.webresponsebodylike.md).[isDisposed](_dom_.webresponsebodylike.md#isdisposed)*

___

###  text

• **text**: *ObservableLike‹string›*

## Methods

###  add

▸ **add**(`disposable`: DisposableOrTeardown): *void*

*Inherited from [WebResponseBodyLike](_dom_.webresponsebodylike.md).[add](_dom_.webresponsebodylike.md#add)*

**Parameters:**

Name | Type |
------ | ------ |
`disposable` | DisposableOrTeardown |

**Returns:** *void*

___

###  dispose

▸ **dispose**(`error?`: Exception): *void*

*Inherited from [WebResponseBodyLike](_dom_.webresponsebodylike.md).[dispose](_dom_.webresponsebodylike.md#dispose)*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | Exception |

**Returns:** *void*
