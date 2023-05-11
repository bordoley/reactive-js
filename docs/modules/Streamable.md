[Reactive-JS](../README.md) / Streamable

# Module: Streamable

## Table of contents

### Constructor Functions

- [create](Streamable.md#create)
- [createStateStore](Streamable.md#createstatestore)
- [identity](Streamable.md#identity)

## Constructor Functions

### create

▸ **create**<`TReq`, `T`\>(`op`): [`StreamableLike`](../interfaces/types.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/types.StreamLike.md)<`TReq`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`ContainerOperator`](types.md#containeroperator)<[`Type`](../interfaces/DeferredObservable.Type.md), `TReq`, `T`\> |

#### Returns

[`StreamableLike`](../interfaces/types.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/types.StreamLike.md)<`TReq`, `T`\>\>

___

### createStateStore

▸ **createStateStore**<`T`\>(`initialState`, `options?`): [`StreamableLike`](../interfaces/types.StreamableLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`, [`StreamLike`](../interfaces/types.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>\>

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

[`StreamableLike`](../interfaces/types.StreamableLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`, [`StreamLike`](../interfaces/types.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>\>

___

### identity

▸ **identity**<`T`\>(): [`StreamableLike`](../interfaces/types.StreamableLike.md)<`T`, `T`, [`StreamLike`](../interfaces/types.StreamLike.md)<`T`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`StreamableLike`](../interfaces/types.StreamableLike.md)<`T`, `T`, [`StreamLike`](../interfaces/types.StreamLike.md)<`T`, `T`\>\>
