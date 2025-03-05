[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / subscribeOn

# Function: subscribeOn()

> **subscribeOn**\<`T`\>(`scheduler`, `options`?): [`StatelessAsynchronousComputationOperator`](../../../computations/type-aliases/StatelessAsynchronousComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>

## Type Parameters

• **T**

## Parameters

### scheduler

[`SchedulerLike`](../../interfaces/SchedulerLike.md)

### options?

#### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

#### capacity?

`number`

## Returns

[`StatelessAsynchronousComputationOperator`](../../../computations/type-aliases/StatelessAsynchronousComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>
