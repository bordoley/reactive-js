[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/EventSource](../README.md) / EventSourceModule

# Interface: EventSourceModule

## Extends

- [`ComputationModule`](../../interfaces/ComputationModule.md)\<[`EventSourceComputation`](EventSourceComputation.md)\>.[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md)\<[`EventSourceComputation`](EventSourceComputation.md)\>.[`MulticastedComputationModule`](../../interfaces/MulticastedComputationModule.md)\<[`EventSourceComputation`](EventSourceComputation.md)\>

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

> **create**\<`T`\>(`setup`, `options`?): [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)

#### Type Parameters

• **T**

#### Parameters

##### setup

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`EventListenerLike`](../../../utils/interfaces/EventListenerLike.md)\<`T`\>\>

##### options?

###### autoDispose?

`boolean`

#### Returns

[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)

***

### createPauseable()

> **createPauseable**\<`T`\>(`op`): [`PauseableLike`](../../../utils/interfaces/PauseableLike.md) & [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)

#### Type Parameters

• **T**

#### Parameters

##### op

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`boolean`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md), [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\>\>

#### Returns

[`PauseableLike`](../../../utils/interfaces/PauseableLike.md) & [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)

***

### toProducer()

> **toProducer**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\>, [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\>, [`ProducerLike`](../../interfaces/ProducerLike.md)\<`T`\>\>
