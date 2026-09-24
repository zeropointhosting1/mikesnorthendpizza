# Toast integration investigation

Reviewed September 20, 2026. Discovery only; no live integration is configured.

## Current website

The project contains a static HTML page, CSS, and browser JavaScript. There is no backend, cart, payment flow, or API configuration. Five ordering links in `index.html` use `href="#order"`; the ordering section's button points to that same section. Menu content is maintained in HTML.

## Integration options

| Option | Website work | Prerequisite |
| --- | --- | --- |
| Toast-hosted ordering | Point the five ordering links to the restaurant's verified Toast ordering page. Toast handles ordering and checkout. | Active Toast Online Ordering and the exact location URL. |
| Menu sync plus hosted ordering | Add a backend to fetch/cache the menu, render menu data on the site, and link checkout to Toast. | Toast API credentials with appropriate menu read access, restaurant GUID, and ordering URL. |
| Custom ordering on this website | Build backend, menu/modifier selection, cart, availability checks, pricing, order submission, and payment integration. | Approved custom/partner integration with the required write and payment access. |

Recommendation for the existing static site: start with Toast-hosted ordering if the goal is to let customers order online. Confirm the intended scope before building a custom checkout.

Toast Online Ordering supports ordering through the restaurant's Toast website: [platform overview](https://doc.toasttab.com/doc/platformguide/adminToastOnlineOrderingOverview.html).

Standard API access is read-only. Custom integrations require an access request through the Toast account representative; permissions depend on the approved use case. Sources: [integration types](https://doc.toasttab.com/doc/devguide/apiIntegrationTypes.html), [custom integrations](https://doc.toasttab.com/doc/devguide/apiCustomIntegrationOverview.html), [API capabilities](https://doc.toasttab.com/doc/devguide/apiOverview.html). If there is no dedicated representative, Toast Support can submit an access request: [standard API access support](https://support.toasttab.com/en/article/Standard-API-Access).

## Next implementation steps

1. Confirm hosted ordering, menu synchronization, custom checkout, or reporting as the intended scope.
2. Obtain the verified Toast ordering URL for Mike's North End Pizza Company at 909 Boston Neck Road, Narragansett. This investigation did not establish a Toast URL; do not guess a restaurant slug.
3. For hosted ordering, update all five links and verify the destination's restaurant identity, mobile navigation, and pickup/delivery choices. Link changes need no API credentials.
4. For API work, confirm granted scopes, environment, restaurant GUID, and backend hosting before implementation. Store credentials server-side. Toast uses client credentials to obtain expiring bearer tokens: [authentication documentation](https://doc.toasttab.com/doc/devguide/authentication.html).
5. For custom checkout, plan menu/modifier mapping, stock and ordering availability, Toast-calculated prices, payment failure handling, and duplicate-order prevention before live testing. The Orders API supports pricing an order before submitting it: [Orders API](https://doc.toasttab.com/openapi/orders/overview/).

## Validation status

Inspected the three existing website files and checked Toast's official documentation. No credentials were used, no orders were placed, and no live checkout was tested. Website behavior remains unchanged pending the integration scope and location details.
