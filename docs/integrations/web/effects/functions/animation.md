[**Reactive-JS**](../../../../README.md)

***

[Reactive-JS](../../../../README.md) / [integrations/web/effects](../README.md) / \_\_animation

# Function: \_\_animation()

> **\_\_animation**\<`T`, `TEvent`\>(`animation`, `options`?): [`AnimationStreamLike`](../../../../concurrent/interfaces/AnimationStreamLike.md)\<`T`, `TEvent`\>

## Type Parameters

• **T**

• **TEvent** = `unknown`

## Parameters

### animation

[`PureRunnableLike`](../../../../concurrent/interfaces/PureRunnableLike.md)\<`T`\> | [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEvent`, [`PureRunnableLike`](../../../../concurrent/interfaces/PureRunnableLike.md)\<`T`\>\>

### options?

#### animationScheduler

[`SchedulerLike`](../../../../concurrent/interfaces/SchedulerLike.md)

## Returns

[`AnimationStreamLike`](../../../../concurrent/interfaces/AnimationStreamLike.md)\<`T`, `TEvent`\>
