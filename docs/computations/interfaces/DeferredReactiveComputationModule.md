[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / DeferredReactiveComputationModule

# Interface: DeferredReactiveComputationModule\<TComputation\>

## Extended by

- [`RunnableModule`](../Runnable/interfaces/RunnableModule.md)
- [`DeferredObservableModule`](../../concurrent/DeferredObservable/interfaces/DeferredObservableModule.md)
- [`SynchronousObservableModule`](../../concurrent/SynchronousObservable/interfaces/SynchronousObservableModule.md)

## Type Parameters

• **TComputation** *extends* [`Computation`](../type-aliases/Computation.md)

## Methods

### buffer()

> **buffer**\<`T`\>(`options`?): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`TComputation`, `T`, readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`TComputation`, `T`, readonly `T`[]\>

***

### decodeWithCharset()

> **decodeWithCharset**(`options`?): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`TComputation`, `ArrayBuffer`, `string`\>

#### Parameters

##### options?

###### charset?

`string`

###### fatal?

`boolean`

###### ignoreBOM?

`boolean`

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`TComputation`, `ArrayBuffer`, `string`\>

***

### distinctUntilChanged()

> **distinctUntilChanged**\<`T`\>(`options`?): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`TComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### equality?

[`Equality`](../../functions/type-aliases/Equality.md)\<`T`\>

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`TComputation`, `T`, `T`\>

***

### pairwise()

> **pairwise**\<`T`\>(): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`TComputation`, `T`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`TComputation`, `T`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

***

### skipFirst()

> **skipFirst**\<`T`\>(`options`?): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`TComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`TComputation`, `T`, `T`\>

***

### takeLast()

> **takeLast**\<`T`\>(`options`?): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`TComputation`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`TComputation`, `T`, `T`\>
