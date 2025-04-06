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

### debounce()

> **debounce**\<`T`\>(`duration`): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### duration

`number`

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

***

### delay()

> **delay**(`duration`): [`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `unknown`\>

#### Parameters

##### duration

`number`

#### Returns

[`PureComputationOf`](../type-aliases/PureComputationOf.md)\<`TComputationType`, `unknown`\>

***

### gen()

> **gen**\<`T`\>(`factory`): [`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Function1`](../../functions/type-aliases/Function1.md)\<[`ClockLike`](../../utils/interfaces/ClockLike.md), `Iterator`\<[`YieldDelay`](../../utils/classes/YieldDelay.md) \| `T`, `any`, `any`\>\>

#### Returns

[`ComputationWithSideEffectsOf`](../type-aliases/ComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\>

***

### genPure()

> **genPure**\<`T`\>(`factory`): [`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Function1`](../../functions/type-aliases/Function1.md)\<[`ClockLike`](../../utils/interfaces/ClockLike.md), `Iterator`\<[`YieldDelay`](../../utils/classes/YieldDelay.md) \| `T`, `any`, `any`\>\>

#### Returns

[`NewPureInstanceOf`](../type-aliases/NewPureInstanceOf.md)\<`TComputationType`, `T`\>

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

### retry()

> **retry**\<`T`\>(`shouldRetry`?): [`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### shouldRetry?

(`count`, `error`) => `number` \| `boolean`

#### Returns

[`PureComputationOperator`](../type-aliases/PureComputationOperator.md)\<`TComputationType`, `T`, `T`\>

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
