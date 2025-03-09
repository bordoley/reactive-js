[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Observable](../README.md) / actionReducer

# Function: actionReducer()

> **actionReducer**\<`TAction`, `T`\>(`reducer`, `initialState`, `options`?): [`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TAction`, `T`\>

## Type Parameters

• **TAction**

• **T**

## Parameters

### reducer

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`TAction`, `T`\>

### initialState

[`Factory`](../../../functions/type-aliases/Factory.md)\<`T`\>

### options?

#### equality?

[`Equality`](../../../functions/type-aliases/Equality.md)\<`T`\>

## Returns

[`StatefulSynchronousComputationOperator`](../../type-aliases/StatefulSynchronousComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TAction`, `T`\>
