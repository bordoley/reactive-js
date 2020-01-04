
# Interface: DelegatingDisposableLike

## Hierarchy

* [DisposableLike](disposablelike.md)

  ↳ **DelegatingDisposableLike**

## Index

### Properties

* [disposable](delegatingdisposablelike.md#disposable)
* [isDisposed](delegatingdisposablelike.md#isdisposed)

### Methods

* [add](delegatingdisposablelike.md#add)
* [dispose](delegatingdisposablelike.md#dispose)

## Properties

###  disposable

• **disposable**: *[DisposableLike](disposablelike.md)*

___

###  isDisposed

• **isDisposed**: *boolean*

*Inherited from [DisposableLike](disposablelike.md).[isDisposed](disposablelike.md#isdisposed)*

Returns true if this resource has been disposed.

## Methods

###  add

▸ **add**(`disposable`: [DisposableOrTeardown](../README.md#disposableorteardown), ...`disposables`: [DisposableOrTeardown](../README.md#disposableorteardown)[]): *this*

*Inherited from [DisposableLike](disposablelike.md).[add](disposablelike.md#add)*

Adds the given disposables to this container or disposes them if the container has been disposed.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`disposable` | [DisposableOrTeardown](../README.md#disposableorteardown) | - |
`...disposables` | [DisposableOrTeardown](../README.md#disposableorteardown)[] |   |

**Returns:** *this*

___

###  dispose

▸ **dispose**(`error?`: [ErrorLike](errorlike.md)): *void*

*Inherited from [DisposableLike](disposablelike.md).[dispose](disposablelike.md#dispose)*

Dispose the resource, the operation should be idempotent.

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [ErrorLike](errorlike.md) |

**Returns:** *void*
