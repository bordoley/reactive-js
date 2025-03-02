[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / concatWith

# Function: concatWith()

> **concatWith**\<`Type`, `TComputation`\>(`m`): \<`T`\>(`snd`, ...`tail`) => [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>, [`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>\>

## Type Parameters

• **Type** *extends* [`DeferredComputationLike`](../../interfaces/DeferredComputationLike.md)

• **TComputation** *extends* [`Computation`](../../interfaces/Computation.md)

## Parameters

### m

`Pick`\<[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`Type`, `TComputation`\>, `"concatMany"`\>

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

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>, [`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>\>
