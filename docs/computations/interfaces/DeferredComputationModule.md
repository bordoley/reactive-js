[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / DeferredComputationModule

# Interface: DeferredComputationModule\<Type, C\>

## Extended by

- [`IterableModule`](../Iterable/interfaces/IterableModule.md)
- [`RunnableModule`](../Runnable/interfaces/RunnableModule.md)

## Type Parameters

• **Type** *extends* [`ComputationLike`](ComputationLike.md)

• **C** *extends* [`Computation`](Computation.md)\<`Type`\>

## Methods

### catchError()

#### Call Signature

> **catchError**\<`T`\>(`onError`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`SideEffect1`](../../functions/type-aliases/SideEffect1.md)\<`Error`\>

##### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>

#### Call Signature

> **catchError**\<`T`\>(`onError`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### onError

[`Function1`](../../functions/type-aliases/Function1.md)\<`Error`, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `C`, `T`\>\>

##### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>

***

### concat()

> **concat**\<`T`\>(`fst`, `snd`, ...`tail`): [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `C`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### fst

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `C`, `T`\>

##### snd

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `C`, `T`\>

##### tail

...readonly [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `C`, `T`\>[]

#### Returns

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `C`, `T`\>

***

### concatAll()

> **concatAll**\<`T`\>(): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `C`, `T`\>, `T`\>

#### Type Parameters

• **T**

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `C`, `T`\>, `T`\>

***

### concatMany()

> **concatMany**\<`T`\>(`computations`): [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `C`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### computations

readonly \[[`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `C`, `T`\>, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `C`, `T`\>\]

#### Returns

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `C`, `T`\>

***

### concatMap()

> **concatMap**\<`TA`, `TB`\>(`selector`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function1`](../../functions/type-aliases/Function1.md)\<`TA`, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `C`, `TB`\>\>

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `TA`, `TB`\>

***

### concatWith()

> **concatWith**\<`T`\>(`snd`, ...`tail`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### snd

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `C`, `T`\>

##### tail

...readonly [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `C`, `T`\>[]

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>

***

### empty()

> **empty**\<`T`\>(): [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `C`, `T`\>

#### Type Parameters

• **T**

#### Returns

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `C`, `T`\>

***

### endWith()

> **endWith**\<`T`\>(`value`, ...`values`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### value

`T`

##### values

...readonly `T`[]

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>

***

### fromIterable()

> **fromIterable**\<`T`, `TIterable`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<`TIterable`, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `C`, `T`\>\>

#### Type Parameters

• **T**

• **TIterable** *extends* [`IterableLike`](IterableLike.md)\<`T`\> = [`IterableLike`](IterableLike.md)\<`T`\>

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<`TIterable`, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `C`, `T`\>\>

***

### fromReadonlyArray()

> **fromReadonlyArray**\<`T`\>(`options`?): [`Function1`](../../functions/type-aliases/Function1.md)\<readonly `T`[], [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `C`, `T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

###### start?

`number`

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<readonly `T`[], [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `C`, `T`\>\>

***

### fromValue()

> **fromValue**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<`T`, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `C`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<`T`, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `C`, `T`\>\>

***

### generate()

> **generate**\<`T`\>(`generator`, `initialValue`, `options`?): [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `C`, `T`\>

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

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `C`, `T`\>

***

### raise()

> **raise**\<`T`\>(`options`?): [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `C`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### raise?

[`Factory`](../../functions/type-aliases/Factory.md)\<`unknown`\>

#### Returns

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `C`, `T`\>

***

### repeat()

#### Call Signature

> **repeat**\<`T`\>(`predicate`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### predicate

[`Predicate`](../../functions/type-aliases/Predicate.md)\<`number`\>

##### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>

#### Call Signature

> **repeat**\<`T`\>(`count`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### count

`number`

##### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>

#### Call Signature

> **repeat**\<`T`\>(): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>

##### Type Parameters

• **T**

##### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>

***

### retry()

> **retry**\<`T`\>(`shouldRetry`?): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### shouldRetry?

(`count`, `error`) => `boolean`

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>

***

### scan()

> **scan**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### scanner

[`Reducer`](../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `TAcc`\>

***

### startWith()

> **startWith**\<`T`\>(`value`, ...`values`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### value

`T`

##### values

...readonly `T`[]

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>

***

### takeFirst()

> **takeFirst**\<`T`\>(`options`?): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>

***

### takeWhile()

> **takeWhile**\<`T`\>(`predicate`, `options`?): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../functions/type-aliases/Predicate.md)\<`T`\>

##### options?

###### inclusive?

`boolean`

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>

***

### throwIfEmpty()

> **throwIfEmpty**\<`T`\>(`factory`, `options`?): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../functions/type-aliases/Factory.md)\<`unknown`\>

##### options?

`undefined`

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`Type`, `C`, `T`, `T`\>
