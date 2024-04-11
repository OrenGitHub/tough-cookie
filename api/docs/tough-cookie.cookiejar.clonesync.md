<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [tough-cookie](./tough-cookie.md) &gt; [CookieJar](./tough-cookie.cookiejar.md) &gt; [cloneSync](./tough-cookie.cookiejar.clonesync.md)

## CookieJar.cloneSync() method

Produces a deep clone of this CookieJar. Modifications to the original do not affect the clone, and vice versa.

<strong>Note</strong>: Only works if both the configured Store and destination Store are synchronous.

**Signature:**

```typescript
cloneSync(newStore?: Store): CookieJar | undefined;
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

newStore


</td><td>

[Store](./tough-cookie.store.md)


</td><td>

_(Optional)_ The target [Store](./tough-cookie.store.md) to clone cookies into.


</td></tr>
</tbody></table>
**Returns:**

[CookieJar](./tough-cookie.cookiejar.md) \| undefined

## Remarks

- When no [Store](./tough-cookie.store.md) is provided, a new [MemoryCookieStore](./tough-cookie.memorycookiestore.md) will be used.

- Transferring between store types is supported so long as the source implements `.getAllCookies()` and the destination implements `.putCookie()`<!-- -->.
