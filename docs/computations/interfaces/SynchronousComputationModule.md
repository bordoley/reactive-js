[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / SynchronousComputationModule

# Interface: SynchronousComputationModule\<TComputationType\>

## Extends

- [`ComputationModuleLike`](ComputationModuleLike.md)\<`TComputationType`\>

## Extended by

- [`IterableModule`](../Iterable/interfaces/IterableModule.md)
- [`ObservableModule`](../Observable/interfaces/ObservableModule.md)
- [`RunnableModule`](../Runnable/interfaces/RunnableModule.md)

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](../type-aliases/ComputationType.md)

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: `TComputationType`

#### Inherited from

[`ComputationModuleLike`](ComputationModuleLike.md).[`[ComputationModuleLike_computationType]`](ComputationModuleLike.md#computationmodulelike_computationtype)

## Methods

### first()

> **first**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputationType`, `T`\>, [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputationType`, `T`\>, [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>\>

***

### last()

> **last**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputationType`, `T`\>, [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputationType`, `T`\>, [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>\>

***

### reduce()

> **reduce**\<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputationType`, `T`\>, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### reducer

[`Reducer`](../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputationType`, `T`\>, `TAcc`\>

***

### run()

> **run**\<`T`\>(): [`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<[`SynchronousComputationWithSideEffectsOf`](../type-aliases/SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<[`SynchronousComputationWithSideEffectsOf`](../type-aliases/SynchronousComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>\>

***

### toReadonlyArray()

> **toReadonlyArray**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputationType`, `T`\>, readonly `T`[]\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputationType`, `T`\>, readonly `T`[]\>

***

### toRunnable()

> **toRunnable**\<`T`\>(): [`ToRunnableOperator`](../type-aliases/ToRunnableOperator.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Returns

[`ToRunnableOperator`](../type-aliases/ToRunnableOperator.md)\<`TComputationType`, `T`\>
