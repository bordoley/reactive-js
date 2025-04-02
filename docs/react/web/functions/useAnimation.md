[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [react/web](../README.md) / useAnimation

# Function: useAnimation()

## Call Signature

> **useAnimation**\<`T`\>(`animation`): [`Optional`](../../../functions/type-aliases/Optional.md)\<[`AnimationLike`](../../../computations/Streamable/interfaces/AnimationLike.md)\<`unknown`, `T`\>\>

### Type Parameters

• **T**

### Parameters

#### animation

[`PureSynchronousObservableLike`](../../../computations/interfaces/PureSynchronousObservableLike.md)\<`T`\>

### Returns

[`Optional`](../../../functions/type-aliases/Optional.md)\<[`AnimationLike`](../../../computations/Streamable/interfaces/AnimationLike.md)\<`unknown`, `T`\>\>

## Call Signature

> **useAnimation**\<`TEvent`, `T`\>(`animation`): [`Optional`](../../../functions/type-aliases/Optional.md)\<[`AnimationLike`](../../../computations/Streamable/interfaces/AnimationLike.md)\<`TEvent`, `T`\>\>

### Type Parameters

• **TEvent**

• **T**

### Parameters

#### animation

[`PureSynchronousObservableLike`](../../../computations/interfaces/PureSynchronousObservableLike.md)\<`T`\> | [`Function1`](../../../functions/type-aliases/Function1.md)\<`TEvent`, [`PureSynchronousObservableLike`](../../../computations/interfaces/PureSynchronousObservableLike.md)\<`T`\>\>

### Returns

[`Optional`](../../../functions/type-aliases/Optional.md)\<[`AnimationLike`](../../../computations/Streamable/interfaces/AnimationLike.md)\<`TEvent`, `T`\>\>
