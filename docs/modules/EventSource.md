[Reactive-JS](../README.md) / EventSource

# Module: EventSource

## Table of contents

### Constructor Functions

- [create](EventSource.md#create)

### Operator Functions

- [forEach](EventSource.md#foreach)
- [ignoreElements](EventSource.md#ignoreelements)
- [keep](EventSource.md#keep)
- [map](EventSource.md#map)
- [pick](EventSource.md#pick)

### Other Functions

- [addEventHandler](EventSource.md#addeventhandler)

### Transform Functions

- [toObservable](EventSource.md#toobservable)

## Constructor Functions

### create

▸ **create**<`T`\>(`setup`): [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `setup` | [`SideEffect1`](functions.md#sideeffect1)<[`EventListenerLike`](../interfaces/types.EventListenerLike.md)<`T`\>\> |

#### Returns

[`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>

___

## Operator Functions

### forEach

▸ **forEach**<`T`\>(`effect`): [`Operator`](containers.Containers.md#operator)<[`EventSourceContainer`](../interfaces/containers.EventSourceContainer.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`EventSourceContainer`](../interfaces/containers.EventSourceContainer.md), `T`, `T`\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`Operator`](containers.Containers.md#operator)<[`EventSourceContainer`](../interfaces/containers.EventSourceContainer.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`EventSourceContainer`](../interfaces/containers.EventSourceContainer.md), `unknown`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Operator`](containers.Containers.md#operator)<[`EventSourceContainer`](../interfaces/containers.EventSourceContainer.md), `T`, `T`\>

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

[`Operator`](containers.Containers.md#operator)<[`EventSourceContainer`](../interfaces/containers.EventSourceContainer.md), `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Operator`](containers.Containers.md#operator)<[`EventSourceContainer`](../interfaces/containers.EventSourceContainer.md), `TA`, `TB`\>

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

[`Operator`](containers.Containers.md#operator)<[`EventSourceContainer`](../interfaces/containers.EventSourceContainer.md), `TA`, `TB`\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`Operator`](containers.Containers.md#operator)<[`EventSourceContainer`](../interfaces/containers.EventSourceContainer.md), `T`, `T`[`TKey`]\>

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

[`Operator`](containers.Containers.md#operator)<[`EventSourceContainer`](../interfaces/containers.EventSourceContainer.md), `T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Operator`](containers.Containers.md#operator)<[`EventSourceContainer`](../interfaces/containers.EventSourceContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`Operator`](containers.Containers.md#operator)<[`EventSourceContainer`](../interfaces/containers.EventSourceContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Operator`](containers.Containers.md#operator)<[`EventSourceContainer`](../interfaces/containers.EventSourceContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`Operator`](containers.Containers.md#operator)<[`EventSourceContainer`](../interfaces/containers.EventSourceContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

## Other Functions

### addEventHandler

▸ **addEventHandler**<`T`\>(`handler`): [`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

___

## Transform Functions

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`T`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>\>
