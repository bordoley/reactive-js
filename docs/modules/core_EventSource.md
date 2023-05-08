[Reactive-JS](../README.md) / core/EventSource

# Module: core/EventSource

## Table of contents

### Constructor Functions

- [create](core_EventSource.md#create)

### Operator Functions

- [forEach](core_EventSource.md#foreach)
- [ignoreElements](core_EventSource.md#ignoreelements)
- [keep](core_EventSource.md#keep)
- [map](core_EventSource.md#map)
- [pick](core_EventSource.md#pick)

### Other Functions

- [addEventHandler](core_EventSource.md#addeventhandler)

### Transform Functions

- [toObservable](core_EventSource.md#toobservable)

## Constructor Functions

### create

▸ **create**<`T`\>(`setup`): [`EventSourceLike`](../interfaces/core.EventSourceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `setup` | [`SideEffect1`](functions.md#sideeffect1)<[`EventListenerLike`](../interfaces/core.EventListenerLike.md)<`T`\>\> |

#### Returns

[`EventSourceLike`](../interfaces/core.EventSourceLike.md)<`T`\>

___

## Operator Functions

### forEach

▸ **forEach**<`T`\>(`effect`): [`Operator`](core.Container.md#operator)<[`EventSourceContainer`](../interfaces/core.EventSourceContainer.md), `T`, `T`\>

Returns a Container.Operator that applies the side effect function to each
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

[`Operator`](core.Container.md#operator)<[`EventSourceContainer`](../interfaces/core.EventSourceContainer.md), `T`, `T`\>

___

### ignoreElements

▸ **ignoreElements**<`T`\>(): [`Operator`](core.Container.md#operator)<[`EventSourceContainer`](../interfaces/core.EventSourceContainer.md), `unknown`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Container.md#operator)<[`EventSourceContainer`](../interfaces/core.EventSourceContainer.md), `unknown`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Operator`](core.Container.md#operator)<[`EventSourceContainer`](../interfaces/core.EventSourceContainer.md), `T`, `T`\>

Returns a Container.Operator that only emits items produced by the
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

[`Operator`](core.Container.md#operator)<[`EventSourceContainer`](../interfaces/core.EventSourceContainer.md), `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Operator`](core.Container.md#operator)<[`EventSourceContainer`](../interfaces/core.EventSourceContainer.md), `TA`, `TB`\>

Returns a Container.Operator that applies the `selector` function to each
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

[`Operator`](core.Container.md#operator)<[`EventSourceContainer`](../interfaces/core.EventSourceContainer.md), `TA`, `TB`\>

___

### pick

▸ **pick**<`T`, `TKey`\>(`key`): [`Operator`](core.Container.md#operator)<[`EventSourceContainer`](../interfaces/core.EventSourceContainer.md), `T`, `T`[`TKey`]\>

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

[`Operator`](core.Container.md#operator)<[`EventSourceContainer`](../interfaces/core.EventSourceContainer.md), `T`, `T`[`TKey`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`\>(`keyA`, `keyB`): [`Operator`](core.Container.md#operator)<[`EventSourceContainer`](../interfaces/core.EventSourceContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

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

[`Operator`](core.Container.md#operator)<[`EventSourceContainer`](../interfaces/core.EventSourceContainer.md), `T`, `T`[`TKeyA`][`TKeyB`]\>

▸ **pick**<`T`, `TKeyA`, `TKeyB`, `TKeyC`\>(`keyA`, `keyB`, `keyC`): [`Operator`](core.Container.md#operator)<[`EventSourceContainer`](../interfaces/core.EventSourceContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

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

[`Operator`](core.Container.md#operator)<[`EventSourceContainer`](../interfaces/core.EventSourceContainer.md), `T`, `T`[`TKeyA`][`TKeyB`][`TKeyC`]\>

___

## Other Functions

### addEventHandler

▸ **addEventHandler**<`T`\>(`handler`): [`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/core.EventSourceLike.md)<`T`\>, [`DisposableLike`](../interfaces/core.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/core.EventSourceLike.md)<`T`\>, [`DisposableLike`](../interfaces/core.DisposableLike.md)\>

___

## Transform Functions

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/core.EventSourceLike.md)<`T`\>, [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/core.EventSourceLike.md)<`T`\>, [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>\>
