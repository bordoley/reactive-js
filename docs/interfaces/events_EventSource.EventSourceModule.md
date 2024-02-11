[Reactive-JS](../README.md) / [events/EventSource](../modules/events_EventSource.md) / EventSourceModule

# Interface: EventSourceModule

[events/EventSource](../modules/events_EventSource.md).EventSourceModule

## Hierarchy

- [`PureStatelessComputationModule`](computations.PureStatelessComputationModule.md)\<[`EventSourceComputation`](events_EventSource.EventSourceComputation.md)\>

  ↳ **`EventSourceModule`**

## Table of contents

### Methods

- [addEventHandler](events_EventSource.EventSourceModule.md#addeventhandler)
- [create](events_EventSource.EventSourceModule.md#create)
- [fromPromise](events_EventSource.EventSourceModule.md#frompromise)
- [merge](events_EventSource.EventSourceModule.md#merge)
- [mergeMany](events_EventSource.EventSourceModule.md#mergemany)
- [mergeWith](events_EventSource.EventSourceModule.md#mergewith)

## Methods

### addEventHandler

▸ **addEventHandler**\<`T`\>(`handler`): [`Function1`](../modules/functions.md#function1)\<[`EventSourceLike`](events.EventSourceLike.md)\<`T`\>, [`DisposableLike`](utils.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`SideEffect1`](../modules/functions.md#sideeffect1)\<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)\<[`EventSourceLike`](events.EventSourceLike.md)\<`T`\>, [`DisposableLike`](utils.DisposableLike.md)\>

___

### create

▸ **create**\<`T`\>(`setup`): [`EventSourceLike`](events.EventSourceLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `setup` | [`SideEffect1`](../modules/functions.md#sideeffect1)\<[`EventListenerLike`](events.EventListenerLike.md)\<`T`\>\> |

#### Returns

[`EventSourceLike`](events.EventSourceLike.md)\<`T`\>

___

### fromPromise

▸ **fromPromise**\<`T`\>(): [`Function1`](../modules/functions.md#function1)\<`Promise`\<`T`\>, [`EventSourceLike`](events.EventSourceLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)\<`Promise`\<`T`\>, [`EventSourceLike`](events.EventSourceLike.md)\<`T`\>\>

___

### merge

▸ **merge**\<`T`\>(`fst`, `snd`, `...tail`): [`EventSourceLike`](events.EventSourceLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EventSourceLike`](events.EventSourceLike.md)\<`T`\> |
| `snd` | [`EventSourceLike`](events.EventSourceLike.md)\<`T`\> |
| `...tail` | readonly [`EventSourceLike`](events.EventSourceLike.md)\<`T`\>[] |

#### Returns

[`EventSourceLike`](events.EventSourceLike.md)\<`T`\>

___

### mergeMany

▸ **mergeMany**\<`T`\>(`eventSources`): [`EventSourceLike`](events.EventSourceLike.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventSources` | readonly [`EventSourceLike`](events.EventSourceLike.md)\<`T`\>[] |

#### Returns

[`EventSourceLike`](events.EventSourceLike.md)\<`T`\>

___

### mergeWith

▸ **mergeWith**\<`T`\>(`snd`, `...tail`): [`Function1`](../modules/functions.md#function1)\<[`EventSourceLike`](events.EventSourceLike.md)\<`T`\>, [`EventSourceLike`](events.EventSourceLike.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EventSourceLike`](events.EventSourceLike.md)\<`T`\> |
| `...tail` | readonly [`EventSourceLike`](events.EventSourceLike.md)\<`T`\>[] |

#### Returns

[`Function1`](../modules/functions.md#function1)\<[`EventSourceLike`](events.EventSourceLike.md)\<`T`\>, [`EventSourceLike`](events.EventSourceLike.md)\<`T`\>\>
