[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [react](../README.md) / useFlow

# Function: useFlow()

## Call Signature

> **useFlow**\<`T`\>(`flowable`, `options`?): [`Optional`](../../functions/type-aliases/Optional.md)\<[`PauseableObservableLike`](../../computations/interfaces/PauseableObservableLike.md)\<`T`\>\>

### Type Parameters

• **T**

### Parameters

#### flowable

[`FlowableLike`](../../computations/interfaces/FlowableLike.md)\<`T`\>

#### options?

##### backpressureStrategy?

[`BackpressureStrategy`](../../utils/type-aliases/BackpressureStrategy.md)

##### capacity?

`number`

##### priority?

`2` \| `1` \| `3` \| `4` \| `5`

##### replay?

`number`

### Returns

[`Optional`](../../functions/type-aliases/Optional.md)\<[`PauseableObservableLike`](../../computations/interfaces/PauseableObservableLike.md)\<`T`\>\>

## Call Signature

> **useFlow**\<`T`\>(`factory`, `dep`, `options`?): [`Optional`](../../functions/type-aliases/Optional.md)\<[`PauseableObservableLike`](../../computations/interfaces/PauseableObservableLike.md)\<`T`\>\>

### Type Parameters

• **T**

### Parameters

#### factory

[`Factory`](../../functions/type-aliases/Factory.md)\<[`FlowableLike`](../../computations/interfaces/FlowableLike.md)\<`T`\>\>

#### dep

readonly `unknown`[]

#### options?

##### backpressureStrategy?

[`BackpressureStrategy`](../../utils/type-aliases/BackpressureStrategy.md)

##### capacity?

`number`

##### priority?

`2` \| `1` \| `3` \| `4` \| `5`

##### replay?

`number`

### Returns

[`Optional`](../../functions/type-aliases/Optional.md)\<[`PauseableObservableLike`](../../computations/interfaces/PauseableObservableLike.md)\<`T`\>\>
