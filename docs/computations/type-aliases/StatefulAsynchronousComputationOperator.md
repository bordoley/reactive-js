[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / StatefulAsynchronousComputationOperator

# Type Alias: StatefulAsynchronousComputationOperator()\<TComputation, TA, TB\>

> **StatefulAsynchronousComputationOperator**\<`TComputation`, `TA`, `TB`\>: \<`TComputationOf`\>(`computation`) => `TComputationOf` *extends* [`PureComputationOf`](PureComputationOf.md)\<`TComputation`, `TA`\> ? [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputation`, `TB`\> : [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `TB`\>

## Type Parameters

• **TComputation** *extends* [`ComputationType`](ComputationType.md)

• **TA**

• **TB**

## Type Parameters

• **TComputationOf** *extends* [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputation`, `TA`\>

## Parameters

### computation

`TComputationOf`

## Returns

`TComputationOf` *extends* [`PureComputationOf`](PureComputationOf.md)\<`TComputation`, `TA`\> ? [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputation`, `TB`\> : [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputation`, `TB`\>
