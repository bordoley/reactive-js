[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / SourceComputationModule

# Interface: SourceComputationModule\<TComputationType\>

## Extends

- [`ComputationModuleLike`](ComputationModuleLike.md)\<`TComputationType`\>

## Extended by

- [`BroadcasterModule`](../Broadcaster/interfaces/BroadcasterModule.md)
- [`ObservableModule`](../Observable/interfaces/ObservableModule.md)
- [`ProducerModule`](../Producer/interfaces/ProducerModule.md)

## Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](ComputationTypeLike.md)

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: `TComputationType`

#### Inherited from

[`ComputationModuleLike`](ComputationModuleLike.md).[`[ComputationModuleLike_computationType]`](ComputationModuleLike.md#computationmodulelike_computationtype)

## Methods

### fromBroadcaster()

> **fromBroadcaster**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](BroadcasterLike.md)\<`T`\>, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](BroadcasterLike.md)\<`T`\>, [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `T`\>\>

***

### fromObservable()

> **fromObservable**\<`T`\>(`options`?): \<`TObservable`\>(`iterable`) => `TObservable` *extends* [`PureComputationLike`](PureComputationLike.md) ? [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\> : `TObservable` *extends* [`ComputationWithSideEffectsLike`](ComputationWithSideEffectsLike.md) ? [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\> *extends* [`MulticastComputationLike`](MulticastComputationLike.md) ? [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<[`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\>\> : [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> : `never`

#### Type Parameters

• **T**

#### Parameters

##### options?

###### scheduler?

[`SchedulerLike`](../../utils/interfaces/SchedulerLike.md)

#### Returns

`Function`

##### Type Parameters

• **TObservable** *extends* [`ObservableLike`](ObservableLike.md)\<`T`\>

##### Parameters

###### iterable

`TObservable`

##### Returns

`TObservable` *extends* [`PureComputationLike`](PureComputationLike.md) ? [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\> : `TObservable` *extends* [`ComputationWithSideEffectsLike`](ComputationWithSideEffectsLike.md) ? [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\> *extends* [`MulticastComputationLike`](MulticastComputationLike.md) ? [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<[`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\>\> : [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> : `never`

***

### fromProducer()

> **fromProducer**\<`T`\>(): \<`TProducer`\>(`iterable`) => `TProducer` *extends* [`PureComputationLike`](PureComputationLike.md) ? [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\> : `TProducer` *extends* [`ComputationWithSideEffectsLike`](ComputationWithSideEffectsLike.md) ? [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\> *extends* [`MulticastComputationLike`](MulticastComputationLike.md) ? [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<[`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\>\> : [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> : `never`

#### Type Parameters

• **T**

#### Returns

`Function`

##### Type Parameters

• **TProducer** *extends* [`ProducerLike`](ProducerLike.md)\<`T`\>

##### Parameters

###### iterable

`TProducer`

##### Returns

`TProducer` *extends* [`PureComputationLike`](PureComputationLike.md) ? [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\> : `TProducer` *extends* [`ComputationWithSideEffectsLike`](ComputationWithSideEffectsLike.md) ? [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\> *extends* [`MulticastComputationLike`](MulticastComputationLike.md) ? [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<[`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\>\> : [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> : `never`
