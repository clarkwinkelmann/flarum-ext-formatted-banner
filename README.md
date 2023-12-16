# Formatted Banner

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/clarkwinkelmann/flarum-ext-formatted-banner/blob/main/LICENSE.txt) [![Latest Stable Version](https://img.shields.io/packagist/v/clarkwinkelmann/flarum-ext-formatted-banner.svg)](https://packagist.org/packages/clarkwinkelmann/flarum-ext-formatted-banner) [![Total Downloads](https://img.shields.io/packagist/dt/clarkwinkelmann/flarum-ext-formatted-banner.svg)](https://packagist.org/packages/clarkwinkelmann/flarum-ext-formatted-banner) [![Donate](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.me/clarkwinkelmann)

This extension adds a customizable banner to Flarum homepage or all pages.

The "Content" field accepts Flarum formatter compatible syntax.
The "HTML" field accepts any valid HTML, but script tags will not be executed.

"Content" and "HTML" can be used at the same time.
"HTML" will be added below "Content" if both are used.

**Allow dismissing banner** works the same way as Flarum Welcome Hero.
Local Storage is used to save the dismissal.
The banner appears again if the browser cached data is cleared.

**Replace Welcome Hero with banner** places the Banner in place of Flarum's built-in Welcome Hero.
Visually this is very similar to the default option, but it means the banner only appears on the discussion list.

**Hide Welcome Hero** only has an effect if the banner is not already replacing the Welcome Hero.
This can also be achieved natively by removing all values from Flarum Welcome Hero settings.

If **Replace Welcome Hero with banner** or **Hide Welcome Hero** are enabled, the extension conflicts with the terms update banner of FoF Terms and probably other extensions that do something similar.

## Installation

    composer require clarkwinkelmann/flarum-ext-formatted-banner

## Support

This extension is under **minimal maintenance**.

It was developed for a client and released as open-source for the benefit of the community.
I might publish simple bugfixes or compatibility updates for free.

You can [contact me](https://clarkwinkelmann.com/flarum) to sponsor additional features or updates.

Support is offered on a "best effort" basis through the Flarum community thread.

**Sponsors**: Dater.com

## Links

- [GitHub](https://github.com/clarkwinkelmann/flarum-ext-formatted-banner)
- [Packagist](https://packagist.org/packages/clarkwinkelmann/flarum-ext-formatted-banner)
- [Discuss](https://discuss.flarum.org/d/31152)
