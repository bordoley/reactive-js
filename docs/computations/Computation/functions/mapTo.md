[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / mapTo

# Function: mapTo()

> **mapTo**\<`TComputation`\>(`m`): \<`T`\>(`value`) => [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `unknown`, `T`\>

## Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

## Parameters

### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputation`, [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputation`\>, `"map"`\>

## Returns

`Function`

### Type Parameters

• **T**

### Parameters

#### value

`T`

### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `unknown`, `T`\>
