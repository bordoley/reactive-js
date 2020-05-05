[@reactive-js/core - v0.0.37](../README.md) › ["textEncoding"](_textencoding_.md)

# Module: "textEncoding"

## Index

### Variables

* [encode](_textencoding_.md#const-encode)

### Functions

* [decode](_textencoding_.md#const-decode)

## Variables

### `Const` encode

• **encode**: *[FlowableOperator](_flowable_.md#flowableoperator)‹string, Uint8Array›* = lift(encodingOp)

## Functions

### `Const` decode

▸ **decode**(`charset`: string, `options?`: TextDecoderOptions): *[FlowableOperator](_flowable_.md#flowableoperator)‹ArrayBuffer, string›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`charset` | string | "utf-8" |
`options?` | TextDecoderOptions | - |

**Returns:** *[FlowableOperator](_flowable_.md#flowableoperator)‹ArrayBuffer, string›*
