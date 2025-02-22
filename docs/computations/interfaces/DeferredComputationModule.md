[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / DeferredComputationModule

# Interface: DeferredComputationModule\<C\>

## Extended by

- [`DeferableModule`](../Deferable/interfaces/DeferableModule.md)
- [`IterableModule`](../Iterable/interfaces/IterableModule.md)

## Type Parameters

• **C** *extends* [`Computation`](Computation.md)

## Methods

### fromIterable()

> **fromIterable**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<`Iterable`\<`T`, `any`, `any`\>, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<`Iterable`\<`T`, `any`, `any`\>, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>\>

***

### fromReadonlyArray()

> **fromReadonlyArray**\<`T`\>(`options`?): [`Function1`](../../functions/type-aliases/Function1.md)\<readonly `T`[], [`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

###### start?

`number`

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<readonly `T`[], [`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>\>

***

### generate()

> **generate**\<`T`\>(`generator`, `initialValue`, `options`?): [`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>

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

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>
