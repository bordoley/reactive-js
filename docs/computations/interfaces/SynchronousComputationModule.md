[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / SynchronousComputationModule

# Interface: SynchronousComputationModule\<TComputationType, TCreationOptions\>

## Extends

- [`ComputationModuleLike`](ComputationModuleLike.md)\<`TComputationType`\>

## Extended by

- [`IterableModule`](../Iterable/interfaces/IterableModule.md)
- [`ObservableModule`](../Observable/interfaces/ObservableModule.md)

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](../type-aliases/ComputationType.md)

• **TCreationOptions** *extends* `object` = \{\}

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: `TComputationType`

#### Inherited from

[`ComputationModuleLike`](ComputationModuleLike.md).[`[ComputationModuleLike_computationType]`](ComputationModuleLike.md#computationmodulelike_computationtype)

## Methods

### first()

> **first**\<`T`\>(`options`?): [`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputationType`, `T`\>, [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`TCreationOptions`\[`"first"`\]

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputationType`, `T`\>, [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>\>

***

### last()

> **last**\<`T`\>(`options`?): [`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputationType`, `T`\>, [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`TCreationOptions`\[`"last"`\]

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputationType`, `T`\>, [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>\>

***

### reduce()

> **reduce**\<`T`, `TAcc`\>(`reducer`, `initialValue`, `options`?): [`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputationType`, `T`\>, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### reducer

[`Reducer`](../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../functions/type-aliases/Factory.md)\<`TAcc`\>

##### options?

`TCreationOptions`\[`"reduce"`\]

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputationType`, `T`\>, `TAcc`\>

***

### toReadonlyArray()

> **toReadonlyArray**\<`T`\>(`options`?): [`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputationType`, `T`\>, readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`TCreationOptions`\[`"toReadonlyArray"`\]

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputationType`, `T`\>, readonly `T`[]\>

***

### toRunnable()

> **toRunnable**\<`T`\>(`options`?): [`ToRunnableOperator`](../type-aliases/ToRunnableOperator.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`TCreationOptions`\[`"toRunnable"`\]

#### Returns

[`ToRunnableOperator`](../type-aliases/ToRunnableOperator.md)\<`TComputationType`, `T`\>
