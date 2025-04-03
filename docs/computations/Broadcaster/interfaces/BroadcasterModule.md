[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Broadcaster](../README.md) / BroadcasterModule

# Interface: BroadcasterModule

## Extends

- [`ComputationModule`](../../interfaces/ComputationModule.md)\<[`BroadcasterComputation`](BroadcasterComputation.md)\>.[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md)\<[`BroadcasterComputation`](BroadcasterComputation.md)\>.[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md)\<[`BroadcasterComputation`](BroadcasterComputation.md)\>

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

***

### createPauseable()

> **createPauseable**\<`T`\>(`op`, `options`?): [`PauseableLike`](../../../utils/interfaces/PauseableLike.md) & [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)

#### Type Parameters

• **T**

#### Parameters

##### op

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`StoreLike`](../../interfaces/StoreLike.md)\<`boolean`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md), [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\>\>

##### options?

###### autoDispose?

`boolean`

#### Returns

[`PauseableLike`](../../../utils/interfaces/PauseableLike.md) & [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)

***

### fromPromise()

> **fromPromise**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`Promise`\<`T`\>, [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Promise`\<`T`\>, [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\>\>
