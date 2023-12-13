[Reactive-JS](../README.md) / [events/EventSource](../modules/events_EventSource.md) / EventSourceModule

# Interface: EventSourceModule

[events/EventSource](../modules/events_EventSource.md).EventSourceModule

## Hierarchy

- [`PureComputationModule`](computations.PureComputationModule.md)<[`EventSourceComputation`](events_EventSource.EventSourceComputation.md)\>

  ↳ **`EventSourceModule`**

## Table of contents

### Methods

- [addEventHandler](events_EventSource.EventSourceModule.md#addeventhandler)
- [buffer](events_EventSource.EventSourceModule.md#buffer)
- [create](events_EventSource.EventSourceModule.md#create)
- [decodeWithCharset](events_EventSource.EventSourceModule.md#decodewithcharset)
- [distinctUntilChanged](events_EventSource.EventSourceModule.md#distinctuntilchanged)
- [fromIterable](events_EventSource.EventSourceModule.md#fromiterable)
- [fromPromise](events_EventSource.EventSourceModule.md#frompromise)
- [fromReadonlyArray](events_EventSource.EventSourceModule.md#fromreadonlyarray)
- [keep](events_EventSource.EventSourceModule.md#keep)
- [map](events_EventSource.EventSourceModule.md#map)
- [merge](events_EventSource.EventSourceModule.md#merge)
- [mergeMany](events_EventSource.EventSourceModule.md#mergemany)
- [mergeWith](events_EventSource.EventSourceModule.md#mergewith)
- [pairwise](events_EventSource.EventSourceModule.md#pairwise)
- [scan](events_EventSource.EventSourceModule.md#scan)
- [skipFirst](events_EventSource.EventSourceModule.md#skipfirst)
- [takeFirst](events_EventSource.EventSourceModule.md#takefirst)
- [takeWhile](events_EventSource.EventSourceModule.md#takewhile)
- [toReadonlyArrayAsync](events_EventSource.EventSourceModule.md#toreadonlyarrayasync)

## Methods

### addEventHandler

▸ **addEventHandler**<`T`\>(`handler`): [`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](events.EventSourceLike.md)<`T`\>, [`DisposableLike`](utils.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](events.EventSourceLike.md)<`T`\>, [`DisposableLike`](utils.DisposableLike.md)\>

___

### buffer

▸ **buffer**<`T`\>(`options?`): [`ComputationOperator`](../modules/computations.md#computationoperator)<[`EventSourceComputation`](events_EventSource.EventSourceComputation.md), `T`, readonly `T`[]\>

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

[`ComputationOperator`](../modules/computations.md#computationoperator)<[`EventSourceComputation`](events_EventSource.EventSourceComputation.md), `T`, readonly `T`[]\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[buffer](computations.PureComputationModule.md#buffer)

___

### create

▸ **create**<`T`\>(`setup`): [`EventSourceLike`](events.EventSourceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `setup` | [`SideEffect1`](../modules/functions.md#sideeffect1)<[`EventListenerLike`](events.EventListenerLike.md)<`T`\>\> |

#### Returns

[`EventSourceLike`](events.EventSourceLike.md)<`T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`ComputationOperator`](../modules/computations.md#computationoperator)<[`EventSourceComputation`](events_EventSource.EventSourceComputation.md), `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`ComputationOperator`](../modules/computations.md#computationoperator)<[`EventSourceComputation`](events_EventSource.EventSourceComputation.md), `ArrayBuffer`, `string`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[decodeWithCharset](computations.PureComputationModule.md#decodewithcharset)

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ComputationOperator`](../modules/computations.md#computationoperator)<[`EventSourceComputation`](events_EventSource.EventSourceComputation.md), `T`, `T`\>

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

[`ComputationOperator`](../modules/computations.md#computationoperator)<[`EventSourceComputation`](events_EventSource.EventSourceComputation.md), `T`, `T`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[distinctUntilChanged](computations.PureComputationModule.md#distinctuntilchanged)

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EventSourceLike`](events.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`EventSourceLike`](events.EventSourceLike.md)<`T`\>\>

___

### fromPromise

▸ **fromPromise**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`Promise`<`T`\>, [`EventSourceLike`](events.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Promise`<`T`\>, [`EventSourceLike`](events.EventSourceLike.md)<`T`\>\>

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EventSourceLike`](events.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`EventSourceLike`](events.EventSourceLike.md)<`T`\>\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[fromReadonlyArray](computations.PureComputationModule.md#fromreadonlyarray)

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ComputationOperator`](../modules/computations.md#computationoperator)<[`EventSourceComputation`](events_EventSource.EventSourceComputation.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`ComputationOperator`](../modules/computations.md#computationoperator)<[`EventSourceComputation`](events_EventSource.EventSourceComputation.md), `T`, `T`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[keep](computations.PureComputationModule.md#keep)

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ComputationOperator`](../modules/computations.md#computationoperator)<[`EventSourceComputation`](events_EventSource.EventSourceComputation.md), `TA`, `TB`\>

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

[`ComputationOperator`](../modules/computations.md#computationoperator)<[`EventSourceComputation`](events_EventSource.EventSourceComputation.md), `TA`, `TB`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[map](computations.PureComputationModule.md#map)

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`EventSourceLike`](events.EventSourceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EventSourceLike`](events.EventSourceLike.md)<`T`\> |
| `snd` | [`EventSourceLike`](events.EventSourceLike.md)<`T`\> |
| `...tail` | readonly [`EventSourceLike`](events.EventSourceLike.md)<`T`\>[] |

#### Returns

[`EventSourceLike`](events.EventSourceLike.md)<`T`\>

___

### mergeMany

▸ **mergeMany**<`T`\>(`eventSources`): [`EventSourceLike`](events.EventSourceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventSources` | readonly [`EventSourceLike`](events.EventSourceLike.md)<`T`\>[] |

#### Returns

[`EventSourceLike`](events.EventSourceLike.md)<`T`\>

___

### mergeWith

▸ **mergeWith**<`T`\>(`snd`, `...tail`): [`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](events.EventSourceLike.md)<`T`\>, [`EventSourceLike`](events.EventSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EventSourceLike`](events.EventSourceLike.md)<`T`\> |
| `...tail` | readonly [`EventSourceLike`](events.EventSourceLike.md)<`T`\>[] |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](events.EventSourceLike.md)<`T`\>, [`EventSourceLike`](events.EventSourceLike.md)<`T`\>\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`ComputationOperator`](../modules/computations.md#computationoperator)<[`EventSourceComputation`](events_EventSource.EventSourceComputation.md), `T`, [`Tuple2`](../modules/functions.md#tuple2)<`T`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ComputationOperator`](../modules/computations.md#computationoperator)<[`EventSourceComputation`](events_EventSource.EventSourceComputation.md), `T`, [`Tuple2`](../modules/functions.md#tuple2)<`T`, `T`\>\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[pairwise](computations.PureComputationModule.md#pairwise)

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ComputationOperator`](../modules/computations.md#computationoperator)<[`EventSourceComputation`](events_EventSource.EventSourceComputation.md), `T`, `TAcc`\>

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

[`ComputationOperator`](../modules/computations.md#computationoperator)<[`EventSourceComputation`](events_EventSource.EventSourceComputation.md), `T`, `TAcc`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[scan](computations.PureComputationModule.md#scan)

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ComputationOperator`](../modules/computations.md#computationoperator)<[`EventSourceComputation`](events_EventSource.EventSourceComputation.md), `T`, `T`\>

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

[`ComputationOperator`](../modules/computations.md#computationoperator)<[`EventSourceComputation`](events_EventSource.EventSourceComputation.md), `T`, `T`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[skipFirst](computations.PureComputationModule.md#skipfirst)

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ComputationOperator`](../modules/computations.md#computationoperator)<[`EventSourceComputation`](events_EventSource.EventSourceComputation.md), `T`, `T`\>

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

[`ComputationOperator`](../modules/computations.md#computationoperator)<[`EventSourceComputation`](events_EventSource.EventSourceComputation.md), `T`, `T`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[takeFirst](computations.PureComputationModule.md#takefirst)

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ComputationOperator`](../modules/computations.md#computationoperator)<[`EventSourceComputation`](events_EventSource.EventSourceComputation.md), `T`, `T`\>

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

[`ComputationOperator`](../modules/computations.md#computationoperator)<[`EventSourceComputation`](events_EventSource.EventSourceComputation.md), `T`, `T`\>

#### Inherited from

[PureComputationModule](computations.PureComputationModule.md).[takeWhile](computations.PureComputationModule.md#takewhile)

___

### toReadonlyArrayAsync

▸ **toReadonlyArrayAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](events.EventSourceLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EventSourceLike`](events.EventSourceLike.md)<`T`\>, `Promise`<readonly `T`[]\>\>
