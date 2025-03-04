[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / endWith

# Function: endWith()

> **endWith**\<`TComputation`\>(`m`): \<`T`\>(`value`, ...`values`) => [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`TComputation`, `T`, `T`\>

## Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

## Parameters

### m

`Pick`\<[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md)\<`TComputation`\>, `"concat"` \| `"fromReadonlyArray"`\>

## Returns

`Function`

### Type Parameters

• **T**

### Parameters

#### value

`T`

#### values

...readonly `T`[]

### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`TComputation`, `T`, `T`\>
