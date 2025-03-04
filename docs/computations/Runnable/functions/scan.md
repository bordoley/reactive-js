[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Runnable](../README.md) / scan

# Function: scan()

> **scan**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](../interfaces/RunnableComputation.md), `T`, `TAcc`\>

## Type Parameters

• **T**

• **TAcc**

## Parameters

### scanner

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

## Returns

[`DeferringComputationOperator`](../../type-aliases/DeferringComputationOperator.md)\<[`RunnableComputation`](../interfaces/RunnableComputation.md), `T`, `TAcc`\>
