[@reactive-js/core - v0.0.37](../README.md) › ["disposable"](../modules/_disposable_.md) › [AbstractDisposable](_disposable_.abstractdisposable.md)

# Class: AbstractDisposable

Abstract base class for implementing the DisposableLike interface.

## Hierarchy

* **AbstractDisposable**

  ↳ [AbstractSerialDisposable](_disposable_.abstractserialdisposable.md)

  ↳ [AbstractSchedulerContinuation](_scheduler_.abstractschedulercontinuation.md)

## Implements

* [DisposableLike](../interfaces/_disposable_.disposablelike.md)

## Index

### Accessors

* [error](_disposable_.abstractdisposable.md#error)
* [isDisposed](_disposable_.abstractdisposable.md#isdisposed)

### Methods

* [add](_disposable_.abstractdisposable.md#add)
* [dispose](_disposable_.abstractdisposable.md#dispose)

## Accessors

###  error

• **get error**(): *object*

**Returns:** *object*

* **cause**: *unknown*

___

###  isDisposed

• **get isDisposed**(): *boolean*

**Returns:** *boolean*

## Methods

###  add

▸ **add**(`disposable`: [DisposableOrTeardown](../modules/_disposable_.md#disposableorteardown)): *this*

*Implementation of [DisposableLike](../interfaces/_disposable_.disposablelike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`disposable` | [DisposableOrTeardown](../modules/_disposable_.md#disposableorteardown) |

**Returns:** *this*

___

###  dispose

▸ **dispose**(`error?`: [Exception](../modules/_disposable_.md#exception)): *void*

*Implementation of [DisposableLike](../interfaces/_disposable_.disposablelike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [Exception](../modules/_disposable_.md#exception) |

**Returns:** *void*
