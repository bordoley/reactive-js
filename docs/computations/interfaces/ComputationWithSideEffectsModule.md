[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ComputationWithSideEffectsModule

# Interface: ComputationWithSideEffectsModule\<TComputation\>

## Extended by

- [`IterableModule`](../Iterable/interfaces/IterableModule.md)
- [`RunnableModule`](../Runnable/interfaces/RunnableModule.md)
- [`DeferredObservableModule`](../../concurrent/DeferredObservable/interfaces/DeferredObservableModule.md)
- [`SynchronousObservableModule`](../../concurrent/SynchronousObservable/interfaces/SynchronousObservableModule.md)

## Type Parameters

• **TComputation** *extends* [`Computation`](../type-aliases/Computation.md)

## Methods

### forEach()

> **forEach**\<`T`\>(`sideEffect`): [`ComputationWithSideEffectsOperator`](../type-aliases/ComputationWithSideEffectsOperator.md)\<`TComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### sideEffect

[`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<`T`\>

#### Returns

[`ComputationWithSideEffectsOperator`](../type-aliases/ComputationWithSideEffectsOperator.md)\<`TComputation`, `T`, `T`\>
