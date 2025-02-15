[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Streamable](../README.md) / animation

# Function: animation()

## Call Signature

> **animation**\<`T`\>(`animation`, `options`?): [`StreamableLike`](../../interfaces/StreamableLike.md)\<`void`, `boolean`, [`AnimationStreamLike`](../../interfaces/AnimationStreamLike.md)\<`void`, `T`\>\>

### Type Parameters

• **T**

### Parameters

#### animation

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>

#### options?

##### animationScheduler

[`SchedulerLike`](../../interfaces/SchedulerLike.md)

### Returns

[`StreamableLike`](../../interfaces/StreamableLike.md)\<`void`, `boolean`, [`AnimationStreamLike`](../../interfaces/AnimationStreamLike.md)\<`void`, `T`\>\>

## Call Signature

> **animation**\<`T`, `TEvent`\>(`animation`, `options`?): [`StreamableLike`](../../interfaces/StreamableLike.md)\<`TEvent`, `boolean`, [`AnimationStreamLike`](../../interfaces/AnimationStreamLike.md)\<`TEvent`, `T`\>\>

### Type Parameters

• **T**

• **TEvent**

### Parameters

#### animation

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> | [`Function1`](../../../functions/type-aliases/Function1.md)\<`TEvent`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>

#### options?

##### animationScheduler

[`SchedulerLike`](../../interfaces/SchedulerLike.md)

### Returns

[`StreamableLike`](../../interfaces/StreamableLike.md)\<`TEvent`, `boolean`, [`AnimationStreamLike`](../../interfaces/AnimationStreamLike.md)\<`TEvent`, `T`\>\>
