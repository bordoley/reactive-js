[Reactive-JS](../README.md) / rx/PauseableObservable

# Module: rx/PauseableObservable

## Table of contents

### Operator Functions

- [dispatchTo](rx_PauseableObservable.md#dispatchto)
- [enqueue](rx_PauseableObservable.md#enqueue)
- [forEach](rx_PauseableObservable.md#foreach)
- [keep](rx_PauseableObservable.md#keep)
- [map](rx_PauseableObservable.md#map)
- [pick](rx_PauseableObservable.md#pick)

### Other Functions

- [sinkInto](rx_PauseableObservable.md#sinkinto)

## Operator Functions

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`ContainerOperator`](containers.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/rx.PauseableObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](../interfaces/util.DispatcherLike.md)<`T`, { `type`: ``"complete"`` \| ``"wait"`` \| ``"drain"``  }\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/rx.PauseableObservableContainer.md), `T`, `T`\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`ContainerOperator`](containers.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/rx.PauseableObservableContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](../interfaces/util.QueueableLike.md)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/rx.PauseableObservableContainer.md), `T`, `T`\>

___

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](containers.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/rx.PauseableObservableContainer.md), `T`, `T`\>

Returns a ContainerOperator that applies the side effect function to each
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

[`ContainerOperator`](containers.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/rx.PauseableObservableContainer.md), `T`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/rx.PauseableObservableContainer.md), `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
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

[`ContainerOperator`](containers.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/rx.PauseableObservableContainer.md), `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](containers.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/rx.PauseableObservableContainer.md), `TA`, `TB`\>

Returns a ContainerOperator that applies the `selector` function to each
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

[`ContainerOperator`](containers.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/rx.PauseableObservableContainer.md), `TA`, `TB`\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ContainerOperator`](containers.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/rx.PauseableObservableContainer.md), `T`, `T`[`TKey`]\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/rx.PauseableObservableContainer.md), `T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ContainerOperator`](containers.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/rx.PauseableObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/rx.PauseableObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ContainerOperator`](containers.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/rx.PauseableObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`PauseableObservableContainer`](../interfaces/rx.PauseableObservableContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

## Other Functions

### sinkInto

▸ **sinkInto**<`T`\>(`sink`): [`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/rx.PauseableObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`void`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | [`DispatcherLike`](../interfaces/util.DispatcherLike.md)<`T`, { `type`: ``"complete"`` \| ``"wait"`` \| ``"drain"``  }\> |

#### Returns

[`Function1`](functions.md#function1)<[`PauseableObservableLike`](../interfaces/rx.PauseableObservableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`void`\>\>
