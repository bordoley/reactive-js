[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Streamable](../README.md) / animation

# Function: animation()

> **animation**\<`T`, `TEvent`\>(`animation`, `options`?): [`StreamableLike`](../../interfaces/StreamableLike.md)\<`TEvent`, `boolean`, [`AnimationStreamLike`](../../interfaces/AnimationStreamLike.md)\<`T`, `TEvent`\>\>

## Type Parameters

• **T**

• **TEvent** = `unknown`

## Parameters

### animation

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> | [`Function1`](../../../functions/type-aliases/Function1.md)\<`TEvent`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>

### options?

#### animationScheduler

[`SchedulerLike`](../../interfaces/SchedulerLike.md)

## Returns

[`StreamableLike`](../../interfaces/StreamableLike.md)\<`TEvent`, `boolean`, [`AnimationStreamLike`](../../interfaces/AnimationStreamLike.md)\<`T`, `TEvent`\>\>
