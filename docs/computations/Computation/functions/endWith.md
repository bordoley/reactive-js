[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / endWith

# Function: endWith()

> **endWith**\<`TComputationType`, `T`\>(`m`, `value`, ...`values`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

## Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](../../interfaces/ComputationTypeLike.md)\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>

• **T**

## Parameters

### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`TComputationType`, \{\}\> & [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\>, `"concat"` \| `"genPure"`\>

### value

`T`

### values

...readonly `T`[]

## Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>
