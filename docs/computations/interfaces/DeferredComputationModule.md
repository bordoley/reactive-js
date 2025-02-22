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

### concat()

> **concat**\<`T`\>(`fst`, `snd`, ...`tail`): [`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### fst

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>

##### snd

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>

##### tail

...readonly [`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>[]

#### Returns

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>

***

### concatAll()

> **concatAll**\<`T`\>(): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>, `T`\>

#### Type Parameters

• **T**

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>, `T`\>

***

### concatMany()

> **concatMany**\<`T`\>(`computations`): [`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### computations

readonly \[[`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>\]

#### Returns

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>

***

### concatMap()

> **concatMap**\<`TA`, `TB`\>(`selector`): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function1`](../../functions/type-aliases/Function1.md)\<`TA`, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `TB`\>\>

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `TA`, `TB`\>

***

### concatWith()

> **concatWith**\<`T`\>(`snd`, ...`tail`): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### snd

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>

##### tail

...readonly [`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>[]

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

***

### endWith()

> **endWith**\<`T`\>(`value`, ...`values`): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### value

`T`

##### values

...readonly `T`[]

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

***

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

### fromValue()

> **fromValue**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<`T`, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<`T`, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>\>

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

***

### repeat()

#### Call Signature

> **repeat**\<`T`\>(`predicate`): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### predicate

[`Predicate`](../../functions/type-aliases/Predicate.md)\<`number`\>

##### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

#### Call Signature

> **repeat**\<`T`\>(`count`): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### count

`number`

##### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

#### Call Signature

> **repeat**\<`T`\>(): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

##### Type Parameters

• **T**

##### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

***

### retry()

> **retry**\<`T`\>(`shouldRetry`?): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### shouldRetry?

(`count`, `error`) => `boolean`

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

***

### startWith()

> **startWith**\<`T`\>(`value`, ...`values`): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### value

`T`

##### values

...readonly `T`[]

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

***

### takeFirst()

> **takeFirst**\<`T`\>(`options`?): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

***

### takeWhile()

> **takeWhile**\<`T`\>(`predicate`, `options`?): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../functions/type-aliases/Predicate.md)\<`T`\>

##### options?

###### inclusive?

`boolean`

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

***

### throwIfEmpty()

> **throwIfEmpty**\<`T`\>(`factory`, `options`?): [`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../functions/type-aliases/Factory.md)\<`unknown`\>

##### options?

`undefined`

#### Returns

[`ComputationOperator`](../type-aliases/ComputationOperator.md)\<`C`, `T`, `T`\>

***

### throws()

> **throws**\<`T`\>(`options`?): [`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### raise?

[`Factory`](../../functions/type-aliases/Factory.md)\<`unknown`\>

#### Returns

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`C`, `T`\>
