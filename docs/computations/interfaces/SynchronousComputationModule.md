[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / SynchronousComputationModule

# Interface: SynchronousComputationModule\<C\>

## Extended by

- [`DeferableModule`](../Deferable/interfaces/DeferableModule.md)
- [`IterableModule`](../Iterable/interfaces/IterableModule.md)

## Type Parameters

• **C** *extends* [`Computation`](Computation.md)

## Methods

### last()

> **last**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>, [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>, [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>\>

***

### reduce()

> **reduce**\<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### reducer

[`Reducer`](../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>, `TAcc`\>

***

### toDeferable()

> **toDeferable**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>, [`DeferableLike`](DeferableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>, [`DeferableLike`](DeferableLike.md)\<`T`\>\>

***

### toReadonlyArray()

> **toReadonlyArray**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>, readonly `T`[]\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>, readonly `T`[]\>
