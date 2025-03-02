[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / SynchronousComputationModule

# Interface: SynchronousComputationModule\<TComputation\>

## Extended by

- [`IterableModule`](../Iterable/interfaces/IterableModule.md)
- [`RunnableModule`](../Runnable/interfaces/RunnableModule.md)
- [`SynchronousObservableModule`](../../concurrent/SynchronousObservable/interfaces/SynchronousObservableModule.md)

## Type Parameters

• **TComputation** *extends* [`Computation`](../type-aliases/Computation.md)

## Methods

### last()

> **last**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, `T`\>, [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, `T`\>, [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>\>

***

### reduce()

> **reduce**\<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, `T`\>, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### reducer

[`Reducer`](../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, `T`\>, `TAcc`\>

***

### toReadonlyArray()

> **toReadonlyArray**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, `T`\>, readonly `T`[]\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, `T`\>, readonly `T`[]\>

***

### toRunnable()

> **toRunnable**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, `T`\>, [`RunnableLike`](RunnableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, `T`\>, [`RunnableLike`](RunnableLike.md)\<`T`\>\>
