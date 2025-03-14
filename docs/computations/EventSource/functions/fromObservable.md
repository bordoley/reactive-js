[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/EventSource](../README.md) / fromObservable

# Function: fromObservable()

> **fromObservable**\<`T`\>(`scheduler`, `options`?): [`FromObservableOperator`](../../type-aliases/FromObservableOperator.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `T`\>

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

[`FromObservableOperator`](../../type-aliases/FromObservableOperator.md)\<[`EventSourceComputation`](../interfaces/EventSourceComputation.md), `T`\>
