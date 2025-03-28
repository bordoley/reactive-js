[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / InteractiveComputationModule

# Interface: InteractiveComputationModule\<TComputationType, TCreationOptions\>

## Extends

- [`ComputationModuleLike`](ComputationModuleLike.md)\<`TComputationType`\>

## Extended by

- [`AsyncIterableModule`](../AsyncIterable/interfaces/AsyncIterableModule.md)
- [`IterableModule`](../Iterable/interfaces/IterableModule.md)

## Type Parameters

• **TComputationType** *extends* [`AnyComputationType`](../type-aliases/AnyComputationType.md) = [`AnyComputationType`](../type-aliases/AnyComputationType.md)

• **TCreationOptions** *extends* `object` = \{\}

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

> **toObservable**\<`T`\>(`options`?): [`ToObservableOperator`](../type-aliases/ToObservableOperator.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`TCreationOptions`\[`"toObservable"`\]

#### Returns

[`ToObservableOperator`](../type-aliases/ToObservableOperator.md)\<`TComputationType`, `T`\>
