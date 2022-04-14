<?php

namespace ClarkWinkelmann\FormattedBanner;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Formatter\Formatter;
use Flarum\Settings\SettingsRepositoryInterface;
use Psr\Http\Message\ServerRequestInterface;

class ForumAttributes
{
    protected $settings;
    protected $formatter;

    public function __construct(SettingsRepositoryInterface $settings, Formatter $formatter)
    {
        $this->settings = $settings;
        $this->formatter = $formatter;
    }

    public function __invoke(ForumSerializer $serializer): array
    {
        $mode = 'member';

        if ($serializer->getActor()->isGuest()) {
            $mode = 'guest';
        }

        return [
            'formattedBannerHtml' => $this->formattedSetting("clarkwinkelmann-formatted-banner.{$mode}Content", $serializer->getRequest()) . "\n\n" . $this->settings->get("clarkwinkelmann-formatted-banner.{$mode}Html"),
            'formattedBannerDismissible' => $this->settings->get('clarkwinkelmann-formatted-banner.dismissible') === '1',
            'formattedBannerReplaceWelcomeHero' => $this->settings->get('clarkwinkelmann-formatted-banner.replaceWelcomeHero') === '1',
            'formattedBannerHideWelcomeHero' => $this->settings->get('clarkwinkelmann-formatted-banner.hideWelcomeHero') === '1',
        ];
    }

    protected function formattedSetting(string $key, ServerRequestInterface $request): string
    {
        $value = $this->settings->get($key);

        if ($value) {
            return $this->formatter->render($value, null, $request);
        }

        return '';
    }
}
