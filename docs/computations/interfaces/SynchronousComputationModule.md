[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / SynchronousComputationModule

# Interface: SynchronousComputationModule\<TComputationType, TCreationOptions\>

## Extends

- [`ComputationModuleLike`](ComputationModuleLike.md)\<`TComputationType`\>

## Extended by

- [`IterableModule`](../Iterable/interfaces/IterableModule.md)
- [`RunnableModule`](../Runnable/interfaces/RunnableModule.md)
- [`SynchronousObservableModule`](../SynchronousObservable/interfaces/SynchronousObservableModule.md)

## Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](ComputationTypeLike.md)

• **TCreationOptions** *extends* `object` = \{\}

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: `TComputationType`

#### Inherited from

[`ComputationModuleLike`](ComputationModuleLike.md).[`[ComputationModuleLike_computationType]`](ComputationModuleLike.md#computationmodulelike_computationtype)

## Methods

### toRunnable()

> **toRunnable**\<`T`\>(`options`?): \<`TComputationOf`\>(`computation`) => `TComputationOf` *extends* [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\> ? [`PureRunnableLike`](PureRunnableLike.md)\<`T`\> : `TComputationOf` *extends* [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> ? [`RunnableWithSideEffectsLike`](RunnableWithSideEffectsLike.md)\<`T`\> : `never`

#### Type Parameters

• **T**

#### Parameters

##### options?

`TCreationOptions`\[`"toRunnable"`\]

#### Returns

`Function`

##### Type Parameters

• **TComputationOf** *extends* [`ComputationLike`](ComputationLike.md) & [`PureComputationLike`](PureComputationLike.md) \| [`ComputationLike`](ComputationLike.md) & [`ComputationWithSideEffectsLike`](ComputationWithSideEffectsLike.md)

##### Parameters

###### computation

`TComputationOf`

##### Returns

`TComputationOf` *extends* [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\> ? [`PureRunnableLike`](PureRunnableLike.md)\<`T`\> : `TComputationOf` *extends* [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> ? [`RunnableWithSideEffectsLike`](RunnableWithSideEffectsLike.md)\<`T`\> : `never`
