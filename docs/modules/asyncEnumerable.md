[Reactive-JS](../README.md) / asyncEnumerable

# Module: asyncEnumerable

## Table of contents

### Classes

- [LiftedAsyncEnumerator](../classes/asyncEnumerable.LiftedAsyncEnumerator.md)

### Interfaces

- [AsyncEnumerableLike](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)

### Type Aliases

- [AsyncEnumerableOperator](asyncEnumerable.md#asyncenumerableoperator)
- [ConsumeContinue](asyncEnumerable.md#consumecontinue)
- [ConsumeDone](asyncEnumerable.md#consumedone)

### Variables

- [fromArrayT](asyncEnumerable.md#fromarrayt)
- [keepT](asyncEnumerable.md#keept)
- [mapT](asyncEnumerable.md#mapt)
- [scanT](asyncEnumerable.md#scant)
- [toObservableT](asyncEnumerable.md#toobservablet)
- [type](asyncEnumerable.md#type)

### Functions

- [consume](asyncEnumerable.md#consume)
- [consumeAsync](asyncEnumerable.md#consumeasync)
- [consumeContinue](asyncEnumerable.md#consumecontinue-1)
- [consumeDone](asyncEnumerable.md#consumedone-1)
- [createAsyncEnumerable](asyncEnumerable.md#createasyncenumerable)
- [createLiftedAsyncEnumerable](asyncEnumerable.md#createliftedasyncenumerable)
- [fromArray](asyncEnumerable.md#fromarray)
- [fromEnumerable](asyncEnumerable.md#fromenumerable)
- [fromIterable](asyncEnumerable.md#fromiterable)
- [generate](asyncEnumerable.md#generate)
- [keep](asyncEnumerable.md#keep)
- [map](asyncEnumerable.md#map)
- [scan](asyncEnumerable.md#scan)
- [toObservable](asyncEnumerable.md#toobservable)

## Type Aliases

### AsyncEnumerableOperator

Ƭ **AsyncEnumerableOperator**<`TA`, `TB`\>: [`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`TA`\>, [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

___

### ConsumeContinue

Ƭ **ConsumeContinue**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `T` |
| `type` | ``"continue"`` |

___

### ConsumeDone

Ƭ **ConsumeDone**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `T` |
| `type` | ``"done"`` |

## Variables

### fromArrayT

• `Const` **fromArrayT**: [`FromArray`](../interfaces/container.FromArray.md)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`unknown`\>\>

___

### keepT

• `Const` **keepT**: [`Keep`](../interfaces/container.Keep.md)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`unknown`\>\>

___

### mapT

• `Const` **mapT**: [`Map`](../interfaces/container.Map.md)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`unknown`\>\>

___

### scanT

• `Const` **scanT**: [`Scan`](../interfaces/container.Scan.md)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`unknown`\>\>

___

### toObservableT

• `Const` **toObservableT**: [`ToObservable`](../interfaces/observable.ToObservable.md)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`unknown`\>\>

___

### type

• `Const` **type**: [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`unknown`\>

## Functions

### consume

▸ **consume**<`T`, `TAcc`\>(`consumer`, `initial`): [`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TAcc`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `consumer` | [`Function2`](functions.md#function2)<`TAcc`, `T`, [`ConsumeContinue`](asyncEnumerable.md#consumecontinue)<`TAcc`\> \| [`ConsumeDone`](asyncEnumerable.md#consumedone)<`TAcc`\>\> |
| `initial` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TAcc`\>\>

___

### consumeAsync

▸ **consumeAsync**<`T`, `TAcc`\>(`consumer`, `initial`): [`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TAcc`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `consumer` | [`Function2`](functions.md#function2)<`TAcc`, `T`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`ConsumeContinue`](asyncEnumerable.md#consumecontinue)<`TAcc`\> \| [`ConsumeDone`](asyncEnumerable.md#consumedone)<`TAcc`\>\>\> |
| `initial` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TAcc`\>\>

___

### consumeContinue

▸ **consumeContinue**<`T`\>(`data`): [`ConsumeContinue`](asyncEnumerable.md#consumecontinue)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

[`ConsumeContinue`](asyncEnumerable.md#consumecontinue)<`T`\>

___

### consumeDone

▸ **consumeDone**<`T`\>(`data`): [`ConsumeDone`](asyncEnumerable.md#consumedone)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

[`ConsumeDone`](asyncEnumerable.md#consumedone)<`T`\>

___

### createAsyncEnumerable

▸ **createAsyncEnumerable**<`T`\>(`stream`): [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | (`scheduler`: [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md), `options?`: { `replay?`: `number`  }) => [`AsyncEnumerator`](../classes/asyncEnumerator.AsyncEnumerator.md)<`T`\> |

#### Returns

[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>

___

### createLiftedAsyncEnumerable

▸ **createLiftedAsyncEnumerable**<`A`\>(`op1`): [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ObservableOperator`](observable.md#observableoperator)<`void`, `A`\> |

#### Returns

[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`A`\>

▸ **createLiftedAsyncEnumerable**<`A`, `B`\>(`op1`, `op2`): [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ObservableOperator`](observable.md#observableoperator)<`void`, `A`\> |
| `op2` | [`ObservableOperator`](observable.md#observableoperator)<`A`, `B`\> |

#### Returns

[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`B`\>

▸ **createLiftedAsyncEnumerable**<`A`, `B`, `C`\>(`op1`, `op2`, `op3`): [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`C`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ObservableOperator`](observable.md#observableoperator)<`void`, `A`\> |
| `op2` | [`ObservableOperator`](observable.md#observableoperator)<`A`, `B`\> |
| `op3` | [`ObservableOperator`](observable.md#observableoperator)<`B`, `C`\> |

#### Returns

[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`C`\>

▸ **createLiftedAsyncEnumerable**<`A`, `B`, `C`, `D`\>(`op1`, `op2`, `op3`, `op4`): [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`D`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ObservableOperator`](observable.md#observableoperator)<`void`, `A`\> |
| `op2` | [`ObservableOperator`](observable.md#observableoperator)<`A`, `B`\> |
| `op3` | [`ObservableOperator`](observable.md#observableoperator)<`B`, `C`\> |
| `op4` | [`ObservableOperator`](observable.md#observableoperator)<`C`, `D`\> |

#### Returns

[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`D`\>

▸ **createLiftedAsyncEnumerable**<`A`, `B`, `C`, `D`, `E`\>(`op1`, `op2`, `op3`, `op4`, `op5`): [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`E`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ObservableOperator`](observable.md#observableoperator)<`void`, `A`\> |
| `op2` | [`ObservableOperator`](observable.md#observableoperator)<`A`, `B`\> |
| `op3` | [`ObservableOperator`](observable.md#observableoperator)<`B`, `C`\> |
| `op4` | [`ObservableOperator`](observable.md#observableoperator)<`C`, `D`\> |
| `op5` | [`ObservableOperator`](observable.md#observableoperator)<`D`, `E`\> |

#### Returns

[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`E`\>

▸ **createLiftedAsyncEnumerable**<`A`, `B`, `C`, `D`, `E`, `F`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`): [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`F`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ObservableOperator`](observable.md#observableoperator)<`void`, `A`\> |
| `op2` | [`ObservableOperator`](observable.md#observableoperator)<`A`, `B`\> |
| `op3` | [`ObservableOperator`](observable.md#observableoperator)<`B`, `C`\> |
| `op4` | [`ObservableOperator`](observable.md#observableoperator)<`C`, `D`\> |
| `op5` | [`ObservableOperator`](observable.md#observableoperator)<`D`, `E`\> |
| `op6` | [`ObservableOperator`](observable.md#observableoperator)<`E`, `F`\> |

#### Returns

[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`F`\>

▸ **createLiftedAsyncEnumerable**<`A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`): [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`G`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ObservableOperator`](observable.md#observableoperator)<`void`, `A`\> |
| `op2` | [`ObservableOperator`](observable.md#observableoperator)<`A`, `B`\> |
| `op3` | [`ObservableOperator`](observable.md#observableoperator)<`B`, `C`\> |
| `op4` | [`ObservableOperator`](observable.md#observableoperator)<`C`, `D`\> |
| `op5` | [`ObservableOperator`](observable.md#observableoperator)<`D`, `E`\> |
| `op6` | [`ObservableOperator`](observable.md#observableoperator)<`E`, `F`\> |
| `op7` | [`ObservableOperator`](observable.md#observableoperator)<`F`, `G`\> |

#### Returns

[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`G`\>

▸ **createLiftedAsyncEnumerable**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`): [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`H`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ObservableOperator`](observable.md#observableoperator)<`void`, `A`\> |
| `op2` | [`ObservableOperator`](observable.md#observableoperator)<`A`, `B`\> |
| `op3` | [`ObservableOperator`](observable.md#observableoperator)<`B`, `C`\> |
| `op4` | [`ObservableOperator`](observable.md#observableoperator)<`C`, `D`\> |
| `op5` | [`ObservableOperator`](observable.md#observableoperator)<`D`, `E`\> |
| `op6` | [`ObservableOperator`](observable.md#observableoperator)<`E`, `F`\> |
| `op7` | [`ObservableOperator`](observable.md#observableoperator)<`F`, `G`\> |
| `op8` | [`ObservableOperator`](observable.md#observableoperator)<`G`, `H`\> |

#### Returns

[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`H`\>

▸ **createLiftedAsyncEnumerable**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`): [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`I`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ObservableOperator`](observable.md#observableoperator)<`void`, `A`\> |
| `op2` | [`ObservableOperator`](observable.md#observableoperator)<`A`, `B`\> |
| `op3` | [`ObservableOperator`](observable.md#observableoperator)<`B`, `C`\> |
| `op4` | [`ObservableOperator`](observable.md#observableoperator)<`C`, `D`\> |
| `op5` | [`ObservableOperator`](observable.md#observableoperator)<`D`, `E`\> |
| `op6` | [`ObservableOperator`](observable.md#observableoperator)<`E`, `F`\> |
| `op7` | [`ObservableOperator`](observable.md#observableoperator)<`F`, `G`\> |
| `op8` | [`ObservableOperator`](observable.md#observableoperator)<`G`, `H`\> |
| `op9` | [`ObservableOperator`](observable.md#observableoperator)<`H`, `I`\> |

#### Returns

[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`I`\>

▸ **createLiftedAsyncEnumerable**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`): [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`J`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ObservableOperator`](observable.md#observableoperator)<`void`, `A`\> |
| `op2` | [`ObservableOperator`](observable.md#observableoperator)<`A`, `B`\> |
| `op3` | [`ObservableOperator`](observable.md#observableoperator)<`B`, `C`\> |
| `op4` | [`ObservableOperator`](observable.md#observableoperator)<`C`, `D`\> |
| `op5` | [`ObservableOperator`](observable.md#observableoperator)<`D`, `E`\> |
| `op6` | [`ObservableOperator`](observable.md#observableoperator)<`E`, `F`\> |
| `op7` | [`ObservableOperator`](observable.md#observableoperator)<`F`, `G`\> |
| `op8` | [`ObservableOperator`](observable.md#observableoperator)<`G`, `H`\> |
| `op9` | [`ObservableOperator`](observable.md#observableoperator)<`H`, `I`\> |
| `op10` | [`ObservableOperator`](observable.md#observableoperator)<`I`, `J`\> |

#### Returns

[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`J`\>

▸ **createLiftedAsyncEnumerable**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`): [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`K`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ObservableOperator`](observable.md#observableoperator)<`void`, `A`\> |
| `op2` | [`ObservableOperator`](observable.md#observableoperator)<`A`, `B`\> |
| `op3` | [`ObservableOperator`](observable.md#observableoperator)<`B`, `C`\> |
| `op4` | [`ObservableOperator`](observable.md#observableoperator)<`C`, `D`\> |
| `op5` | [`ObservableOperator`](observable.md#observableoperator)<`D`, `E`\> |
| `op6` | [`ObservableOperator`](observable.md#observableoperator)<`E`, `F`\> |
| `op7` | [`ObservableOperator`](observable.md#observableoperator)<`F`, `G`\> |
| `op8` | [`ObservableOperator`](observable.md#observableoperator)<`G`, `H`\> |
| `op9` | [`ObservableOperator`](observable.md#observableoperator)<`H`, `I`\> |
| `op10` | [`ObservableOperator`](observable.md#observableoperator)<`I`, `J`\> |
| `op11` | [`ObservableOperator`](observable.md#observableoperator)<`J`, `K`\> |

#### Returns

[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`K`\>

▸ **createLiftedAsyncEnumerable**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`, `op12`): [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`L`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ObservableOperator`](observable.md#observableoperator)<`void`, `A`\> |
| `op2` | [`ObservableOperator`](observable.md#observableoperator)<`A`, `B`\> |
| `op3` | [`ObservableOperator`](observable.md#observableoperator)<`B`, `C`\> |
| `op4` | [`ObservableOperator`](observable.md#observableoperator)<`C`, `D`\> |
| `op5` | [`ObservableOperator`](observable.md#observableoperator)<`D`, `E`\> |
| `op6` | [`ObservableOperator`](observable.md#observableoperator)<`E`, `F`\> |
| `op7` | [`ObservableOperator`](observable.md#observableoperator)<`F`, `G`\> |
| `op8` | [`ObservableOperator`](observable.md#observableoperator)<`G`, `H`\> |
| `op9` | [`ObservableOperator`](observable.md#observableoperator)<`H`, `I`\> |
| `op10` | [`ObservableOperator`](observable.md#observableoperator)<`I`, `J`\> |
| `op11` | [`ObservableOperator`](observable.md#observableoperator)<`J`, `K`\> |
| `op12` | [`ObservableOperator`](observable.md#observableoperator)<`K`, `L`\> |

#### Returns

[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`L`\>

___

### fromArray

▸ **fromArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>\>

Returns an `AsyncEnumerableLike` from the provided array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<{ `delay`: `number` ; `endIndex`: `number` ; `startIndex`: `number`  }\> |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>\>

Returns an `AsyncEnumerableLike` from the provided iterable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>\>

Returns an `AsyncEnumerableLike` from the provided iterable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>

Generates an `AsyncEnumerableLike` sequence from a generator function
that is applied to an accumulator value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)<`T`\> | The generator function. |
| `initialValue` | [`Factory`](functions.md#factory)<`T`\> | Factory function to generate the initial accumulator. |
| `options?` | `Object` | - |
| `options.delay?` | `number` | - |

#### Returns

[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`AsyncEnumerableOperator`](asyncEnumerable.md#asyncenumerableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T`\> |

#### Returns

[`AsyncEnumerableOperator`](asyncEnumerable.md#asyncenumerableoperator)<`T`, `T`\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`): [`AsyncEnumerableOperator`](asyncEnumerable.md#asyncenumerableoperator)<`TA`, `TB`\>

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

[`AsyncEnumerableOperator`](asyncEnumerable.md#asyncenumerableoperator)<`TA`, `TB`\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`AsyncEnumerableOperator`](asyncEnumerable.md#asyncenumerableoperator)<`T`, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`AsyncEnumerableOperator`](asyncEnumerable.md#asyncenumerableoperator)<`T`, `TAcc`\>

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>
