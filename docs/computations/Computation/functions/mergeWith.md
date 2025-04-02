[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / mergeWith

# Function: mergeWith()

## Call Signature

> **mergeWith**\<`TComputationType`, `T`\>(`m`, `snd`, ...`tail`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

### Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](../../interfaces/ComputationTypeLike.md)\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>

• **T**

### Parameters

#### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md)\<`TComputationType`\>, `"merge"`\>

#### snd

[`PureComputationOf`](../../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>

#### tail

...readonly [`PureComputationOf`](../../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>[]

### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

## Call Signature

> **mergeWith**\<`TComputationType`, `T`\>(`m`, `snd`, ...`tail`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>

### Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](../../interfaces/ComputationTypeLike.md)\<[`ComputationLike`](../../interfaces/ComputationLike.md)\>

• **T**

### Parameters

#### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`ReactiveComputationModule`](../../interfaces/ReactiveComputationModule.md)\<`TComputationType`\>, `"merge"`\>

#### snd

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>

#### tail

...readonly [`ComputationOf`](../../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>[]

### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `T`\>
