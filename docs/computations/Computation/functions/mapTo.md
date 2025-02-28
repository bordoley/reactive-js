[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / mapTo

# Function: mapTo()

> **mapTo**\<`Type`, `TComputation`\>(`map`): \<`T`\>(`value`) => [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `unknown`, `T`\>

## Type Parameters

• **Type** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

• **TComputation** *extends* [`Computation`](../../interfaces/Computation.md)\<`Type`\>

## Parameters

### map

\<`TA`, `TB`\>(`selector`) => [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `TA`, `TB`\>

## Returns

`Function`

### Type Parameters

• **T**

### Parameters

#### value

`T`

### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `unknown`, `T`\>
