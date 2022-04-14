import app from 'flarum/forum/app';
import {extend, override} from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import Application from 'flarum/common/Application';
import Banner from './components/Banner';

app.initializers.add('clarkwinkelmann-formatted-banner', () => {
    override(IndexPage.prototype, 'hero', function (original: any) {
        if (app.forum.attribute('formattedBannerReplaceWelcomeHero')) {
            return Banner.component({
                className: 'Hero WelcomeHero',
            });
        }

        if (app.forum.attribute('formattedBannerHideWelcomeHero')) {
            return null;
        }

        return original();
    });

    extend(Application.prototype, 'mount', function () {
        // If there's no content, we'll skip mounting the component
        // This check is also done inside of the component itself but this way it's even cleaner because we don't mount anything
        if (app.forum.attribute('formattedBannerReplaceWelcomeHero') || !app.forum.attribute<string>('formattedBannerHtml')?.trim()) {
            return;
        }

        const banner = document.createElement('div');
        banner.id = 'formatted-banner';
        const content = document.getElementById('content')!;

        content.parentNode!.insertBefore(banner, content);

        m.mount(banner, Banner);
    });
});
