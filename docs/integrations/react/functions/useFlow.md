[**Reactive-JS**](../../../README.md) • **Docs**

***

[Reactive-JS](../../../README.md) / [integrations/react](../README.md) / useFlow

# Function: useFlow()

## useFlow(flowable, options)

> **useFlow**\<`T`\>(`flowable`, `options`?): [`Optional`](../../../functions/type-aliases/Optional.md)\<[`PauseableObservableLike`](../../../concurrent/interfaces/PauseableObservableLike.md)\<`T`\>\>

### Type Parameters

• **T**

### Parameters

• **flowable**: [`FlowableLike`](../../../concurrent/interfaces/FlowableLike.md)\<`T`\>

• **options?**

• **options.backpressureStrategy?**: [`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

• **options.capacity?**: `number`

• **options.priority?**: `2` \| `1` \| `3` \| `4` \| `5`

• **options.replay?**: `number`

### Returns

[`Optional`](../../../functions/type-aliases/Optional.md)\<[`PauseableObservableLike`](../../../concurrent/interfaces/PauseableObservableLike.md)\<`T`\>\>

## useFlow(factory, dep, options)

> **useFlow**\<`T`\>(`factory`, `dep`, `options`?): [`Optional`](../../../functions/type-aliases/Optional.md)\<[`PauseableObservableLike`](../../../concurrent/interfaces/PauseableObservableLike.md)\<`T`\>\>

### Type Parameters

• **T**

### Parameters

• **factory**: [`Factory`](../../../functions/type-aliases/Factory.md)\<[`FlowableLike`](../../../concurrent/interfaces/FlowableLike.md)\<`T`\>\>

• **dep**: readonly `unknown`[]

• **options?**

• **options.backpressureStrategy?**: [`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

• **options.capacity?**: `number`

• **options.priority?**: `2` \| `1` \| `3` \| `4` \| `5`

• **options.replay?**: `number`

### Returns

[`Optional`](../../../functions/type-aliases/Optional.md)\<[`PauseableObservableLike`](../../../concurrent/interfaces/PauseableObservableLike.md)\<`T`\>\>
