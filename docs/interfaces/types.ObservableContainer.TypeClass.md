[Reactive-JS](../README.md) / [types](../modules/types.md) / [ObservableContainer](../modules/types.ObservableContainer.md) / TypeClass

# Interface: TypeClass

[types](../modules/types.md).[ObservableContainer](../modules/types.ObservableContainer.md).TypeClass

## Hierarchy

- [`TypeClass`](types.ObservableContainers.TypeClass.md)<[`ObservableContainer`](types.ObservableContainer-1.md)\>

- [`TypeClass`](types.AsynchronousContainers.TypeClass.md)<[`ObservableContainer`](types.ObservableContainer-1.md)\>

  ↳ **`TypeClass`**

## Table of contents

### Operator Properties

- [exhaust](types.ObservableContainer.TypeClass.md#exhaust)
- [exhaustMap](types.ObservableContainer.TypeClass.md#exhaustmap)
- [mergeAll](types.ObservableContainer.TypeClass.md#mergeall)
- [mergeMap](types.ObservableContainer.TypeClass.md#mergemap)
- [mergeWith](types.ObservableContainer.TypeClass.md#mergewith)
- [scanMany](types.ObservableContainer.TypeClass.md#scanmany)
- [switchAll](types.ObservableContainer.TypeClass.md#switchall)
- [switchMap](types.ObservableContainer.TypeClass.md#switchmap)

### Constructor Methods

- [combineLatest](types.ObservableContainer.TypeClass.md#combinelatest)
- [fromAsyncIterable](types.ObservableContainer.TypeClass.md#fromasynciterable)
- [merge](types.ObservableContainer.TypeClass.md#merge)
- [never](types.ObservableContainer.TypeClass.md#never)
- [zipLatest](types.ObservableContainer.TypeClass.md#ziplatest)

### Operator Methods

- [backpressureStrategy](types.ObservableContainer.TypeClass.md#backpressurestrategy)
- [dispatchTo](types.ObservableContainer.TypeClass.md#dispatchto)
- [enqueue](types.ObservableContainer.TypeClass.md#enqueue)
- [forkCombineLatest](types.ObservableContainer.TypeClass.md#forkcombinelatest)
- [forkMerge](types.ObservableContainer.TypeClass.md#forkmerge)
- [forkZipLatest](types.ObservableContainer.TypeClass.md#forkziplatest)
- [takeUntil](types.ObservableContainer.TypeClass.md#takeuntil)
- [throttle](types.ObservableContainer.TypeClass.md#throttle)
- [timeout](types.ObservableContainer.TypeClass.md#timeout)
- [withCurrentTime](types.ObservableContainer.TypeClass.md#withcurrenttime)
- [withLatestFrom](types.ObservableContainer.TypeClass.md#withlatestfrom)
- [zipWithLatestFrom](types.ObservableContainer.TypeClass.md#zipwithlatestfrom)

### Transform Methods

- [firstAsync](types.ObservableContainer.TypeClass.md#firstasync)
- [lastAsync](types.ObservableContainer.TypeClass.md#lastasync)

## Operator Properties

### exhaust

• **exhaust**: <T\>() => [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), [`ObservableLike`](types.ObservableLike.md)<`T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), [`ObservableLike`](types.ObservableLike.md)<`T`\>, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), [`ObservableLike`](types.ObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[exhaust](types.ObservableContainers.TypeClass.md#exhaust)

___

### exhaustMap

• **exhaustMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`ObservableLike`](types.ObservableLike.md)<`TB`\>\>) => [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`ObservableLike`](types.ObservableLike.md)<`TB`\>\> |

##### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[exhaustMap](types.ObservableContainers.TypeClass.md#exhaustmap)

___

### mergeAll

• **mergeAll**: <T\>(`options?`: { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number` ; `concurrency?`: `number`  }) => [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), [`ObservableLike`](types.ObservableLike.md)<`T`\>, `T`\>

#### Type declaration

▸ <`T`\>(`options?`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), [`ObservableLike`](types.ObservableLike.md)<`T`\>, `T`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), [`ObservableLike`](types.ObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[mergeAll](types.ObservableContainers.TypeClass.md#mergeall)

___

### mergeMap

• **mergeMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`ObservableLike`](types.ObservableLike.md)<`TB`\>\>, `options?`: { `backpressureStrategy?`: ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` ; `capacity?`: `number` ; `concurrency?`: `number`  }) => [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`, `options?`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`ObservableLike`](types.ObservableLike.md)<`TB`\>\> |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |
| `options.concurrency?` | `number` |

##### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[mergeMap](types.ObservableContainers.TypeClass.md#mergemap)

___

### mergeWith

• **mergeWith**: <T\>(`snd`: [`ObservableLike`](types.ObservableLike.md)<`T`\>, ...`tail`: readonly [`ObservableLike`](types.ObservableLike.md)<`T`\>[]) => [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `T`\>

#### Type declaration

▸ <`T`\>(`snd`, `...tail`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`ObservableLike`](types.ObservableLike.md)<`T`\> |
| `...tail` | readonly [`ObservableLike`](types.ObservableLike.md)<`T`\>[] |

##### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[mergeWith](types.ObservableContainers.TypeClass.md#mergewith)

___

### scanMany

• **scanMany**: <T, TAcc\>(`scanner`: [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`ObservableLike`](types.ObservableLike.md)<`TAcc`\>\>, `initialValue`: [`Factory`](../modules/functions.md#factory)<`TAcc`\>) => [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TAcc`\>

#### Type declaration

▸ <`T`, `TAcc`\>(`scanner`, `initialValue`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TAcc`\>

##### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Function2`](../modules/functions.md#function2)<`TAcc`, `T`, [`ObservableLike`](types.ObservableLike.md)<`TAcc`\>\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

##### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TAcc`\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[scanMany](types.ObservableContainers.TypeClass.md#scanmany)

___

### switchAll

• **switchAll**: <T\>() => [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), [`ObservableLike`](types.ObservableLike.md)<`T`\>, `T`\>

#### Type declaration

▸ <`T`\>(): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), [`ObservableLike`](types.ObservableLike.md)<`T`\>, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), [`ObservableLike`](types.ObservableLike.md)<`T`\>, `T`\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[switchAll](types.ObservableContainers.TypeClass.md#switchall)

___

### switchMap

• **switchMap**: <TA, TB\>(`selector`: [`Function1`](../modules/functions.md#function1)<`TA`, [`ObservableLike`](types.ObservableLike.md)<`TB`\>\>) => [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `TA`, `TB`\>

#### Type declaration

▸ <`TA`, `TB`\>(`selector`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `TA`, `TB`\>

##### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`ObservableLike`](types.ObservableLike.md)<`TB`\>\> |

##### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `TA`, `TB`\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[switchMap](types.ObservableContainers.TypeClass.md#switchmap)

## Constructor Methods

### combineLatest

▸ **combineLatest**<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[combineLatest](types.ObservableContainers.TypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[combineLatest](types.ObservableContainers.TypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[combineLatest](types.ObservableContainers.TypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[combineLatest](types.ObservableContainers.TypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[combineLatest](types.ObservableContainers.TypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](types.ObservableLike.md)<`TG`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[combineLatest](types.ObservableContainers.TypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](types.ObservableLike.md)<`TH`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[combineLatest](types.ObservableContainers.TypeClass.md#combinelatest)

▸ **combineLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](types.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](types.ObservableLike.md)<`TI`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[combineLatest](types.ObservableContainers.TypeClass.md#combinelatest)

___

### fromAsyncIterable

▸ **fromAsyncIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`AsyncIterable`<`T`\>, [`ObservableLike`](types.ObservableLike.md)<`T`\>\>

#### Inherited from

[TypeClass](types.AsynchronousContainers.TypeClass.md).[fromAsyncIterable](types.AsynchronousContainers.TypeClass.md#fromasynciterable)

___

### merge

▸ **merge**<`T`\>(`fst`, `snd`, `...tail`): [`ObservableLike`](types.ObservableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`ObservableLike`](types.ObservableLike.md)<`T`\> |
| `snd` | [`ObservableLike`](types.ObservableLike.md)<`T`\> |
| `...tail` | readonly [`ObservableLike`](types.ObservableLike.md)<`T`\>[] |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<`T`\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[merge](types.ObservableContainers.TypeClass.md#merge)

___

### never

▸ **never**<`T`\>(): [`ObservableLike`](types.ObservableLike.md)<`T`\>

Returns a Container instance that emits no items and never disposes its state.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<`T`\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[never](types.ObservableContainers.TypeClass.md#never)

___

### zipLatest

▸ **zipLatest**<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[zipLatest](types.ObservableContainers.TypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `TC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[zipLatest](types.ObservableContainers.TypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[zipLatest](types.ObservableContainers.TypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[zipLatest](types.ObservableContainers.TypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[zipLatest](types.ObservableContainers.TypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](types.ObservableLike.md)<`TG`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[zipLatest](types.ObservableContainers.TypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](types.ObservableLike.md)<`TH`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[zipLatest](types.ObservableContainers.TypeClass.md#ziplatest)

▸ **zipLatest**<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`ObservableLike`](types.ObservableLike.md)<`TA`\> |
| `b` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `c` | [`ObservableLike`](types.ObservableLike.md)<`TC`\> |
| `d` | [`ObservableLike`](types.ObservableLike.md)<`TD`\> |
| `e` | [`ObservableLike`](types.ObservableLike.md)<`TE`\> |
| `f` | [`ObservableLike`](types.ObservableLike.md)<`TF`\> |
| `g` | [`ObservableLike`](types.ObservableLike.md)<`TG`\> |
| `h` | [`ObservableLike`](types.ObservableLike.md)<`TH`\> |
| `i` | [`ObservableLike`](types.ObservableLike.md)<`TI`\> |

#### Returns

[`ObservableLike`](types.ObservableLike.md)<readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[zipLatest](types.ObservableContainers.TypeClass.md#ziplatest)

___

## Operator Methods

### backpressureStrategy

▸ **backpressureStrategy**<`T`\>(`capacity`, `backpressureStrategy`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[backpressureStrategy](types.ObservableContainers.TypeClass.md#backpressurestrategy)

___

### dispatchTo

▸ **dispatchTo**<`T`\>(`dispatcher`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dispatcher` | [`DispatcherLike`](types.DispatcherLike.md)<`T`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[dispatchTo](types.ObservableContainers.TypeClass.md#dispatchto)

___

### enqueue

▸ **enqueue**<`T`\>(`queue`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `queue` | [`QueueableLike`](types.QueueableLike.md)<`T`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[enqueue](types.ObservableContainers.TypeClass.md#enqueue)

___

### forkCombineLatest

▸ **forkCombineLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TB`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[forkCombineLatest](types.ObservableContainers.TypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TC`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[forkCombineLatest](types.ObservableContainers.TypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TD`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[forkCombineLatest](types.ObservableContainers.TypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TE`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[forkCombineLatest](types.ObservableContainers.TypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TF`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[forkCombineLatest](types.ObservableContainers.TypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TG`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[forkCombineLatest](types.ObservableContainers.TypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TH`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[forkCombineLatest](types.ObservableContainers.TypeClass.md#forkcombinelatest)

▸ **forkCombineLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TH`\> |
| `i` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TI`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[forkCombineLatest](types.ObservableContainers.TypeClass.md#forkcombinelatest)

___

### forkMerge

▸ **forkMerge**<`TIn`, `TOut`\>(`fst`, `snd`, `...tail`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `TIn`, `TOut`\>

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `TIn`, `TOut`\> |
| `snd` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `TIn`, `TOut`\> |
| `...tail` | readonly [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `TIn`, `TOut`\>[] |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `TIn`, `TOut`\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[forkMerge](types.ObservableContainers.TypeClass.md#forkmerge)

___

### forkZipLatest

▸ **forkZipLatest**<`T`, `TA`, `TB`\>(`a`, `b`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TB`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[forkZipLatest](types.ObservableContainers.TypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TC`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[forkZipLatest](types.ObservableContainers.TypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TD`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[forkZipLatest](types.ObservableContainers.TypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TE`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[forkZipLatest](types.ObservableContainers.TypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TF`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[forkZipLatest](types.ObservableContainers.TypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TG`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[forkZipLatest](types.ObservableContainers.TypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TH`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[forkZipLatest](types.ObservableContainers.TypeClass.md#forkziplatest)

▸ **forkZipLatest**<`T`, `TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

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
| `a` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TA`\> |
| `b` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TB`\> |
| `c` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TC`\> |
| `d` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TD`\> |
| `e` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TE`\> |
| `f` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TF`\> |
| `g` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TG`\> |
| `h` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TH`\> |
| `i` | [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TI`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, readonly [`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`]\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[forkZipLatest](types.ObservableContainers.TypeClass.md#forkziplatest)

___

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`ObservableLike`](types.ObservableLike.md)<`unknown`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[takeUntil](types.ObservableContainers.TypeClass.md#takeuntil)

___

### throttle

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `T`\>

Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `duration` | [`Function1`](../modules/functions.md#function1)<`T`, [`ObservableLike`](types.ObservableLike.md)<`unknown`\>\> | Function function that is used to determine the silence duration in between emitted values. |
| `options?` | `Object` | - |
| `options.mode?` | ``"interval"`` \| ``"first"`` \| ``"last"`` | - |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[throttle](types.ObservableContainers.TypeClass.md#throttle)

▸ **throttle**<`T`\>(`duration`, `options?`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[throttle](types.ObservableContainers.TypeClass.md#throttle)

___

### timeout

▸ **timeout**<`T`\>(`duration`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `T`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[timeout](types.ObservableContainers.TypeClass.md#timeout)

▸ **timeout**<`T`\>(`duration`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | [`ObservableLike`](types.ObservableLike.md)<`unknown`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `T`\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[timeout](types.ObservableContainers.TypeClass.md#timeout)

___

### withCurrentTime

▸ **withCurrentTime**<`T`, `TOut`\>(`selector`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TOut`\>

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

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `T`, `TOut`\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[withCurrentTime](types.ObservableContainers.TypeClass.md#withcurrenttime)

___

### withLatestFrom

▸ **withLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `TA`, `T`\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[withLatestFrom](types.ObservableContainers.TypeClass.md#withlatestfrom)

___

### zipWithLatestFrom

▸ **zipWithLatestFrom**<`TA`, `TB`, `T`\>(`other`, `selector`): [`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `TA`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`ObservableLike`](types.ObservableLike.md)<`TB`\> |
| `selector` | [`Function2`](../modules/functions.md#function2)<`TA`, `TB`, `T`\> |

#### Returns

[`Operator`](../modules/types.Containers.md#operator)<[`ObservableContainer`](types.ObservableContainer-1.md), `TA`, `T`\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[zipWithLatestFrom](types.ObservableContainers.TypeClass.md#zipwithlatestfrom)

___

## Transform Methods

### firstAsync

▸ **firstAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[firstAsync](types.ObservableContainers.TypeClass.md#firstasync)

▸ **firstAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

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

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[firstAsync](types.ObservableContainers.TypeClass.md#firstasync)

___

### lastAsync

▸ **lastAsync**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[lastAsync](types.ObservableContainers.TypeClass.md#lastasync)

▸ **lastAsync**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

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

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](types.ObservableLike.md)<`T`\>, `PromiseLike`<[`Optional`](../modules/functions.md#optional)<`T`\>\>\>

#### Inherited from

[TypeClass](types.ObservableContainers.TypeClass.md).[lastAsync](types.ObservableContainers.TypeClass.md#lastasync)
