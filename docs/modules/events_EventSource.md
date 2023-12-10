[Reactive-JS](../README.md) / events/EventSource

# Module: events/EventSource

## Table of contents

### Interfaces

- [EventSourceComputation](../interfaces/events_EventSource.EventSourceComputation.md)
- [EventSourceModule](../interfaces/events_EventSource.EventSourceModule.md)

### Type Aliases

- [Signature](events_EventSource.md#signature)
- [Type](events_EventSource.md#type)

### Functions

- [addEventHandler](events_EventSource.md#addeventhandler)
- [buffer](events_EventSource.md#buffer)
- [create](events_EventSource.md#create)
- [distinctUntilChanged](events_EventSource.md#distinctuntilchanged)
- [fromIterable](events_EventSource.md#fromiterable)
- [fromPromise](events_EventSource.md#frompromise)
- [keep](events_EventSource.md#keep)
- [map](events_EventSource.md#map)
- [merge](events_EventSource.md#merge)
- [mergeMany](events_EventSource.md#mergemany)
- [mergeWith](events_EventSource.md#mergewith)
- [pairwise](events_EventSource.md#pairwise)
- [scan](events_EventSource.md#scan)
- [skipFirst](events_EventSource.md#skipfirst)
- [takeFirst](events_EventSource.md#takefirst)
- [takeWhile](events_EventSource.md#takewhile)
- [toReadonlyArrayAsync](events_EventSource.md#toreadonlyarrayasync)

## Type Aliases

### Signature

Ƭ **Signature**: [`EventSourceModule`](../interfaces/events_EventSource.EventSourceModule.md)

___

### Type

Ƭ **Type**: [`EventSourceComputation`](../interfaces/events_EventSource.EventSourceComputation.md)

## Functions

### addEventHandler

▸ **addEventHandler**<`T`\>(`handler`): [`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`SideEffect1`](functions.md#sideeffect1)<`T`\> |

#### Returns

[`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

___

### buffer

▸ **buffer**<`T`\>(`options?`): [`PureComputationOperator`](computations.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/events_EventSource.EventSourceComputation.md), `T`, readonly `T`[]\>

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

[`PureComputationOperator`](computations.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/events_EventSource.EventSourceComputation.md), `T`, readonly `T`[]\>

___

### create

▸ **create**<`T`\>(`setup`): [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `setup` | [`SideEffect1`](functions.md#sideeffect1)<[`EventListenerLike`](../interfaces/events.EventListenerLike.md)<`T`\>\> |

#### Returns

[`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`PureComputationOperator`](computations.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/events_EventSource.EventSourceComputation.md), `T`, `T`\>

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

[`PureComputationOperator`](computations.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/events_EventSource.EventSourceComputation.md), `T`, `T`\>

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>\>

___

### fromPromise

▸ **fromPromise**<`T`\>(): [`Function1`](functions.md#function1)<`Promise`<`T`\>, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`Promise`<`T`\>, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`PureComputationOperator`](computations.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/events_EventSource.EventSourceComputation.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`PureComputationOperator`](computations.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/events_EventSource.EventSourceComputation.md), `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`PureComputationOperator`](computations.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/events_EventSource.EventSourceComputation.md), `TA`, `TB`\>

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

[`PureComputationOperator`](computations.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/events_EventSource.EventSourceComputation.md), `TA`, `TB`\>

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\> |
| `snd` | [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\> |
| `...tail` | readonly [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>[] |

#### Returns

[`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>

___

### mergeMany

▸ **mergeMany**<`T`\>(`eventSources`): [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventSources` | readonly [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>[] |

#### Returns

[`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>

___

### mergeWith

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\> |
| `...tail` | readonly [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>[] |

#### Returns

[`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`PureComputationOperator`](computations.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/events_EventSource.EventSourceComputation.md), `T`, [`Tuple2`](functions.md#tuple2)<`T`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PureComputationOperator`](computations.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/events_EventSource.EventSourceComputation.md), `T`, [`Tuple2`](functions.md#tuple2)<`T`, `T`\>\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`PureComputationOperator`](computations.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/events_EventSource.EventSourceComputation.md), `T`, `TAcc`\>

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

[`PureComputationOperator`](computations.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/events_EventSource.EventSourceComputation.md), `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`PureComputationOperator`](computations.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/events_EventSource.EventSourceComputation.md), `T`, `T`\>

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

[`PureComputationOperator`](computations.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/events_EventSource.EventSourceComputation.md), `T`, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`PureComputationOperator`](computations.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/events_EventSource.EventSourceComputation.md), `T`, `T`\>

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

[`PureComputationOperator`](computations.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/events_EventSource.EventSourceComputation.md), `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`PureComputationOperator`](computations.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/events_EventSource.EventSourceComputation.md), `T`, `T`\>

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

[`PureComputationOperator`](computations.md#purecomputationoperator)<[`EventSourceComputation`](../interfaces/events_EventSource.EventSourceComputation.md), `T`, `T`\>

___

### toReadonlyArrayAsync

▸ **toReadonlyArrayAsync**<`T`\>(): [`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>
