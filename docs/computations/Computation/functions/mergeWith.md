[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / mergeWith

# Function: mergeWith()

> **mergeWith**\<`Type`, `TComputation`\>(`m`): \<`T`\>(`snd`, ...`tail`) => [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>

## Type Parameters

• **Type** *extends* [`ReactiveComputationLike`](../../interfaces/ReactiveComputationLike.md)

• **TComputation** *extends* [`Computation`](../../interfaces/Computation.md)

## Parameters

### m

`Pick`\<[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md)\<`Type`, `TComputation`\>, `"mergeMany"`\>

## Returns

`Function`

### Type Parameters

• **T**

### Parameters

#### snd

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>

#### tail

...readonly [`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>[]

### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `T`, `T`\>
