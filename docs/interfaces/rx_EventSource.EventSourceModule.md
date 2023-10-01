[Reactive-JS](../README.md) / [rx/EventSource](../modules/rx_EventSource.md) / EventSourceModule

# Interface: EventSourceModule

[rx/EventSource](../modules/rx_EventSource.md).EventSourceModule

## Hierarchy

- [`PureComputationModule`](computations.PureComputationModule.md)<[`EventSourceComputation`](rx_EventSource.EventSourceComputation.md)\>

  ↳ **`EventSourceModule`**

## Table of contents

### Methods

- [addEventHandler](rx_EventSource.EventSourceModule.md#addeventhandler)
- [buffer](rx_EventSource.EventSourceModule.md#buffer)
- [create](rx_EventSource.EventSourceModule.md#create)
- [decodeWithCharset](rx_EventSource.EventSourceModule.md#decodewithcharset)
- [distinctUntilChanged](rx_EventSource.EventSourceModule.md#distinctuntilchanged)
- [keep](rx_EventSource.EventSourceModule.md#keep)
- [map](rx_EventSource.EventSourceModule.md#map)
- [merge](rx_EventSource.EventSourceModule.md#merge)
- [mergeMany](rx_EventSource.EventSourceModule.md#mergemany)
- [mergeWith](rx_EventSource.EventSourceModule.md#mergewith)
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

▸ **buffer**<`T`\>(`options?`): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EventSourceComputation`](rx_EventSource.EventSourceComputation.md), `T`, readonly `T`[]\>

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

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EventSourceComputation`](rx_EventSource.EventSourceComputation.md), `T`, readonly `T`[]\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[buffer](computations.PureComputationModule.md#buffer)

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

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EventSourceComputation`](rx_EventSource.EventSourceComputation.md), `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EventSourceComputation`](rx_EventSource.EventSourceComputation.md), `ArrayBuffer`, `string`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[decodeWithCharset](computations.PureComputationModule.md#decodewithcharset)

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EventSourceComputation`](rx_EventSource.EventSourceComputation.md), `T`, `T`\>

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

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EventSourceComputation`](rx_EventSource.EventSourceComputation.md), `T`, `T`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[distinctUntilChanged](computations.PureComputationModule.md#distinctuntilchanged)

___

### keep

▸ **keep**<`T`\>(`predicate`): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EventSourceComputation`](rx_EventSource.EventSourceComputation.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EventSourceComputation`](rx_EventSource.EventSourceComputation.md), `T`, `T`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[keep](computations.PureComputationModule.md#keep)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EventSourceComputation`](rx_EventSource.EventSourceComputation.md), `TA`, `TB`\>

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

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EventSourceComputation`](rx_EventSource.EventSourceComputation.md), `TA`, `TB`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[map](computations.PureComputationModule.md#map)

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

### mergeWith

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](rx.EventSourceLike.md)<`T`\>, [`EventSourceLike`](rx.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EventSourceLike`](rx.EventSourceLike.md)<`T`\> |
| `...tail` | readonly [`EventSourceLike`](rx.EventSourceLike.md)<`T`\>[] |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](rx.EventSourceLike.md)<`T`\>, [`EventSourceLike`](rx.EventSourceLike.md)<`T`\>\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EventSourceComputation`](rx_EventSource.EventSourceComputation.md), `T`, [`Tuple2`](../modules/functions.md#tuple2)<`T`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EventSourceComputation`](rx_EventSource.EventSourceComputation.md), `T`, [`Tuple2`](../modules/functions.md#tuple2)<`T`, `T`\>\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[pairwise](computations.PureComputationModule.md#pairwise)

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EventSourceComputation`](rx_EventSource.EventSourceComputation.md), `T`, `TAcc`\>

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

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EventSourceComputation`](rx_EventSource.EventSourceComputation.md), `T`, `TAcc`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[scan](computations.PureComputationModule.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EventSourceComputation`](rx_EventSource.EventSourceComputation.md), `T`, `T`\>

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

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EventSourceComputation`](rx_EventSource.EventSourceComputation.md), `T`, `T`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[skipFirst](computations.PureComputationModule.md#skipfirst)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EventSourceComputation`](rx_EventSource.EventSourceComputation.md), `T`, `T`\>

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

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EventSourceComputation`](rx_EventSource.EventSourceComputation.md), `T`, `T`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[takeFirst](computations.PureComputationModule.md#takefirst)

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EventSourceComputation`](rx_EventSource.EventSourceComputation.md), `T`, `T`\>

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

[`PureComputationOperator`](../modules/computations.md#purecomputationoperator)<[`EventSourceComputation`](rx_EventSource.EventSourceComputation.md), `T`, `T`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[takeWhile](computations.PureComputationModule.md#takewhile)
