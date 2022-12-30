// Link to privacy policy
export const privacyPolicy = "mydomain.com/privacy";

// Navi buttons texts
export const saveChangesButtonText = 'Save changes';
export const undoButtonText = 'Back';

// Headers texts
export const dearUserText = 'Dear user,';
export const confText = 'Settings';

// Conf buttons texts
export const button1 = `<a href="javascript:window.ModuleSwitchHandler('advancedSettings')" class="advancedCookiesPopup__button--white">Advanced settings</a>`;
export const button2 = `<a href="javascript:window.ModuleSwitchHandler('deprecateEverything')" class="advancedCookiesPopup__button--red">Dascard everything</a>`;
export const button3 = `<a href="javascript:window.ModuleSwitchHandler('onlyImportant')" class="advancedCookiesPopup__button--red">Nessesary only</a>`;
export const button4 = `<a href="javascript:window.ModuleSwitchHandler('acceptAll')" class="advancedCookiesPopup__button--simple">Accept everything</a>`;

// Description texts
export const mainDesc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed dolor erat. Suspendisse potenti. Maecenas lacinia urna sed nibh condimentum, in hendrerit nisl ultricies. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse non ex lobortis erat sollicitudin vehicula sit amet vitae arcu. Donec placerat ipsum diam, sed dignissim nulla ultricies et. Morbi molestie orci quis ipsum fringilla, sit amet semper neque ultrices. Sed volutpat dui dapibus scelerisque tincidunt. Sed hendrerit, mi non porta placerat, lorem dolor. <a href="${privacyPolicy}">Check our privacy Policy!</a>.`;

// Available cookies groups
export const settingsList = [
    {
        id: 0,
        title: 'Activity',
        desc: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed dolor erat. Suspendisse potenti. Maecenas lacinia urna sed nibh condimentum, in hendrerit nisl ultricies. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse non ex lobortis erat sollicitudin vehicula sit amet vitae arcu. Donec placerat ipsum diam, sed dignissim nulla ultricies et. Morbi molestie orci quis ipsum fringilla, sit amet semper neque ultrices. Sed volutpat dui dapibus scelerisque tincidunt. Sed hendrerit, mi non porta placerat, lorem dolor. </p>`,
        checked: false,
        cookieName: 'ACPActivity',
        alwaysChecked: true
    },
    {
        id: 1,
        title: 'Analytics',
        desc: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed dolor erat. Suspendisse potenti. Maecenas lacinia urna sed nibh condimentum, in hendrerit nisl ultricies. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse non ex lobortis erat sollicitudin vehicula sit amet vitae arcu. Donec placerat ipsum diam, sed dignissim nulla ultricies et. Morbi molestie orci quis ipsum fringilla, sit amet semper neque ultrices. Sed volutpat dui dapibus scelerisque tincidunt. Sed hendrerit, mi non porta placerat, lorem dolor. </p>`,
        checked: false,
        cookieName: 'ACPAnalytics',
        alwaysChecked: false
    },
    {
        id: 2,
        title: 'Social media',
        desc: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed dolor erat. Suspendisse potenti. Maecenas lacinia urna sed nibh condimentum, in hendrerit nisl ultricies. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse non ex lobortis erat sollicitudin vehicula sit amet vitae arcu. Donec placerat ipsum diam, sed dignissim nulla ultricies et. Morbi molestie orci quis ipsum fringilla, sit amet semper neque ultrices. Sed volutpat dui dapibus scelerisque tincidunt. Sed hendrerit, mi non porta placerat, lorem dolor. <a href="${privacyPolicy}">Privacy Policy</a>.</p>`,
        checked: false,
        cookieName: 'ACPSocialMediaAndAds',
        alwaysChecked: false
    }
];