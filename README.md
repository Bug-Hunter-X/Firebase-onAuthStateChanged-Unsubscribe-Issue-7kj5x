# Firebase onAuthStateChanged Unsubscribe Issue
This repository demonstrates a common issue with Firebase's `onAuthStateChanged` listener: improper unsubscription leading to memory leaks.  The provided code shows how the listener can be correctly managed to prevent this.

## Problem
The `onAuthStateChanged` listener continues to run even after the component or function that attached it unmounts or completes, if no unsubscribe function is used.  This causes memory leaks and potential performance issues.