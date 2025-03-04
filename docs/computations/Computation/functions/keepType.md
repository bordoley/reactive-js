[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / keepType

# Function: keepType()

> **keepType**\<`TComputation`\>(`m`): \<`TA`, `TB`\>(`predicate`) => [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `TA`, `TB`\>

## Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

## Parameters

### m

`Pick`\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputation`\>, `"keep"`\>

## Returns

`Function`

### Type Parameters

• **TA**

• **TB**

### Parameters

#### predicate

[`TypePredicate`](../../../functions/type-aliases/TypePredicate.md)\<`TA`, `TB`\>

### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `TA`, `TB`\>
