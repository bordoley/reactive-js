[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ConcurrentReactiveComputationModule

# Interface: ConcurrentReactiveComputationModule\<TComputationType, TCreationOptions\>

## Extends

- [`ComputationModuleLike`](ComputationModuleLike.md)\<`TComputationType`\>

## Extended by

- [`BroadcasterModule`](../Broadcaster/interfaces/BroadcasterModule.md)
- [`ObservableModule`](../Observable/interfaces/ObservableModule.md)
- [`ProducerModule`](../Producer/interfaces/ProducerModule.md)

## Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](ComputationTypeLike.md)

• **TCreationOptions** *extends* `object` = \{\}

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: `TComputationType`

#### Inherited from

[`ComputationModuleLike`](ComputationModuleLike.md).[`[ComputationModuleLike_computationType]`](ComputationModuleLike.md#computationmodulelike_computationtype)

## Methods

### fromBroadcaster()

> **fromBroadcaster**\<`T`\>(`options`?): [`Function1`](../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](BroadcasterLike.md)\<`T`\>, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

`TCreationOptions`\[`"fromBroadcaster"`\]

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](BroadcasterLike.md)\<`T`\>, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>

***

### fromObservable()

> **fromObservable**\<`T`\>(`options`?): \<`TObservable`\>(`observable`) => `TObservable` *extends* [`PureComputationLike`](PureComputationLike.md) ? [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\> : `TObservable` *extends* [`ComputationWithSideEffectsLike`](ComputationWithSideEffectsLike.md) ? [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\> *extends* [`MulticastComputationLike`](MulticastComputationLike.md) ? [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<[`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\>\> : [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> : `never`

#### Type Parameters

• **T**

#### Parameters

##### options?

`object` & `TCreationOptions`\[`"fromObservable"`\]

#### Returns

`Function`

##### Type Parameters

• **TObservable** *extends* [`ObservableLike`](ObservableLike.md)\<`T`\>

##### Parameters

###### observable

`TObservable`

##### Returns

`TObservable` *extends* [`PureComputationLike`](PureComputationLike.md) ? [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\> : `TObservable` *extends* [`ComputationWithSideEffectsLike`](ComputationWithSideEffectsLike.md) ? [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\> *extends* [`MulticastComputationLike`](MulticastComputationLike.md) ? [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<[`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\>\> : [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> : `never`

***

### fromProducer()

> **fromProducer**\<`T`\>(`options`?): \<`TProducer`\>(`iterable`) => `TProducer` *extends* [`PureComputationLike`](PureComputationLike.md) ? [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\> : `TProducer` *extends* [`ComputationWithSideEffectsLike`](ComputationWithSideEffectsLike.md) ? [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\> *extends* [`MulticastComputationLike`](MulticastComputationLike.md) ? [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<[`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\>\> : [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> : `never`

#### Type Parameters

• **T**

#### Parameters

##### options?

`TCreationOptions`\[`"fromProducer"`\]

#### Returns

`Function`

##### Type Parameters

• **TProducer** *extends* [`ProducerLike`](ProducerLike.md)\<`T`\>

##### Parameters

###### iterable

`TProducer`

##### Returns

`TProducer` *extends* [`PureComputationLike`](PureComputationLike.md) ? [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\> : `TProducer` *extends* [`ComputationWithSideEffectsLike`](ComputationWithSideEffectsLike.md) ? [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\> *extends* [`MulticastComputationLike`](MulticastComputationLike.md) ? [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<[`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\>\> : [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> : `never`

***

### toObservable()

> **toObservable**\<`T`\>(`options`?): \<`TComputationOf`\>(`computation`) => `TComputationOf` *extends* [`PureComputationLike`](PureComputationLike.md) ? [`PureObservableLike`](PureObservableLike.md)\<`T`\> : `TComputationOf` *extends* [`ComputationWithSideEffectsLike`](ComputationWithSideEffectsLike.md) ? [`ObservableWithSideEffectsLike`](ObservableWithSideEffectsLike.md)\<`T`\> : `never`

#### Type Parameters

• **T**

#### Parameters

##### options?

`TCreationOptions`\[`"toObservable"`\]

#### Returns

`Function`

##### Type Parameters

• **TComputationOf** *extends* [`ComputationLike`](ComputationLike.md) & [`PureComputationLike`](PureComputationLike.md) \| [`ComputationLike`](ComputationLike.md) & [`ComputationWithSideEffectsLike`](ComputationWithSideEffectsLike.md)

##### Parameters

###### computation

`TComputationOf`

##### Returns

`TComputationOf` *extends* [`PureComputationLike`](PureComputationLike.md) ? [`PureObservableLike`](PureObservableLike.md)\<`T`\> : `TComputationOf` *extends* [`ComputationWithSideEffectsLike`](ComputationWithSideEffectsLike.md) ? [`ObservableWithSideEffectsLike`](ObservableWithSideEffectsLike.md)\<`T`\> : `never`
