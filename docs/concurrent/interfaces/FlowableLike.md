[**Reactive-JS**](../../README.md) • **Docs**

***

[Reactive-JS](../../README.md) / [concurrent](../README.md) / FlowableLike

# Interface: FlowableLike\<T\>

## Type Parameters

• **T**

## Methods

### \[FlowableLike\_flow\]()

> **\[FlowableLike\_flow\]**(`scheduler`, `options`?): [`PauseableObservableLike`](PauseableObservableLike.md)\<`T`\>

#### Parameters

• **scheduler**: [`SchedulerLike`](SchedulerLike.md)

• **options?**

• **options.backpressureStrategy?**: [`BackpressureStrategy`](../../utils/type-aliases/BackpressureStrategy.md)

• **options.capacity?**: `number`

• **options.replay?**: `number`

#### Returns

[`PauseableObservableLike`](PauseableObservableLike.md)\<`T`\>
