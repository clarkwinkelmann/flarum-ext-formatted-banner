<?php

namespace ClarkWinkelmann\FormattedBanner;

use Flarum\Formatter\Formatter;
use Flarum\Settings\Event\Saving;

class ParseSettings
{
    public function handle(Saving $event)
    {
        foreach ($event->settings as $key => $value) {
            if ($key !== 'clarkwinkelmann-formatted-banner.guestContent' && $key !== 'clarkwinkelmann-formatted-banner.memberContent') {
                continue;
            }

            if (empty($value)) {
                $event->settings[$key] = null;

                continue;
            }

            /**
             * @var $formatter Formatter
             */
            $formatter = resolve(Formatter::class);

            $event->settings[$key] = $formatter->parse($value);
        }
    }
}
