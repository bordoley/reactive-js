[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / Signature

# Interface: Signature

## Methods

### areAllPure()

> **areAllPure**\<`TComputationType`\>(`computations`): `computations is readonly (TComputationType & PureComputationLike)[]`

#### Type Parameters

• **TComputationType** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computations

readonly `TComputationType`[]

#### Returns

`computations is readonly (TComputationType & PureComputationLike)[]`

***

### areAllSynchronous()

> **areAllSynchronous**\<`TComputationType`\>(`computations`): `computations is readonly (TComputationType & SynchronousComputationLike)[]`

#### Type Parameters

• **TComputationType** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computations

readonly `TComputationType`[]

#### Returns

`computations is readonly (TComputationType & SynchronousComputationLike)[]`

***

### broadcast()

> **broadcast**\<`TComputationModule`\>(`m`): \<`T`\>(`options`?) => [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOfModule`](../../type-aliases/ComputationOfModule.md)\<`TComputationModule`, `T`\>, [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\> & [`PauseableLike`](../../../utils/interfaces/PauseableLike.md) & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **TComputationModule** *extends* [`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<[`AnyComputationType`](../../type-aliases/AnyComputationType.md), \{\}\>, `"toProducer"`\>

#### Parameters

##### m

`TComputationModule`

#### Returns

`Function`

##### Type Parameters

• **T**

##### Parameters

###### options?

`object` & `Parameters`\<`TComputationModule`\[`"toProducer"`\]\>\[`0`\]

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOfModule`](../../type-aliases/ComputationOfModule.md)\<`TComputationModule`, `T`\>, [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`T`\> & [`PauseableLike`](../../../utils/interfaces/PauseableLike.md) & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

***

### concatWith()

> **concatWith**\<`TComputationModule`\>(`m`): [`ConcatWithOperator`](ConcatWithOperator.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>\>

#### Type Parameters

• **TComputationModule** *extends* [`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md)\<[`AnyComputationType`](../../type-aliases/AnyComputationType.md), \{\}\>, `"concat"`\>

#### Parameters

##### m

`TComputationModule`

#### Returns

[`ConcatWithOperator`](ConcatWithOperator.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>\>

***

### empty()

> **empty**\<`TComputationModule`\>(`m`): \<`T`\>() => [`NewPureInstanceOf`](../../type-aliases/NewPureInstanceOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\>

#### Type Parameters

• **TComputationModule** *extends* [`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<[`AnyComputationType`](../../type-aliases/AnyComputationType.md), \{\}\>, `"genPure"`\>

#### Parameters

##### m

`TComputationModule`

#### Returns

`Function`

##### Type Parameters

• **T**

##### Returns

[`NewPureInstanceOf`](../../type-aliases/NewPureInstanceOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\>

***

### fromReadonlyArray()

> **fromReadonlyArray**\<`TComputationModule`\>(`m`): \<`T`\>(`options`?) => [`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`NewPureInstanceOf`](../../type-aliases/NewPureInstanceOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\>\>

#### Type Parameters

• **TComputationModule** *extends* [`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<[`AnyComputationType`](../../type-aliases/AnyComputationType.md), \{\}\>, `"genPure"`\>

#### Parameters

##### m

`TComputationModule`

#### Returns

`Function`

##### Type Parameters

• **T**

##### Parameters

###### options?

`object` & `Parameters`\<`TComputationModule`\[`"genPure"`\]\>\[`1`\]

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`NewPureInstanceOf`](../../type-aliases/NewPureInstanceOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\>\>

***

### isDeferred()

> **isDeferred**\<`TComputationType`\>(`computation`): `computation is TComputationType & DeferredComputationLike`

#### Type Parameters

• **TComputationType** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md) = [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputationType`

#### Returns

`computation is TComputationType & DeferredComputationLike`

***

### isPure()

> **isPure**\<`TComputationType`\>(`computation`): `computation is TComputationType & PureComputationLike`

#### Type Parameters

• **TComputationType** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md) = [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputationType`

#### Returns

`computation is TComputationType & PureComputationLike`

***

### isSynchronous()

> **isSynchronous**\<`TComputationType`\>(`computation`): `computation is TComputationType & SynchronousComputationLike`

#### Type Parameters

• **TComputationType** *extends* [`ComputationLike`](../../interfaces/ComputationLike.md) = [`ComputationLike`](../../interfaces/ComputationLike.md)

#### Parameters

##### computation

`TComputationType`

#### Returns

`computation is TComputationType & SynchronousComputationLike`

***

### last()

> **last**\<`TComputationModule`\>(`m`): \<`T`\>(`options`?) => [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOfModule`](../../type-aliases/ComputationOfModule.md)\<`TComputationModule`, `T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **TComputationModule** *extends* [`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md)\<[`AnyComputationType`](../../type-aliases/AnyComputationType.md), \{\}\>, `"toRunnable"`\>

#### Parameters

##### m

`TComputationModule`

#### Returns

`Function`

##### Type Parameters

• **T**

##### Parameters

###### options?

`Parameters`\<`TComputationModule`\[`"toRunnable"`\]\>\[`0`\]

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOfModule`](../../type-aliases/ComputationOfModule.md)\<`TComputationModule`, `T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

***

### lastAsync()

> **lastAsync**\<`TComputationModule`\>(`m`): \<`T`\>(`options`?) => [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOfModule`](../../type-aliases/ComputationOfModule.md)\<`TComputationModule`, `T`\>, `Promise`\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>\>

#### Type Parameters

• **TComputationModule** *extends* [`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<[`AnyComputationType`](../../type-aliases/AnyComputationType.md), \{\}\>, `"toProducer"`\>

#### Parameters

##### m

`TComputationModule`

#### Returns

`Function`

##### Type Parameters

• **T**

##### Parameters

###### options?

`Parameters`\<`TComputationModule`\[`"toProducer"`\]\>\[`0`\]

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOfModule`](../../type-aliases/ComputationOfModule.md)\<`TComputationModule`, `T`\>, `Promise`\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>\>

***

### makeModule()

> **makeModule**\<`TComputationType`\>(): \<`TModule`\>(`o`) => `TModule` & `object`

#### Type Parameters

• **TComputationType**

#### Returns

`Function`

##### Type Parameters

• **TModule** *extends* `object` = \{\}

##### Parameters

###### o

`TModule`

##### Returns

`TModule` & `object`

***

### mergeWith()

> **mergeWith**\<`TComputationModule`\>(`m`): [`MergeWithOperator`](MergeWithOperator.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>\>

#### Type Parameters

• **TComputationModule** *extends* [`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`ConcurrentReactiveComputationModule`](../../interfaces/ConcurrentReactiveComputationModule.md)\<[`AnyComputationType`](../../type-aliases/AnyComputationType.md), \{\}\>, `"merge"`\>

#### Parameters

##### m

`TComputationModule`

#### Returns

[`MergeWithOperator`](MergeWithOperator.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>\>

***

### raise()

> **raise**\<`TComputationModule`\>(`m`): \<`T`\>(`options`?) => [`NewPureInstanceOf`](../../type-aliases/NewPureInstanceOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\>

#### Type Parameters

• **TComputationModule** *extends* [`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<[`AnyComputationType`](../../type-aliases/AnyComputationType.md), \{\}\>, `"genPure"`\>

#### Parameters

##### m

`TComputationModule`

#### Returns

`Function`

##### Type Parameters

• **T**

##### Parameters

###### options?

###### raise?

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

##### Returns

[`NewPureInstanceOf`](../../type-aliases/NewPureInstanceOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\>

***

### subscribe()

> **subscribe**\<`TComputationModule`\>(`m`): \<`T`\>(`options`?) => [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOfModule`](../../type-aliases/ComputationOfModule.md)\<`TComputationModule`, `T`\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **TComputationModule** *extends* [`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<[`AnyComputationType`](../../type-aliases/AnyComputationType.md), \{\}\>, `"toProducer"`\>

#### Parameters

##### m

`TComputationModule`

#### Returns

`Function`

##### Type Parameters

• **T**

##### Parameters

###### options?

`Parameters`\<`TComputationModule`\[`"toProducer"`\]\>\[`0`\]

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOfModule`](../../type-aliases/ComputationOfModule.md)\<`TComputationModule`, `T`\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

***

### toObservable()

> **toObservable**\<`TComputationModule`\>(`m`): \<`T`\>(`options`?) => \<`TComputationBaseOf`\>(`computation`) => `TComputationBaseOf` *extends* [`PureDeferredComputationOf`](../../type-aliases/PureDeferredComputationOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\> ? [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\> : `TComputationBaseOf` *extends* [`DeferredComputationWithSideEffectsOf`](../../type-aliases/DeferredComputationWithSideEffectsOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\> ? [`ObservableWithSideEffectsLike`](../../interfaces/ObservableWithSideEffectsLike.md)\<`T`\> : `TComputationBaseOf` *extends* [`MulticastComputationOf`](../../type-aliases/MulticastComputationOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\> ? [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\> : `never`

#### Type Parameters

• **TComputationModule** *extends* [`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<[`AnyComputationType`](../../type-aliases/AnyComputationType.md), \{\}\>, `"toProducer"`\>

#### Parameters

##### m

`TComputationModule`

#### Returns

`Function`

##### Type Parameters

• **T**

##### Parameters

###### options?

`Parameters`\<`TComputationModule`\[`"toProducer"`\]\>\[`0`\]

##### Returns

`Function`

###### Type Parameters

• **TComputationBaseOf** *extends* `any`

###### Parameters

###### computation

`TComputationBaseOf`

###### Returns

`TComputationBaseOf` *extends* [`PureDeferredComputationOf`](../../type-aliases/PureDeferredComputationOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\> ? [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\> : `TComputationBaseOf` *extends* [`DeferredComputationWithSideEffectsOf`](../../type-aliases/DeferredComputationWithSideEffectsOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\> ? [`ObservableWithSideEffectsLike`](../../interfaces/ObservableWithSideEffectsLike.md)\<`T`\> : `TComputationBaseOf` *extends* [`MulticastComputationOf`](../../type-aliases/MulticastComputationOf.md)\<[`ComputationTypeOfModule`](../../type-aliases/ComputationTypeOfModule.md)\<`TComputationModule`\>, `T`\> ? [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\> : `never`

***

### toReadonlyArray()

> **toReadonlyArray**\<`TComputationModule`\>(`m`): \<`T`\>(`options`?) => [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOfModule`](../../type-aliases/ComputationOfModule.md)\<`TComputationModule`, `T`\>, readonly `T`[]\>

#### Type Parameters

• **TComputationModule** *extends* [`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md)\<[`AnyComputationType`](../../type-aliases/AnyComputationType.md), \{\}\>, `"toRunnable"`\>

#### Parameters

##### m

`TComputationModule`

#### Returns

`Function`

##### Type Parameters

• **T**

##### Parameters

###### options?

`Parameters`\<`TComputationModule`\[`"toRunnable"`\]\>\[`0`\]

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOfModule`](../../type-aliases/ComputationOfModule.md)\<`TComputationModule`, `T`\>, readonly `T`[]\>

***

### toReadonlyArrayAsync()

> **toReadonlyArrayAsync**\<`TComputationModule`\>(`m`): \<`T`\>(`options`?) => [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOfModule`](../../type-aliases/ComputationOfModule.md)\<`TComputationModule`, `T`\>, `Promise`\<readonly `T`[]\>\>

#### Type Parameters

• **TComputationModule** *extends* [`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<[`AnyComputationType`](../../type-aliases/AnyComputationType.md), \{\}\>, `"toProducer"`\>

#### Parameters

##### m

`TComputationModule`

#### Returns

`Function`

##### Type Parameters

• **T**

##### Parameters

###### options?

`Parameters`\<`TComputationModule`\[`"toProducer"`\]\>\[`0`\]

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOfModule`](../../type-aliases/ComputationOfModule.md)\<`TComputationModule`, `T`\>, `Promise`\<readonly `T`[]\>\>
