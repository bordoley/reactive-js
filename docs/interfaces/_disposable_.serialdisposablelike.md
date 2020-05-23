[reactive-js](../README.md) › ["disposable"](../modules/_disposable_.md) › [SerialDisposableLike](_disposable_.serialdisposablelike.md)

# Interface: SerialDisposableLike

A `DisposableLike` container that allows replacing an inner `DisposableLike` with another,
disposing the previous inner `DisposableLike` in the process. Disposing the
container also disposes the inner `DisposableLike`. Disposing the inner `DisposableLike`
with an error, disposes the container with the error.

## Hierarchy

* [DisposableLike](_disposable_.disposablelike.md)

  ↳ **SerialDisposableLike**

## Implemented by

* [AbstractSerialDisposable](../classes/_disposable_.abstractserialdisposable.md)

## Index

### Properties

* [inner](_disposable_.serialdisposablelike.md#inner)

## Properties

###  inner

• **inner**: *[DisposableLike](_disposable_.disposablelike.md)*

 The inner `DisposableLike` that may be get or set. Setting the inner
 `DisposableLike` disposes the old `DisposableLike` unless it is strictly equal
 to the new one.
