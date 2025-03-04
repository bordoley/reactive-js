[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / startWith

# Function: startWith()

> **startWith**\<`TComputation`\>(`m`): \<`T`\>(`value`, ...`values`) => [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`\>

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

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`\>
