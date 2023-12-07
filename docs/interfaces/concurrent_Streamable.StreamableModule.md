[Reactive-JS](../README.md) / [concurrent/Streamable](../modules/concurrent_Streamable.md) / StreamableModule

# Interface: StreamableModule

[concurrent/Streamable](../modules/concurrent_Streamable.md).StreamableModule

## Table of contents

### Constructor Methods

- [create](concurrent_Streamable.StreamableModule.md#create)
- [createStateStore](concurrent_Streamable.StreamableModule.md#createstatestore)
- [identity](concurrent_Streamable.StreamableModule.md#identity)

## Constructor Methods

### create

▸ **create**<`TReq`, `T`\>(`op`): [`StreamableLike`](concurrent.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](concurrent.StreamLike.md)<`TReq`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](../modules/functions.md#function1)<[`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`TReq`\>, [`DeferredSideEffectsObservableLike`](concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\> |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](concurrent.StreamLike.md)<`TReq`, `T`\>\>

___

### createStateStore

▸ **createStateStore**<`T`\>(`initialState`, `options?`): [`StreamableLike`](concurrent.StreamableLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`, [`StreamLike`](concurrent.StreamLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`\>\>

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
| `initialState` | [`Factory`](../modules/functions.md#factory)<`T`\> | The initial accumulation value. |
| `options?` | `Object` | - |
| `options.equality?` | [`Equality`](../modules/functions.md#equality)<`T`\> | - |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`, [`StreamLike`](concurrent.StreamLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`\>\>

___

### identity

▸ **identity**<`T`\>(): [`StreamableLike`](concurrent.StreamableLike.md)<`T`, `T`, [`StreamLike`](concurrent.StreamLike.md)<`T`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`StreamableLike`](concurrent.StreamableLike.md)<`T`, `T`, [`StreamLike`](concurrent.StreamLike.md)<`T`, `T`\>\>
