[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / DeferredReactiveComputationModule

# Interface: DeferredReactiveComputationModule\<TComputationType, TCreationOptions\>

## Extends

- [`ComputationModuleLike`](ComputationModuleLike.md)\<`TComputationType`\>

## Extended by

- [`ObservableModule`](../Observable/interfaces/ObservableModule.md)
- [`ProducerModule`](../Producer/interfaces/ProducerModule.md)
- [`SynchronousObservableModule`](../SynchronousObservable/interfaces/SynchronousObservableModule.md)

## Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](ComputationTypeLike.md)

• **TCreationOptions** *extends* `object` = \{\}

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: `TComputationType`

#### Inherited from

[`ComputationModuleLike`](ComputationModuleLike.md).[`[ComputationModuleLike_computationType]`](ComputationModuleLike.md#computationmodulelike_computationtype)

## Methods

### broadcast()

> **broadcast**\<`T`\>(`options`?): [`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>, [`PauseableLike`](../../utils/interfaces/PauseableLike.md) & [`BroadcasterLike`](BroadcasterLike.md)\<`T`\> & [`DisposableLike`](../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`object` & `TCreationOptions`\[`"broadcast"`\]

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>, [`PauseableLike`](../../utils/interfaces/PauseableLike.md) & [`BroadcasterLike`](BroadcasterLike.md)\<`T`\> & [`DisposableLike`](../../utils/interfaces/DisposableLike.md)\>

***

### compute()

> **compute**\<`T`\>(`computation`, `options`?): [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### computation

[`Factory`](../../functions/type-aliases/Factory.md)\<`T`\>

##### options?

`TCreationOptions`\[`"compute"`\]

#### Returns

[`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

***

### mergeAll()

#### Call Signature

> **mergeAll**\<`T`\>(`options`?): [`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### concurrency?

`number`

##### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>

#### Call Signature

> **mergeAll**\<`T`\>(`options`): [`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### [ComputationLike_isPure]

[`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

###### backpressureStrategy?

[`BackpressureStrategy`](../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### concurrency?

`number`

##### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>

#### Call Signature

> **mergeAll**\<`T`\>(`options`): [`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>\>, [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### [ComputationLike_isPure]

`false`

###### backpressureStrategy?

[`BackpressureStrategy`](../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### concurrency?

`number`

##### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>\>, [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>\>

***

### scanMany()

#### Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `TAcc`\>

##### Type Parameters

• **T**

• **TAcc**

##### Parameters

###### scanner

[`Function2`](../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TAcc`\>\>

###### initialValue

[`Factory`](../../functions/type-aliases/Factory.md)\<`TAcc`\>

##### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `TAcc`\>

#### Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `TAcc`\>

##### Type Parameters

• **T**

• **TAcc**

##### Parameters

###### scanner

[`Function2`](../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `TAcc`\>\>

###### initialValue

[`Factory`](../../functions/type-aliases/Factory.md)\<`TAcc`\>

###### options

###### [ComputationLike_isPure]

[`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `TAcc`\>

#### Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `TAcc`\>

##### Type Parameters

• **T**

• **TAcc**

##### Parameters

###### scanner

[`Function2`](../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `TAcc`\>\>

###### initialValue

[`Factory`](../../functions/type-aliases/Factory.md)\<`TAcc`\>

###### options

###### [ComputationLike_isPure]

[`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`ComputationOperatorWithSideEffects`](../type-aliases/ComputationOperatorWithSideEffects.md)\<`TComputationType`, `T`, `TAcc`\>

***

### switchAll()

#### Call Signature

> **switchAll**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>

##### Type Parameters

• **T**

##### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>

#### Call Signature

> **switchAll**\<`T`\>(`options`): [`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### [ComputationLike_isPure]

[`Optional`](../../functions/type-aliases/Optional.md)\<`true`\>

##### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>

#### Call Signature

> **switchAll**\<`T`\>(`options`): [`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>\>, [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### [ComputationLike_isPure]

`false`

##### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputationType`, `T`\>\>, [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>\>

***

### toAsyncIterable()

> **toAsyncIterable**\<`T`\>(`options`?): \<`TComputationOf`\>(`computation`) => `TComputationOf` *extends* [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\> ? [`PureAsyncIterableLike`](PureAsyncIterableLike.md)\<`T`\> : `TComputationOf` *extends* [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> ? [`AsyncIterableWithSideEffectsLike`](AsyncIterableWithSideEffectsLike.md)\<`T`\> : `never`

#### Type Parameters

• **T**

#### Parameters

##### options?

`TCreationOptions`\[`"toAsyncIterable"`\]

#### Returns

`Function`

##### Type Parameters

• **TComputationOf** *extends* [`ComputationLike`](ComputationLike.md) & [`PureComputationLike`](PureComputationLike.md) \| [`ComputationLike`](ComputationLike.md) & [`ComputationWithSideEffectsLike`](ComputationWithSideEffectsLike.md)

##### Parameters

###### computation

`TComputationOf`

##### Returns

`TComputationOf` *extends* [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\> ? [`PureAsyncIterableLike`](PureAsyncIterableLike.md)\<`T`\> : `TComputationOf` *extends* [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> ? [`AsyncIterableWithSideEffectsLike`](AsyncIterableWithSideEffectsLike.md)\<`T`\> : `never`
