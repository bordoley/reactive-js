[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [integrations/svelte](../README.md) / subscribe

# Function: subscribe()

> **subscribe**\<`T`\>(`scheduler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../../computations/interfaces/ObservableLike.md)\<`T`\>, \{ `subscribe`: [`Factory`](../../../functions/type-aliases/Factory.md)\<`void`\>; \}\>

## Type Parameters

• **T**

## Parameters

### scheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

### options?

#### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

#### capacity?

`number`

## Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../../computations/interfaces/ObservableLike.md)\<`T`\>, \{ `subscribe`: [`Factory`](../../../functions/type-aliases/Factory.md)\<`void`\>; \}\>
