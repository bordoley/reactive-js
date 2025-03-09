[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / SynchronousComputationModule

# Interface: SynchronousComputationModule\<TComputation\>

## Extended by

- [`IterableModule`](../Iterable/interfaces/IterableModule.md)
- [`ObservableModule`](../Observable/interfaces/ObservableModule.md)
- [`RunnableModule`](../Runnable/interfaces/RunnableModule.md)

## Type Parameters

• **TComputation** *extends* [`ComputationType`](../type-aliases/ComputationType.md)

## Methods

### empty()

> **empty**\<`T`\>(): [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>

#### Type Parameters

• **T**

#### Returns

[`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>

***

### first()

> **first**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>, [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>, [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>\>

***

### fromIterable()

> **fromIterable**\<`T`\>(): [`FromIterableSynchronousOperator`](../type-aliases/FromIterableSynchronousOperator.md)\<`TComputation`, `T`\>

#### Type Parameters

• **T**

#### Returns

[`FromIterableSynchronousOperator`](../type-aliases/FromIterableSynchronousOperator.md)\<`TComputation`, `T`\>

***

### fromReadonlyArray()

> **fromReadonlyArray**\<`T`\>(`options`?): [`Function1`](../../functions/type-aliases/Function1.md)\<readonly `T`[], [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

###### start?

`number`

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<readonly `T`[], [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>\>

***

### fromValue()

> **fromValue**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<`T`, [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<`T`, [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>\>

***

### generate()

> **generate**\<`T`\>(`generator`, `initialValue`, `options`?): [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### generator

[`Updater`](../../functions/type-aliases/Updater.md)\<`T`\>

##### initialValue

[`Factory`](../../functions/type-aliases/Factory.md)\<`T`\>

##### options?

###### count?

`number`

#### Returns

[`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>

***

### last()

> **last**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>, [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>, [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>\>

***

### raise()

> **raise**\<`T`\>(`options`?): [`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### raise?

[`Factory`](../../functions/type-aliases/Factory.md)\<`unknown`\>

#### Returns

[`PureSynchronousComputationOf`](../type-aliases/PureSynchronousComputationOf.md)\<`TComputation`, `T`\>

***

### reduce()

> **reduce**\<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### reducer

[`Reducer`](../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>, `TAcc`\>

***

### toReadonlyArray()

> **toReadonlyArray**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>, readonly `T`[]\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>, readonly `T`[]\>

***

### toRunnable()

> **toRunnable**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>, [`RunnableLike`](RunnableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`SynchronousComputationOf`](../type-aliases/SynchronousComputationOf.md)\<`TComputation`, `T`\>, [`RunnableLike`](RunnableLike.md)\<`T`\>\>
