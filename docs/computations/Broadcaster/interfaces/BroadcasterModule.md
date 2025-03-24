[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Broadcaster](../README.md) / BroadcasterModule

# Interface: BroadcasterModule

## Extends

- [`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md)\<[`BroadcasterComputation`](BroadcasterComputation.md)\>

## Methods

### addEventHandler()

> **addEventHandler**\<`T`\>(`onNotify`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Parameters

##### onNotify

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`T`\>

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

***

### create()

> **create**\<`T`\>(`setup`, `options`?): [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)

#### Type Parameters

• **T**

#### Parameters

##### setup

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`EventListenerLike`](../../../utils/interfaces/EventListenerLike.md)\<`T`\>\>

##### options?

###### autoDispose?

`boolean`

#### Returns

[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)
