[**Reactive-JS**](../../../README.md) • **Docs**

***

[Reactive-JS](../../../README.md) / [collections/Enumerable](../README.md) / EnumerableModule

# Interface: EnumerableModule

## Extends

- [`DeferredComputationModule`](../../../computations/interfaces/DeferredComputationModule.md)\<[`EnumerableComputation`](EnumerableComputation.md)\>.[`PureStatelessComputationModule`](../../../computations/interfaces/PureStatelessComputationModule.md)\<[`EnumerableComputation`](EnumerableComputation.md)\>.[`PureStatefulComputationModule`](../../../computations/interfaces/PureStatefulComputationModule.md)\<[`EnumerableComputation`](EnumerableComputation.md)\>

## Methods

### buffer()

> **buffer**\<`T`\>(`options`?): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<[`EnumerableComputation`](EnumerableComputation.md), `T`, readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

• **options?**

• **options.count?**: `number`

#### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<[`EnumerableComputation`](EnumerableComputation.md), `T`, readonly `T`[]\>

#### Inherited from

[`PureStatefulComputationModule`](../../../computations/interfaces/PureStatefulComputationModule.md).[`buffer`](../../../computations/interfaces/PureStatefulComputationModule.md#buffer)

***

### concat()

> **concat**\<`T`\>(`fst`, `snd`, ...`tail`): [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

• **fst**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>

• **snd**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>

• ...**tail**: readonly [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>[]

#### Returns

[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>

***

### concatAll()

> **concatAll**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>\>, [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>\>, [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>\>

***

### concatMany()

> **concatMany**\<`T`\>(`enumerables`): [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

• **enumerables**: readonly [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>[]

#### Returns

[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>

***

### concatMap()

> **concatMap**\<`TA`, `TB`\>(`selector`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TA`\>, [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TB`\>\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

• **selector**: [`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TB`\>\>

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TA`\>, [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TB`\>\>

***

### concatWith()

> **concatWith**\<`T`\>(`snd`, ...`tail`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>, [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

• **snd**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>

• ...**tail**: readonly [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>[]

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>, [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>\>

***

### decodeWithCharset()

> **decodeWithCharset**(`options`?): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<[`EnumerableComputation`](EnumerableComputation.md), `ArrayBuffer`, `string`\>

#### Parameters

• **options?**

• **options.charset?**: `string`

• **options.fatal?**: `boolean`

• **options.ignoreBOM?**: `boolean`

#### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<[`EnumerableComputation`](EnumerableComputation.md), `ArrayBuffer`, `string`\>

#### Inherited from

[`PureStatefulComputationModule`](../../../computations/interfaces/PureStatefulComputationModule.md).[`decodeWithCharset`](../../../computations/interfaces/PureStatefulComputationModule.md#decodewithcharset)

***

### distinctUntilChanged()

> **distinctUntilChanged**\<`T`\>(`options`?): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<[`EnumerableComputation`](EnumerableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

• **options?**

• **options.equality?**: [`Equality`](../../../functions/type-aliases/Equality.md)\<`T`\>

#### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<[`EnumerableComputation`](EnumerableComputation.md), `T`, `T`\>

#### Inherited from

[`PureStatefulComputationModule`](../../../computations/interfaces/PureStatefulComputationModule.md).[`distinctUntilChanged`](../../../computations/interfaces/PureStatefulComputationModule.md#distinctuntilchanged)

***

### empty()

> **empty**\<`T`\>(): [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Returns

[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>

***

### fromReadonlyArray()

> **fromReadonlyArray**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

• **options?**

• **options.count?**: `number`

• **options.start?**: `number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>\>

#### Inherited from

[`DeferredComputationModule`](../../../computations/interfaces/DeferredComputationModule.md).[`fromReadonlyArray`](../../../computations/interfaces/DeferredComputationModule.md#fromreadonlyarray)

***

### generate()

> **generate**\<`T`\>(`generator`, `initialValue`): [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

• **generator**: [`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>

• **initialValue**: [`Factory`](../../../functions/type-aliases/Factory.md)\<`T`\>

#### Returns

[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>

#### Overrides

[`DeferredComputationModule`](../../../computations/interfaces/DeferredComputationModule.md).[`generate`](../../../computations/interfaces/DeferredComputationModule.md#generate)

***

### keep()

> **keep**\<`T`\>(`predicate`): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<[`EnumerableComputation`](EnumerableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

• **predicate**: [`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

#### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<[`EnumerableComputation`](EnumerableComputation.md), `T`, `T`\>

#### Inherited from

[`PureStatelessComputationModule`](../../../computations/interfaces/PureStatelessComputationModule.md).[`keep`](../../../computations/interfaces/PureStatelessComputationModule.md#keep)

***

### map()

> **map**\<`TA`, `TB`\>(`selector`): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<[`EnumerableComputation`](EnumerableComputation.md), `TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

• **selector**: [`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, `TB`\>

#### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<[`EnumerableComputation`](EnumerableComputation.md), `TA`, `TB`\>

#### Inherited from

[`PureStatelessComputationModule`](../../../computations/interfaces/PureStatelessComputationModule.md).[`map`](../../../computations/interfaces/PureStatelessComputationModule.md#map)

***

### pairwise()

> **pairwise**\<`T`\>(): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<[`EnumerableComputation`](EnumerableComputation.md), `T`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<[`EnumerableComputation`](EnumerableComputation.md), `T`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

#### Inherited from

[`PureStatefulComputationModule`](../../../computations/interfaces/PureStatefulComputationModule.md).[`pairwise`](../../../computations/interfaces/PureStatefulComputationModule.md#pairwise)

***

### reduce()

> **reduce**\<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

• **reducer**: [`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

• **initialValue**: [`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>, `TAcc`\>

***

### repeat()

#### repeat(predicate)

> **repeat**\<`T`\>(`predicate`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>, [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

• **predicate**: [`Predicate`](../../../functions/type-aliases/Predicate.md)\<`number`\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>, [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>\>

#### repeat(count)

> **repeat**\<`T`\>(`count`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>, [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

• **count**: `number`

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>, [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>\>

#### repeat()

> **repeat**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>, [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>, [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>\>

***

### scan()

> **scan**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<[`EnumerableComputation`](EnumerableComputation.md), `T`, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

• **scanner**: [`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

• **initialValue**: [`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<[`EnumerableComputation`](EnumerableComputation.md), `T`, `TAcc`\>

#### Inherited from

[`PureStatefulComputationModule`](../../../computations/interfaces/PureStatefulComputationModule.md).[`scan`](../../../computations/interfaces/PureStatefulComputationModule.md#scan)

***

### skipFirst()

> **skipFirst**\<`T`\>(`options`?): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<[`EnumerableComputation`](EnumerableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

• **options?**

• **options.count?**: `number`

#### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<[`EnumerableComputation`](EnumerableComputation.md), `T`, `T`\>

#### Inherited from

[`PureStatefulComputationModule`](../../../computations/interfaces/PureStatefulComputationModule.md).[`skipFirst`](../../../computations/interfaces/PureStatefulComputationModule.md#skipfirst)

***

### takeFirst()

> **takeFirst**\<`T`\>(`options`?): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<[`EnumerableComputation`](EnumerableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

• **options?**

• **options.count?**: `number`

#### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<[`EnumerableComputation`](EnumerableComputation.md), `T`, `T`\>

#### Inherited from

[`PureStatefulComputationModule`](../../../computations/interfaces/PureStatefulComputationModule.md).[`takeFirst`](../../../computations/interfaces/PureStatefulComputationModule.md#takefirst)

***

### takeWhile()

> **takeWhile**\<`T`\>(`predicate`, `options`?): [`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<[`EnumerableComputation`](EnumerableComputation.md), `T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

• **predicate**: [`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

• **options?**

• **options.inclusive?**: `boolean`

#### Returns

[`ComputationOperator`](../../../computations/type-aliases/ComputationOperator.md)\<[`EnumerableComputation`](EnumerableComputation.md), `T`, `T`\>

#### Inherited from

[`PureStatefulComputationModule`](../../../computations/interfaces/PureStatefulComputationModule.md).[`takeWhile`](../../../computations/interfaces/PureStatefulComputationModule.md#takewhile)

***

### toReadonlyArray()

> **toReadonlyArray**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>, readonly `T`[]\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`T`\>, readonly `T`[]\>

***

### zip()

#### zip(a, b)

> **zip**\<`TA`, `TB`\>(`a`, `b`): [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

• **a**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TA`\>

• **b**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TB`\>

##### Returns

[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### zip(a, b, c)

> **zip**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

• **a**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TA`\>

• **b**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TB`\>

• **c**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TC`\>

##### Returns

[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

#### zip(a, b, c, d)

> **zip**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

• **a**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TA`\>

• **b**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TB`\>

• **c**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TC`\>

• **d**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TD`\>

##### Returns

[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

#### zip(a, b, c, d, e)

> **zip**\<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple5`](../../../functions/type-aliases/Tuple5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

##### Parameters

• **a**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TA`\>

• **b**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TB`\>

• **c**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TC`\>

• **d**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TD`\>

• **e**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TE`\>

##### Returns

[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple5`](../../../functions/type-aliases/Tuple5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

#### zip(a, b, c, d, e, f)

> **zip**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple6`](../../../functions/type-aliases/Tuple6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

##### Parameters

• **a**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TA`\>

• **b**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TB`\>

• **c**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TC`\>

• **d**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TD`\>

• **e**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TE`\>

• **f**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TF`\>

##### Returns

[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple6`](../../../functions/type-aliases/Tuple6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

#### zip(a, b, c, d, e, f, g)

> **zip**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple7`](../../../functions/type-aliases/Tuple7.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

##### Parameters

• **a**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TA`\>

• **b**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TB`\>

• **c**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TC`\>

• **d**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TD`\>

• **e**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TE`\>

• **f**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TF`\>

• **g**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TG`\>

##### Returns

[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple7`](../../../functions/type-aliases/Tuple7.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

#### zip(a, b, c, d, e, f, g, h)

> **zip**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple8`](../../../functions/type-aliases/Tuple8.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

• **TH**

##### Parameters

• **a**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TA`\>

• **b**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TB`\>

• **c**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TC`\>

• **d**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TD`\>

• **e**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TE`\>

• **f**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TF`\>

• **g**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TG`\>

• **h**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TH`\>

##### Returns

[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple8`](../../../functions/type-aliases/Tuple8.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

#### zip(a, b, c, d, e, f, g, h, i)

> **zip**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple9`](../../../functions/type-aliases/Tuple9.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

• **TH**

• **TI**

##### Parameters

• **a**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TA`\>

• **b**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TB`\>

• **c**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TC`\>

• **d**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TD`\>

• **e**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TE`\>

• **f**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TF`\>

• **g**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TG`\>

• **h**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TH`\>

• **i**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TI`\>

##### Returns

[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple9`](../../../functions/type-aliases/Tuple9.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

***

### zipWith()

#### zipWith(b)

> **zipWith**\<`TA`, `TB`\>(`b`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TA`\>, [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

• **b**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TB`\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TA`\>, [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>\>

#### zipWith(b, c)

> **zipWith**\<`TA`, `TB`, `TC`\>(`b`, `c`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TA`\>, [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

• **b**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TB`\>

• **c**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TC`\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TA`\>, [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>\>

#### zipWith(b, c, d)

> **zipWith**\<`TA`, `TB`, `TC`, `TD`\>(`b`, `c`, `d`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TA`\>, [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

• **b**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TB`\>

• **c**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TC`\>

• **d**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TD`\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TA`\>, [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>\>

#### zipWith(b, c, d, e)

> **zipWith**\<`TA`, `TB`, `TC`, `TD`, `TE`\>(`b`, `c`, `d`, `e`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TA`\>, [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple5`](../../../functions/type-aliases/Tuple5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

##### Parameters

• **b**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TB`\>

• **c**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TC`\>

• **d**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TD`\>

• **e**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TE`\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TA`\>, [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple5`](../../../functions/type-aliases/Tuple5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>\>

#### zipWith(b, c, d, e, f)

> **zipWith**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`b`, `c`, `d`, `e`, `f`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TA`\>, [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple6`](../../../functions/type-aliases/Tuple6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

##### Parameters

• **b**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TB`\>

• **c**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TC`\>

• **d**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TD`\>

• **e**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TE`\>

• **f**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TF`\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TA`\>, [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple6`](../../../functions/type-aliases/Tuple6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>\>

#### zipWith(b, c, d, e, f, g)

> **zipWith**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`b`, `c`, `d`, `e`, `f`, `g`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TA`\>, [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple7`](../../../functions/type-aliases/Tuple7.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

##### Parameters

• **b**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TB`\>

• **c**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TC`\>

• **d**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TD`\>

• **e**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TE`\>

• **f**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TF`\>

• **g**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TG`\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TA`\>, [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple7`](../../../functions/type-aliases/Tuple7.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>\>

#### zipWith(b, c, d, e, f, g, h)

> **zipWith**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TA`\>, [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple8`](../../../functions/type-aliases/Tuple8.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

• **TH**

##### Parameters

• **b**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TB`\>

• **c**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TC`\>

• **d**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TD`\>

• **e**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TE`\>

• **f**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TF`\>

• **g**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TG`\>

• **h**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TH`\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TA`\>, [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple8`](../../../functions/type-aliases/Tuple8.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>\>

#### zipWith(b, c, d, e, f, g, h, i)

> **zipWith**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TA`\>, [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple9`](../../../functions/type-aliases/Tuple9.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

• **TH**

• **TI**

##### Parameters

• **b**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TB`\>

• **c**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TC`\>

• **d**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TD`\>

• **e**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TE`\>

• **f**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TF`\>

• **g**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TG`\>

• **h**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TH`\>

• **i**: [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TI`\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EnumerableLike`](../../interfaces/EnumerableLike.md)\<`TA`\>, [`EnumerableLike`](../../interfaces/EnumerableLike.md)\<[`Tuple9`](../../../functions/type-aliases/Tuple9.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>\>
