[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / SynchronousComputationModule

# Interface: SynchronousComputationModule\<TComputationType, TCreationOptions\>

## Extends

- [`ComputationModuleLike`](ComputationModuleLike.md)\<`TComputationType`\>

## Extended by

- [`IterableModule`](../Iterable/interfaces/IterableModule.md)
- [`ObservableModule`](../Observable/interfaces/ObservableModule.md)
- [`RunnableModule`](../Runnable/interfaces/RunnableModule.md)

## Type Parameters

• **TComputationType** *extends* [`AnyComputationType`](../type-aliases/AnyComputationType.md) = [`AnyComputationType`](../type-aliases/AnyComputationType.md)

• **TCreationOptions** *extends* `object` = \{\}

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: `TComputationType`

#### Inherited from

[`ComputationModuleLike`](ComputationModuleLike.md).[`[ComputationModuleLike_computationType]`](ComputationModuleLike.md#computationmodulelike_computationtype)

## Methods

### toRunnable()

> **toRunnable**\<`T`\>(`options`?): [`ToRunnableOperator`](../type-aliases/ToRunnableOperator.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`TCreationOptions`\[`"toRunnable"`\]

#### Returns

[`ToRunnableOperator`](../type-aliases/ToRunnableOperator.md)\<`TComputationType`, `T`\>
