[Reactive-JS](../README.md) / [Streamable](../modules/Streamable.md) / Signature

# Interface: Signature

[Streamable](../modules/Streamable.md).Signature

## Table of contents

### Constructor Methods

- [create](Streamable.Signature.md#create)
- [createStateStore](Streamable.Signature.md#createstatestore)
- [identity](Streamable.Signature.md#identity)

## Constructor Methods

### create

▸ **create**<`TReq`, `T`\>(`op`): [`StreamableLike`](types.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](types.StreamLike.md)<`TReq`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`ContainerOperator`](../modules/types.md#containeroperator)<[`DeferredObservableContainer`](types.DeferredObservableContainer.md), `TReq`, `T`\> |

#### Returns

[`StreamableLike`](types.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](types.StreamLike.md)<`TReq`, `T`\>\>

___

### createStateStore

▸ **createStateStore**<`T`\>(`initialState`, `options?`): [`StreamableLike`](types.StreamableLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`, [`StreamLike`](types.StreamLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`\>\>

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

[`StreamableLike`](types.StreamableLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`, [`StreamLike`](types.StreamLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`\>\>

___

### identity

▸ **identity**<`T`\>(): [`StreamableLike`](types.StreamableLike.md)<`T`, `T`, [`StreamLike`](types.StreamLike.md)<`T`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`StreamableLike`](types.StreamableLike.md)<`T`, `T`, [`StreamLike`](types.StreamLike.md)<`T`, `T`\>\>
