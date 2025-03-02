[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / concatMap

# Function: concatMap()

> **concatMap**\<`Type`, `TComputation`\>(`m`): \<`TA`, `TB`\>(`selector`) => [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `TA`, `TB`\>

## Type Parameters

• **Type** *extends* [`DeferredComputationLike`](../../interfaces/DeferredComputationLike.md)

• **TComputation** *extends* [`Computation`](../../interfaces/Computation.md)

## Parameters

### m

`Pick`\<[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`Type`, `TComputation`\>, `"map"` \| `"concatAll"`\>

## Returns

`Function`

### Type Parameters

• **TA**

• **TB**

### Parameters

#### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `TB`\>\>

### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `TA`, `TB`\>
