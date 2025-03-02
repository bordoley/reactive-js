[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / concatMapIterable

# Function: concatMapIterable()

> **concatMapIterable**\<`Type`, `TComputation`\>(`m`): \<`TA`, `TB`\>(`selector`) => [`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `TA`, `TB`\>

## Type Parameters

• **Type** *extends* [`DeferredComputationLike`](../../interfaces/DeferredComputationLike.md)

• **TComputation** *extends* [`Computation`](../../interfaces/Computation.md)

## Parameters

### m

`Pick`\<[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`Type`, `TComputation`\>, `"map"` \| `"fromIterable"` \| `"concatAll"`\>

## Returns

`Function`

### Type Parameters

• **TA**

• **TB**

### Parameters

#### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`IterableLike`](../../interfaces/IterableLike.md)\<`TB`\>\>

### Returns

[`ComputationOperator`](../../type-aliases/ComputationOperator.md)\<`Type`, `TComputation`, `TA`, `TB`\>
