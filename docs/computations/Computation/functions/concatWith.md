[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / concatWith

# Function: concatWith()

## Call Signature

> **concatWith**\<`TComputationType`, `T`\>(`m`, `snd`, ...`tail`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

### Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](../../interfaces/ComputationTypeLike.md)\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>

• **T**

### Parameters

#### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`TComputationType`\>, `"concat"`\>

#### snd

[`PureComputationOf`](../../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>

#### tail

...readonly [`PureComputationOf`](../../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>[]

### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

## Call Signature

> **concatWith**\<`TComputationType`, `T`\>(`m`, `snd`, ...`tail`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>

### Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](../../interfaces/ComputationTypeLike.md)\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>

• **T**

### Parameters

#### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`TComputationType`\>, `"concat"`\>

#### snd

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>

#### tail

...readonly [`ComputationOf`](../../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>[]

### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>
