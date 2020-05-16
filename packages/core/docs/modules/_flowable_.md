[@reactive-js/core - v0.0.37](../README.md) › ["flowable"](_flowable_.md)

# Module: "flowable"

## Index

### Enumerations

* [FlowMode](../enums/_flowable_.flowmode.md)

### Interfaces

* [FlowableLike](../interfaces/_flowable_.flowablelike.md)

### Type aliases

* [FlowableFunction](_flowable_.md#flowablefunction)

### Functions

* [empty](_flowable_.md#const-empty)
* [fromObservable](_flowable_.md#const-fromobservable)
* [fromValue](_flowable_.md#const-fromvalue)

## Type aliases

###  FlowableFunction

Ƭ **FlowableFunction**: *[Function1](_functions_.md#function1)‹[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹TA›, [FlowableLike](../interfaces/_flowable_.flowablelike.md)‹TB››*

## Functions

### `Const` empty

▸ **empty**<**T**>(): *[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹T›*

**Type parameters:**

▪ **T**

**Returns:** *[FlowableLike](../interfaces/_flowable_.flowablelike.md)‹T›*

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
