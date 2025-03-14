[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / StatefulAsynchronousComputationOperator

# Type Alias: StatefulAsynchronousComputationOperator()\<TComputationType, TA, TB\>

> **StatefulAsynchronousComputationOperator**\<`TComputationType`, `TA`, `TB`\>: \<`TComputationOf`\>(`computation`) => `TComputationOf` *extends* [`PureComputationOf`](PureComputationOf.md)\<`TComputationType`, `TA`\> ? [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `TB`\> : [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `TB`\>

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

`TComputationOf` *extends* [`PureComputationOf`](PureComputationOf.md)\<`TComputationType`, `TA`\> ? [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `TB`\> : [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `TB`\>
