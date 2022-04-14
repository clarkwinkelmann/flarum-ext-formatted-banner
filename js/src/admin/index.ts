import app from 'flarum/admin/app';

app.initializers.add('clarkwinkelmann-formatted-banner', () => {
    app.extensionData
        .for('clarkwinkelmann-formatted-banner')
        .registerSetting({
            setting: 'clarkwinkelmann-formatted-banner.guestContent',
            type: 'textarea',
            label: app.translator.trans('clarkwinkelmann-formatted-banner.admin.settings.guestContent'),
        })
        .registerSetting({
            setting: 'clarkwinkelmann-formatted-banner.guestHtml',
            type: 'textarea',
            label: app.translator.trans('clarkwinkelmann-formatted-banner.admin.settings.guestHtml'),
        })
        .registerSetting({
            setting: 'clarkwinkelmann-formatted-banner.memberContent',
            type: 'textarea',
            label: app.translator.trans('clarkwinkelmann-formatted-banner.admin.settings.memberContent'),
        })
        .registerSetting({
            setting: 'clarkwinkelmann-formatted-banner.memberHtml',
            type: 'textarea',
            label: app.translator.trans('clarkwinkelmann-formatted-banner.admin.settings.memberHtml'),
        })
        .registerSetting({
            setting: 'clarkwinkelmann-formatted-banner.dismissible',
            type: 'switch',
            label: app.translator.trans('clarkwinkelmann-formatted-banner.admin.settings.dismissible'),
        })
        .registerSetting({
            setting: 'clarkwinkelmann-formatted-banner.replaceWelcomeHero',
            type: 'switch',
            label: app.translator.trans('clarkwinkelmann-formatted-banner.admin.settings.replaceWelcomeHero'),
        })
        .registerSetting({
            setting: 'clarkwinkelmann-formatted-banner.hideWelcomeHero',
            type: 'switch',
            label: app.translator.trans('clarkwinkelmann-formatted-banner.admin.settings.hideWelcomeHero'),
        });
});
