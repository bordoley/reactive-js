[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / GenericComputation

# Interface: GenericComputation\<TComputationOfT, TPureComputation, TComputationWithSideEffects\>

## Extended by

- [`IterableComputation`](../Iterable/interfaces/IterableComputation.md)

## Type Parameters

• **TComputationOfT** *extends* [`ComputationLike`](ComputationLike.md)

• **TPureComputation** *extends* `TComputationOfT` & [`PureComputationLike`](PureComputationLike.md)

• **TComputationWithSideEffects** *extends* `TComputationOfT` & [`ComputationWithSideEffectsLike`](ComputationWithSideEffectsLike.md)

## Properties

### \[Computation\_ofT\]?

> `readonly` `optional` **\[Computation\_ofT\]**: `TComputationOfT`

***

### \[Computation\_pureOfT\]?

> `readonly` `optional` **\[Computation\_pureOfT\]**: `TPureComputation`

***

### \[Computation\_T\]?

> `readonly` `optional` **\[Computation\_T\]**: `unknown`

***

### \[Computation\_withSideEffectsOfT\]?

> `readonly` `optional` **\[Computation\_withSideEffectsOfT\]**: `TComputationWithSideEffects`
