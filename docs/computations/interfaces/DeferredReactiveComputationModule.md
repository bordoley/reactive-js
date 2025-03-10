[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / DeferredReactiveComputationModule

# Interface: DeferredReactiveComputationModule\<TComputation\>

## Extends

- [`ComputationModuleLike`](ComputationModuleLike.md)\<`TComputation`\>

## Extended by

- [`ObservableModule`](../Observable/interfaces/ObservableModule.md)
- [`RunnableModule`](../Runnable/interfaces/RunnableModule.md)

## Type Parameters

• **TComputation** *extends* [`ComputationType`](../type-aliases/ComputationType.md)

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: `TComputation`

#### Inherited from

[`ComputationModuleLike`](ComputationModuleLike.md).[`[ComputationModuleLike_computationType]`](ComputationModuleLike.md#computationmodulelike_computationtype)

## Methods

### buffer()

> **buffer**\<`T`\>(`options`?): [`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, readonly `T`[]\>

***

### decodeWithCharset()

> **decodeWithCharset**(`options`?): [`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `ArrayBuffer`, `string`\>

#### Parameters

##### options?

###### charset?

`string`

###### fatal?

`boolean`

###### ignoreBOM?

`boolean`

#### Returns

[`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `ArrayBuffer`, `string`\>

***

### distinctUntilChanged()

> **distinctUntilChanged**\<`T`\>(`options`?): [`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### equality?

[`Equality`](../../functions/type-aliases/Equality.md)\<`T`\>

#### Returns

[`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, `T`\>

***

### pairwise()

> **pairwise**\<`T`\>(): [`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

***

### skipFirst()

> **skipFirst**\<`T`\>(`options`?): [`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, `T`\>

***

### takeLast()

> **takeLast**\<`T`\>(`options`?): [`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`StatefulSynchronousComputationOperator`](../type-aliases/StatefulSynchronousComputationOperator.md)\<`TComputation`, `T`, `T`\>
