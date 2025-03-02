[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / merge

# Function: merge()

> **merge**\<`Type`, `TComputation`\>(`m`): \<`T`\>(...`computations`) => [`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>

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

#### computations

...[`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>[]

### Returns

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>
