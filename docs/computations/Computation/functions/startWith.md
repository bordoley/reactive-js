[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / startWith

# Function: startWith()

> **startWith**\<`TComputationType`\>(`m`): \<`T`\>(`value`, ...`values`) => [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputationType`, `T`, `T`\>

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

## Parameters

### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputationType`, [`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`TComputationType`\> & [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\>, `"concat"` \| `"fromReadonlyArray"`\>

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

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<`TComputationType`, `T`, `T`\>
