[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [react/web](../README.md) / useAnimation

# Function: useAnimation()

## Call Signature

> **useAnimation**\<`T`\>(`animation`, `options`?): [`Optional`](../../../functions/type-aliases/Optional.md)\<[`AnimationStreamLike`](../../../computations/Streamable/interfaces/AnimationStreamLike.md)\<`unknown`, `T`\>\>

### Type Parameters

• **T**

### Parameters

#### animation

[`PureSynchronousObservableLike`](../../../computations/interfaces/PureSynchronousObservableLike.md)\<`T`\>

#### options?

##### animationScheduler?

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

##### priority?

`2` \| `1` \| `3` \| `4` \| `5`

### Returns

[`Optional`](../../../functions/type-aliases/Optional.md)\<[`AnimationStreamLike`](../../../computations/Streamable/interfaces/AnimationStreamLike.md)\<`unknown`, `T`\>\>

## Call Signature

> **useAnimation**\<`TEvent`, `T`\>(`animation`, `options`?): [`Optional`](../../../functions/type-aliases/Optional.md)\<[`AnimationStreamLike`](../../../computations/Streamable/interfaces/AnimationStreamLike.md)\<`TEvent`, `T`\>\>

### Type Parameters

• **TEvent**

• **T**

### Parameters

#### animation

[`PureSynchronousObservableLike`](../../../computations/interfaces/PureSynchronousObservableLike.md)\<`T`\> | [`Function1`](../../../functions/type-aliases/Function1.md)\<`TEvent`, [`PureSynchronousObservableLike`](../../../computations/interfaces/PureSynchronousObservableLike.md)\<`T`\>\>

#### options?

##### animationScheduler?

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

##### priority?

`2` \| `1` \| `3` \| `4` \| `5`

### Returns

[`Optional`](../../../functions/type-aliases/Optional.md)\<[`AnimationStreamLike`](../../../computations/Streamable/interfaces/AnimationStreamLike.md)\<`TEvent`, `T`\>\>
