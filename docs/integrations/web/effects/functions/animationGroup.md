[**Reactive-JS**](../../../../README.md)

***

[Reactive-JS](../../../../README.md) / [integrations/web/effects](../README.md) / \_\_animationGroup

# Function: \_\_animationGroup()

## Call Signature

> **\_\_animationGroup**\<`T`, `TKey`\>(`animationGroup`, `options`?): [`AnimationGroupStreamLike`](../../../../concurrent/interfaces/AnimationGroupStreamLike.md)\<`unknown`, `TKey`, `T`\>

### Type Parameters

• **T**

• **TKey** *extends* `string` = `string`

### Parameters

#### animationGroup

[`ReadonlyObjectMapLike`](../../../../collections/type-aliases/ReadonlyObjectMapLike.md)\<`TKey`, [`PureRunnableLike`](../../../../concurrent/interfaces/PureRunnableLike.md)\<`T`\>\>

#### options?

##### animationScheduler

[`SchedulerLike`](../../../../concurrent/interfaces/SchedulerLike.md)

### Returns

[`AnimationGroupStreamLike`](../../../../concurrent/interfaces/AnimationGroupStreamLike.md)\<`unknown`, `TKey`, `T`\>

## Call Signature

> **\_\_animationGroup**\<`T`, `TKey`, `TEvent`\>(`animationGroup`, `options`?): [`AnimationGroupStreamLike`](../../../../concurrent/interfaces/AnimationGroupStreamLike.md)\<`TEvent`, `TKey`, `T`\>

### Type Parameters

• **T**

• **TKey** *extends* `string`

• **TEvent**

### Parameters

#### animationGroup

[`ReadonlyObjectMapLike`](../../../../collections/type-aliases/ReadonlyObjectMapLike.md)\<`TKey`, [`PureRunnableLike`](../../../../concurrent/interfaces/PureRunnableLike.md)\<`T`\> \| [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEvent`, [`PureRunnableLike`](../../../../concurrent/interfaces/PureRunnableLike.md)\<`T`\>\>\>

#### options?

##### animationScheduler

[`SchedulerLike`](../../../../concurrent/interfaces/SchedulerLike.md)

### Returns

[`AnimationGroupStreamLike`](../../../../concurrent/interfaces/AnimationGroupStreamLike.md)\<`TEvent`, `TKey`, `T`\>
