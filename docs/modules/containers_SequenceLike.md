[Reactive-JS](../README.md) / containers/SequenceLike

# Module: containers/SequenceLike

## Table of contents

### Variables

- [concatAllT](containers_SequenceLike.md#concatallt)
- [concatT](containers_SequenceLike.md#concatt)
- [distinctUntilChangedT](containers_SequenceLike.md#distinctuntilchangedt)
- [generateT](containers_SequenceLike.md#generatet)
- [keepT](containers_SequenceLike.md#keept)
- [mapT](containers_SequenceLike.md#mapt)
- [pairwiseT](containers_SequenceLike.md#pairwiset)
- [repeatT](containers_SequenceLike.md#repeatt)
- [scanT](containers_SequenceLike.md#scant)
- [skipFirstT](containers_SequenceLike.md#skipfirstt)
- [takeFirstT](containers_SequenceLike.md#takefirstt)
- [takeLastT](containers_SequenceLike.md#takelastt)
- [takeWhileT](containers_SequenceLike.md#takewhilet)
- [toEnumerableT](containers_SequenceLike.md#toenumerablet)
- [toReadonlyArrayT](containers_SequenceLike.md#toreadonlyarrayt)
- [toRunnableT](containers_SequenceLike.md#torunnablet)
- [zipT](containers_SequenceLike.md#zipt)

### Functions

- [concat](containers_SequenceLike.md#concat)
- [concatAll](containers_SequenceLike.md#concatall)
- [distinctUntilChanged](containers_SequenceLike.md#distinctuntilchanged)
- [generate](containers_SequenceLike.md#generate)
- [keep](containers_SequenceLike.md#keep)
- [map](containers_SequenceLike.md#map)
- [pairwise](containers_SequenceLike.md#pairwise)
- [repeat](containers_SequenceLike.md#repeat)
- [scan](containers_SequenceLike.md#scan)
- [seek](containers_SequenceLike.md#seek)
- [skipFirst](containers_SequenceLike.md#skipfirst)
- [takeFirst](containers_SequenceLike.md#takefirst)
- [takeLast](containers_SequenceLike.md#takelast)
- [takeWhile](containers_SequenceLike.md#takewhile)
- [toEnumerable](containers_SequenceLike.md#toenumerable)
- [toReadonlyArray](containers_SequenceLike.md#toreadonlyarray)
- [toRunnable](containers_SequenceLike.md#torunnable)
- [zip](containers_SequenceLike.md#zip)

## Variables

### concatAllT

• `Const` **concatAllT**: [`ConcatAll`](containers.md#concatall)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)\>

___

### concatT

• `Const` **concatT**: [`Concat`](containers.md#concat)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)\>

___

### distinctUntilChangedT

• `Const` **distinctUntilChangedT**: [`DistinctUntilChanged`](containers.md#distinctuntilchanged)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)\>

___

### generateT

• `Const` **generateT**: [`Generate`](containers.md#generate)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)\>

___

### keepT

• `Const` **keepT**: [`Keep`](containers.md#keep)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)\>

___

### mapT

• `Const` **mapT**: [`Map`](containers.md#map)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)\>

___

### pairwiseT

• `Const` **pairwiseT**: [`Pairwise`](containers.md#pairwise)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)\>

___

### repeatT

• `Const` **repeatT**: [`Repeat`](containers.md#repeat)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)\>

___

### scanT

• `Const` **scanT**: [`Scan`](containers.md#scan)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)\>

___

### skipFirstT

• `Const` **skipFirstT**: [`SkipFirst`](containers.md#skipfirst)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)\>

___

### takeFirstT

• `Const` **takeFirstT**: [`TakeFirst`](containers.md#takefirst)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)\>

___

### takeLastT

• `Const` **takeLastT**: [`TakeLast`](containers.md#takelast)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)\>

___

### takeWhileT

• `Const` **takeWhileT**: [`TakeWhile`](containers.md#takewhile)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)\>

___

### toEnumerableT

• `Const` **toEnumerableT**: [`ToEnumerable`](ix.md#toenumerable)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)\>

___

### toReadonlyArrayT

• `Const` **toReadonlyArrayT**: [`ToReadonlyArray`](containers.md#toreadonlyarray)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)\>

___

### toRunnableT

• `Const` **toRunnableT**: [`ToRunnable`](rx.md#torunnable)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)\>

___

### zipT

• `Const` **zipT**: [`Zip`](containers.md#zip)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)\>

## Functions

### concat

▸ **concat**<`T`\>(`fst`, `snd`, ...`tail`): [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\> |
| `snd` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\> |
| `...tail` | readonly [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>[] |

#### Returns

[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>

___

### concatAll

▸ **concatAll**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](functions.md#equality)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`T`\> |
| `options?` | `undefined` |

#### Returns

[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `TA`, `TB`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `TA`, `TB`\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, readonly [`T`, `T`]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, readonly [`T`, `T`]\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`number`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

▸ **repeat**<`T`\>(): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### seek

▸ **seek**<`T`\>(`count`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |
| `options?` | `Object` |
| `options.inclusive?` | `boolean` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`unknown`\>, `T`, `T`\>

___

### toEnumerable

▸ **toEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`ReadonlyArrayLike`](../interfaces/containers.ReadonlyArrayLike.md)<`T`\>\>

___

### toRunnable

▸ **toRunnable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`SequenceLike`](../interfaces/containers.SequenceLike.md)<`T`\>, [`RunnableLike`](../interfaces/rx.RunnableLike.md)<`T`\>\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TA`\> |
| `b` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TB`\> |

#### Returns

[`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TA`\> |
| `b` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TB`\> |
| `c` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TC`\> |

#### Returns

[`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TA`\> |
| `b` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TB`\> |
| `c` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TC`\> |
| `d` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TD`\> |

#### Returns

[`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TA`\> |
| `b` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TB`\> |
| `c` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TC`\> |
| `d` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TD`\> |
| `e` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TE`\> |

#### Returns

[`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TA`\> |
| `b` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TB`\> |
| `c` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TC`\> |
| `d` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TD`\> |
| `e` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TE`\> |
| `f` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TF`\> |

#### Returns

[`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TA`\> |
| `b` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TB`\> |
| `c` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TC`\> |
| `d` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TD`\> |
| `e` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TE`\> |
| `f` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TF`\> |
| `g` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TG`\> |

#### Returns

[`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TA`\> |
| `b` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TB`\> |
| `c` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TC`\> |
| `d` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TD`\> |
| `e` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TE`\> |
| `f` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TF`\> |
| `g` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TG`\> |
| `h` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TH`\> |

#### Returns

[`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |
| `TG` |
| `TH` |
| `TI` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TA`\> |
| `b` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TB`\> |
| `c` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TC`\> |
| `d` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TD`\> |
| `e` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TE`\> |
| `f` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TF`\> |
| `g` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TG`\> |
| `h` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TH`\> |
| `i` | [`SequenceLike`](../interfaces/containers.SequenceLike.md)<`TI`\> |

#### Returns

[`SequenceLike`](../interfaces/containers.SequenceLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>
