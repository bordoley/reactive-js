[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/SynchronousObservable](../README.md) / scan

# Function: scan()

> **scan**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `TAcc`\>

## Type Parameters

• **T**

• **TAcc**

## Parameters

### scanner

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

## Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<`SynchronousObservableComputation`, `T`, `TAcc`\>
