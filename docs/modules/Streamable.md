[Reactive-JS](../README.md) / Streamable

# Module: Streamable

## Table of contents

### Interfaces

- [Signature](../interfaces/Streamable.Signature.md)

### Functions

- [create](Streamable.md#create)
- [createStateStore](Streamable.md#createstatestore)
- [identity](Streamable.md#identity)

## Functions

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
| `op` | [`ContainerOperator`](types.md#containeroperator)<[`DeferredObservableContainer`](../interfaces/types.DeferredObservableContainer.md), `TReq`, `T`\> |

#### Returns

[`StreamableLike`](../interfaces/types.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/types.StreamLike.md)<`TReq`, `T`\>\>

___

### createStateStore

▸ **createStateStore**<`T`\>(`initialState`, `options?`): [`StreamableLike`](../interfaces/types.StreamableLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`, [`StreamLike`](../interfaces/types.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialState` | [`Factory`](functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](functions.md#equality)<`T`\> |

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
