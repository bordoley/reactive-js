[Reactive-JS](../README.md) / integrations/web/Element

# Module: integrations/web/Element

## Table of contents

### Interfaces

- [WebElementModule](../interfaces/integrations_web_Element.WebElementModule.md)

### Type Aliases

- [Signature](integrations_web_Element.md#signature)

### Functions

- [addEventHandler](integrations_web_Element.md#addeventhandler)
- [addResizeHandler](integrations_web_Element.md#addresizehandler)
- [addScrollHandler](integrations_web_Element.md#addscrollhandler)
- [eventSource](integrations_web_Element.md#eventsource)
- [intersectionEventSource](integrations_web_Element.md#intersectioneventsource)
- [measure](integrations_web_Element.md#measure)
- [resizeEventSource](integrations_web_Element.md#resizeeventsource)
- [scrollEventSource](integrations_web_Element.md#scrolleventsource)

## Type Aliases

### Signature

Ƭ **Signature**: [`WebElementModule`](../interfaces/integrations_web_Element.WebElementModule.md)

## Functions

### addEventHandler

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`, `TDBObject`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`, `T`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`, `T`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

▸ **addEventHandler**<`TEventTarget`, `K`\>(`eventName`, `eventHandler`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

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

[`Function1`](functions.md#function1)<`TEventTarget`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

___

### addResizeHandler

▸ **addResizeHandler**<`TElement`\>(`handler`, `options?`): [`Function1`](functions.md#function1)<`TElement`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TElement` | extends `Element`<`TElement`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`SideEffect1`](functions.md#sideeffect1)<`ResizeObserverEntry`\> |
| `options?` | `ResizeObserverOptions` |

#### Returns

[`Function1`](functions.md#function1)<`TElement`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

___

### addScrollHandler

▸ **addScrollHandler**<`TElement`\>(`handler`): [`Function1`](functions.md#function1)<`TElement`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TElement` | extends `HTMLElement`<`TElement`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`SideEffect1`](functions.md#sideeffect1)<[`ScrollValue`](../interfaces/integrations_web.ScrollValue.md)\> |

#### Returns

[`Function1`](functions.md#function1)<`TElement`, [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

___

### eventSource

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`AbortSignalEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `AbortSignal`<`TEventTarget`\> |
| `K` | extends ``"abort"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`AbortSignalEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`AnimationEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Animation`<`TEventTarget`\> |
| `K` | extends keyof `AnimationEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`AnimationEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`AbstractWorkerEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `AbstractWorker` |
| `K` | extends ``"error"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`AbstractWorkerEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`AudioScheduledSourceNodeEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `AudioScheduledSourceNode`<`TEventTarget`\> |
| `K` | extends ``"ended"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`AudioScheduledSourceNodeEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`BaseAudioContextEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `BaseAudioContext`<`TEventTarget`\> |
| `K` | extends ``"statechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`BaseAudioContextEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`AudioWorkletNodeEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `AudioWorkletNode`<`TEventTarget`\> |
| `K` | extends ``"processorerror"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`AudioWorkletNodeEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`BroadcastChannelEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `BroadcastChannel`<`TEventTarget`\> |
| `K` | extends keyof `BroadcastChannelEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`BroadcastChannelEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`DocumentEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Document`<`TEventTarget`\> |
| `K` | extends keyof `DocumentEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`DocumentEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`ElementEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Element`<`TEventTarget`\> |
| `K` | extends keyof `ElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`ElementEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`MediaStreamTrackEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaStreamTrack`<`TEventTarget`\> |
| `K` | extends keyof `MediaStreamTrackEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`MediaStreamTrackEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`EventSourceEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`unknown`, `TEventTarget`\> |
| `K` | extends keyof `EventSourceEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`EventSourceEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`FileReaderEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `FileReader`<`TEventTarget`\> |
| `K` | extends keyof `FileReaderEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`FileReaderEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`FontFaceSetEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `FontFaceSet`<`TEventTarget`\> |
| `K` | extends keyof `FontFaceSetEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`FontFaceSetEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`GlobalEventHandlersEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `GlobalEventHandlers` |
| `K` | extends keyof `GlobalEventHandlersEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`GlobalEventHandlersEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`IDBDatabaseEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `IDBDatabase`<`TEventTarget`\> |
| `K` | extends keyof `IDBDatabaseEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`IDBDatabaseEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`HTMLBodyElementEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `HTMLBodyElement`<`TEventTarget`\> |
| `K` | extends keyof `HTMLBodyElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`HTMLBodyElementEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`HTMLElementEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `HTMLElement`<`TEventTarget`\> |
| `K` | extends keyof `HTMLElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`HTMLElementEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`HTMLMediaElementEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `HTMLMediaElement`<`TEventTarget`\> |
| `K` | extends keyof `HTMLMediaElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`HTMLMediaElementEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`HTMLVideoElementEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `HTMLVideoElement`<`TEventTarget`\> |
| `K` | extends keyof `HTMLVideoElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`HTMLVideoElementEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`IDBOpenDBRequestEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `IDBOpenDBRequest`<`TEventTarget`\> |
| `K` | extends keyof `IDBOpenDBRequestEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`IDBOpenDBRequestEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`, `TDBObject`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`IDBRequestEventMap`[`K`]\>\>

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
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`IDBRequestEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`IDBTransactionEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `IDBTransaction`<`TEventTarget`\> |
| `K` | extends keyof `IDBTransactionEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`IDBTransactionEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`MathMLElementEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MathMLElement`<`TEventTarget`\> |
| `K` | extends keyof `MathMLElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`MathMLElementEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`MediaDevicesEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaDevices`<`TEventTarget`\> |
| `K` | extends ``"devicechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`MediaDevicesEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`MediaKeySessionEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaKeySession`<`TEventTarget`\> |
| `K` | extends keyof `MediaKeySessionEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`MediaKeySessionEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`MediaQueryListEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaQueryList`<`TEventTarget`\> |
| `K` | extends ``"change"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`MediaQueryListEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`MediaRecorderEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaRecorder`<`TEventTarget`\> |
| `K` | extends keyof `MediaRecorderEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`MediaRecorderEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`MediaSourceEventMap`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaStream` \| `MediaSource` |
| `K` | extends keyof `MediaSourceEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`MediaSourceEventMap`\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`MediaStreamEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MediaStream`<`TEventTarget`\> |
| `K` | extends keyof `MediaStreamEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`MediaStreamEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`MessagePortEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `MessagePort`<`TEventTarget`\> |
| `K` | extends keyof `MessagePortEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`MessagePortEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`NotificationEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Notification`<`TEventTarget`\> |
| `K` | extends keyof `NotificationEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`NotificationEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`OfflineAudioContextEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `OfflineAudioContext`<`TEventTarget`\> |
| `K` | extends keyof `OfflineAudioContextEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`OfflineAudioContextEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`OffscreenCanvasEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `OffscreenCanvas`<`TEventTarget`\> |
| `K` | extends keyof `OffscreenCanvasEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`OffscreenCanvasEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`PaymentRequestEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `PaymentRequest`<`TEventTarget`\> |
| `K` | extends ``"paymentmethodchange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`PaymentRequestEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`PerformanceEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Performance`<`TEventTarget`\> |
| `K` | extends ``"resourcetimingbufferfull"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`PerformanceEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`PermissionStatusEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `PermissionStatus`<`TEventTarget`\> |
| `K` | extends ``"change"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`PermissionStatusEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`PictureInPictureWindowEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `PictureInPictureWindow`<`TEventTarget`\> |
| `K` | extends ``"resize"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/events.ErrorSafeEventListenerLike.md)<`PictureInPictureWindowEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`PictureInPictureWindowEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`RTCDTMFSenderEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCDTMFSender`<`TEventTarget`\> |
| `K` | extends ``"tonechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`RTCDTMFSenderEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`RTCDataChannelEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCDataChannel`<`TEventTarget`\> |
| `K` | extends keyof `RTCDataChannelEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`RTCDataChannelEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`RTCDtlsTransportEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCDtlsTransport`<`TEventTarget`\> |
| `K` | extends keyof `RTCDtlsTransportEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`RTCDtlsTransportEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`RTCIceTransportEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCIceTransport`<`TEventTarget`\> |
| `K` | extends keyof `RTCIceTransportEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`RTCIceTransportEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`RTCPeerConnectionEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCPeerConnection`<`TEventTarget`\> |
| `K` | extends keyof `RTCPeerConnectionEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`RTCPeerConnectionEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`RTCSctpTransportEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RTCSctpTransport`<`TEventTarget`\> |
| `K` | extends ``"statechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`RTCSctpTransportEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`RemotePlaybackEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `RemotePlayback`<`TEventTarget`\> |
| `K` | extends keyof `RemotePlaybackEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`RemotePlaybackEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`SVGSVGElementEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SVGSVGElement`<`TEventTarget`\> |
| `K` | extends keyof `SVGSVGElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`SVGSVGElementEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`ScreenOrientationEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ScreenOrientation`<`TEventTarget`\> |
| `K` | extends ``"change"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`ScreenOrientationEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`ServiceWorkerEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ServiceWorker`<`TEventTarget`\> |
| `K` | extends keyof `ServiceWorkerEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`ServiceWorkerEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`ServiceWorkerContainerEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ServiceWorkerContainer`<`TEventTarget`\> |
| `K` | extends keyof `ServiceWorkerContainerEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/events.ErrorSafeEventListenerLike.md)<`ServiceWorkerContainerEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`ServiceWorkerContainerEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`ServiceWorkerRegistrationEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ServiceWorkerRegistration`<`TEventTarget`\> |
| `K` | extends ``"updatefound"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/events.ErrorSafeEventListenerLike.md)<`ServiceWorkerRegistrationEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`ServiceWorkerRegistrationEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`ShadowRootEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `ShadowRoot`<`TEventTarget`\> |
| `K` | extends ``"slotchange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`ShadowRootEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`SourceBufferEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SourceBuffer`<`TEventTarget`\> |
| `K` | extends keyof `SourceBufferEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`SourceBufferEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`SourceBufferListEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SourceBufferList`<`TEventTarget`\> |
| `K` | extends keyof `SourceBufferListEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`SourceBufferListEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`SpeechSynthesisEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SpeechSynthesis`<`TEventTarget`\> |
| `K` | extends ``"voiceschanged"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`SpeechSynthesisEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `eventListener`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`SpeechSynthesisUtteranceEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SpeechSynthesisUtterance`<`TEventTarget`\> |
| `K` | extends keyof `SpeechSynthesisUtteranceEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `eventListener` | [`ErrorSafeEventListenerLike`](../interfaces/events.ErrorSafeEventListenerLike.md)<`SpeechSynthesisUtteranceEventMap`[`K`]\> |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`SpeechSynthesisUtteranceEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`SVGElementEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `SVGElement`<`TEventTarget`\> |
| `K` | extends keyof `SVGElementEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`SVGElementEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`TextTrackEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `TextTrack`<`TEventTarget`\> |
| `K` | extends ``"cuechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`TextTrackEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`TextTrackCueEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `TextTrackCue`<`TEventTarget`\> |
| `K` | extends keyof `TextTrackCueEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`TextTrackCueEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`TextTrackListEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `TextTrackList`<`TEventTarget`\> |
| `K` | extends keyof `TextTrackListEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`TextTrackListEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`VisualViewportEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `VisualViewport`<`TEventTarget`\> |
| `K` | extends keyof `VisualViewportEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`VisualViewportEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`WebSocketEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `WebSocket`<`TEventTarget`\> |
| `K` | extends keyof `WebSocketEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`WebSocketEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`WindowEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Window`<`TEventTarget`\> |
| `K` | extends keyof `WindowEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`WindowEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`WorkerEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `Worker`<`TEventTarget`\> |
| `K` | extends keyof `WorkerEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`WorkerEventMap`[`K`]\>\>

▸ **eventSource**<`TEventTarget`, `K`\>(`eventName`, `options?`): [`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`XMLHttpRequestEventTargetEventMap`[`K`]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEventTarget` | extends `XMLHttpRequestEventTarget`<`TEventTarget`\> |
| `K` | extends keyof `XMLHttpRequestEventTargetEventMap` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `K` |
| `options?` | `Object` |
| `options.capture?` | `boolean` |
| `options.passive?` | `boolean` |

#### Returns

[`Function1`](functions.md#function1)<`TEventTarget`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`XMLHttpRequestEventTargetEventMap`[`K`]\>\>

___

### intersectionEventSource

▸ **intersectionEventSource**(`parent?`): [`Function1`](functions.md#function1)<`Element`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`IntersectionObserverEntry`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent?` | `Element` \| `Document` |

#### Returns

[`Function1`](functions.md#function1)<`Element`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`IntersectionObserverEntry`\>\>

___

### measure

▸ **measure**<`TElement`\>(): [`Function1`](functions.md#function1)<`TElement`, [`StoreLike`](../interfaces/events.StoreLike.md)<[`Rect`](../interfaces/integrations_web.Rect.md)\> & [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TElement` | extends `HTMLElement` \| `SVGElement` |

#### Returns

[`Function1`](functions.md#function1)<`TElement`, [`StoreLike`](../interfaces/events.StoreLike.md)<[`Rect`](../interfaces/integrations_web.Rect.md)\> & [`DisposableLike`](../interfaces/utils.DisposableLike.md)\>

___

### resizeEventSource

▸ **resizeEventSource**<`TElement`\>(`options?`): [`Function1`](functions.md#function1)<`TElement`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`ResizeObserverEntry`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TElement` | extends `Element`<`TElement`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ResizeObserverOptions` |

#### Returns

[`Function1`](functions.md#function1)<`TElement`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<`ResizeObserverEntry`\>\>

___

### scrollEventSource

▸ **scrollEventSource**<`TElement`\>(): [`Function1`](functions.md#function1)<`TElement`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<[`ScrollValue`](../interfaces/integrations_web.ScrollValue.md)\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TElement` | extends `HTMLElement`<`TElement`\> |

#### Returns

[`Function1`](functions.md#function1)<`TElement`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)<[`ScrollValue`](../interfaces/integrations_web.ScrollValue.md)\>\>
