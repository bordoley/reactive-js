[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Streamable](../README.md) / animationGroup

# Function: animationGroup()

> **animationGroup**\<`T`, `TEvent`, `TKey`\>(`animationGroup`, `options`?): [`StreamableLike`](../../interfaces/StreamableLike.md)\<`TEvent`, `boolean`, [`StreamLike`](../../interfaces/StreamLike.md)\<`TEvent`, `boolean`\> & [`DictionaryLike`](../../../collections/interfaces/DictionaryLike.md)\<`TKey`, [`EventSourceLike`](../../../events/interfaces/EventSourceLike.md)\<`T`\>\>\>

## Type Parameters

• **T**

• **TEvent** = `unknown`

• **TKey** *extends* `string` = `string`

## Parameters

### animationGroup

[`ReadonlyObjectMapLike`](../../../collections/type-aliases/ReadonlyObjectMapLike.md)\<`TKey`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> \| [`Function1`](../../../functions/type-aliases/Function1.md)\<`TEvent`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>\>

### options?

\{ `mode`: `"switching"`; `scheduler`: [`SchedulerLike`](../../interfaces/SchedulerLike.md); \} | \{ `mode`: `"blocking"`; `scheduler`: [`SchedulerLike`](../../interfaces/SchedulerLike.md); \} | \{ `backpressureStrategy`: [`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md); `capacity`: `number`; `mode`: `"queueing"`; `scheduler`: [`SchedulerLike`](../../interfaces/SchedulerLike.md); \}

## Returns

[`StreamableLike`](../../interfaces/StreamableLike.md)\<`TEvent`, `boolean`, [`StreamLike`](../../interfaces/StreamLike.md)\<`TEvent`, `boolean`\> & [`DictionaryLike`](../../../collections/interfaces/DictionaryLike.md)\<`TKey`, [`EventSourceLike`](../../../events/interfaces/EventSourceLike.md)\<`T`\>\>\>
