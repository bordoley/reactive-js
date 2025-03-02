[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / endWith

# Function: endWith()

> **endWith**\<`Type`, `TComputation`\>(`m`): \<`T`\>(`value`, ...`values`) => [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>

## Type Parameters

• **Type** *extends* [`DeferredComputationLike`](../../interfaces/DeferredComputationLike.md)

• **TComputation** *extends* [`Computation`](../../interfaces/Computation.md)

## Parameters

### m

`Pick`\<[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`Type`, `TComputation`\>, `"concatMany"` \| `"fromReadonlyArray"`\>

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

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>
