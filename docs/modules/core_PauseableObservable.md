[Reactive-JS](../README.md) / core/PauseableObservable

# Module: core/PauseableObservable

## Table of contents

### Operator Functions

- [dispatchTo](core_PauseableObservable.md#dispatchto)
- [enqueue](core_PauseableObservable.md#enqueue)
- [forEach](core_PauseableObservable.md#foreach)
- [keep](core_PauseableObservable.md#keep)
- [map](core_PauseableObservable.md#map)
- [pick](core_PauseableObservable.md#pick)

### Other Functions

- [sinkInto](core_PauseableObservable.md#sinkinto)

## Operator Functions

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`Operator`](core.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/core.PauseableObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](../interfaces/core.DispatcherLike.md)<`T`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/core.PauseableObservableContainer.md), `T`, `T`\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`Operator`](core.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/core.PauseableObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](../interfaces/core.QueueableLike.md)<`T`\> |

#### Returns

[`Operator`](core.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/core.PauseableObservableContainer.md), `T`, `T`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`Operator`](core.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/core.PauseableObservableContainer.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/core.PauseableObservableContainer.md), `T`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Operator`](core.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/core.PauseableObservableContainer.md), `T`, `T`\>

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

[`Operator`](core.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/core.PauseableObservableContainer.md), `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Operator`](core.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/core.PauseableObservableContainer.md), `TA`, `TB`\>

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

[`Operator`](core.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/core.PauseableObservableContainer.md), `TA`, `TB`\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`Operator`](core.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/core.PauseableObservableContainer.md), `T`, `T`[`TKey`]\>

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

[`Operator`](core.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/core.PauseableObservableContainer.md), `T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Operator`](core.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/core.PauseableObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`Operator`](core.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/core.PauseableObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Operator`](core.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/core.PauseableObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`Operator`](core.Containers.md#operator)<[`PauseableObservableContainer`](../interfaces/core.PauseableObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

## Other Functions

### sinkInto

▸ **sinkInto**<`T`\>(`sink`): [`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/core.PauseableObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/core.ObservableLike.md)<`void`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | [`DispatcherLike`](../interfaces/core.DispatcherLike.md)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/core.PauseableObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/core.ObservableLike.md)<`void`\>\>
