[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / endWith

# Function: endWith()

> **endWith**\<`TComputation`\>(`m`): \<`T`\>(`value`, ...`values`) => [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`\>

## Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

## Parameters

### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputation`, [`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`TComputation`\>, `"concat"` \| `"fromReadonlyArray"`\>

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
