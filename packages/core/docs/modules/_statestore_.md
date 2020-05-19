[@reactive-js/core - v0.0.41](../README.md) › ["stateStore"](_statestore_.md)

# Module: "stateStore"

## Index

### Interfaces

* [StateStoreLike](../interfaces/_statestore_.statestorelike.md)

### Functions

* [createStateStore](_statestore_.md#const-createstatestore)
* [map](_statestore_.md#const-map)
* [toStateStore](_statestore_.md#const-tostatestore)

## Functions

### `Const` createStateStore

▸ **createStateStore**<**T**>(`initialState`: [Factory](_functions_.md#factory)‹T›, `equals?`: [Equality](_functions_.md#equality)‹T›): *[StateStoreLike](../interfaces/_statestore_.statestorelike.md)‹T›*

Returns a new `StateStoreLike` instance that stores state which can
be updated by notifying the instance with a `StateUpdater` that computes a
new state based upon the previous state.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`initialState` | [Factory](_functions_.md#factory)‹T› | The initial accumulation value. |
`equals?` | [Equality](_functions_.md#equality)‹T› | Optional equality function that is used to compare if a state value is distinct from the previous one.  |

**Returns:** *[StateStoreLike](../interfaces/_statestore_.statestorelike.md)‹T›*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`store`: [StateStoreLike](../interfaces/_statestore_.statestorelike.md)‹TA›, `parse`: [Function1](_functions_.md#function1)‹TA, TB›, `serialize`: [Function1](_functions_.md#function1)‹TB, TA›): *[StateStoreLike](../interfaces/_statestore_.statestorelike.md)‹TB›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`store` | [StateStoreLike](../interfaces/_statestore_.statestorelike.md)‹TA› |
`parse` | [Function1](_functions_.md#function1)‹TA, TB› |
`serialize` | [Function1](_functions_.md#function1)‹TB, TA› |

**Returns:** *[StateStoreLike](../interfaces/_statestore_.statestorelike.md)‹TB›*

___

### `Const` toStateStore

▸ **toStateStore**<**T**>(`equality`: [Equality](_functions_.md#equality)‹T›): *[StreamableOperator](_streamable_.md#streamableoperator)‹T, T, [Updater](_functions_.md#updater)‹T›, T›*

Converts an `StreamableLike<T, T>` to an `StateStoreLike<T>`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`equality` | [Equality](_functions_.md#equality)‹T› | strictEquality |

**Returns:** *[StreamableOperator](_streamable_.md#streamableoperator)‹T, T, [Updater](_functions_.md#updater)‹T›, T›*
