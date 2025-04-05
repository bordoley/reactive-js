[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/EventSource](../README.md) / Signature

# Interface: Signature

## Methods

### lastAsync()

> **lastAsync**\<`T`\>(`options`?): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`, [`EventListenerLike`](../../../utils/interfaces/EventListenerLike.md)\<`T`\>\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### scheduler?

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

#### Returns

[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`, [`EventListenerLike`](../../../utils/interfaces/EventListenerLike.md)\<`T`\>\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

***

### reduceAsync()

> **reduceAsync**\<`T`, `TAcc`\>(`reducer`, `initialValue`, `options`?): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`, [`EventListenerLike`](../../../utils/interfaces/EventListenerLike.md)\<`T`\>\>, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### reducer

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

##### options?

###### scheduler?

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

#### Returns

[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`, [`EventListenerLike`](../../../utils/interfaces/EventListenerLike.md)\<`T`\>\>, `TAcc`\>

***

### subscribe()

#### Call Signature

> **subscribe**\<`T`\>(`onNotify`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`, [`EventListenerLike`](../../../utils/interfaces/EventListenerLike.md)\<`T`\>\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **T**

##### Parameters

###### onNotify

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`T`\>

###### options?

###### scheduler?

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`, [`EventListenerLike`](../../../utils/interfaces/EventListenerLike.md)\<`T`\>\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Call Signature

> **subscribe**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`, [`EventListenerLike`](../../../utils/interfaces/EventListenerLike.md)\<`T`\>\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

##### Type Parameters

• **T**

##### Parameters

###### options?

###### scheduler?

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`, [`EventListenerLike`](../../../utils/interfaces/EventListenerLike.md)\<`T`\>\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

***

### toReadonlyArrayAsync()

> **toReadonlyArrayAsync**\<`T`\>(`options`?): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`, [`EventListenerLike`](../../../utils/interfaces/EventListenerLike.md)\<`T`\>\>, readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### scheduler?

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

#### Returns

[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`EventSourceLike`](../../interfaces/EventSourceLike.md)\<`T`, [`EventListenerLike`](../../../utils/interfaces/EventListenerLike.md)\<`T`\>\>, readonly `T`[]\>
