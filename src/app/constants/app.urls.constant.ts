const sitesBase: string = 'notbadcode.xyz';

export const APP_URLS = {
    SITES: {
        WEBSITE:  `https://website.${sitesBase}`, 
        API:  `https://api.${sitesBase}`, 
        QUIRK_COLORS: `https://quirk-colors.${sitesBase}`, 
        TOASTR: `https://toastr.${sitesBase}`, 
    },
    REPOSITORIES: {
        BASE: 'https://api.github.com/users/notbadcode-dev',
        WEBSITE:  'https://github.com/notbadcode-dev/personal-website', 
        API:  'https://github.com/notbadcode-dev/notbadcode-api-v1', 
        QUIRK_COLORS: 'https://github.com/notbadcode-dev/material-colors',
        TOASTR: 'https://github.com/notbadcode-dev/mixxin-toastr', 
    },
    ASSETS: {
        BASE: 'assets/',
        SVG: 'assets/svg/'
    }
}