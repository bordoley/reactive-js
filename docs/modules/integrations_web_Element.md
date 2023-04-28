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

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`, `TDBObject`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`, `T`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`, `T`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

___

### addEventListener

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `AbortSignal`<`TEventTarget`\> |
| `K` | extends ``"abort"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`AbortSignalEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Animation`<`TEventTarget`\> |
| `K` | extends keyof `AnimationEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`AnimationEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `AbstractWorker` |
| `K` | extends ``"error"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`AbstractWorkerEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `AudioScheduledSourceNode`<`TEventTarget`\> |
| `K` | extends ``"ended"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`AudioScheduledSourceNodeEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `BaseAudioContext`<`TEventTarget`\> |
| `K` | extends ``"statechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`BaseAudioContextEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `AudioWorkletNode`<`TEventTarget`\> |
| `K` | extends ``"processorerror"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`AudioWorkletNodeEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `BroadcastChannel`<`TEventTarget`\> |
| `K` | extends keyof `BroadcastChannelEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`BroadcastChannelEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Document`<`TEventTarget`\> |
| `K` | extends keyof `DocumentEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`DocumentEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Element`<`TEventTarget`\> |
| `K` | extends keyof `ElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`ElementEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaStreamTrack`<`TEventTarget`\> |
| `K` | extends keyof `MediaStreamTrackEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`MediaStreamTrackEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `EventSource`<`TEventTarget`\> |
| `K` | extends keyof `EventSourceEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`EventSourceEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `FileReader`<`TEventTarget`\> |
| `K` | extends keyof `FileReaderEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`FileReaderEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `FontFaceSet`<`TEventTarget`\> |
| `K` | extends keyof `FontFaceSetEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`FontFaceSetEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `GlobalEventHandlers` |
| `K` | extends keyof `GlobalEventHandlersEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`GlobalEventHandlersEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `IDBDatabase`<`TEventTarget`\> |
| `K` | extends keyof `IDBDatabaseEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`IDBDatabaseEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `HTMLBodyElement`<`TEventTarget`\> |
| `K` | extends keyof `HTMLBodyElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`HTMLBodyElementEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `HTMLElement`<`TEventTarget`\> |
| `K` | extends keyof `HTMLElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`HTMLElementEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `HTMLMediaElement`<`TEventTarget`\> |
| `K` | extends keyof `HTMLMediaElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`HTMLMediaElementEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `HTMLVideoElement`<`TEventTarget`\> |
| `K` | extends keyof `HTMLVideoElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`HTMLVideoElementEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `IDBOpenDBRequest`<`TEventTarget`\> |
| `K` | extends keyof `IDBOpenDBRequestEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`IDBOpenDBRequestEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`, `TDBObject`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

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
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`IDBRequestEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `IDBTransaction`<`TEventTarget`\> |
| `K` | extends keyof `IDBTransactionEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`IDBTransactionEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MathMLElement`<`TEventTarget`\> |
| `K` | extends keyof `MathMLElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`MathMLElementEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaDevices`<`TEventTarget`\> |
| `K` | extends ``"devicechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`MediaDevicesEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaKeySession`<`TEventTarget`\> |
| `K` | extends keyof `MediaKeySessionEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`MediaKeySessionEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaQueryList`<`TEventTarget`\> |
| `K` | extends ``"change"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`MediaQueryListEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaRecorder`<`TEventTarget`\> |
| `K` | extends keyof `MediaRecorderEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`MediaRecorderEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaStream` \| `MediaSource` |
| `K` | extends keyof `MediaSourceEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`MediaSourceEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaStream`<`TEventTarget`\> |
| `K` | extends keyof `MediaStreamEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`MediaStreamEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MessagePort`<`TEventTarget`\> |
| `K` | extends keyof `MessagePortEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`MessagePortEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Notification`<`TEventTarget`\> |
| `K` | extends keyof `NotificationEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`NotificationEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `OfflineAudioContext`<`TEventTarget`\> |
| `K` | extends keyof `OfflineAudioContextEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`OfflineAudioContextEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `OffscreenCanvas`<`TEventTarget`\> |
| `K` | extends keyof `OffscreenCanvasEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`OffscreenCanvasEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `PaymentRequest`<`TEventTarget`\> |
| `K` | extends ``"paymentmethodchange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`PaymentRequestEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Performance`<`TEventTarget`\> |
| `K` | extends ``"resourcetimingbufferfull"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`PerformanceEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `PermissionStatus`<`TEventTarget`\> |
| `K` | extends ``"change"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`PermissionStatusEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `PictureInPictureWindow`<`TEventTarget`\> |
| `K` | extends ``"resize"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`PictureInPictureWindowEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCDTMFSender`<`TEventTarget`\> |
| `K` | extends ``"tonechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`RTCDTMFSenderEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCDataChannel`<`TEventTarget`\> |
| `K` | extends keyof `RTCDataChannelEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`RTCDataChannelEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCDtlsTransport`<`TEventTarget`\> |
| `K` | extends keyof `RTCDtlsTransportEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`RTCDtlsTransportEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCIceTransport`<`TEventTarget`\> |
| `K` | extends keyof `RTCIceTransportEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`RTCIceTransportEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCPeerConnection`<`TEventTarget`\> |
| `K` | extends keyof `RTCPeerConnectionEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`RTCPeerConnectionEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCSctpTransport`<`TEventTarget`\> |
| `K` | extends ``"statechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`RTCSctpTransportEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RemotePlayback`<`TEventTarget`\> |
| `K` | extends keyof `RemotePlaybackEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`RemotePlaybackEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SVGSVGElement`<`TEventTarget`\> |
| `K` | extends keyof `SVGSVGElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`SVGSVGElementEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ScreenOrientation`<`TEventTarget`\> |
| `K` | extends ``"change"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`ScreenOrientationEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ServiceWorker`<`TEventTarget`\> |
| `K` | extends keyof `ServiceWorkerEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`ServiceWorkerEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ServiceWorkerContainer`<`TEventTarget`\> |
| `K` | extends keyof `ServiceWorkerContainerEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`ServiceWorkerContainerEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ServiceWorkerRegistration`<`TEventTarget`\> |
| `K` | extends ``"updatefound"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`ServiceWorkerRegistrationEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ShadowRoot`<`TEventTarget`\> |
| `K` | extends ``"slotchange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`ShadowRootEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SourceBuffer`<`TEventTarget`\> |
| `K` | extends keyof `SourceBufferEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`SourceBufferEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SourceBufferList`<`TEventTarget`\> |
| `K` | extends keyof `SourceBufferListEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`SourceBufferListEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SpeechSynthesis`<`TEventTarget`\> |
| `K` | extends ``"voiceschanged"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`SpeechSynthesisEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SpeechSynthesisUtterance`<`TEventTarget`\> |
| `K` | extends keyof `SpeechSynthesisUtteranceEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`SpeechSynthesisUtteranceEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SVGElement`<`TEventTarget`\> |
| `K` | extends keyof `SVGElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`SVGElementEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `TextTrack`<`TEventTarget`\> |
| `K` | extends ``"cuechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`TextTrackEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `TextTrackCue`<`TEventTarget`\> |
| `K` | extends keyof `TextTrackCueEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`TextTrackCueEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `TextTrackList`<`TEventTarget`\> |
| `K` | extends keyof `TextTrackListEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`TextTrackListEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `VisualViewport`<`TEventTarget`\> |
| `K` | extends keyof `VisualViewportEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`VisualViewportEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `WebSocket`<`TEventTarget`\> |
| `K` | extends keyof `WebSocketEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`WebSocketEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

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
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`WindowEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`, `T`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

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
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`WorkerEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

▸ **addEventListener**<`TEventTarget`, `K`\>(`eventName`, `eventListener`): [`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `XMLHttpRequestEventTarget`<`TEventTarget`\> |
| `K` | extends keyof `XMLHttpRequestEventTargetEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/util.ErrorSafeEventListenerLike.md)<`XMLHttpRequestEventTargetEventMap`[`K`]\> |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, `TEventTarget`\>

___

### addMeasureHandler

▸ **addMeasureHandler**<`TElement`\>(`handler`): [`Function1`](functions.md#function1)<`TElement`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TElement` | extends `HTMLElement`<`TElement`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`SideEffect1`](functions.md#sideeffect1)<[`Rect`](../interfaces/integrations_web.Rect.md)\> |

#### Returns

[`Function1`](functions.md#function1)<`TElement`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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
| `listener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<[`Rect`](../interfaces/integrations_web.Rect.md)\> |

#### Returns

[`Function1`](functions.md#function1)<`TElement`, `TElement`\>

___

### addResizeHandler

▸ **addResizeHandler**<`TElement`\>(`handler`): [`Function1`](functions.md#function1)<`TElement`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TElement` | extends `Element`<`TElement`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`SideEffect1`](functions.md#sideeffect1)<`ResizeObserverEntry`\> |

#### Returns

[`Function1`](functions.md#function1)<`TElement`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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
| `listener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<`ResizeObserverEntry`\> |
| `options?` | `ResizeObserverOptions` |

#### Returns

[`Function1`](functions.md#function1)<`TElement`, `TElement`\>

___

### addScrollHandler

▸ **addScrollHandler**<`TElement`\>(`handler`): [`Function1`](functions.md#function1)<`TElement`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TElement` | extends `HTMLElement`<`TElement`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`SideEffect1`](functions.md#sideeffect1)<{ `event`: ``"scroll"`` ; `value`: [`ScrollValue`](../interfaces/integrations_web.ScrollValue.md)  }\> |

#### Returns

[`Function1`](functions.md#function1)<`TElement`, [`DisposableLike`](../interfaces/util.DisposableLike.md)\>

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
| `listener` | [`EventListenerLike`](../interfaces/util.EventListenerLike.md)<{ `event`: ``"scroll"`` ; `value`: [`ScrollValue`](../interfaces/integrations_web.ScrollValue.md)  }\> |

#### Returns

[`Function1`](functions.md#function1)<`TElement`, `TElement`\>

___

### intersectionWith

▸ **intersectionWith**(`parent?`): [`Function1`](functions.md#function1)<`Element`, [`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`IntersectionObserverEntry`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent?` | `Element` \| `Document` |

#### Returns

[`Function1`](functions.md#function1)<`Element`, [`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`IntersectionObserverEntry`\>\>

___

### observeEvent

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`, `TDBObject`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

▸ **observeEvent**<`TEventTarget`, `K`, `T`\>(`eventName`, `selector`): [`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

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

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

___

### observeMeasure

▸ **observeMeasure**<`TElement`\>(): [`Function1`](functions.md#function1)<`TElement`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<[`Rect`](../interfaces/integrations_web.Rect.md)\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TElement` | extends `HTMLElement` \| `SVGElement` |

#### Returns

[`Function1`](functions.md#function1)<`TElement`, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<[`Rect`](../interfaces/integrations_web.Rect.md)\>\>
