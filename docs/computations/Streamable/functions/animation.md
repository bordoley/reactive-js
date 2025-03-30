[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Streamable](../README.md) / animation

# Function: animation()

## Call Signature

> **animation**\<`T`\>(`animation`): [`StreamableLike`](../../interfaces/StreamableLike.md)\<`void`, `T`, [`AnimationLike`](../interfaces/AnimationLike.md)\<`void`, `T`\>\>

### Type Parameters

• **T**

### Parameters

#### animation

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

### Returns

[`StreamableLike`](../../interfaces/StreamableLike.md)\<`void`, `T`, [`AnimationLike`](../interfaces/AnimationLike.md)\<`void`, `T`\>\>

## Call Signature

> **animation**\<`T`, `TEvent`\>(`animation`): [`StreamableLike`](../../interfaces/StreamableLike.md)\<`TEvent`, `T`, [`AnimationLike`](../interfaces/AnimationLike.md)\<`TEvent`, `T`\>\>

### Type Parameters

• **T**

• **TEvent**

### Parameters

#### animation

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\> | [`Function1`](../../../functions/type-aliases/Function1.md)\<`TEvent`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>\>

### Returns

[`StreamableLike`](../../interfaces/StreamableLike.md)\<`TEvent`, `T`, [`AnimationLike`](../interfaces/AnimationLike.md)\<`TEvent`, `T`\>\>
