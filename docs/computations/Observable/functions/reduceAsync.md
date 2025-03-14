[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Observable](../README.md) / reduceAsync

# Function: reduceAsync()

## Call Signature

> **reduceAsync**\<`T`, `TAcc`\>(`reducer`, `initialValue`, `options`?): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, `TAcc`\>

### Type Parameters

• **T**

• **TAcc**

### Parameters

#### reducer

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

#### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### options?

##### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

##### capacity?

`number`

### Returns

[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, `TAcc`\>

## Call Signature

> **reduceAsync**\<`T`, `TAcc`\>(`reducer`, `initialValue`, `scheduler`, `options`?): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, `TAcc`\>

### Type Parameters

• **T**

• **TAcc**

### Parameters

#### reducer

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

#### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### scheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

#### options?

##### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

##### capacity?

`number`

### Returns

[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, `TAcc`\>
