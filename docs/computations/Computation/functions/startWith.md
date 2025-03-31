[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / startWith

# Function: startWith()

> **startWith**\<`T`, `TComputationType`, `TComputationModule`\>(`m`, `value`, ...`values`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`, `T`\>

## Type Parameters

• **T**

• **TComputationType** *extends* [`ComputationTypeLike`](../../interfaces/ComputationTypeLike.md)\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>

• **TComputationModule** *extends* [`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md)\<`TComputationType`, \{\}\> & [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\>, `"concat"` \| `"genPure"`\>

## Parameters

### m

`TComputationModule`

### value

`T`

### values

...readonly `T`[]

## Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`, `T`\>
