[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / sequence

# Function: sequence()

> **sequence**\<`Type`, `TComputation`\>(`m`): (`start`) => [`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `number`\>

## Type Parameters

• **Type** *extends* [`DeferredComputationLike`](../../interfaces/DeferredComputationLike.md)

• **TComputation** *extends* [`Computation`](../../interfaces/Computation.md)

## Parameters

### m

`Pick`\<[`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`Type`, `TComputation`\>, `"generate"`\>

## Returns

`Function`

### Parameters

#### start

`number`

### Returns

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `number`\>
