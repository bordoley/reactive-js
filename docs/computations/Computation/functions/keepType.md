[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / keepType

# Function: keepType()

> **keepType**\<`Type`, `TComputation`\>(`m`): \<`TA`, `TB`\>(`predicate`) => [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `TA`, `TB`\>

## Type Parameters

• **Type** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

• **TComputation** *extends* [`Computation`](../../interfaces/Computation.md)

## Parameters

### m

`Pick`\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<`Type`, `TComputation`\>, `"keep"`\>

## Returns

`Function`

### Type Parameters

• **TA**

• **TB**

### Parameters

#### predicate

[`TypePredicate`](../../../functions/type-aliases/TypePredicate.md)\<`TA`, `TB`\>

### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `TA`, `TB`\>
