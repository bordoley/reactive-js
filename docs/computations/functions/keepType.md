[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / keepType

# Function: keepType()

> **keepType**\<`Type`, `C`\>(`keep`): \<`TA`, `TB`\>(`predicate`) => [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `TA`, `TB`\>

## Type Parameters

• **Type** *extends* [`ComputationLike`](../interfaces/ComputationLike.md)

• **C** *extends* [`Computation`](../interfaces/Computation.md)\<`Type`\>

## Parameters

### keep

\<`T`\>(`predicate`) => [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>

## Returns

`Function`

### Type Parameters

• **TA**

• **TB**

### Parameters

#### predicate

[`TypePredicate`](../../functions/type-aliases/TypePredicate.md)\<`TA`, `TB`\>

### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `TA`, `TB`\>
