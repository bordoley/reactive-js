[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ConcurrentDeferredComputationModule

# Interface: ConcurrentDeferredComputationModule\<TComputationType\>

## Extends

- [`ComputationModuleLike`](ComputationModuleLike.md)\<`TComputationType`\>

## Extended by

- [`AsyncIterableModule`](../AsyncIterable/interfaces/AsyncIterableModule.md)
- [`ObservableModule`](../Observable/interfaces/ObservableModule.md)

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](../type-aliases/ComputationType.md)

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: `TComputationType`

#### Inherited from

[`ComputationModuleLike`](ComputationModuleLike.md).[`[ComputationModuleLike_computationType]`](ComputationModuleLike.md#computationmodulelike_computationtype)

## Methods

### fromAsyncFactory()

> **fromAsyncFactory**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<(`options`?) => `Promise`\<`T`\>, [`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<(`options`?) => `Promise`\<`T`\>, [`DeferredComputationWithSideEffectsOf`](../type-aliases/DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>\>
