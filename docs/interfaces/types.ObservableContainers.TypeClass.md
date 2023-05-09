[Reactive-JS](../README.md) / [types](../modules/types.md) / [ObservableContainers](../modules/types.ObservableContainers.md) / TypeClass

# Interface: TypeClass<C\>

[types](../modules/types.md).[ObservableContainers](../modules/types.ObservableContainers.md).TypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](types.ObservableContainer-1.md) |

## Hierarchy

- [`TypeClass`](types.Containers.TypeClass.md)<`C`\>

- [`TypeClass`](types.StatefulContainers.TypeClass.md)<`C`\>

  ↳ **`TypeClass`**

  ↳↳ [`TypeClass`](types.DeferredObservableContainers.TypeClass.md)

  ↳↳ [`TypeClass`](types.ObservableContainer.TypeClass.md)

  ↳↳ [`TypeClass`](types.SharedObservableContainer.TypeClass.md)

## Table of contents

### Operator Properties

- [exhaust](types.ObservableContainers.TypeClass.md#exhaust)
- [exhaustMap](types.ObservableContainers.TypeClass.md#exhaustmap)
- [mergeAll](types.ObservableContainers.TypeClass.md#mergeall)
- [mergeMap](types.ObservableContainers.TypeClass.md#mergemap)
- [mergeWith](types.ObservableContainers.TypeClass.md#mergewith)
- [scanMany](types.ObservableContainers.TypeClass.md#scanmany)
- [switchAll](types.ObservableContainers.TypeClass.md#switchall)
- [switchMap](types.ObservableContainers.TypeClass.md#switchmap)

### Constructor Methods

- [combineLatest](types.ObservableContainers.TypeClass.md#combinelatest)
- [merge](types.ObservableContainers.TypeClass.md#merge)
- [never](types.ObservableContainers.TypeClass.md#never)
- [zipLatest](types.ObservableContainers.TypeClass.md#ziplatest)

### Operator Methods

- [backpressureStrategy](types.ObservableContainers.TypeClass.md#backpressurestrategy)
- [dispatchTo](types.ObservableContainers.TypeClass.md#dispatchto)
- [enqueue](types.ObservableContainers.TypeClass.md#enqueue)
- [forkCombineLatest](types.ObservableContainers.TypeClass.md#forkcombinelatest)
- [forkMerge](types.ObservableContainers.TypeClass.md#forkmerge)
- [forkZipLatest](types.ObservableContainers.TypeClass.md#forkziplatest)
- [takeUntil](types.ObservableContainers.TypeClass.md#takeuntil)
- [throttle](types.ObservableContainers.TypeClass.md#throttle)
- [timeout](types.ObservableContainers.TypeClass.md#timeout)
- [withCurrentTime](types.ObservableContainers.TypeClass.md#withcurrenttime)
- [withLatestFrom](types.ObservableContainers.TypeClass.md#withlatestfrom)
- [zipWithLatestFrom](types.ObservableContainers.TypeClass.md#zipwithlatestfrom)

### Transform Methods

- [firstAsync](types.ObservableContainers.TypeClass.md#firstasync)
- [lastAsync](types.ObservableContainers.TypeClass.md#lastasync)

## Operator Properties

### exhaust

• **exhaust**: <T\>() => [`Operator`](../modules/types.Containers.md#operator)<`C`, [`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/types.Containers.md#operator)<`C`, [`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, [`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `T`\>

___

### exhaustMap

• **exhaustMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/types.Containers.md#of)<`C`, `TB`\>\>) => [`Operator`](../modules/types.Containers.md#operator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/types.Containers.md#of)<`C`, `TB`\>\> |

##### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `TA`, `TB`\>

___

### mergeAll

• **mergeAll**: <T\>(`options?`: { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number` ; `concurrency?`: `number`  }) => [`Operator`](../modules/types.Containers.md#operator)<`C`, [`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `T`\>

#### Type declaration

▸ <`T`\>(`options?`): [`Operator`](../modules/types.Containers.md#operator)<`C`, [`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

##### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, [`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `T`\>

___

### mergeMap

• **mergeMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/types.Containers.md#of)<`C`, `TB`\>\>, `options?`: { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number` ; `concurrency?`: `number`  }) => [`Operator`](../modules/types.Containers.md#operator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`, `options?`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/types.Containers.md#of)<`C`, `TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

##### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `TA`, `TB`\>

___

### mergeWith

• **mergeWith**: <T\>(`snd`: [`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, ...`tail`: readonly [`Of`](../modules/types.Containers.md#of)<`C`, `T`\>[]) => [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`Of`](../modules/types.Containers.md#of)<`C`, `T`\> |
| `...tail` | readonly [`Of`](../modules/types.Containers.md#of)<`C`, `T`\>[] |

##### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `T`\>

___

### scanMany

• **scanMany**: <T, TAcc\>(`scanner`: [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`Of`](../modules/types.Containers.md#of)<`C`, `TAcc`\>\>, `initialValue`: [`Factory`](../modules/functions.md#factory)<`TAcc`\>) => [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TAcc`\>

#### Type declaration

▸ <`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TAcc`\>

##### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`Of`](../modules/types.Containers.md#of)<`C`, `TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

##### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TAcc`\>

___

### switchAll

• **switchAll**: <T\>() => [`Operator`](../modules/types.Containers.md#operator)<`C`, [`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/types.Containers.md#operator)<`C`, [`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, [`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `T`\>

___

### switchMap

• **switchMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/types.Containers.md#of)<`C`, `TB`\>\>) => [`Operator`](../modules/types.Containers.md#operator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/types.Containers.md#of)<`C`, `TB`\>\> |

##### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `TA`, `TB`\>

## Constructor Methods

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Of`](../modules/types.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/types.Containers.md#of)<`C`, `TB`\> |

#### Returns

[`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Of`](../modules/types.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/types.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/types.Containers.md#of)<`C`, `TC`\> |

#### Returns

[`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Of`](../modules/types.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/types.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/types.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/types.Containers.md#of)<`C`, `TD`\> |

#### Returns

[`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Of`](../modules/types.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/types.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/types.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/types.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/types.Containers.md#of)<`C`, `TE`\> |

#### Returns

[`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Of`](../modules/types.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/types.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/types.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/types.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/types.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/types.Containers.md#of)<`C`, `TF`\> |

#### Returns

[`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Of`](../modules/types.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/types.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/types.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/types.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/types.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/types.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/types.Containers.md#of)<`C`, `TG`\> |

#### Returns

[`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Of`](../modules/types.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/types.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/types.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/types.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/types.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/types.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/types.Containers.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/types.Containers.md#of)<`C`, `TH`\> |

#### Returns

[`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Of`](../modules/types.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/types.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/types.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/types.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/types.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/types.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/types.Containers.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/types.Containers.md#of)<`C`, `TH`\> |
| `i` | [`Of`](../modules/types.Containers.md#of)<`C`, `TI`\> |

#### Returns

[`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`Of`](../modules/types.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Of`](../modules/types.Containers.md#of)<`C`, `T`\> |
| `snd` | [`Of`](../modules/types.Containers.md#of)<`C`, `T`\> |
| `...tail` | readonly [`Of`](../modules/types.Containers.md#of)<`C`, `T`\>[] |

#### Returns

[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>

___

### never

▸ **never**<`T`\>(): [`Of`](../modules/types.Containers.md#of)<`C`, `T`\>

Returns a Container instance that emits no items and never disposes its state.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>

___

### zipLatest

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`]\>

Returns a container that zips the latest values from
multiple sources.

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Of`](../modules/types.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/types.Containers.md#of)<`C`, `TB`\> |

#### Returns

[`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Of`](../modules/types.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/types.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/types.Containers.md#of)<`C`, `TC`\> |

#### Returns

[`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Of`](../modules/types.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/types.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/types.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/types.Containers.md#of)<`C`, `TD`\> |

#### Returns

[`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Of`](../modules/types.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/types.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/types.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/types.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/types.Containers.md#of)<`C`, `TE`\> |

#### Returns

[`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Of`](../modules/types.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/types.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/types.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/types.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/types.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/types.Containers.md#of)<`C`, `TF`\> |

#### Returns

[`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Of`](../modules/types.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/types.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/types.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/types.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/types.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/types.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/types.Containers.md#of)<`C`, `TG`\> |

#### Returns

[`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Of`](../modules/types.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/types.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/types.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/types.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/types.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/types.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/types.Containers.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/types.Containers.md#of)<`C`, `TH`\> |

#### Returns

[`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Of`](../modules/types.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/types.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/types.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/types.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/types.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/types.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/types.Containers.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/types.Containers.md#of)<`C`, `TH`\> |
| `i` | [`Of`](../modules/types.Containers.md#of)<`C`, `TI`\> |

#### Returns

[`Of`](../modules/types.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Operator Methods

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `capacity` | `number` |
| `backpressureStrategy` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `T`\>

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](types.DispatcherLike.md)<`T`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `T`\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](types.QueueableLike.md)<`T`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `T`\>

___

### forkCombineLatest

▸ **forkCombineLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TB`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TC`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TD`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TE`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TF`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TG`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TG`\> |
| `h` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TH`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TG`\> |
| `h` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TH`\> |
| `i` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TI`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### forkMerge

▸ **forkMerge**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `TIn`, `TOut`\> |
| `snd` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](../modules/types.Containers.md#operator)<`C`, `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `TIn`, `TOut`\>

___

### forkZipLatest

▸ **forkZipLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TB`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TC`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TD`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TE`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |
| `TC` |
| `TD` |
| `TE` |
| `TF` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TF`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TG`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TG`\> |
| `h` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TH`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TG`\> |
| `h` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TH`\> |
| `i` | [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TI`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`Of`](../modules/types.Containers.md#of)<`C`, `unknown`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `T`\>

___

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `T`\>

Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | [`Function1`](../modules/functions.md#function1)<`T`, [`Of`](../modules/types.Containers.md#of)<`C`, `unknown`\>\> | Function function that is used to determine the silence duration in between emitted values. |
| `options?` | `Object` | - |
| `options.mode?` | ``"interval"`` \| ``"first"`` \| ``"last"`` | - |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `T`\>

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `T`\>

Returns an `ObservableLike` which emits a value from the source,
then ignores subsequent source values for `duration` milliseconds.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | Time to wait before emitting another value after emitting the last value, measured in milliseconds. |
| `options?` | `Object` | - |
| `options.mode?` | ``"interval"`` \| ``"first"`` \| ``"last"`` | - |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `T`\>

___

### timeout

▸ **timeout**<`T`\>(`duration`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `T`\>

Returns an `ObservableLike` that completes with an error if the source
does not emit a value in given time span.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | Time in ms within which the source must emit values. |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `T`\>

▸ **timeout**<`T`\>(`duration`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | [`Of`](../modules/types.Containers.md#of)<`C`, `unknown`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `T`\>

___

### withCurrentTime

▸ **withCurrentTime**<`T`, `TOut`\>(`selector`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function2`](../modules/functions.md#function2)<`number`, `T`, `TOut`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `T`, `TOut`\>

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Of`](../modules/types.Containers.md#of)<`C`, `TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `TA`, `T`\>

___

### zipWithLatestFrom

▸ **zipWithLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](../modules/types.Containers.md#operator)<`C`, `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Of`](../modules/types.Containers.md#of)<`C`, `TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<`C`, `TA`, `T`\>

___

## Transform Methods

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Overrides

[TypeClass](types.Containers.TypeClass.md).[firstAsync](types.Containers.TypeClass.md#firstasync)

▸ **firstAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Overrides

Containers.TypeClass.firstAsync

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Overrides

[TypeClass](types.Containers.TypeClass.md).[lastAsync](types.Containers.TypeClass.md#lastasync)

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Overrides

Containers.TypeClass.lastAsync
