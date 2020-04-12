
# Class: AbstractSerialDisposable

## Hierarchy

* [AbstractDisposable](abstractdisposable.md)

  ↳ **AbstractSerialDisposable**

## Implements

* [DisposableLike](../interfaces/disposablelike.md)
* [SerialDisposableLike](../interfaces/serialdisposablelike.md)

## Index

### Properties

* [_inner](abstractserialdisposable.md#_inner)

### Accessors

* [error](abstractserialdisposable.md#error)
* [inner](abstractserialdisposable.md#inner)
* [isDisposed](abstractserialdisposable.md#isdisposed)

### Methods

* [add](abstractserialdisposable.md#add)
* [dispose](abstractserialdisposable.md#dispose)

## Properties

###  _inner

• **_inner**: *[DisposableLike](../interfaces/disposablelike.md)* =  disposed

## Accessors

###  error

• **get error**(): *undefined | [ErrorLike](../interfaces/errorlike.md)*

*Inherited from [AbstractDisposable](abstractdisposable.md).[error](abstractdisposable.md#error)*

**Returns:** *undefined | [ErrorLike](../interfaces/errorlike.md)*

___

###  inner

• **get inner**(): *[DisposableLike](../interfaces/disposablelike.md)‹›*

**Returns:** *[DisposableLike](../interfaces/disposablelike.md)‹›*

• **set inner**(`newInner`: [DisposableLike](../interfaces/disposablelike.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`newInner` | [DisposableLike](../interfaces/disposablelike.md) |

**Returns:** *void*

___

###  isDisposed

• **get isDisposed**(): *boolean*

*Inherited from [AbstractDisposable](abstractdisposable.md).[isDisposed](abstractdisposable.md#isdisposed)*

**Returns:** *boolean*

## Methods

###  add

▸ **add**(`disposable`: DisposableOrTeardown): *this*

*Inherited from [AbstractDisposable](abstractdisposable.md).[add](abstractdisposable.md#add)*

**Parameters:**

Name | Type |
------ | ------ |
`disposable` | DisposableOrTeardown |

**Returns:** *this*

___

###  dispose

▸ **dispose**(`error?`: [ErrorLike](../interfaces/errorlike.md)): *void*

*Implementation of [DisposableLike](../interfaces/disposablelike.md)*

*Inherited from [AbstractDisposable](abstractdisposable.md).[dispose](abstractdisposable.md#dispose)*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [ErrorLike](../interfaces/errorlike.md) |

**Returns:** *void*
