[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ComputationModule

# Interface: ComputationModule\<TComputation\>

## Extended by

- [`SynchronousComputationModule`](SynchronousComputationModule.md)
- [`ConcurrentReactiveComputationModule`](ConcurrentReactiveComputationModule.md)

## Type Parameters

• **TComputation** *extends* [`ComputationType`](../type-aliases/ComputationType.md)

## Methods

### keep()

> **keep**\<`T`\>(`predicate`): [`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../functions/type-aliases/Predicate.md)\<`T`\>

#### Returns

[`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `T`, `T`\>

***

### map()

> **map**\<`TA`, `TB`\>(`selector`): [`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function1`](../../functions/type-aliases/Function1.md)\<`TA`, `TB`\>

#### Returns

[`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputation`, `TA`, `TB`\>
