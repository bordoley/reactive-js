[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [react/web](../README.md) / useAnimationGroup

# Function: useAnimationGroup()

## Call Signature

> **useAnimationGroup**\<`T`, `TKey`\>(`animationGroup`, `options`?): [`Optional`](../../../functions/type-aliases/Optional.md)\<[`AnimationGroupStreamLike`](../../../computations/Streamable/interfaces/AnimationGroupStreamLike.md)\<`unknown`, `TKey`, `T`\>\>

### Type Parameters

• **T**

• **TKey** *extends* `string` = `string`

### Parameters

#### animationGroup

[`ReadonlyObjectMapLike`](../../../collections/type-aliases/ReadonlyObjectMapLike.md)\<`TKey`, [`PureSynchronousObservableLike`](../../../computations/interfaces/PureSynchronousObservableLike.md)\<`T`\>\>

#### options?

##### animationScheduler?

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

##### priority?

`2` \| `1` \| `3` \| `4` \| `5`

### Returns

[`Optional`](../../../functions/type-aliases/Optional.md)\<[`AnimationGroupStreamLike`](../../../computations/Streamable/interfaces/AnimationGroupStreamLike.md)\<`unknown`, `TKey`, `T`\>\>

## Call Signature

> **useAnimationGroup**\<`T`, `TKey`, `TEvent`\>(`animationGroup`, `options`?): [`Optional`](../../../functions/type-aliases/Optional.md)\<[`AnimationGroupStreamLike`](../../../computations/Streamable/interfaces/AnimationGroupStreamLike.md)\<`TEvent`, `TKey`, `T`\>\>

### Type Parameters

• **T**

• **TKey** *extends* `string`

• **TEvent**

### Parameters

#### animationGroup

[`ReadonlyObjectMapLike`](../../../collections/type-aliases/ReadonlyObjectMapLike.md)\<`TKey`, [`PureSynchronousObservableLike`](../../../computations/interfaces/PureSynchronousObservableLike.md)\<`T`\> \| [`Function1`](../../../functions/type-aliases/Function1.md)\<`TEvent`, [`PureSynchronousObservableLike`](../../../computations/interfaces/PureSynchronousObservableLike.md)\<`T`\>\>\>

#### options?

##### animationScheduler?

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

##### priority?

`2` \| `1` \| `3` \| `4` \| `5`

### Returns

[`Optional`](../../../functions/type-aliases/Optional.md)\<[`AnimationGroupStreamLike`](../../../computations/Streamable/interfaces/AnimationGroupStreamLike.md)\<`TEvent`, `TKey`, `T`\>\>
