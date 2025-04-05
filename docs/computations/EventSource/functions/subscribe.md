[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/EventSource](../README.md) / subscribe

# Function: subscribe()

## Call Signature

> **subscribe**\<`T`\>(`onNotify`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`, [`EventListenerLike`](../../../utils/interfaces/EventListenerLike.md)\<`T`\>\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

### Type Parameters

• **T**

### Parameters

#### onNotify

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`T`\>

#### options?

##### scheduler?

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`, [`EventListenerLike`](../../../utils/interfaces/EventListenerLike.md)\<`T`\>\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

## Call Signature

> **subscribe**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`, [`EventListenerLike`](../../../utils/interfaces/EventListenerLike.md)\<`T`\>\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

### Type Parameters

• **T**

### Parameters

#### options?

##### scheduler?

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`, [`EventListenerLike`](../../../utils/interfaces/EventListenerLike.md)\<`T`\>\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>
