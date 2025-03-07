[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [web/effects](../README.md) / \_\_animation

# Function: \_\_animation()

## Call Signature

> **\_\_animation**\<`T`\>(`animation`, `options`?): [`AnimationStreamLike`](../../../computations/Streamable/interfaces/AnimationStreamLike.md)\<`unknown`, `T`\>

### Type Parameters

• **T**

### Parameters

#### animation

[`PureSynchronousObservableLike`](../../../computations/interfaces/PureSynchronousObservableLike.md)\<`T`\>

#### options?

##### animationScheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

### Returns

[`AnimationStreamLike`](../../../computations/Streamable/interfaces/AnimationStreamLike.md)\<`unknown`, `T`\>

## Call Signature

> **\_\_animation**\<`TEvent`, `T`\>(`animation`, `options`?): [`AnimationStreamLike`](../../../computations/Streamable/interfaces/AnimationStreamLike.md)\<`TEvent`, `T`\>

### Type Parameters

• **TEvent**

• **T**

### Parameters

#### animation

[`PureSynchronousObservableLike`](../../../computations/interfaces/PureSynchronousObservableLike.md)\<`T`\> | [`Function1`](../../../functions/type-aliases/Function1.md)\<`TEvent`, [`PureSynchronousObservableLike`](../../../computations/interfaces/PureSynchronousObservableLike.md)\<`T`\>\>

#### options?

##### animationScheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

### Returns

[`AnimationStreamLike`](../../../computations/Streamable/interfaces/AnimationStreamLike.md)\<`TEvent`, `T`\>
