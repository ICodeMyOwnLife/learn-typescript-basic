# `self` object

Examples of declaring type for the `self` object in a specific file:

- declaring self as `ServiceWorkerGlobalScope` for service worker script files
- declaring self as `DedicatedWorkerGlobalScope` for dedicated web worker script files
- or even declaring self as `Window` for normal browser script files (which is normally unnecessary)

## TODO

Add an example for `SharedWorkerGlobalScope`, which is available after TypeScript 3.9 release.
