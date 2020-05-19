[@reactive-js/core - v0.0.40](../README.md) › ["flowable"](_flowable_.md)

# Module: "flowable"

## Index

### Enumerations

* [FlowMode](../enums/_flowable_.flowmode.md)

### Interfaces

* [FlowableLike](../interfaces/_flowable_.flowablelike.md)

### Type aliases

* [FlowableOperator](_flowable_.md#flowableoperator)

### Functions

* [empty](_flowable_.md#const-empty)
* [fromArray](_flowable_.md#const-fromarray)
* [fromObservable](_flowable_.md#const-fromobservable)
* [fromValue](_flowable_.md#const-fromvalue)

## Type aliases

###  FlowableOperator

Ƭ **FlowableOperator**: *[Function1](_functions_.md#function1)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹TA›, [FlowableLike](../interfaces/_flowable_.flowablelike.md)‹TB››*

## Functions

### `Const` empty

▸ **empty**<**T**>(): *[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Returns:** *[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹T›*

___

### `Const` fromArray

▸ **fromArray**<**T**>(): *[Function1](_functions_.md#function1)‹keyof T[], [FlowableLike](../interfaces/_flowable_.flowablelike.md)‹T››*

**Type parameters:**

▪ **T**

**Returns:** *[Function1](_functions_.md#function1)‹keyof T[], [FlowableLike](../interfaces/_flowable_.flowablelike.md)‹T››*

___

### `Const` fromObservable

▸ **fromObservable**<**T**>(): *[Function1](_functions_.md#function1)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, [FlowableLike](../interfaces/_flowable_.flowablelike.md)‹T››*

**Type parameters:**

▪ **T**

**Returns:** *[Function1](_functions_.md#function1)‹[ObservableLike](../interfaces/_observable_.observablelike.md)‹T›, [FlowableLike](../interfaces/_flowable_.flowablelike.md)‹T››*

___

### `Const` fromValue

▸ **fromValue**<**T**>(): *[Function1](_functions_.md#function1)‹T, [FlowableLike](../interfaces/_flowable_.flowablelike.md)‹T››*

**Type parameters:**

▪ **T**

**Returns:** *[Function1](_functions_.md#function1)‹T, [FlowableLike](../interfaces/_flowable_.flowablelike.md)‹T››*
