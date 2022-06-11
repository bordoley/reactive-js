[Reactive-JS](../README.md) / stateStore

# Module: stateStore

## Table of contents

### Interfaces

- [StateStoreLike](../interfaces/stateStore.StateStoreLike.md)

### Functions

- [createStateStore](stateStore.md#createstatestore)
- [map](stateStore.md#map)
- [toStateStore](stateStore.md#tostatestore)

## Functions

### createStateStore

▸ **createStateStore**<`T`\>(`initialState`, `options?`): [`StateStoreLike`](../interfaces/stateStore.StateStoreLike.md)<`T`\>

Returns a new `StateStoreLike` instance that stores state which can
be updated by notifying the instance with a `StateUpdater` that computes a
new state based upon the previous state.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initialState` | [`Factory`](functions.md#factory)<`T`\> | The initial accumulation value. |
| `options?` | `Object` | - |
| `options.equality?` | [`Equality`](functions.md#equality)<`T`\> | - |

#### Returns

[`StateStoreLike`](../interfaces/stateStore.StateStoreLike.md)<`T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`parse`, `serialize`): [`Function1`](functions.md#function1)<[`StateStoreLike`](../interfaces/stateStore.StateStoreLike.md)<`TA`\>, [`StateStoreLike`](../interfaces/stateStore.StateStoreLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parse` | [`Function1`](functions.md#function1)<`TA`, `TB`\> |
| `serialize` | [`Function1`](functions.md#function1)<`TB`, `TA`\> |

#### Returns

[`Function1`](functions.md#function1)<[`StateStoreLike`](../interfaces/stateStore.StateStoreLike.md)<`TA`\>, [`StateStoreLike`](../interfaces/stateStore.StateStoreLike.md)<`TB`\>\>

___

### toStateStore

▸ **toStateStore**<`T`\>(): [`StreamableOperator`](streamable.md#streamableoperator)<`T`, `T`, [`Updater`](functions.md#updater)<`T`\>, `T`\>

Converts an `StreamableLike<T, T>` to an `StateStoreLike<T>`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`StreamableOperator`](streamable.md#streamableoperator)<`T`, `T`, [`Updater`](functions.md#updater)<`T`\>, `T`\>
