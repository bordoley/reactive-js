[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [web/effects](../README.md) / \_\_animationGroup

# Function: \_\_animationGroup()

## Call Signature

> **\_\_animationGroup**\<`T`, `TKey`\>(`animationGroup`, `options`?): [`AnimationGroupStreamLike`](../../../computations/Streamable/interfaces/AnimationGroupStreamLike.md)\<`unknown`, `TKey`, `T`\>

### Type Parameters

• **T**

• **TKey** *extends* `string` = `string`

### Parameters

#### animationGroup

[`ReadonlyObjectMapLike`](../../../collections/type-aliases/ReadonlyObjectMapLike.md)\<`TKey`, [`PureSynchronousObservableLike`](../../../computations/interfaces/PureSynchronousObservableLike.md)\<`T`\>\>

#### options?

##### animationScheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

### Returns

[`AnimationGroupStreamLike`](../../../computations/Streamable/interfaces/AnimationGroupStreamLike.md)\<`unknown`, `TKey`, `T`\>

## Call Signature

> **\_\_animationGroup**\<`T`, `TKey`, `TEvent`\>(`animationGroup`, `options`?): [`AnimationGroupStreamLike`](../../../computations/Streamable/interfaces/AnimationGroupStreamLike.md)\<`TEvent`, `TKey`, `T`\>

### Type Parameters

• **T**

• **TKey** *extends* `string`

• **TEvent**

### Parameters

#### animationGroup

[`ReadonlyObjectMapLike`](../../../collections/type-aliases/ReadonlyObjectMapLike.md)\<`TKey`, [`PureSynchronousObservableLike`](../../../computations/interfaces/PureSynchronousObservableLike.md)\<`T`\> \| [`Function1`](../../../functions/type-aliases/Function1.md)\<`TEvent`, [`PureSynchronousObservableLike`](../../../computations/interfaces/PureSynchronousObservableLike.md)\<`T`\>\>\>

#### options?

##### animationScheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

### Returns

[`AnimationGroupStreamLike`](../../../computations/Streamable/interfaces/AnimationGroupStreamLike.md)\<`TEvent`, `TKey`, `T`\>
