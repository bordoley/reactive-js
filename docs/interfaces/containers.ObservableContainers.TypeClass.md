[Reactive-JS](../README.md) / [containers](../modules/containers.md) / [ObservableContainers](../modules/containers.ObservableContainers.md) / TypeClass

# Interface: TypeClass<C\>

[containers](../modules/containers.md).[ObservableContainers](../modules/containers.ObservableContainers.md).TypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](containers.ObservableContainer-1.md) |

## Hierarchy

- [`TypeClass`](containers.Containers.TypeClass.md)<`C`\>

- [`TypeClass`](containers.StatefulContainers.TypeClass.md)<`C`\>

  ↳ **`TypeClass`**

  ↳↳ [`TypeClass`](containers.DeferredObservableContainers.TypeClass.md)

  ↳↳ [`TypeClass`](containers.ObservableContainer.TypeClass.md)

  ↳↳ [`TypeClass`](containers.SharedObservableContainer.TypeClass.md)

## Table of contents

### Operator Properties

- [exhaust](containers.ObservableContainers.TypeClass.md#exhaust)
- [exhaustMap](containers.ObservableContainers.TypeClass.md#exhaustmap)
- [mergeAll](containers.ObservableContainers.TypeClass.md#mergeall)
- [mergeMap](containers.ObservableContainers.TypeClass.md#mergemap)
- [mergeWith](containers.ObservableContainers.TypeClass.md#mergewith)
- [scanMany](containers.ObservableContainers.TypeClass.md#scanmany)
- [switchAll](containers.ObservableContainers.TypeClass.md#switchall)
- [switchMap](containers.ObservableContainers.TypeClass.md#switchmap)

### Constructor Methods

- [combineLatest](containers.ObservableContainers.TypeClass.md#combinelatest)
- [merge](containers.ObservableContainers.TypeClass.md#merge)
- [never](containers.ObservableContainers.TypeClass.md#never)
- [zipLatest](containers.ObservableContainers.TypeClass.md#ziplatest)

### Operator Methods

- [backpressureStrategy](containers.ObservableContainers.TypeClass.md#backpressurestrategy)
- [dispatchTo](containers.ObservableContainers.TypeClass.md#dispatchto)
- [enqueue](containers.ObservableContainers.TypeClass.md#enqueue)
- [forkCombineLatest](containers.ObservableContainers.TypeClass.md#forkcombinelatest)
- [forkMerge](containers.ObservableContainers.TypeClass.md#forkmerge)
- [forkZipLatest](containers.ObservableContainers.TypeClass.md#forkziplatest)
- [takeUntil](containers.ObservableContainers.TypeClass.md#takeuntil)
- [throttle](containers.ObservableContainers.TypeClass.md#throttle)
- [timeout](containers.ObservableContainers.TypeClass.md#timeout)
- [withCurrentTime](containers.ObservableContainers.TypeClass.md#withcurrenttime)
- [withLatestFrom](containers.ObservableContainers.TypeClass.md#withlatestfrom)
- [zipWithLatestFrom](containers.ObservableContainers.TypeClass.md#zipwithlatestfrom)

### Transform Methods

- [firstAsync](containers.ObservableContainers.TypeClass.md#firstasync)
- [lastAsync](containers.ObservableContainers.TypeClass.md#lastasync)

## Operator Properties

### exhaust

• **exhaust**: <T\>() => [`Operator`](../modules/containers.Containers.md#operator)<`C`, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<`C`, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `T`\>

___

### exhaustMap

• **exhaustMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\>\>) => [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\>\> |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

___

### mergeAll

• **mergeAll**: <T\>(`options?`: { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number` ; `concurrency?`: `number`  }) => [`Operator`](../modules/containers.Containers.md#operator)<`C`, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `T`\>

#### Type declaration

▸ <`T`\>(`options?`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `T`\>

___

### mergeMap

• **mergeMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\>\>, `options?`: { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number` ; `concurrency?`: `number`  }) => [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`, `options?`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

___

### mergeWith

• **mergeWith**: <T\>(`snd`: [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, ...`tail`: readonly [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>[]) => [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\> |
| `...tail` | readonly [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>[] |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

___

### scanMany

• **scanMany**: <T, TAcc\>(`scanner`: [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`Of`](../modules/containers.Containers.md#of)<`C`, `TAcc`\>\>, `initialValue`: [`Factory`](../modules/functions.md#factory)<`TAcc`\>) => [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TAcc`\>

#### Type declaration

▸ <`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TAcc`\>

##### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`Of`](../modules/containers.Containers.md#of)<`C`, `TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TAcc`\>

___

### switchAll

• **switchAll**: <T\>() => [`Operator`](../modules/containers.Containers.md#operator)<`C`, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<`C`, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `T`\>

___

### switchMap

• **switchMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\>\>) => [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\>\> |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `TB`\>

## Constructor Methods

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TF`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TG`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TH`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TH`\> |
| `i` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TI`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\> |
| `snd` | [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\> |
| `...tail` | readonly [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>[] |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

___

### never

▸ **never**<`T`\>(): [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

Returns a Container instance that emits no items and never disposes its state.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

___

### zipLatest

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TF`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TG`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TH`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TA`\> |
| `b` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `c` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TC`\> |
| `d` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TD`\> |
| `e` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TE`\> |
| `f` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TF`\> |
| `g` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TG`\> |
| `h` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TH`\> |
| `i` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TI`\> |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

## Operator Methods

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](types.DispatcherLike.md)<`T`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](types.QueueableLike.md)<`T`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

___

### forkCombineLatest

▸ **forkCombineLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TE`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TF`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TG`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TH`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TH`\> |
| `i` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TI`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### forkMerge

▸ **forkMerge**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TIn`, `TOut`\> |
| `snd` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `TIn`, `TOut`\>

___

### forkZipLatest

▸ **forkZipLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TE`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TF`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TG`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TH`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TH`\> |
| `i` | [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TI`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

___

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`Of`](../modules/containers.Containers.md#of)<`C`, `unknown`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

___

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | [`Function1`](../modules/functions.md#function1)<`T`, [`Of`](../modules/containers.Containers.md#of)<`C`, `unknown`\>\> | Function function that is used to determine the silence duration in between emitted values. |
| `options?` | `Object` | - |
| `options.mode?` | ``"interval"`` \| ``"first"`` \| ``"last"`` | - |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

___

### timeout

▸ **timeout**<`T`\>(`duration`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

▸ **timeout**<`T`\>(`duration`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | [`Of`](../modules/containers.Containers.md#of)<`C`, `unknown`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `T`\>

___

### withCurrentTime

▸ **withCurrentTime**<`T`, `TOut`\>(`selector`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TOut`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `T`, `TOut`\>

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `T`\>

___

### zipWithLatestFrom

▸ **zipWithLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Of`](../modules/containers.Containers.md#of)<`C`, `TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<`C`, `TA`, `T`\>

___

## Transform Methods

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Overrides

[TypeClass](containers.Containers.TypeClass.md).[firstAsync](containers.Containers.TypeClass.md#firstasync)

▸ **firstAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

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

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Overrides

Containers.TypeClass.firstAsync

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Overrides

[TypeClass](containers.Containers.TypeClass.md).[lastAsync](containers.Containers.TypeClass.md#lastasync)

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

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

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Overrides

Containers.TypeClass.lastAsync
