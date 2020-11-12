
window.__app_env = {
    BUILD_DATE: 'now',
    VCS_REF: '0000',
    DIGEST_IMAGE: 'DEV_SERVE_000',
    VERSION: '0.0.0',
    API_URL: 'https://uiptel.com/api',
};

const config = {
    apiUrl: window.__app_env.API_URL,
};

export default config;
