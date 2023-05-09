[Reactive-JS](../README.md) / [containers](../modules/containers.md) / [PauseableObservableContainer](../modules/containers.PauseableObservableContainer.md) / TypeClass

# Interface: TypeClass

[containers](../modules/containers.md).[PauseableObservableContainer](../modules/containers.PauseableObservableContainer.md).TypeClass

## Hierarchy

- [`TypeClass`](containers.ObservableContainers.TypeClass.md)<[`Type`](containers.PauseableObservableContainer.Type.md)\>

  ↳ **`TypeClass`**

## Table of contents

### Operator Properties

- [exhaust](containers.PauseableObservableContainer.TypeClass.md#exhaust)
- [exhaustMap](containers.PauseableObservableContainer.TypeClass.md#exhaustmap)
- [mergeAll](containers.PauseableObservableContainer.TypeClass.md#mergeall)
- [mergeMap](containers.PauseableObservableContainer.TypeClass.md#mergemap)
- [mergeWith](containers.PauseableObservableContainer.TypeClass.md#mergewith)
- [scanMany](containers.PauseableObservableContainer.TypeClass.md#scanmany)
- [switchAll](containers.PauseableObservableContainer.TypeClass.md#switchall)
- [switchMap](containers.PauseableObservableContainer.TypeClass.md#switchmap)

### Constructor Methods

- [combineLatest](containers.PauseableObservableContainer.TypeClass.md#combinelatest)
- [merge](containers.PauseableObservableContainer.TypeClass.md#merge)
- [never](containers.PauseableObservableContainer.TypeClass.md#never)
- [zipLatest](containers.PauseableObservableContainer.TypeClass.md#ziplatest)

### Operator Methods

- [backpressureStrategy](containers.PauseableObservableContainer.TypeClass.md#backpressurestrategy)
- [dispatchTo](containers.PauseableObservableContainer.TypeClass.md#dispatchto)
- [enqueue](containers.PauseableObservableContainer.TypeClass.md#enqueue)
- [forkCombineLatest](containers.PauseableObservableContainer.TypeClass.md#forkcombinelatest)
- [forkMerge](containers.PauseableObservableContainer.TypeClass.md#forkmerge)
- [forkZipLatest](containers.PauseableObservableContainer.TypeClass.md#forkziplatest)
- [takeUntil](containers.PauseableObservableContainer.TypeClass.md#takeuntil)
- [throttle](containers.PauseableObservableContainer.TypeClass.md#throttle)
- [timeout](containers.PauseableObservableContainer.TypeClass.md#timeout)
- [withCurrentTime](containers.PauseableObservableContainer.TypeClass.md#withcurrenttime)
- [withLatestFrom](containers.PauseableObservableContainer.TypeClass.md#withlatestfrom)
- [zipWithLatestFrom](containers.PauseableObservableContainer.TypeClass.md#zipwithlatestfrom)

### Transform Methods

- [firstAsync](containers.PauseableObservableContainer.TypeClass.md#firstasync)
- [lastAsync](containers.PauseableObservableContainer.TypeClass.md#lastasync)

## Operator Properties

### exhaust

• **exhaust**: <T\>() => [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[exhaust](containers.ObservableContainers.TypeClass.md#exhaust)

___

### exhaustMap

• **exhaustMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\>\>) => [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\>\> |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[exhaustMap](containers.ObservableContainers.TypeClass.md#exhaustmap)

___

### mergeAll

• **mergeAll**: <T\>(`options?`: { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number` ; `concurrency?`: `number`  }) => [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `T`\>

#### Type declaration

▸ <`T`\>(`options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[mergeAll](containers.ObservableContainers.TypeClass.md#mergeall)

___

### mergeMap

• **mergeMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\>\>, `options?`: { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number` ; `concurrency?`: `number`  }) => [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`, `options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[mergeMap](containers.ObservableContainers.TypeClass.md#mergemap)

___

### mergeWith

• **mergeWith**: <T\>(`snd`: [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, ...`tail`: readonly [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>[]) => [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> |
| `...tail` | readonly [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>[] |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[mergeWith](containers.ObservableContainers.TypeClass.md#mergewith)

___

### scanMany

• **scanMany**: <T, TAcc\>(`scanner`: [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TAcc`\>\>, `initialValue`: [`Factory`](../modules/functions.md#factory)<`TAcc`\>) => [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TAcc`\>

#### Type declaration

▸ <`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TAcc`\>

##### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TAcc`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[scanMany](containers.ObservableContainers.TypeClass.md#scanmany)

___

### switchAll

• **switchAll**: <T\>() => [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[switchAll](containers.ObservableContainers.TypeClass.md#switchall)

___

### switchMap

• **switchMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\>\>) => [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\>\> |

##### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[switchMap](containers.ObservableContainers.TypeClass.md#switchmap)

## Constructor Methods

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[combineLatest](containers.ObservableContainers.TypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[combineLatest](containers.ObservableContainers.TypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[combineLatest](containers.ObservableContainers.TypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[combineLatest](containers.ObservableContainers.TypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[combineLatest](containers.ObservableContainers.TypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |
| `g` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TG`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[combineLatest](containers.ObservableContainers.TypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |
| `g` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TG`\> |
| `h` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TH`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[combineLatest](containers.ObservableContainers.TypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |
| `g` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TG`\> |
| `h` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TH`\> |
| `i` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TI`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[combineLatest](containers.ObservableContainers.TypeClass.md#combinelatest)

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> |
| `snd` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> |
| `...tail` | readonly [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>[] |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[merge](containers.ObservableContainers.TypeClass.md#merge)

___

### never

▸ **never**<`T`\>(): [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>

Returns a Container instance that emits no items and never disposes its state.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[never](containers.ObservableContainers.TypeClass.md#never)

___

### zipLatest

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[zipLatest](containers.ObservableContainers.TypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[zipLatest](containers.ObservableContainers.TypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[zipLatest](containers.ObservableContainers.TypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[zipLatest](containers.ObservableContainers.TypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[zipLatest](containers.ObservableContainers.TypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |
| `g` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TG`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[zipLatest](containers.ObservableContainers.TypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |
| `g` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TG`\> |
| `h` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TH`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[zipLatest](containers.ObservableContainers.TypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TA`\> |
| `b` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `c` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TC`\> |
| `d` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TD`\> |
| `e` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TE`\> |
| `f` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TF`\> |
| `g` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TG`\> |
| `h` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TH`\> |
| `i` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TI`\> |

#### Returns

[`PauseableObservableLike`](types.PauseableObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[zipLatest](containers.ObservableContainers.TypeClass.md#ziplatest)

___

## Operator Methods

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[backpressureStrategy](containers.ObservableContainers.TypeClass.md#backpressurestrategy)

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](types.DispatcherLike.md)<`T`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[dispatchTo](containers.ObservableContainers.TypeClass.md#dispatchto)

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](types.QueueableLike.md)<`T`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[enqueue](containers.ObservableContainers.TypeClass.md#enqueue)

___

### forkCombineLatest

▸ **forkCombineLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkCombineLatest](containers.ObservableContainers.TypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkCombineLatest](containers.ObservableContainers.TypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkCombineLatest](containers.ObservableContainers.TypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TE`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkCombineLatest](containers.ObservableContainers.TypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TF`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkCombineLatest](containers.ObservableContainers.TypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TG`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkCombineLatest](containers.ObservableContainers.TypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TH`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkCombineLatest](containers.ObservableContainers.TypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TH`\> |
| `i` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TI`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkCombineLatest](containers.ObservableContainers.TypeClass.md#forkcombinelatest)

___

### forkMerge

▸ **forkMerge**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TIn`, `TOut`\> |
| `snd` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TIn`, `TOut`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkMerge](containers.ObservableContainers.TypeClass.md#forkmerge)

___

### forkZipLatest

▸ **forkZipLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkZipLatest](containers.ObservableContainers.TypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkZipLatest](containers.ObservableContainers.TypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkZipLatest](containers.ObservableContainers.TypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TE`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkZipLatest](containers.ObservableContainers.TypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TF`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkZipLatest](containers.ObservableContainers.TypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TG`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkZipLatest](containers.ObservableContainers.TypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TH`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkZipLatest](containers.ObservableContainers.TypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TH`\> |
| `i` | [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TI`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[forkZipLatest](containers.ObservableContainers.TypeClass.md#forkziplatest)

___

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`unknown`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[takeUntil](containers.ObservableContainers.TypeClass.md#takeuntil)

___

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | [`Function1`](../modules/functions.md#function1)<`T`, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`unknown`\>\> | Function function that is used to determine the silence duration in between emitted values. |
| `options?` | `Object` | - |
| `options.mode?` | ``"interval"`` \| ``"first"`` \| ``"last"`` | - |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[throttle](containers.ObservableContainers.TypeClass.md#throttle)

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[throttle](containers.ObservableContainers.TypeClass.md#throttle)

___

### timeout

▸ **timeout**<`T`\>(`duration`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[timeout](containers.ObservableContainers.TypeClass.md#timeout)

▸ **timeout**<`T`\>(`duration`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`unknown`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[timeout](containers.ObservableContainers.TypeClass.md#timeout)

___

### withCurrentTime

▸ **withCurrentTime**<`T`, `TOut`\>(`selector`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TOut`\>

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

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `T`, `TOut`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[withCurrentTime](containers.ObservableContainers.TypeClass.md#withcurrenttime)

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[withLatestFrom](containers.ObservableContainers.TypeClass.md#withlatestfrom)

___

### zipWithLatestFrom

▸ **zipWithLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`PauseableObservableLike`](types.PauseableObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](../modules/containers.Containers.md#operator)<[`Type`](containers.PauseableObservableContainer.Type.md), `TA`, `T`\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[zipWithLatestFrom](containers.ObservableContainers.TypeClass.md#zipwithlatestfrom)

___

## Transform Methods

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[firstAsync](containers.ObservableContainers.TypeClass.md#firstasync)

▸ **firstAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

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

[`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[firstAsync](containers.ObservableContainers.TypeClass.md#firstasync)

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[lastAsync](containers.ObservableContainers.TypeClass.md#lastasync)

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

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

[`Function1`](../modules/functions.md#function1)<[`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[TypeClass](containers.ObservableContainers.TypeClass.md).[lastAsync](containers.ObservableContainers.TypeClass.md#lastasync)
