[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/EventSource](../README.md) / EventSourceModule

# Interface: EventSourceModule

## Extends

- [`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md)\<[`EventSourceComputation`](EventSourceComputation.md)\>

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
