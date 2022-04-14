<?php

namespace ClarkWinkelmann\FormattedBanner;

use Flarum\Formatter\Formatter;
use Flarum\Settings\Event\Deserializing;

class UnparseSettings
{
    public function handle(Deserializing $event)
    {
        foreach ($event->settings as $key => $value) {
            if ($key !== 'clarkwinkelmann-formatted-banner.guestContent' && $key !== 'clarkwinkelmann-formatted-banner.memberContent') {
                continue;
            }

            if (empty($value)) {
                continue;
            }

            /**
             * @var $formatter Formatter
             */
            $formatter = resolve(Formatter::class);

            $event->settings[$key] = $formatter->unparse($value);
        }
    }
}
