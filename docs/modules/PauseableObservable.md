[Reactive-JS](../README.md) / PauseableObservable

# Module: PauseableObservable

## Table of contents

### Operator Functions

- [dispatchTo](PauseableObservable.md#dispatchto)
- [enqueue](PauseableObservable.md#enqueue)
- [forEach](PauseableObservable.md#foreach)
- [keep](PauseableObservable.md#keep)
- [map](PauseableObservable.md#map)
- [pick](PauseableObservable.md#pick)

### Other Functions

- [sinkInto](PauseableObservable.md#sinkinto)

## Operator Functions

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`Operator`](containers.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/containers.PauseableObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](../interfaces/types.DispatcherLike.md)<`T`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/containers.PauseableObservableContainer.md), `T`, `T`\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`Operator`](containers.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/containers.PauseableObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](../interfaces/types.QueueableLike.md)<`T`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/containers.PauseableObservableContainer.md), `T`, `T`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`Operator`](containers.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/containers.PauseableObservableContainer.md), `T`, `T`\>

Returns a Containers.Operator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/containers.PauseableObservableContainer.md), `T`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Operator`](containers.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/containers.PauseableObservableContainer.md), `T`, `T`\>

Returns a Containers.Operator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/containers.PauseableObservableContainer.md), `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Operator`](containers.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/containers.PauseableObservableContainer.md), `TA`, `TB`\>

Returns a Containers.Operator that applies the `selector` function to each
value emitted by the source.

**`Typeparam`**

TA - The inner type of the source container

**`Typeparam`**

TB - The inner type of the mapped container

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, `TB`\> | A pure map function that is applied each value emitted by the source |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/containers.PauseableObservableContainer.md), `TA`, `TB`\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`Operator`](containers.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/containers.PauseableObservableContainer.md), `T`, `T`[`TKey`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `TKey` |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/containers.PauseableObservableContainer.md), `T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Operator`](containers.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/containers.PauseableObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKeyA` | extends `string` \| `number` \| `symbol` |
| `TKeyB` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyA` | `TKeyA` |
| `keyB` | `TKeyB` |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/containers.PauseableObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Operator`](containers.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/containers.PauseableObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKeyA` | extends `string` \| `number` \| `symbol` |
| `TKeyB` | extends `string` \| `number` \| `symbol` |
| `TKeyC` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyA` | `TKeyA` |
| `keyB` | `TKeyB` |
| `keyC` | `TKeyC` |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/containers.PauseableObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

## Other Functions

### sinkInto

▸ **sinkInto**<`T`\>(`sink`): [`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/types.PauseableObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<`void`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | [`DispatcherLike`](../interfaces/types.DispatcherLike.md)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/types.PauseableObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<`void`\>\>
