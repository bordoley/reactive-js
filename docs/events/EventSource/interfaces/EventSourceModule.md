[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [events/EventSource](../README.md) / EventSourceModule

# Interface: EventSourceModule

## Extends

- [`PureStatelessComputationModule`](../../../computations/interfaces/PureStatelessComputationModule.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md), [`EventSourceComputation`](EventSourceComputation.md)\>

## Methods

### addEventHandler()

> **addEventHandler**\<`T`\>(`handler`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Parameters

##### handler

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`T`\>

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

***

### create()

> **create**\<`T`\>(`setup`): [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### setup

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`EventListenerLike`](../../interfaces/EventListenerLike.md)\<`T`\>\>

#### Returns

[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\>

***

### fromPromise()

> **fromPromise**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`Promise`\<`T`\>, [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Promise`\<`T`\>, [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\>\>

***

### merge()

> **merge**\<`T`\>(`fst`, `snd`, ...`tail`): [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### fst

[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\>

##### snd

[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\>

##### tail

...readonly [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\>[]

#### Returns

[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\>

***

### mergeMany()

> **mergeMany**\<`T`\>(`eventSources`): [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### eventSources

readonly [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\>[]

#### Returns

[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\>

***

### mergeWith()

> **mergeWith**\<`T`\>(`snd`, ...`tail`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\>, [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### snd

[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\>

##### tail

...readonly [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\>[]

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\>, [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\>\>
