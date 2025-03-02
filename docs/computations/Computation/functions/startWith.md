[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / startWith

# Function: startWith()

> **startWith**\<`TComputation`\>(`m`): \<`T`\>(`value`, ...`values`) => [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`TComputation`, `T`, `T`\>

## Type Parameters

• **TComputation** *extends* [`Computation`](../../type-aliases/Computation.md)

## Parameters

### m

`Pick`\<[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`TComputation`\>, `"concatMany"` \| `"fromReadonlyArray"`\>

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
