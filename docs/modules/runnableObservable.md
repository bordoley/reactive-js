[Reactive-JS](../README.md) / runnableObservable

# Module: runnableObservable

## Table of contents

### References

- [RunnableObservableLike](runnableObservable.md#runnableobservablelike)

### Variables

- [concatAllT](runnableObservable.md#concatallt)
- [concatT](runnableObservable.md#concatt)
- [distinctUntilChangedT](runnableObservable.md#distinctuntilchangedt)
- [fromArrayT](runnableObservable.md#fromarrayt)
- [generateT](runnableObservable.md#generatet)
- [keepT](runnableObservable.md#keept)
- [mapT](runnableObservable.md#mapt)
- [repeatT](runnableObservable.md#repeatt)
- [scanT](runnableObservable.md#scant)
- [skipFirstT](runnableObservable.md#skipfirstt)
- [takeFirstT](runnableObservable.md#takefirstt)
- [takeLastT](runnableObservable.md#takelastt)
- [takeWhileT](runnableObservable.md#takewhilet)
- [toRunnableT](runnableObservable.md#torunnablet)
- [zipT](runnableObservable.md#zipt)

### Functions

- [concat](runnableObservable.md#concat)
- [concatAll](runnableObservable.md#concatall)
- [distinctUntilChanged](runnableObservable.md#distinctuntilchanged)
- [fromArray](runnableObservable.md#fromarray)
- [generate](runnableObservable.md#generate)
- [keep](runnableObservable.md#keep)
- [map](runnableObservable.md#map)
- [repeat](runnableObservable.md#repeat)
- [scan](runnableObservable.md#scan)
- [skipFirst](runnableObservable.md#skipfirst)
- [takeFirst](runnableObservable.md#takefirst)
- [takeLast](runnableObservable.md#takelast)
- [takeWhile](runnableObservable.md#takewhile)
- [toRunnable](runnableObservable.md#torunnable)
- [zip](runnableObservable.md#zip)

## References

### RunnableObservableLike

Re-exports [RunnableObservableLike](../interfaces/observable.RunnableObservableLike.md)

## Variables

### concatAllT

• `Const` **concatAllT**: [`ConcatAll`](../interfaces/container.ConcatAll.md)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>\>

___

### concatT

• `Const` **concatT**: [`Concat`](../interfaces/container.Concat.md)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>\>

___

### distinctUntilChangedT

• `Const` **distinctUntilChangedT**: [`DistinctUntilChanged`](../interfaces/container.DistinctUntilChanged.md)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>\>

___

### fromArrayT

• `Const` **fromArrayT**: [`FromArray`](../interfaces/container.FromArray.md)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>, { `delay`: `number` ; `delayStart`: `boolean` ; `endIndex`: `number` ; `startIndex`: `number`  }\>

___

### generateT

• `Const` **generateT**: [`Generate`](../interfaces/container.Generate.md)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>\>

___

### keepT

• `Const` **keepT**: [`Keep`](../interfaces/container.Keep.md)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>\>

___

### mapT

• `Const` **mapT**: [`Map`](../interfaces/container.Map.md)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>\>

___

### repeatT

• `Const` **repeatT**: [`Repeat`](../interfaces/container.Repeat.md)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>\>

___

### scanT

• `Const` **scanT**: [`Scan`](../interfaces/container.Scan.md)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>\>

___

### skipFirstT

• `Const` **skipFirstT**: [`SkipFirst`](../interfaces/container.SkipFirst.md)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>\>

___

### takeFirstT

• `Const` **takeFirstT**: [`TakeFirst`](../interfaces/container.TakeFirst.md)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>\>

___

### takeLastT

• `Const` **takeLastT**: [`TakeLast`](../interfaces/container.TakeLast.md)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>\>

___

### takeWhileT

• `Const` **takeWhileT**: [`TakeWhile`](../interfaces/container.TakeWhile.md)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>\>

___

### toRunnableT

• `Const` **toRunnableT**: [`ToRunnable`](../interfaces/runnable.ToRunnable.md)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>\>

___

### zipT

• `Const` **zipT**: [`Zip`](../interfaces/container.Zip.md)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>\>

## Functions

### concat

▸ **concat**<`T`\>(`fst`, `snd`, ...`tail`): [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`T`\> |
| `snd` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`T`\> |
| `...tail` | readonly [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`T`\>[] |

#### Returns

[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`T`\>

___

### concatAll

▸ **concatAll**<`T`\>(`options?`): [`ContainerOperator`](container.md#containeroperator)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>, [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<`Record`<`string`, `never`\>\> |

#### Returns

[`ContainerOperator`](container.md#containeroperator)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>, [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`T`\>, `T`\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`ContainerOperator`](container.md#containeroperator)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](container.md#containeroperator)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### fromArray

▸ **fromArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<{ `delay`: `number` ; `delayStart`: `boolean` ; `endIndex`: `number` ; `startIndex`: `number`  }\> |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`T`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](container.md#containeroperator)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](container.md#containeroperator)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`): [`ContainerOperator`](container.md#containeroperator)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>, `TA`, `TB`\>

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

[`ContainerOperator`](container.md#containeroperator)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>, `TA`, `TB`\>

___

### repeat

▸ **repeat**<`T`\>(`predicate`): [`ContainerOperator`](container.md#containeroperator)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`number`\> |

#### Returns

[`ContainerOperator`](container.md#containeroperator)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

▸ **repeat**<`T`\>(`count`): [`ContainerOperator`](container.md#containeroperator)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`ContainerOperator`](container.md#containeroperator)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

▸ **repeat**<`T`\>(): [`ContainerOperator`](container.md#containeroperator)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](container.md#containeroperator)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`ContainerOperator`](container.md#containeroperator)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

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

[`ContainerOperator`](container.md#containeroperator)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>, `T`, `TAcc`\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`ContainerOperator`](container.md#containeroperator)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](container.md#containeroperator)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`ContainerOperator`](container.md#containeroperator)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](container.md#containeroperator)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeLast

▸ **takeLast**<`T`\>(`options?`): [`ContainerOperator`](container.md#containeroperator)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](container.md#containeroperator)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`ContainerOperator`](container.md#containeroperator)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

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

[`ContainerOperator`](container.md#containeroperator)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`unknown`\>, `T`, `T`\>

___

### toRunnable

▸ **toRunnable**<`T`\>(): [`Function1`](functions.md#function1)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`T`\>, [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`T`\>, [`RunnableLike`](../interfaces/runnable.RunnableLike.md)<`T`\>\>

___

### zip

▸ **zip**<`TA`, `TB`\>(`a`, `b`): [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TA`\> |
| `b` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TB`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<readonly [`TA`, `TB`]\>

▸ **zip**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TA`\> |
| `b` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TB`\> |
| `c` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TC`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TA`\> |
| `b` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TB`\> |
| `c` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TC`\> |
| `d` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TD`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TA`\> |
| `b` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TB`\> |
| `c` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TC`\> |
| `d` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TD`\> |
| `e` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TE`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TA`\> |
| `b` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TB`\> |
| `c` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TC`\> |
| `d` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TD`\> |
| `e` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TE`\> |
| `f` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TF`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TA`\> |
| `b` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TB`\> |
| `c` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TC`\> |
| `d` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TD`\> |
| `e` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TE`\> |
| `f` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TF`\> |
| `g` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TG`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TA`\> |
| `b` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TB`\> |
| `c` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TC`\> |
| `d` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TD`\> |
| `e` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TE`\> |
| `f` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TF`\> |
| `g` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TG`\> |
| `h` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TH`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zip**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TA`\> |
| `b` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TB`\> |
| `c` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TC`\> |
| `d` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TD`\> |
| `e` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TE`\> |
| `f` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TF`\> |
| `g` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TG`\> |
| `h` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TH`\> |
| `i` | [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`TI`\> |

#### Returns

[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

▸ **zip**<`T`\>(...`enumerables`): [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<readonly `T`[]\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...enumerables` | readonly [`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<`T`\>[] |

#### Returns

[`RunnableObservableLike`](../interfaces/observable.RunnableObservableLike.md)<readonly `T`[]\>
