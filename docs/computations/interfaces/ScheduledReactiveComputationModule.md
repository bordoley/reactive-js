[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ScheduledReactiveComputationModule

# Interface: ScheduledReactiveComputationModule\<TComputationType\>

## Extends

- [`ComputationModuleLike`](ComputationModuleLike.md)\<`TComputationType`\>

## Extended by

- [`ObservableModule`](../Observable/interfaces/ObservableModule.md)
- [`SynchronousObservableModule`](../SynchronousObservable/interfaces/SynchronousObservableModule.md)

## Type Parameters

• **TComputationType** *extends* [`ComputationTypeLike`](ComputationTypeLike.md)

## Properties

### \[ComputationModuleLike\_computationType\]?

> `optional` **\[ComputationModuleLike\_computationType\]**: `TComputationType`

#### Inherited from

[`ComputationModuleLike`](ComputationModuleLike.md).[`[ComputationModuleLike_computationType]`](ComputationModuleLike.md#computationmodulelike_computationtype)

***

### currentTime

> **currentTime**: [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `number`\>

## Methods

### compute()

> **compute**\<`T`\>(`computation`, `options`?): [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### computation

[`Factory`](../../functions/type-aliases/Factory.md)\<`T`\>

##### options?

###### mode?

`"batched"` \| `"combine-latest"`

#### Returns

[`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

***

### delay()

> **delay**(`duration`): [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `unknown`\>

#### Parameters

##### duration

`number`

#### Returns

[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `unknown`\>

***

### keyFrame()

> **keyFrame**(`duration`, `options`?): [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `number`\>

#### Parameters

##### duration

`number`

##### options?

###### easing?

[`Function1`](../../functions/type-aliases/Function1.md)\<`number`, `number`\>

#### Returns

[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `number`\>

***

### spring()

> **spring**(`options`?): [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `number`\>

#### Parameters

##### options?

###### damping?

`number`

###### precision?

`number`

###### stiffness?

`number`

#### Returns

[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `number`\>

***

### throttle()

> **throttle**\<`T`\>(`duration`, `options`?): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### duration

`number`

##### options?

###### mode?

`"interval"` \| `"first"` \| `"last"`

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

***

### withCurrentTime()

> **withCurrentTime**\<`TA`, `TB`\>(`selector`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function2`](../../functions/type-aliases/Function2.md)\<`number`, `TA`, `TB`\>

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `TA`, `TB`\>
