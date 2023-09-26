[Reactive-JS](../README.md) / [rx/EventSource](../modules/rx_EventSource.md) / EventSourceModule

# Interface: EventSourceModule

[rx/EventSource](../modules/rx_EventSource.md).EventSourceModule

## Table of contents

### Methods

- [addEventHandler](rx_EventSource.EventSourceModule.md#addeventhandler)
- [buffer](rx_EventSource.EventSourceModule.md#buffer)
- [create](rx_EventSource.EventSourceModule.md#create)
- [distinctUntilChanged](rx_EventSource.EventSourceModule.md#distinctuntilchanged)
- [keep](rx_EventSource.EventSourceModule.md#keep)
- [map](rx_EventSource.EventSourceModule.md#map)
- [merge](rx_EventSource.EventSourceModule.md#merge)
- [mergeMany](rx_EventSource.EventSourceModule.md#mergemany)
- [pairwise](rx_EventSource.EventSourceModule.md#pairwise)
- [scan](rx_EventSource.EventSourceModule.md#scan)
- [skipFirst](rx_EventSource.EventSourceModule.md#skipfirst)
- [takeFirst](rx_EventSource.EventSourceModule.md#takefirst)
- [takeWhile](rx_EventSource.EventSourceModule.md#takewhile)

## Methods

### addEventHandler

▸ **addEventHandler**<`T`\>(`handler`): [`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](rx.EventSourceLike.md)<`T`\>, [`DisposableLike`](utils.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](rx.EventSourceLike.md)<`T`\>, [`DisposableLike`](utils.DisposableLike.md)\>

___

### buffer

▸ **buffer**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](rx.EventSourceLike.md)<`T`\>, [`EventSourceLike`](rx.EventSourceLike.md)<readonly `T`[]\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](rx.EventSourceLike.md)<`T`\>, [`EventSourceLike`](rx.EventSourceLike.md)<readonly `T`[]\>\>

___

### create

▸ **create**<`T`\>(`setup`): [`EventSourceLike`](rx.EventSourceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `setup` | [`SideEffect1`](../modules/functions.md#sideeffect1)<[`EventListenerLike`](rx.EventListenerLike.md)<`T`\>\> |

#### Returns

[`EventSourceLike`](rx.EventSourceLike.md)<`T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](rx.EventSourceLike.md)<`T`\>, [`EventSourceLike`](rx.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](../modules/functions.md#equality)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](rx.EventSourceLike.md)<`T`\>, [`EventSourceLike`](rx.EventSourceLike.md)<`T`\>\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](rx.EventSourceLike.md)<`T`\>, [`EventSourceLike`](rx.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](rx.EventSourceLike.md)<`T`\>, [`EventSourceLike`](rx.EventSourceLike.md)<`T`\>\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](rx.EventSourceLike.md)<`TB`\>, [`EventSourceLike`](rx.EventSourceLike.md)<`TA`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](rx.EventSourceLike.md)<`TB`\>, [`EventSourceLike`](rx.EventSourceLike.md)<`TA`\>\>

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`EventSourceLike`](rx.EventSourceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EventSourceLike`](rx.EventSourceLike.md)<`T`\> |
| `snd` | [`EventSourceLike`](rx.EventSourceLike.md)<`T`\> |
| `...tail` | readonly [`EventSourceLike`](rx.EventSourceLike.md)<`T`\>[] |

#### Returns

[`EventSourceLike`](rx.EventSourceLike.md)<`T`\>

___

### mergeMany

▸ **mergeMany**<`T`\>(`eventSources`): [`EventSourceLike`](rx.EventSourceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventSources` | readonly [`EventSourceLike`](rx.EventSourceLike.md)<`T`\>[] |

#### Returns

[`EventSourceLike`](rx.EventSourceLike.md)<`T`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](rx.EventSourceLike.md)<`T`\>, [`EventSourceLike`](rx.EventSourceLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`T`, `T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](rx.EventSourceLike.md)<`T`\>, [`EventSourceLike`](rx.EventSourceLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`T`, `T`\>\>\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](rx.EventSourceLike.md)<`T`\>, [`EventSourceLike`](rx.EventSourceLike.md)<`TAcc`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](rx.EventSourceLike.md)<`T`\>, [`EventSourceLike`](rx.EventSourceLike.md)<`TAcc`\>\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](rx.EventSourceLike.md)<`T`\>, [`EventSourceLike`](rx.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](rx.EventSourceLike.md)<`T`\>, [`EventSourceLike`](rx.EventSourceLike.md)<`T`\>\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](rx.EventSourceLike.md)<`T`\>, [`EventSourceLike`](rx.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](rx.EventSourceLike.md)<`T`\>, [`EventSourceLike`](rx.EventSourceLike.md)<`T`\>\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](rx.EventSourceLike.md)<`T`\>, [`EventSourceLike`](rx.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |
| `options?` | `Object` |
| `options.inclusive?` | `boolean` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](rx.EventSourceLike.md)<`T`\>, [`EventSourceLike`](rx.EventSourceLike.md)<`T`\>\>
