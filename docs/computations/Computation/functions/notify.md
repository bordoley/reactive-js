[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / notify

# Function: notify()

> **notify**\<`TComputation`\>(`m`): \<`T`\>(`eventListener`) => [`ComputationWithSideEffectsOperator`](../../type-aliases/ComputationWithSideEffectsOperator.md)\<`TComputation`, `T`, `T`\>

## Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

## Parameters

### m

`Pick`\<[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md)\<`TComputation`\>, `"forEach"`\>

## Returns

`Function`

### Type Parameters

• **T**

### Parameters

#### eventListener

[`EventListenerLike`](../../../events/interfaces/EventListenerLike.md)\<`T`\>

### Returns

[`ComputationWithSideEffectsOperator`](../../type-aliases/ComputationWithSideEffectsOperator.md)\<`TComputation`, `T`, `T`\>
