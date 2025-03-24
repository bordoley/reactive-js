[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / keepType

# Function: keepType()

> **keepType**\<`TComputationType`\>(`m`): \<`TA`, `TB`\>(`predicate`) => [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<`TComputationType`, `TA`, `TB`\>

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

## Parameters

### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputationType`, [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\>, `"keep"`\>

## Returns

`Function`

### Type Parameters

• **TA**

• **TB**

### Parameters

#### predicate

[`TypePredicate`](../../../functions/type-aliases/TypePredicate.md)\<`TA`, `TB`\>

### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<`TComputationType`, `TA`, `TB`\>
