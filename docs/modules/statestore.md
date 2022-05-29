[Reactive-JS](../README.md) / stateStore

# Module: stateStore

## Index

### Interfaces

* [StateStoreLike](../interfaces/statestore.statestorelike.md)

### Functions

* [createStateStore](statestore.md#createstatestore)
* [map](statestore.md#map)
* [toStateStore](statestore.md#tostatestore)

## Functions

### createStateStore

▸ `Const`**createStateStore**<T\>(`initialState`: [*Factory*](functions.md#factory)<T\>, `options?`: { `equality?`: *undefined* \| [*Equality*](functions.md#equality)<T\>  }): [*StateStoreLike*](../interfaces/statestore.statestorelike.md)<T\>

Returns a new `StateStoreLike` instance that stores state which can
be updated by notifying the instance with a `StateUpdater` that computes a
new state based upon the previous state.

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`initialState` | [*Factory*](functions.md#factory)<T\> | The initial accumulation value.   |
`options?` | { `equality?`: *undefined* \| [*Equality*](functions.md#equality)<T\>  } | - |

**Returns:** [*StateStoreLike*](../interfaces/statestore.statestorelike.md)<T\>

___

### map

▸ `Const`**map**<TA, TB\>(`parse`: [*Function1*](functions.md#function1)<TA, TB\>, `serialize`: [*Function1*](functions.md#function1)<TB, TA\>): [*Function1*](functions.md#function1)<[*StateStoreLike*](../interfaces/statestore.statestorelike.md)<TA\>, [*StateStoreLike*](../interfaces/statestore.statestorelike.md)<TB\>\>

#### Type parameters:

Name |
------ |
`TA` |
`TB` |

#### Parameters:

Name | Type |
------ | ------ |
`parse` | [*Function1*](functions.md#function1)<TA, TB\> |
`serialize` | [*Function1*](functions.md#function1)<TB, TA\> |

**Returns:** [*Function1*](functions.md#function1)<[*StateStoreLike*](../interfaces/statestore.statestorelike.md)<TA\>, [*StateStoreLike*](../interfaces/statestore.statestorelike.md)<TB\>\>

___

### toStateStore

▸ `Const`**toStateStore**<T\>(): [*Function1*](functions.md#function1)<[*StreamableLike*](../interfaces/streamable.streamablelike.md)<T, T\>, [*StreamableLike*](../interfaces/streamable.streamablelike.md)<[*Updater*](functions.md#updater)<T\>, T\>\>

Converts an `StreamableLike<T, T>` to an `StateStoreLike<T>`.

#### Type parameters:

Name |
------ |
`T` |

**Returns:** [*Function1*](functions.md#function1)<[*StreamableLike*](../interfaces/streamable.streamablelike.md)<T, T\>, [*StreamableLike*](../interfaces/streamable.streamablelike.md)<[*Updater*](functions.md#updater)<T\>, T\>\>
