[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Observable](../README.md) / subscribeOn

# Function: subscribeOn()

> **subscribeOn**\<`T`\>(`scheduler`, `options`?): [`StatelessAsynchronousComputationOperator`](../../type-aliases/StatelessAsynchronousComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>

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

[`StatelessAsynchronousComputationOperator`](../../type-aliases/StatelessAsynchronousComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `T`\>
