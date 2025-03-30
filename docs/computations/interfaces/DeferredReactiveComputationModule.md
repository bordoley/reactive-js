[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / DeferredReactiveComputationModule

# Interface: DeferredReactiveComputationModule\<TComputationType\>

## Extends

- [`ComputationModuleLike`](ComputationModuleLike.md)\<`TComputationType`\>

## Extended by

- [`ObservableModule`](../Observable/interfaces/ObservableModule.md)
- [`ProducerModule`](../Producer/interfaces/ProducerModule.md)

## Type Parameters

• **TComputationType** *extends* [`AnyComputationType`](../type-aliases/AnyComputationType.md) = [`AnyComputationType`](../type-aliases/AnyComputationType.md)

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: `TComputationType`

#### Inherited from

[`ComputationModuleLike`](ComputationModuleLike.md).[`[ComputationModuleLike_computationType]`](ComputationModuleLike.md#computationmodulelike_computationtype)

## Methods

### mergeAll()

> **mergeAll**\<`T`, `TInnerLike`\>(`options`): [`HigherOrderComputationOperator`](../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, `TInnerLike`, [`HigherOrderInnerComputationOf`](../type-aliases/HigherOrderInnerComputationOf.md)\<`TComputationType`, `TInnerLike`, `T`\>, `T`\>

#### Type Parameters

• **T**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../type-aliases/HigherOrderInnerComputationLike.md)

#### Parameters

##### options

`object` & `TInnerLike`

#### Returns

[`HigherOrderComputationOperator`](../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, `TInnerLike`, [`HigherOrderInnerComputationOf`](../type-aliases/HigherOrderInnerComputationOf.md)\<`TComputationType`, `TInnerLike`, `T`\>, `T`\>

***

### scanMany()

> **scanMany**\<`T`, `TAcc`, `TInnerLike`\>(`scanner`, `initialValue`, `options`): [`HigherOrderComputationOperator`](../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, `TInnerLike`, `T`, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../type-aliases/HigherOrderInnerComputationLike.md)

#### Parameters

##### scanner

[`Function2`](../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`HigherOrderInnerComputationOf`](../type-aliases/HigherOrderInnerComputationOf.md)\<`TComputationType`, `TInnerLike`, `TAcc`\>\>

##### initialValue

[`Factory`](../../functions/type-aliases/Factory.md)\<`TAcc`\>

##### options

`TInnerLike`

#### Returns

[`HigherOrderComputationOperator`](../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, `TInnerLike`, `T`, `TAcc`\>

***

### switchAll()

> **switchAll**\<`T`, `TInnerLike`\>(`innerType`): [`HigherOrderComputationOperator`](../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, `TInnerLike`, [`HigherOrderInnerComputationOf`](../type-aliases/HigherOrderInnerComputationOf.md)\<`TComputationType`, `TInnerLike`, `T`\>, `T`\>

#### Type Parameters

• **T**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../type-aliases/HigherOrderInnerComputationLike.md)

#### Parameters

##### innerType

`TInnerLike`

#### Returns

[`HigherOrderComputationOperator`](../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, `TInnerLike`, [`HigherOrderInnerComputationOf`](../type-aliases/HigherOrderInnerComputationOf.md)\<`TComputationType`, `TInnerLike`, `T`\>, `T`\>

***

### withBackpressure()

> **withBackpressure**\<`T`\>(`config`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### config

###### backpressureStrategy

[`BackpressureStrategy`](../../utils/type-aliases/BackpressureStrategy.md)

###### capacity

`number`

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>
