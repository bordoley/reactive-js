[@reactive-js/core - v0.0.40](../README.md) › ["disposable"](../modules/_disposable_.md) › [SerialDisposableLike](_disposable_.serialdisposablelike.md)

# Interface: SerialDisposableLike

A Disposable container that allows replacing an inner Disposable with another,
disposing the previous inner disposable in the process. Disposing the
container also disposes the inner disposable.

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

 The inner disposable that may be get or set. Setting the inner
 disposable disposes the old disposable unless it is reference equal
 to the new one.
