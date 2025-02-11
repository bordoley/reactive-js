[**Reactive-JS**](../../../../README.md)

***

[Reactive-JS](../../../../README.md) / [integrations/web/effects](../README.md) / \_\_animationGroup

# Function: \_\_animationGroup()

> **\_\_animationGroup**\<`T`, `TEvent`, `TKey`\>(`animationGroup`, `options`?): [`AnimationGroupStreamLike`](../../../../concurrent/interfaces/AnimationGroupStreamLike.md)\<`T`, `TEvent`, `TKey`\>

## Type Parameters

• **T**

• **TEvent** = `unknown`

• **TKey** *extends* `string` = `string`

## Parameters

### animationGroup

[`ReadonlyObjectMapLike`](../../../../collections/type-aliases/ReadonlyObjectMapLike.md)\<`TKey`, [`PureRunnableLike`](../../../../concurrent/interfaces/PureRunnableLike.md)\<`T`\> \| [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEvent`, [`PureRunnableLike`](../../../../concurrent/interfaces/PureRunnableLike.md)\<`T`\>\>\>

### options?

#### animationScheduler

[`SchedulerLike`](../../../../concurrent/interfaces/SchedulerLike.md)

## Returns

[`AnimationGroupStreamLike`](../../../../concurrent/interfaces/AnimationGroupStreamLike.md)\<`T`, `TEvent`, `TKey`\>
