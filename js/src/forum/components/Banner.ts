import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import Button from 'flarum/common/components/Button';

export interface BannerAttrs {
    className?: string
}

const LOCAL_STORAGE_KEY = 'formattedBannerHidden';

/**
 * The `WelcomeHero` component displays a hero that welcomes the user to the
 * forum.
 */
export default class Banner extends Component<BannerAttrs> {
    view() {
        if (this.isHidden()) return null;

        const slideUp = () => {
            this.$().slideUp(this.hide.bind(this));
        };

        return m('header.FormattedBanner', {
            className: this.attrs.className,
        }, m('.container', [
            app.forum.attribute('formattedBannerDismissible') ? Button.component({
                icon: 'fas fa-times',
                onclick: slideUp,
                className: 'FormattedBanner-close Button Button--icon Button--link',
                'aria-label': app.translator.trans('core.forum.welcome_hero.hide'),
            }) : null,
            m.trust(app.forum.attribute('formattedBannerHtml')),
        ]));
    }

    hide() {
        localStorage.setItem(LOCAL_STORAGE_KEY, 'true');
    }

    isHidden(): boolean {
        if (!app.forum.attribute<string>('formattedBannerHtml')?.trim()) {
            return true;
        }

        if (!app.forum.attribute('formattedBannerDismissible')) {
            return false;
        }

        return !!localStorage.getItem(LOCAL_STORAGE_KEY);
    }
}
