[Reactive-JS](../README.md) / concurrent/Streamable

# Module: concurrent/Streamable

## Table of contents

### Module Interfaces

- [StreamableModule](../interfaces/concurrent_Streamable.StreamableModule.md)

### Type Aliases

- [Signature](concurrent_Streamable.md#signature)

### Constructor Functions

- [create](concurrent_Streamable.md#create)
- [createStateStore](concurrent_Streamable.md#createstatestore)
- [identity](concurrent_Streamable.md#identity)

## Type Aliases

### Signature

Ƭ **Signature**: [`StreamableModule`](../interfaces/concurrent_Streamable.StreamableModule.md)

## Constructor Functions

### create

▸ **create**<`TReq`, `T`\>(`op`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<`TReq`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`Function1`](functions.md#function1)<[`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`TReq`\>, [`DeferredSideEffectsObservableLike`](../interfaces/concurrent.DeferredSideEffectsObservableLike.md)<`T`\>\> |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<`TReq`, `T`\>\>

___

### createStateStore

▸ **createStateStore**<`T`\>(`initialState`, `options?`): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>\>

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

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>\>

___

### identity

▸ **identity**<`T`\>(): [`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<`T`, `T`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<`T`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`StreamableLike`](../interfaces/concurrent.StreamableLike.md)<`T`, `T`, [`StreamLike`](../interfaces/concurrent.StreamLike.md)<`T`, `T`\>\>
