
# Class: AbstractDisposable

## Hierarchy

* **AbstractDisposable**

  ↳ [AbstractSerialDisposable](abstractserialdisposable.md)

## Implements

* [DisposableLike](../interfaces/disposablelike.md)

## Index

### Accessors

* [error](abstractdisposable.md#error)
* [isDisposed](abstractdisposable.md#isdisposed)

### Methods

* [add](abstractdisposable.md#add)
* [dispose](abstractdisposable.md#dispose)

## Accessors

###  error

• **get error**(): *undefined | [ErrorLike](../interfaces/errorlike.md)*

**Returns:** *undefined | [ErrorLike](../interfaces/errorlike.md)*

___

###  isDisposed

• **get isDisposed**(): *boolean*

**Returns:** *boolean*

## Methods

###  add

▸ **add**(`disposable`: DisposableOrTeardown): *this*

**Parameters:**

Name | Type |
------ | ------ |
`disposable` | DisposableOrTeardown |

**Returns:** *this*

___

###  dispose

▸ **dispose**(`error?`: [ErrorLike](../interfaces/errorlike.md)): *void*

*Implementation of [DisposableLike](../interfaces/disposablelike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [ErrorLike](../interfaces/errorlike.md) |

**Returns:** *void*
