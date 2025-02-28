[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / sequence

# Function: sequence()

> **sequence**\<`Type`, `TComputation`\>(`generate`): (`start`) => [`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `number`\>

## Type Parameters

• **Type** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

• **TComputation** *extends* [`Computation`](../../interfaces/Computation.md)\<`Type`\>

## Parameters

### generate

\<`T`\>(`generator`, `initialValue`, `options`?) => [`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>

## Returns

`Function`

### Parameters

#### start

`number`

### Returns

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `number`\>
