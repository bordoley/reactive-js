[Reactive-JS](../README.md) / integrations/web/Element

# Module: integrations/web/Element

## Table of contents

### Functions

- [addEventHandler](integrations_web_Element.md#addeventhandler)
- [addEventListener](integrations_web_Element.md#addeventlistener)
- [addMeasureHandler](integrations_web_Element.md#addmeasurehandler)
- [addMeasureListener](integrations_web_Element.md#addmeasurelistener)
- [addResizeHandler](integrations_web_Element.md#addresizehandler)
- [addResizeListener](integrations_web_Element.md#addresizelistener)
- [addScrollHandler](integrations_web_Element.md#addscrollhandler)
- [addScrollListener](integrations_web_Element.md#addscrolllistener)
- [intersectionWith](integrations_web_Element.md#intersectionwith)
- [observeEvent](integrations_web_Element.md#observeevent)
- [observeMeasure](integrations_web_Element.md#observemeasure)

## Functions

### addEventHandler

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `AbortSignal`<`TEventTarget`\> |
| `K` | extends ``"abort"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`AbortSignalEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Animation`<`TEventTarget`\> |
| `K` | extends keyof `AnimationEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`AnimationEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `AbstractWorker` |
| `K` | extends ``"error"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`AbstractWorkerEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `AudioScheduledSourceNode`<`TEventTarget`\> |
| `K` | extends ``"ended"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`AudioScheduledSourceNodeEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `BaseAudioContext`<`TEventTarget`\> |
| `K` | extends ``"statechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`BaseAudioContextEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `AudioWorkletNode`<`TEventTarget`\> |
| `K` | extends ``"processorerror"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`AudioWorkletNodeEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `BroadcastChannel`<`TEventTarget`\> |
| `K` | extends keyof `BroadcastChannelEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`BroadcastChannelEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Document`<`TEventTarget`\> |
| `K` | extends keyof `DocumentEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`DocumentEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Element`<`TEventTarget`\> |
| `K` | extends keyof `ElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`ElementEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaStreamTrack`<`TEventTarget`\> |
| `K` | extends keyof `MediaStreamTrackEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`MediaStreamTrackEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `EventSource`<`TEventTarget`\> |
| `K` | extends keyof `EventSourceEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`EventSourceEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `FileReader`<`TEventTarget`\> |
| `K` | extends keyof `FileReaderEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`FileReaderEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `FontFaceSet`<`TEventTarget`\> |
| `K` | extends keyof `FontFaceSetEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`FontFaceSetEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `GlobalEventHandlers` |
| `K` | extends keyof `GlobalEventHandlersEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`GlobalEventHandlersEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `IDBDatabase`<`TEventTarget`\> |
| `K` | extends keyof `IDBDatabaseEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`IDBDatabaseEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `HTMLBodyElement`<`TEventTarget`\> |
| `K` | extends keyof `HTMLBodyElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`HTMLBodyElementEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `HTMLElement`<`TEventTarget`\> |
| `K` | extends keyof `HTMLElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`HTMLElementEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `HTMLMediaElement`<`TEventTarget`\> |
| `K` | extends keyof `HTMLMediaElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`HTMLMediaElementEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `HTMLVideoElement`<`TEventTarget`\> |
| `K` | extends keyof `HTMLVideoElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`HTMLVideoElementEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `IDBOpenDBRequest`<`TEventTarget`\> |
| `K` | extends keyof `IDBOpenDBRequestEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`IDBOpenDBRequestEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`, `TDBObject`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `IDBRequest`<`TDBObject`, `TEventTarget`\> |
| `K` | extends keyof `IDBRequestEventMap` |
| `TDBObject` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`IDBRequestEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `IDBTransaction`<`TEventTarget`\> |
| `K` | extends keyof `IDBTransactionEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`IDBTransactionEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MathMLElement`<`TEventTarget`\> |
| `K` | extends keyof `MathMLElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`MathMLElementEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaDevices`<`TEventTarget`\> |
| `K` | extends ``"devicechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`MediaDevicesEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaKeySession`<`TEventTarget`\> |
| `K` | extends keyof `MediaKeySessionEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`MediaKeySessionEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaQueryList`<`TEventTarget`\> |
| `K` | extends ``"change"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`MediaQueryListEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaRecorder`<`TEventTarget`\> |
| `K` | extends keyof `MediaRecorderEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`MediaRecorderEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaStream` \| `MediaSource` |
| `K` | extends keyof `MediaSourceEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`MediaSourceEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaStream`<`TEventTarget`\> |
| `K` | extends keyof `MediaStreamEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`MediaStreamEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MessagePort`<`TEventTarget`\> |
| `K` | extends keyof `MessagePortEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`MessagePortEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Notification`<`TEventTarget`\> |
| `K` | extends keyof `NotificationEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`NotificationEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `OfflineAudioContext`<`TEventTarget`\> |
| `K` | extends keyof `OfflineAudioContextEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`OfflineAudioContextEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `OffscreenCanvas`<`TEventTarget`\> |
| `K` | extends keyof `OffscreenCanvasEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`OffscreenCanvasEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `PaymentRequest`<`TEventTarget`\> |
| `K` | extends ``"paymentmethodchange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`PaymentRequestEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Performance`<`TEventTarget`\> |
| `K` | extends ``"resourcetimingbufferfull"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`PerformanceEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `PermissionStatus`<`TEventTarget`\> |
| `K` | extends ``"change"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`PermissionStatusEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `PictureInPictureWindow`<`TEventTarget`\> |
| `K` | extends ``"resize"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`PictureInPictureWindowEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCDTMFSender`<`TEventTarget`\> |
| `K` | extends ``"tonechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`RTCDTMFSenderEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCDataChannel`<`TEventTarget`\> |
| `K` | extends keyof `RTCDataChannelEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`RTCDataChannelEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCDtlsTransport`<`TEventTarget`\> |
| `K` | extends keyof `RTCDtlsTransportEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`RTCDtlsTransportEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCIceTransport`<`TEventTarget`\> |
| `K` | extends keyof `RTCIceTransportEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`RTCIceTransportEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCPeerConnection`<`TEventTarget`\> |
| `K` | extends keyof `RTCPeerConnectionEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`RTCPeerConnectionEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCSctpTransport`<`TEventTarget`\> |
| `K` | extends ``"statechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`RTCSctpTransportEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RemotePlayback`<`TEventTarget`\> |
| `K` | extends keyof `RemotePlaybackEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`RemotePlaybackEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SVGSVGElement`<`TEventTarget`\> |
| `K` | extends keyof `SVGSVGElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`SVGSVGElementEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ScreenOrientation`<`TEventTarget`\> |
| `K` | extends ``"change"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`ScreenOrientationEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ServiceWorker`<`TEventTarget`\> |
| `K` | extends keyof `ServiceWorkerEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`ServiceWorkerEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ServiceWorkerContainer`<`TEventTarget`\> |
| `K` | extends keyof `ServiceWorkerContainerEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`ServiceWorkerContainerEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ServiceWorkerRegistration`<`TEventTarget`\> |
| `K` | extends ``"updatefound"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`ServiceWorkerRegistrationEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ShadowRoot`<`TEventTarget`\> |
| `K` | extends ``"slotchange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`ShadowRootEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SourceBuffer`<`TEventTarget`\> |
| `K` | extends keyof `SourceBufferEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`SourceBufferEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SourceBufferList`<`TEventTarget`\> |
| `K` | extends keyof `SourceBufferListEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`SourceBufferListEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SpeechSynthesis`<`TEventTarget`\> |
| `K` | extends ``"voiceschanged"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`SpeechSynthesisEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SpeechSynthesisUtterance`<`TEventTarget`\> |
| `K` | extends keyof `SpeechSynthesisUtteranceEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`SpeechSynthesisUtteranceEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SVGElement`<`TEventTarget`\> |
| `K` | extends keyof `SVGElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`SVGElementEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `TextTrack`<`TEventTarget`\> |
| `K` | extends ``"cuechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`TextTrackEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `TextTrackCue`<`TEventTarget`\> |
| `K` | extends keyof `TextTrackCueEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`TextTrackCueEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `TextTrackList`<`TEventTarget`\> |
| `K` | extends keyof `TextTrackListEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`TextTrackListEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `VisualViewport`<`TEventTarget`\> |
| `K` | extends keyof `VisualViewportEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`VisualViewportEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `WebSocket`<`TEventTarget`\> |
| `K` | extends keyof `WebSocketEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`WebSocketEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`, `T`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Window`<`TEventTarget`\> |
| `K` | extends keyof `WindowEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`WindowEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`, `T`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Worker`<`TEventTarget`\> |
| `K` | extends keyof `WorkerEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`WorkerEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `XMLHttpRequestEventTarget`<`TEventTarget`\> |
| `K` | extends keyof `XMLHttpRequestEventTargetEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventHandler` | [`SideEffect1`](functions.md#sideeffect1)<`XMLHttpRequestEventTargetEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

___

### addEventListener

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `AbortSignal`<`TEventTarget`\> |
| `K` | extends ``"abort"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`AbortSignalEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Animation`<`TEventTarget`\> |
| `K` | extends keyof `AnimationEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`AnimationEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `AbstractWorker` |
| `K` | extends ``"error"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`AbstractWorkerEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `AudioScheduledSourceNode`<`TEventTarget`\> |
| `K` | extends ``"ended"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`AudioScheduledSourceNodeEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `BaseAudioContext`<`TEventTarget`\> |
| `K` | extends ``"statechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`BaseAudioContextEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `AudioWorkletNode`<`TEventTarget`\> |
| `K` | extends ``"processorerror"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`AudioWorkletNodeEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `BroadcastChannel`<`TEventTarget`\> |
| `K` | extends keyof `BroadcastChannelEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`BroadcastChannelEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Document`<`TEventTarget`\> |
| `K` | extends keyof `DocumentEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`DocumentEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Element`<`TEventTarget`\> |
| `K` | extends keyof `ElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`ElementEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaStreamTrack`<`TEventTarget`\> |
| `K` | extends keyof `MediaStreamTrackEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`MediaStreamTrackEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `EventSource`<`TEventTarget`\> |
| `K` | extends keyof `EventSourceEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`EventSourceEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `FileReader`<`TEventTarget`\> |
| `K` | extends keyof `FileReaderEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`FileReaderEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `FontFaceSet`<`TEventTarget`\> |
| `K` | extends keyof `FontFaceSetEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`FontFaceSetEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `GlobalEventHandlers` |
| `K` | extends keyof `GlobalEventHandlersEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`GlobalEventHandlersEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `IDBDatabase`<`TEventTarget`\> |
| `K` | extends keyof `IDBDatabaseEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`IDBDatabaseEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `HTMLBodyElement`<`TEventTarget`\> |
| `K` | extends keyof `HTMLBodyElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`HTMLBodyElementEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `HTMLElement`<`TEventTarget`\> |
| `K` | extends keyof `HTMLElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`HTMLElementEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `HTMLMediaElement`<`TEventTarget`\> |
| `K` | extends keyof `HTMLMediaElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`HTMLMediaElementEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `HTMLVideoElement`<`TEventTarget`\> |
| `K` | extends keyof `HTMLVideoElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`HTMLVideoElementEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `IDBOpenDBRequest`<`TEventTarget`\> |
| `K` | extends keyof `IDBOpenDBRequestEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`IDBOpenDBRequestEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`, `TDBObject`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `IDBRequest`<`TDBObject`, `TEventTarget`\> |
| `K` | extends keyof `IDBRequestEventMap` |
| `TDBObject` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`IDBRequestEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `IDBTransaction`<`TEventTarget`\> |
| `K` | extends keyof `IDBTransactionEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`IDBTransactionEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MathMLElement`<`TEventTarget`\> |
| `K` | extends keyof `MathMLElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`MathMLElementEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaDevices`<`TEventTarget`\> |
| `K` | extends ``"devicechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`MediaDevicesEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaKeySession`<`TEventTarget`\> |
| `K` | extends keyof `MediaKeySessionEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`MediaKeySessionEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaQueryList`<`TEventTarget`\> |
| `K` | extends ``"change"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`MediaQueryListEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaRecorder`<`TEventTarget`\> |
| `K` | extends keyof `MediaRecorderEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`MediaRecorderEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaStream` \| `MediaSource` |
| `K` | extends keyof `MediaSourceEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`MediaSourceEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaStream`<`TEventTarget`\> |
| `K` | extends keyof `MediaStreamEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`MediaStreamEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MessagePort`<`TEventTarget`\> |
| `K` | extends keyof `MessagePortEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`MessagePortEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Notification`<`TEventTarget`\> |
| `K` | extends keyof `NotificationEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`NotificationEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `OfflineAudioContext`<`TEventTarget`\> |
| `K` | extends keyof `OfflineAudioContextEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`OfflineAudioContextEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `OffscreenCanvas`<`TEventTarget`\> |
| `K` | extends keyof `OffscreenCanvasEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`OffscreenCanvasEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `PaymentRequest`<`TEventTarget`\> |
| `K` | extends ``"paymentmethodchange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`PaymentRequestEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Performance`<`TEventTarget`\> |
| `K` | extends ``"resourcetimingbufferfull"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`PerformanceEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `PermissionStatus`<`TEventTarget`\> |
| `K` | extends ``"change"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`PermissionStatusEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `PictureInPictureWindow`<`TEventTarget`\> |
| `K` | extends ``"resize"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`PictureInPictureWindowEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCDTMFSender`<`TEventTarget`\> |
| `K` | extends ``"tonechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`RTCDTMFSenderEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCDataChannel`<`TEventTarget`\> |
| `K` | extends keyof `RTCDataChannelEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`RTCDataChannelEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCDtlsTransport`<`TEventTarget`\> |
| `K` | extends keyof `RTCDtlsTransportEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`RTCDtlsTransportEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCIceTransport`<`TEventTarget`\> |
| `K` | extends keyof `RTCIceTransportEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`RTCIceTransportEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCPeerConnection`<`TEventTarget`\> |
| `K` | extends keyof `RTCPeerConnectionEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`RTCPeerConnectionEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCSctpTransport`<`TEventTarget`\> |
| `K` | extends ``"statechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`RTCSctpTransportEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RemotePlayback`<`TEventTarget`\> |
| `K` | extends keyof `RemotePlaybackEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`RemotePlaybackEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SVGSVGElement`<`TEventTarget`\> |
| `K` | extends keyof `SVGSVGElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`SVGSVGElementEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ScreenOrientation`<`TEventTarget`\> |
| `K` | extends ``"change"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`ScreenOrientationEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ServiceWorker`<`TEventTarget`\> |
| `K` | extends keyof `ServiceWorkerEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`ServiceWorkerEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ServiceWorkerContainer`<`TEventTarget`\> |
| `K` | extends keyof `ServiceWorkerContainerEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`ServiceWorkerContainerEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ServiceWorkerRegistration`<`TEventTarget`\> |
| `K` | extends ``"updatefound"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`ServiceWorkerRegistrationEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ShadowRoot`<`TEventTarget`\> |
| `K` | extends ``"slotchange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`ShadowRootEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SourceBuffer`<`TEventTarget`\> |
| `K` | extends keyof `SourceBufferEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`SourceBufferEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SourceBufferList`<`TEventTarget`\> |
| `K` | extends keyof `SourceBufferListEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`SourceBufferListEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SpeechSynthesis`<`TEventTarget`\> |
| `K` | extends ``"voiceschanged"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`SpeechSynthesisEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SpeechSynthesisUtterance`<`TEventTarget`\> |
| `K` | extends keyof `SpeechSynthesisUtteranceEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`SpeechSynthesisUtteranceEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SVGElement`<`TEventTarget`\> |
| `K` | extends keyof `SVGElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`SVGElementEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `TextTrack`<`TEventTarget`\> |
| `K` | extends ``"cuechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`TextTrackEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `TextTrackCue`<`TEventTarget`\> |
| `K` | extends keyof `TextTrackCueEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`TextTrackCueEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `TextTrackList`<`TEventTarget`\> |
| `K` | extends keyof `TextTrackListEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`TextTrackListEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `VisualViewport`<`TEventTarget`\> |
| `K` | extends keyof `VisualViewportEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`VisualViewportEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `WebSocket`<`TEventTarget`\> |
| `K` | extends keyof `WebSocketEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`WebSocketEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Window`<`TEventTarget`\> |
| `K` | extends keyof `WindowEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`WindowEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Worker`<`TEventTarget`\> |
| `K` | extends keyof `WorkerEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`WorkerEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `XMLHttpRequestEventTarget`<`TEventTarget`\> |
| `K` | extends keyof `XMLHttpRequestEventTargetEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/types.ErrorSafeEventListenerLike.md)<`XMLHttpRequestEventTargetEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

___

### addMeasureHandler

▸ **addMeasureHandler**<`TElement`\>(`handler`): [`Function1`](functions.md#function1)<`TElement`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TElement` | extends `HTMLElement`<`TElement`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`SideEffect1`](functions.md#sideeffect1)<[`Rect`](../interfaces/integrations_web.Rect.md)\> |

#### Returns

[`Function1`](functions.md#function1)<`TElement`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

___

### addMeasureListener

▸ **addMeasureListener**<`TElement`\>(`listener`): [`Function1`](functions.md#function1)<`TElement`, `TElement`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TElement` | extends `HTMLElement` \| `SVGElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`EventListenerLike`](../interfaces/types.EventListenerLike.md)<[`Rect`](../interfaces/integrations_web.Rect.md)\> |

#### Returns

[`Function1`](functions.md#function1)<`TElement`, `TElement`\>

___

### addResizeHandler

▸ **addResizeHandler**<`TElement`\>(`handler`): [`Function1`](functions.md#function1)<`TElement`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TElement` | extends `Element`<`TElement`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`SideEffect1`](functions.md#sideeffect1)<`ResizeObserverEntry`\> |

#### Returns

[`Function1`](functions.md#function1)<`TElement`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

___

### addResizeListener

▸ **addResizeListener**<`TElement`\>(`listener`, `options?`): [`Function1`](functions.md#function1)<`TElement`, `TElement`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TElement` | extends `Element`<`TElement`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`EventListenerLike`](../interfaces/types.EventListenerLike.md)<`ResizeObserverEntry`\> |
| `options?` | `ResizeObserverOptions` |

#### Returns

[`Function1`](functions.md#function1)<`TElement`, `TElement`\>

___

### addScrollHandler

▸ **addScrollHandler**<`TElement`\>(`handler`): [`Function1`](functions.md#function1)<`TElement`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TElement` | extends `HTMLElement`<`TElement`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`SideEffect1`](functions.md#sideeffect1)<[`ScrollValue`](../interfaces/integrations_web.ScrollValue.md)\> |

#### Returns

[`Function1`](functions.md#function1)<`TElement`, [`DisposableLike`](../interfaces/types.DisposableLike.md)\>

___

### addScrollListener

▸ **addScrollListener**<`TElement`\>(`listener`): [`Function1`](functions.md#function1)<`TElement`, `TElement`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TElement` | extends `HTMLElement`<`TElement`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`EventListenerLike`](../interfaces/types.EventListenerLike.md)<[`ScrollValue`](../interfaces/integrations_web.ScrollValue.md)\> |

#### Returns

[`Function1`](functions.md#function1)<`TElement`, `TElement`\>

___

### intersectionWith

▸ **intersectionWith**(`parent?`): [`Function1`](functions.md#function1)<`Element`, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`IntersectionObserverEntry`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent?` | `Element` \| `Document` |

#### Returns

[`Function1`](functions.md#function1)<`Element`, [`EventSourceLike`](../interfaces/types.EventSourceLike.md)<`IntersectionObserverEntry`\>\>

___

### observeEvent

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `AbortSignal`<`TEventTarget`\> |
| `K` | extends ``"abort"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`AbortSignalEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Animation`<`TEventTarget`\> |
| `K` | extends keyof `AnimationEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`AnimationEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `AbstractWorker` |
| `K` | extends ``"error"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`AbstractWorkerEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `AudioScheduledSourceNode`<`TEventTarget`\> |
| `K` | extends ``"ended"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`AudioScheduledSourceNodeEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `BaseAudioContext`<`TEventTarget`\> |
| `K` | extends ``"statechange"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`BaseAudioContextEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `AudioWorkletNode`<`TEventTarget`\> |
| `K` | extends ``"processorerror"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`AudioWorkletNodeEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `BroadcastChannel`<`TEventTarget`\> |
| `K` | extends keyof `BroadcastChannelEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`BroadcastChannelEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Document`<`TEventTarget`\> |
| `K` | extends keyof `DocumentEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`DocumentEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Element`<`TEventTarget`\> |
| `K` | extends keyof `ElementEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`ElementEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaStreamTrack`<`TEventTarget`\> |
| `K` | extends keyof `MediaStreamTrackEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`MediaStreamTrackEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `EventSource`<`TEventTarget`\> |
| `K` | extends keyof `EventSourceEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`EventSourceEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `FileReader`<`TEventTarget`\> |
| `K` | extends keyof `FileReaderEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`FileReaderEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `FontFaceSet`<`TEventTarget`\> |
| `K` | extends keyof `FontFaceSetEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`FontFaceSetEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `GlobalEventHandlers` |
| `K` | extends keyof `GlobalEventHandlersEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`GlobalEventHandlersEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `IDBDatabase`<`TEventTarget`\> |
| `K` | extends keyof `IDBDatabaseEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`IDBDatabaseEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `HTMLBodyElement`<`TEventTarget`\> |
| `K` | extends keyof `HTMLBodyElementEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`HTMLBodyElementEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `HTMLElement`<`TEventTarget`\> |
| `K` | extends keyof `HTMLElementEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`HTMLElementEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `HTMLMediaElement`<`TEventTarget`\> |
| `K` | extends keyof `HTMLMediaElementEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`HTMLMediaElementEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `HTMLVideoElement`<`TEventTarget`\> |
| `K` | extends keyof `HTMLVideoElementEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`HTMLVideoElementEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `IDBOpenDBRequest`<`TEventTarget`\> |
| `K` | extends keyof `IDBOpenDBRequestEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`IDBOpenDBRequestEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`, `TDBObject`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `IDBRequest`<`TDBObject`, `TEventTarget`\> |
| `K` | extends keyof `IDBRequestEventMap` |
| `T` | `T` |
| `TDBObject` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`IDBRequestEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `IDBTransaction`<`TEventTarget`\> |
| `K` | extends keyof `IDBTransactionEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`IDBTransactionEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MathMLElement`<`TEventTarget`\> |
| `K` | extends keyof `MathMLElementEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`MathMLElementEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaDevices`<`TEventTarget`\> |
| `K` | extends ``"devicechange"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`MediaDevicesEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaKeySession`<`TEventTarget`\> |
| `K` | extends keyof `MediaKeySessionEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`MediaKeySessionEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaQueryList`<`TEventTarget`\> |
| `K` | extends ``"change"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`MediaQueryListEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaRecorder`<`TEventTarget`\> |
| `K` | extends keyof `MediaRecorderEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`MediaRecorderEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaStream` \| `MediaSource` |
| `K` | extends keyof `MediaSourceEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`MediaSourceEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaStream`<`TEventTarget`\> |
| `K` | extends keyof `MediaStreamEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`MediaStreamEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MessagePort`<`TEventTarget`\> |
| `K` | extends keyof `MessagePortEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`MessagePortEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Notification`<`TEventTarget`\> |
| `K` | extends keyof `NotificationEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`NotificationEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `OfflineAudioContext`<`TEventTarget`\> |
| `K` | extends keyof `OfflineAudioContextEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`OfflineAudioContextEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `OffscreenCanvas`<`TEventTarget`\> |
| `K` | extends keyof `OffscreenCanvasEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`OffscreenCanvasEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `PaymentRequest`<`TEventTarget`\> |
| `K` | extends ``"paymentmethodchange"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`PaymentRequestEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Performance`<`TEventTarget`\> |
| `K` | extends ``"resourcetimingbufferfull"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`PerformanceEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `PermissionStatus`<`TEventTarget`\> |
| `K` | extends ``"change"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`PermissionStatusEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `PictureInPictureWindow`<`TEventTarget`\> |
| `K` | extends ``"resize"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`PictureInPictureWindowEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCDTMFSender`<`TEventTarget`\> |
| `K` | extends ``"tonechange"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`RTCDTMFSenderEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCDataChannel`<`TEventTarget`\> |
| `K` | extends keyof `RTCDataChannelEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`RTCDataChannelEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCDtlsTransport`<`TEventTarget`\> |
| `K` | extends keyof `RTCDtlsTransportEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`RTCDtlsTransportEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCIceTransport`<`TEventTarget`\> |
| `K` | extends keyof `RTCIceTransportEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`RTCIceTransportEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCPeerConnection`<`TEventTarget`\> |
| `K` | extends keyof `RTCPeerConnectionEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`RTCPeerConnectionEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCSctpTransport`<`TEventTarget`\> |
| `K` | extends ``"statechange"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`RTCSctpTransportEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RemotePlayback`<`TEventTarget`\> |
| `K` | extends keyof `RemotePlaybackEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`RemotePlaybackEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SVGSVGElement`<`TEventTarget`\> |
| `K` | extends keyof `SVGSVGElementEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`SVGSVGElementEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ScreenOrientation`<`TEventTarget`\> |
| `K` | extends ``"change"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`ScreenOrientationEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ServiceWorker`<`TEventTarget`\> |
| `K` | extends keyof `ServiceWorkerEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`ServiceWorkerEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ServiceWorkerContainer`<`TEventTarget`\> |
| `K` | extends keyof `ServiceWorkerContainerEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`ServiceWorkerContainerEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ServiceWorkerRegistration`<`TEventTarget`\> |
| `K` | extends ``"updatefound"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`ServiceWorkerRegistrationEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ShadowRoot`<`TEventTarget`\> |
| `K` | extends ``"slotchange"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`ShadowRootEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SourceBuffer`<`TEventTarget`\> |
| `K` | extends keyof `SourceBufferEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`SourceBufferEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SourceBufferList`<`TEventTarget`\> |
| `K` | extends keyof `SourceBufferListEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`SourceBufferListEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SpeechSynthesis`<`TEventTarget`\> |
| `K` | extends ``"voiceschanged"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`SpeechSynthesisEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SpeechSynthesisUtterance`<`TEventTarget`\> |
| `K` | extends keyof `SpeechSynthesisUtteranceEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`SpeechSynthesisUtteranceEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SVGElement`<`TEventTarget`\> |
| `K` | extends keyof `SVGElementEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`SVGElementEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `TextTrack`<`TEventTarget`\> |
| `K` | extends ``"cuechange"`` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`TextTrackEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `TextTrackCue`<`TEventTarget`\> |
| `K` | extends keyof `TextTrackCueEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`TextTrackCueEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `TextTrackList`<`TEventTarget`\> |
| `K` | extends keyof `TextTrackListEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`TextTrackListEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `VisualViewport`<`TEventTarget`\> |
| `K` | extends keyof `VisualViewportEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`VisualViewportEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `WebSocket`<`TEventTarget`\> |
| `K` | extends keyof `WebSocketEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`WebSocketEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Window`<`TEventTarget`\> |
| `K` | extends keyof `WindowEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`WindowEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Worker`<`TEventTarget`\> |
| `K` | extends keyof `WorkerEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`WorkerEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `XMLHttpRequestEventTarget`<`TEventTarget`\> |
| `K` | extends keyof `XMLHttpRequestEventTargetEventMap` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `selector` | [`Function1`](functions.md#function1)<`XMLHttpRequestEventTargetEventMap`[`K`], `T`\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<`T`\>\>

___

### observeMeasure

▸ **observeMeasure**<`TElement`\>(): [`Function1`](functions.md#function1)<`TElement`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<[`Rect`](../interfaces/integrations_web.Rect.md)\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TElement` | extends `HTMLElement` \| `SVGElement` |

#### Returns

[`Function1`](functions.md#function1)<`TElement`, [`DeferredObservableLike`](../interfaces/types.DeferredObservableLike.md)<[`Rect`](../interfaces/integrations_web.Rect.md)\>\>
