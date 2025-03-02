[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ComputationModule

# Interface: ComputationModule\<TComputation\>

## Extended by

- [`DeferredComputationModule`](DeferredComputationModule.md)
- [`ConcurrentReactiveComputationModule`](ConcurrentReactiveComputationModule.md)

## Type Parameters

• **TComputation** *extends* [`Computation`](../type-aliases/Computation.md)

## Methods

### keep()

> **keep**\<`T`\>(`predicate`): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`TComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../functions/type-aliases/Predicate.md)\<`T`\>

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`TComputation`, `T`, `T`\>

***

### map()

> **map**\<`TA`, `TB`\>(`selector`): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`TComputation`, `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function1`](../../functions/type-aliases/Function1.md)\<`TA`, `TB`\>

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`TComputation`, `TA`, `TB`\>
