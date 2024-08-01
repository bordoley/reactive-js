[**Reactive-JS**](../../../README.md) • **Docs**

***

[Reactive-JS](../../../README.md) / [integrations/react](../README.md) / useObserve

# Function: useObserve()

## useObserve(observable, options)

> **useObserve**\<`T`\>(`observable`, `options`?): [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

• **observable**: [`Optional`](../../../functions/type-aliases/Optional.md)\<[`ObservableLike`](../../../concurrent/interfaces/ObservableLike.md)\<`T`\>\>

• **options?**

• **options.backpressureStrategy?**: [`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

• **options.capacity?**: `number`

• **options.priority?**: `2` \| `1` \| `3` \| `4` \| `5`

### Returns

[`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>

## useObserve(factory, deps, options)

> **useObserve**\<`T`\>(`factory`, `deps`, `options`?): [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

• **factory**: [`Factory`](../../../functions/type-aliases/Factory.md)\<[`Optional`](../../../functions/type-aliases/Optional.md)\<[`ObservableLike`](../../../concurrent/interfaces/ObservableLike.md)\<`T`\>\>\>

• **deps**: readonly `unknown`[]

• **options?**

• **options.backpressureStrategy?**: [`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

• **options.capacity?**: `number`

• **options.priority?**: `2` \| `1` \| `3` \| `4` \| `5`

### Returns

[`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>
