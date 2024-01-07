[Reactive-JS](../README.md) / events/EventSource

# Module: events/EventSource

## Table of contents

### Interfaces

- [EventSourceComputation](../interfaces/events_EventSource.EventSourceComputation.md)
- [EventSourceModule](../interfaces/events_EventSource.EventSourceModule.md)

### Type Aliases

- [Signature](events_EventSource.md#signature)

### Functions

- [addEventHandler](events_EventSource.md#addeventhandler)
- [create](events_EventSource.md#create)
- [fromPromise](events_EventSource.md#frompromise)
- [keep](events_EventSource.md#keep)
- [map](events_EventSource.md#map)
- [merge](events_EventSource.md#merge)
- [mergeMany](events_EventSource.md#mergemany)
- [mergeWith](events_EventSource.md#mergewith)

## Type Aliases

### Signature

Ƭ **Signature**: [`EventSourceModule`](../interfaces/events_EventSource.EventSourceModule.md)

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

▸ **keep**<`T`\>(`predicate`): [`ComputationOperator`](computations.md#computationoperator)<[`EventSourceComputation`](../interfaces/events_EventSource.EventSourceComputation.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ComputationOperator`](computations.md#computationoperator)<[`EventSourceComputation`](../interfaces/events_EventSource.EventSourceComputation.md), `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`ComputationOperator`](computations.md#computationoperator)<[`EventSourceComputation`](../interfaces/events_EventSource.EventSourceComputation.md), `TA`, `TB`\>

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

[`ComputationOperator`](computations.md#computationoperator)<[`EventSourceComputation`](../interfaces/events_EventSource.EventSourceComputation.md), `TA`, `TB`\>

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
