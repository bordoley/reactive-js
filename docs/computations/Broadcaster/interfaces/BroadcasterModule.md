[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Broadcaster](../README.md) / BroadcasterModule

# Interface: BroadcasterModule

## Methods

### create()

> **create**\<`T`\>(`setup`, `options`?): [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)

#### Type Parameters

• **T**

#### Parameters

##### setup

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`SinkLike`](../../../utils/interfaces/SinkLike.md)\<`T`\>\>

##### options?

###### autoDispose?

`boolean`

###### replay?

`number`

#### Returns

[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)

***

### createPauseable()

> **createPauseable**\<`T`\>(`op`): [`PauseableLike`](../../../utils/interfaces/PauseableLike.md) & [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)

#### Type Parameters

• **T**

#### Parameters

##### op

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`boolean`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md), [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\>\>

#### Returns

[`PauseableLike`](../../../utils/interfaces/PauseableLike.md) & [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)

***

### toEventSource()

> **toEventSource**\<`T`\>(): \<`TBroadcaster`\>(`broadcaster`) => `TBroadcaster` *extends* [`PauseableLike`](../../../utils/interfaces/PauseableLike.md) ? [`PauseableLike`](../../../utils/interfaces/PauseableLike.md) & [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> : [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Returns

`Function`

##### Type Parameters

• **TBroadcaster** *extends* [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\>

##### Parameters

###### broadcaster

`TBroadcaster`

##### Returns

`TBroadcaster` *extends* [`PauseableLike`](../../../utils/interfaces/PauseableLike.md) ? [`PauseableLike`](../../../utils/interfaces/PauseableLike.md) & [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\> : [`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`\>

***

### toObservable()

> **toObservable**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>
