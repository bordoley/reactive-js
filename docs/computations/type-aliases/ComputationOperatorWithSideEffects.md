[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ComputationOperatorWithSideEffects

# Type Alias: ComputationOperatorWithSideEffects()\<TComputationType, TA, TB\>

> **ComputationOperatorWithSideEffects**\<`TComputationType`, `TA`, `TB`\>: \<`TComputationOf`\>(`computation`) => `TComputationOf` *extends* [`SynchronousComputationOf`](SynchronousComputationOf.md)\<`TComputationType`, `TA`\> ? [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `TB`\> : [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `TB`\>

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](ComputationType.md)

• **TA**

• **TB**

## Type Parameters

• **TComputationOf** *extends* [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputationType`, `TA`\>

## Parameters

### computation

`TComputationOf`

## Returns

`TComputationOf` *extends* [`SynchronousComputationOf`](SynchronousComputationOf.md)\<`TComputationType`, `TA`\> ? [`SynchronousComputationWithSideEffectsOf`](SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `TB`\> : [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `TB`\>
