[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Observable](../README.md) / reduceAsync

# Function: reduceAsync()

> **reduceAsync**\<`T`, `TAcc`\>(`reducer`, `initialValue`, `options`?): [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`\>, `TAcc`\>

## Type Parameters

• **T**

• **TAcc**

## Parameters

### reducer

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

### options?

#### scheduler?

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

## Returns

[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`\>, `TAcc`\>
