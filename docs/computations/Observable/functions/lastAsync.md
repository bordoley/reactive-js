[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Observable](../README.md) / lastAsync

# Function: lastAsync()

## Call Signature

> **lastAsync**\<`T`\>(`options`?): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

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

> **lastAsync**\<`T`\>(`scheduler`, `options`?): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

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
