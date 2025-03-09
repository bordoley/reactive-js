[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/AsyncIterable](../README.md) / AsyncIterableModule

# Interface: AsyncIterableModule

## Extends

- [`ComputationModule`](../../interfaces/ComputationModule.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md)\>

## Properties

### toReadonlyArrayAsync()

> **toReadonlyArrayAsync**: \<`T`\>() => [`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| `never` \| `never` \| `never`, readonly `T`[]\>

#### Type Parameters

• **T**

#### Returns

[`AsyncFunction1`](../../../functions/type-aliases/AsyncFunction1.md)\<[`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\> & [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\> \| `never` \| `never` \| `never`, readonly `T`[]\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`toReadonlyArrayAsync`](../../interfaces/ComputationModule.md#toreadonlyarrayasync)

## Methods

### fromIterable()

> **fromIterable**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>, [`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`IterableLike`](../../interfaces/IterableLike.md)\<`T`\>, [`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\>\>

#### Overrides

[`ComputationModule`](../../interfaces/ComputationModule.md).[`fromIterable`](../../interfaces/ComputationModule.md#fromiterable)

***

### fromReadonlyArray()

> **fromReadonlyArray**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

###### start?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\>\>

#### Overrides

[`ComputationModule`](../../interfaces/ComputationModule.md).[`fromReadonlyArray`](../../interfaces/ComputationModule.md#fromreadonlyarray)

***

### fromValue()

> **fromValue**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\>\>

#### Overrides

[`ComputationModule`](../../interfaces/ComputationModule.md).[`fromValue`](../../interfaces/ComputationModule.md#fromvalue)

***

### generate()

> **generate**\<`T`\>(`generator`, `initialValue`, `options`?): [`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### generator

[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`T`\>

##### options?

###### count?

`number`

#### Returns

[`PureAsyncIterableLike`](../../interfaces/PureAsyncIterableLike.md)\<`T`\>

#### Overrides

[`ComputationModule`](../../interfaces/ComputationModule.md).[`generate`](../../interfaces/ComputationModule.md#generate)

***

### keep()

> **keep**\<`T`\>(`predicate`): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

#### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `T`, `T`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`keep`](../../interfaces/ComputationModule.md#keep)

***

### map()

> **map**\<`TA`, `TB`\>(`selector`): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, `TB`\>

#### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`AsyncIterableComputation`](AsyncIterableComputation.md), `TA`, `TB`\>

#### Inherited from

[`ComputationModule`](../../interfaces/ComputationModule.md).[`map`](../../interfaces/ComputationModule.md#map)

***

### of()

> **of**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`AsyncIterable`\<`T`, `any`, `any`\>, [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`AsyncIterable`\<`T`, `any`, `any`\>, [`AsyncIterableWithSideEffectsLike`](../../interfaces/AsyncIterableWithSideEffectsLike.md)\<`T`\>\>

***

### toObservable()

> **toObservable**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

***

### toPauseableObservable()

> **toPauseableObservable**\<`T`\>(`scheduler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>, [`PauseableObservableLike`](../../interfaces/PauseableObservableLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../../utils/interfaces/SchedulerLike.md)

##### options?

###### autoDispose?

`boolean`

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### replay?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`T`\>, [`PauseableObservableLike`](../../interfaces/PauseableObservableLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>
