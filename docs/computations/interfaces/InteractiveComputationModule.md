[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / InteractiveComputationModule

# Interface: InteractiveComputationModule\<TComputationType\>

## Extends

- [`ComputationModuleLike`](ComputationModuleLike.md)\<`TComputationType`\>

## Extended by

- [`AsyncIterableModule`](../AsyncIterable/interfaces/AsyncIterableModule.md)
- [`IterableModule`](../Iterable/interfaces/IterableModule.md)

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](../type-aliases/ComputationType.md)

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: `TComputationType`

#### Inherited from

[`ComputationModuleLike`](ComputationModuleLike.md).[`[ComputationModuleLike_computationType]`](ComputationModuleLike.md#computationmodulelike_computationtype)

***

### zip

> **zip**: `ZipConstructor`\<`TComputationType`\>

## Methods

### toObservable()

> **toObservable**\<`T`\>(): [`ToObservableOperator`](../type-aliases/ToObservableOperator.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Returns

[`ToObservableOperator`](../type-aliases/ToObservableOperator.md)\<`TComputationType`, `T`\>
