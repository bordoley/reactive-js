[Reactive-JS](../README.md) / util/EventSource

# Module: util/EventSource

## Table of contents

### Constructor Functions

- [create](util_EventSource.md#create)

### Operator Functions

- [forEach](util_EventSource.md#foreach)
- [ignoreElements](util_EventSource.md#ignoreelements)
- [keep](util_EventSource.md#keep)
- [map](util_EventSource.md#map)
- [pick](util_EventSource.md#pick)

### Other Functions

- [addEventHandler](util_EventSource.md#addeventhandler)

### Transform Functions

- [toObservable](util_EventSource.md#toobservable)

## Constructor Functions

### create

▸ **create**<`T`\>(`setup`): [`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `setup` | [`SideEffect1`](functions.md#sideeffect1)<[`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`T`\>\> |

#### Returns

[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\>

___

## Operator Functions

### forEach

▸ **forEach**<`T`\>(`effect`): [`ContainerOperator`](containers.md#containeroperator)<[`EventSourceContainer`](../interfaces/util.EventSourceContainer.md), `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EventSourceContainer`](../interfaces/util.EventSourceContainer.md), `T`, `T`\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`ContainerOperator`](containers.md#containeroperator)<[`EventSourceContainer`](../interfaces/util.EventSourceContainer.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`EventSourceContainer`](../interfaces/util.EventSourceContainer.md), `unknown`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`EventSourceContainer`](../interfaces/util.EventSourceContainer.md), `T`, `T`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EventSourceContainer`](../interfaces/util.EventSourceContainer.md), `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ContainerOperator`](containers.md#containeroperator)<[`EventSourceContainer`](../interfaces/util.EventSourceContainer.md), `TA`, `TB`\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EventSourceContainer`](../interfaces/util.EventSourceContainer.md), `TA`, `TB`\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`ContainerOperator`](containers.md#containeroperator)<[`EventSourceContainer`](../interfaces/util.EventSourceContainer.md), `T`, `T`[`TKey`]\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EventSourceContainer`](../interfaces/util.EventSourceContainer.md), `T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`ContainerOperator`](containers.md#containeroperator)<[`EventSourceContainer`](../interfaces/util.EventSourceContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EventSourceContainer`](../interfaces/util.EventSourceContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`ContainerOperator`](containers.md#containeroperator)<[`EventSourceContainer`](../interfaces/util.EventSourceContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`ContainerOperator`](containers.md#containeroperator)<[`EventSourceContainer`](../interfaces/util.EventSourceContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

## Other Functions

### addEventHandler

▸ **addEventHandler**<`T`\>(`handler`): [`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\>, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\>, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

___

## Transform Functions

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>
