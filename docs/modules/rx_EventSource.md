[Reactive-JS](../README.md) / rx/EventSource

# Module: rx/EventSource

## Table of contents

### Interfaces

- [EventSourceComputation](../interfaces/rx_EventSource.EventSourceComputation.md)
- [EventSourceModule](../interfaces/rx_EventSource.EventSourceModule.md)

### Type Aliases

- [Signature](rx_EventSource.md#signature)
- [Type](rx_EventSource.md#type)

### Functions

- [addEventHandler](rx_EventSource.md#addeventhandler)
- [buffer](rx_EventSource.md#buffer)
- [create](rx_EventSource.md#create)
- [distinctUntilChanged](rx_EventSource.md#distinctuntilchanged)
- [keep](rx_EventSource.md#keep)
- [map](rx_EventSource.md#map)
- [merge](rx_EventSource.md#merge)
- [mergeMany](rx_EventSource.md#mergemany)
- [mergeWith](rx_EventSource.md#mergewith)
- [pairwise](rx_EventSource.md#pairwise)
- [scan](rx_EventSource.md#scan)
- [skipFirst](rx_EventSource.md#skipfirst)
- [takeFirst](rx_EventSource.md#takefirst)
- [takeWhile](rx_EventSource.md#takewhile)

## Type Aliases

### Signature

Ƭ **Signature**: [`EventSourceModule`](../interfaces/rx_EventSource.EventSourceModule.md)

___

### Type

Ƭ **Type**: [`EventSourceComputation`](../interfaces/rx_EventSource.EventSourceComputation.md)

## Functions

### addEventHandler

▸ **addEventHandler**<`T`\>(`handler`): [`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/rx.EventSourceLike.md)<`T`\>, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/rx.EventSourceLike.md)<`T`\>, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

___

### buffer

▸ **buffer**<`T`\>(`options?`): [`PureComputationOperator`](computation.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/rx_EventSource.EventSourceComputation.md), `T`, readonly `T`[]\>

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

[`PureComputationOperator`](computation.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/rx_EventSource.EventSourceComputation.md), `T`, readonly `T`[]\>

___

### create

▸ **create**<`T`\>(`setup`): [`EventSourceLike`](../interfaces/rx.EventSourceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `setup` | [`SideEffect1`](functions.md#sideeffect1)<[`EventListenerLike`](../interfaces/rx.EventListenerLike.md)<`T`\>\> |

#### Returns

[`EventSourceLike`](../interfaces/rx.EventSourceLike.md)<`T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`PureComputationOperator`](computation.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/rx_EventSource.EventSourceComputation.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](functions.md#equality)<`T`\> |

#### Returns

[`PureComputationOperator`](computation.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/rx_EventSource.EventSourceComputation.md), `T`, `T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`PureComputationOperator`](computation.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/rx_EventSource.EventSourceComputation.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`PureComputationOperator`](computation.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/rx_EventSource.EventSourceComputation.md), `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`PureComputationOperator`](computation.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/rx_EventSource.EventSourceComputation.md), `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`PureComputationOperator`](computation.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/rx_EventSource.EventSourceComputation.md), `TA`, `TB`\>

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`EventSourceLike`](../interfaces/rx.EventSourceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EventSourceLike`](../interfaces/rx.EventSourceLike.md)<`T`\> |
| `snd` | [`EventSourceLike`](../interfaces/rx.EventSourceLike.md)<`T`\> |
| `...tail` | readonly [`EventSourceLike`](../interfaces/rx.EventSourceLike.md)<`T`\>[] |

#### Returns

[`EventSourceLike`](../interfaces/rx.EventSourceLike.md)<`T`\>

___

### mergeMany

▸ **mergeMany**<`T`\>(`eventSources`): [`EventSourceLike`](../interfaces/rx.EventSourceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventSources` | readonly [`EventSourceLike`](../interfaces/rx.EventSourceLike.md)<`T`\>[] |

#### Returns

[`EventSourceLike`](../interfaces/rx.EventSourceLike.md)<`T`\>

___

### mergeWith

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/rx.EventSourceLike.md)<`T`\>, [`EventSourceLike`](../interfaces/rx.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EventSourceLike`](../interfaces/rx.EventSourceLike.md)<`T`\> |
| `...tail` | readonly [`EventSourceLike`](../interfaces/rx.EventSourceLike.md)<`T`\>[] |

#### Returns

[`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/rx.EventSourceLike.md)<`T`\>, [`EventSourceLike`](../interfaces/rx.EventSourceLike.md)<`T`\>\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`PureComputationOperator`](computation.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/rx_EventSource.EventSourceComputation.md), `T`, [`Tuple2`](functions.md#tuple2)<`T`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureComputationOperator`](computation.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/rx_EventSource.EventSourceComputation.md), `T`, [`Tuple2`](functions.md#tuple2)<`T`, `T`\>\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`PureComputationOperator`](computation.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/rx_EventSource.EventSourceComputation.md), `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`PureComputationOperator`](computation.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/rx_EventSource.EventSourceComputation.md), `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`PureComputationOperator`](computation.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/rx_EventSource.EventSourceComputation.md), `T`, `T`\>

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

[`PureComputationOperator`](computation.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/rx_EventSource.EventSourceComputation.md), `T`, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`PureComputationOperator`](computation.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/rx_EventSource.EventSourceComputation.md), `T`, `T`\>

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

[`PureComputationOperator`](computation.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/rx_EventSource.EventSourceComputation.md), `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`PureComputationOperator`](computation.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/rx_EventSource.EventSourceComputation.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |
| `options?` | `Object` |
| `options.inclusive?` | `boolean` |

#### Returns

[`PureComputationOperator`](computation.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/rx_EventSource.EventSourceComputation.md), `T`, `T`\>
