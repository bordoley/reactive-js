[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Observable](../README.md) / firstAsync

# Function: firstAsync()

## Call Signature

> **firstAsync**\<`T`\>(`options`?): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

### Type Parameters

• **T**

### Parameters

#### options?

##### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

##### capacity?

`number`

### Returns

[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

## Call Signature

> **firstAsync**\<`T`\>(`scheduler`, `options`?): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

### Type Parameters

• **T**

### Parameters

#### scheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

#### options?

##### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

##### capacity?

`number`

### Returns

[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>
