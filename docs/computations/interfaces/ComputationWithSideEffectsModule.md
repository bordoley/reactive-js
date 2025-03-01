[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ComputationWithSideEffectsModule

# Interface: ComputationWithSideEffectsModule\<Type, TComputation, TypeWithSideEffects, ComputationWithSideEffect\>

## Extended by

- [`IterableModule`](../Iterable/interfaces/IterableModule.md)
- [`RunnableModule`](../Runnable/interfaces/RunnableModule.md)

## Type Parameters

• **Type** *extends* [`ComputationLike`](ComputationLike.md)

• **TComputation** *extends* [`Computation`](Computation.md)

• **TypeWithSideEffects** *extends* [`ComputationWithSideEffectsLike`](ComputationWithSideEffectsLike.md) & `Type`

• **ComputationWithSideEffect** *extends* [`Computation`](Computation.md)

## Methods

### forEach()

> **forEach**\<`T`\>(`sideEffect`): [`ComputationWithSideEffectsOperator`](../type-aliases/ComputationWithSideEffectsOperator.md)\<`Type`, `TComputation`, `TypeWithSideEffects`, `ComputationWithSideEffect`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### sideEffect

[`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<`T`\>

#### Returns

[`ComputationWithSideEffectsOperator`](../type-aliases/ComputationWithSideEffectsOperator.md)\<`Type`, `TComputation`, `TypeWithSideEffects`, `ComputationWithSideEffect`, `T`, `T`\>
