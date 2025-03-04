[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / scan

# Function: scan()

> **scan**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`DeferringComputationOperator`](../../../computations/type-aliases/DeferringComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `TAcc`\>

## Type Parameters

• **T**

• **TAcc**

## Parameters

### scanner

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

## Returns

[`DeferringComputationOperator`](../../../computations/type-aliases/DeferringComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `T`, `TAcc`\>
