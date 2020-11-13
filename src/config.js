
const defaultConfig  = {
    BUILD_DATE: 'today',
    VCS_REF: '0000',
    VERSION: '0.0.0',
    API_URL: 'https://uiptel.com/api',
};

const config = {
    ...defaultConfig,
    ...window.__app_env,
};

export default config;
