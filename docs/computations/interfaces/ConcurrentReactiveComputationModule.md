[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ConcurrentReactiveComputationModule

# Interface: ConcurrentReactiveComputationModule\<Type, TComputation\>

## Extended by

- [`EventSourceModule`](../../events/EventSource/interfaces/EventSourceModule.md)

## Type Parameters

• **Type** *extends* [`ReactiveComputationLike`](ReactiveComputationLike.md)

• **TComputation** *extends* [`Computation`](Computation.md)

## Methods

### fromPromise()

> **fromPromise**\<`T`\>(): [`Function1`](../../functions/type-aliases/Function1.md)\<`Promise`\<`T`\>, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<`Promise`\<`T`\>, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>\>

***

### merge()

> **merge**\<`T`\>(`fst`, `snd`, ...`tail`): [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### fst

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>

##### snd

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>

##### tail

...readonly [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>[]

#### Returns

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>

***

### mergeMany()

> **mergeMany**\<`T`\>(`eventSources`): [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### eventSources

readonly [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>[]

#### Returns

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>

***

### mergeWith()

> **mergeWith**\<`T`\>(`snd`, ...`tail`): [`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### snd

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>

##### tail

...readonly [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>[]

#### Returns

[`Function1`](../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>, [`ComputationOf`](../type-aliases/ComputationOf.md)\<`Type`, `TComputation`, `T`\>\>
