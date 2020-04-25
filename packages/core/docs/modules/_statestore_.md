[@reactive-js/core - v0.0.37](../README.md) › ["stateStore"](_statestore_.md)

# Module: "stateStore"

## Index

### Interfaces

* [StateStoreLike](../interfaces/_statestore_.statestorelike.md)

### Type aliases

* [StateUpdater](_statestore_.md#stateupdater)

### Functions

* [createStateStore](_statestore_.md#const-createstatestore)
* [toStateStore](_statestore_.md#const-tostatestore)

## Type aliases

###  StateUpdater

Ƭ **StateUpdater**: *function*

#### Type declaration:

▸ (`oldState`: T): *T*

**Parameters:**

Name | Type |
------ | ------ |
`oldState` | T |

## Functions

### `Const` createStateStore

▸ **createStateStore**<**T**>(`initialState`: function, `equals?`: function): *[StateStoreLike](../interfaces/_statestore_.statestorelike.md)‹T›*

Returns a new `StateStoreLike` instance that stores state which can
be updated by notifying the instance with a `StateUpdater` that computes a
new state based upon the previous state.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **initialState**: *function*

The initial accumulation value.

▸ (): *T*

▪`Optional`  **equals**: *function*

Optional equality function that is used to compare
if a state value is distinct from the previous one.

▸ (`a`: T, `b`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

**Returns:** *[StateStoreLike](../interfaces/_statestore_.statestorelike.md)‹T›*

___

### `Const` toStateStore

▸ **toStateStore**<**T**>(`initialState`: function, `equals?`: function): *[StreamableOperator](_streamable_.md#streamableoperator)‹T, T, [StateUpdater](_statestore_.md#stateupdater)‹T›, T›*

Converts an `StreamableLike<T, T>` to an `StateStoreLike<T>`.

**Type parameters:**

▪ **T**

**Parameters:**

▪ **initialState**: *function*

Factory function to generate the initial state.

▸ (): *T*

▪`Optional`  **equals**: *function*

Optional equality function that is used to compare
if a state value is distinct from the previous one.

▸ (`a`: T, `b`: T): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`a` | T |
`b` | T |

**Returns:** *[StreamableOperator](_streamable_.md#streamableoperator)‹T, T, [StateUpdater](_statestore_.md#stateupdater)‹T›, T›*
