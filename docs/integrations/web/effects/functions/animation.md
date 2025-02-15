[**Reactive-JS**](../../../../README.md)

***

[Reactive-JS](../../../../README.md) / [integrations/web/effects](../README.md) / \_\_animation

# Function: \_\_animation()

## Call Signature

> **\_\_animation**\<`T`\>(`animation`, `options`?): [`AnimationStreamLike`](../../../../concurrent/interfaces/AnimationStreamLike.md)\<`unknown`, `T`\>

### Type Parameters

• **T**

### Parameters

#### animation

[`PureRunnableLike`](../../../../concurrent/interfaces/PureRunnableLike.md)\<`T`\>

#### options?

##### animationScheduler

[`SchedulerLike`](../../../../concurrent/interfaces/SchedulerLike.md)

### Returns

[`AnimationStreamLike`](../../../../concurrent/interfaces/AnimationStreamLike.md)\<`unknown`, `T`\>

## Call Signature

> **\_\_animation**\<`TEvent`, `T`\>(`animation`, `options`?): [`AnimationStreamLike`](../../../../concurrent/interfaces/AnimationStreamLike.md)\<`TEvent`, `T`\>

### Type Parameters

• **TEvent**

• **T**

### Parameters

#### animation

[`PureRunnableLike`](../../../../concurrent/interfaces/PureRunnableLike.md)\<`T`\> | [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEvent`, [`PureRunnableLike`](../../../../concurrent/interfaces/PureRunnableLike.md)\<`T`\>\>

#### options?

##### animationScheduler

[`SchedulerLike`](../../../../concurrent/interfaces/SchedulerLike.md)

### Returns

[`AnimationStreamLike`](../../../../concurrent/interfaces/AnimationStreamLike.md)\<`TEvent`, `T`\>
