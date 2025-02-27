[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / mapTo

# Function: mapTo()

> **mapTo**\<`Type`, `C`\>(`map`): \<`T`\>(`value`) => [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `unknown`, `T`\>

## Type Parameters

• **Type** *extends* [`ComputationLike`](../interfaces/ComputationLike.md)

• **C** *extends* [`Computation`](../interfaces/Computation.md)\<`Type`\>

## Parameters

### map

\<`TA`, `TB`\>(`selector`) => [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `TA`, `TB`\>

## Returns

`Function`

### Type Parameters

• **T**

### Parameters

#### value

`T`

### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `unknown`, `T`\>
