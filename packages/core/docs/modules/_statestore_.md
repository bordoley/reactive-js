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

### `Const` toStateStore

▸ **toStateStore**<**T**>(`equality`: [Equality](_functions_.md#equality)‹T›): *[StreamableFunction](_streamable_.md#streamablefunction)‹T, T, [StateUpdater](_statestore_.md#stateupdater)‹T›, T›*

Converts an `StreamableLike<T, T>` to an `StateStoreLike<T>`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`equality` | [Equality](_functions_.md#equality)‹T› | strictEquality |

**Returns:** *[StreamableFunction](_streamable_.md#streamablefunction)‹T, T, [StateUpdater](_statestore_.md#stateupdater)‹T›, T›*
