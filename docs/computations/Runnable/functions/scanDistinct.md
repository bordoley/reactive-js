[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Runnable](../README.md) / scanDistinct

# Function: scanDistinct()

> **scanDistinct**\<`T`, `TAcc`\>(`reducer`, `initialState`, `options`?): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableComputation`](../interfaces/RunnableComputation.md), `T`, `TAcc`\>

## Type Parameters

• **T**

• **TAcc**

## Parameters

### reducer

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

### initialState

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

### options?

#### equality?

[`Equality`](../../../functions/type-aliases/Equality.md)\<`TAcc`\>

## Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`RunnableComputation`](../interfaces/RunnableComputation.md), `T`, `TAcc`\>
