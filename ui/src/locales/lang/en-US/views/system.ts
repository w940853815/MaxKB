export default {
  title: 'System',
  test: 'Test Connection',
  testSuccess: 'Successful',
  testFailed: 'Test connection failed',
  password: 'Password',
  authentication: {
    title: 'Login Authentication',
    ldap: {
      title: 'LDAP',
      address: 'LDAP Address',
      serverPlaceholder: 'Please enter LDAP address',
      bindDN: 'Bind DN',
      bindDNPlaceholder: 'Please enter Bind DN',
      ou: 'User OU',
      ouPlaceholder: 'Please enter user OU',
      ldap_filter: 'User Filter',
      ldap_filterPlaceholder: 'Please enter user filter',
      ldap_mapping: 'LDAP Attribute Mapping',
      ldap_mappingPlaceholder: 'Please enter LDAP attribute mapping',
      enableAuthentication: 'Enable LDAP Authentication'
    },
    cas: {
      title: 'CAS',
      ldpUri: 'ldpUri',
      ldpUriPlaceholder: 'Please enter ldpUri',
      validateUrl: 'Validation Address',
      validateUrlPlaceholder: 'Please enter validation address',
      redirectUrl: 'Callback Address',
      redirectUrlPlaceholder: 'Please enter callback address',
      enableAuthentication: 'Enable CAS Authentication'
    },
    oidc: {
      title: 'OIDC',
      authEndpoint: 'Auth Endpoint',
      authEndpointPlaceholder: 'Please enter auth endpoint',
      tokenEndpoint: 'Token Endpoint',
      tokenEndpointPlaceholder: 'Please enter token endpoint',
      userInfoEndpoint: 'User Info Endpoint',
      userInfoEndpointPlaceholder: 'Please enter user info endpoint',
      clientId: 'Client ID',
      clientIdPlaceholder: 'Please enter client ID',
      clientSecret: 'Client Secret',
      clientSecretPlaceholder: 'Please enter client secret',
      logoutEndpoint: 'Logout Endpoint',
      logoutEndpointPlaceholder: 'Please enter logout endpoint',
      redirectUrl: 'Redirect URL',
      redirectUrlPlaceholder: 'Please enter redirect URL',
      enableAuthentication: 'Enable OIDC Authentication'
    },

    oauth2: {
      title: 'OAuth2',
      authEndpoint: 'Auth Endpoint',
      authEndpointPlaceholder: 'Please enter auth endpoint',
      tokenEndpoint: 'Token Endpoint',
      tokenEndpointPlaceholder: 'Please enter token endpoint',
      userInfoEndpoint: 'User Info Endpoint',
      userInfoEndpointPlaceholder: 'Please enter user info endpoint',
      scope: 'Scope',
      scopePlaceholder: 'Please enter scope',
      clientId: 'Client ID',
      clientIdPlaceholder: 'Please enter client ID',
      clientSecret: 'Client Secret',
      clientSecretPlaceholder: 'Please enter client secret',
      redirectUrl: 'Redirect URL',
      redirectUrlPlaceholder: 'Please enter redirect URL',
      filedMapping: 'Field Mapping',
      filedMappingPlaceholder: 'Please enter field mapping',
      enableAuthentication: 'Enable OAuth2 Authentication'
    },
    scanTheQRCode: {
      title: 'Scan the QR code',
      wecom: 'WeCom',
      dingtalk: 'DingTalk',
      lark: 'Lark',
      effective: 'Effective',
      alreadyTurnedOn: 'Turned On',
      notEnabled: 'Not Enabled',
      validate: 'Validate',
      validateSuccess: 'Successful',
      validateFailed: 'Validation failed',
      validateFailedTip: 'Please fill in all required fields and ensure the format is correct',
      appKeyPlaceholder: 'Please enter APP key',
      appSecretPlaceholder: 'Please enter APP secret',
      corpIdPlaceholder: 'Please enter corp ID',
      agentIdPlaceholder: 'Please enter agent ID',
      callbackWarning: 'Please enter a valid URL address',
      larkQrCode: 'Lark Scan Code Login',
      dingtalkQrCode: 'DingTalk Scan Code Login'
    }
  },
  theme: {
    title: 'Appearance Settings',
    platformDisplayTheme: 'Platform Display Theme',
    customTheme: 'Custom Theme',
    platformLoginSettings: 'Platform Login Settings',
    custom: 'Custom',
    pagePreview: 'Page Preview',
    default: 'Default',
    restoreDefaults: 'Reset to default',
    orange: 'Orange',
    green: 'Green',
    purple: 'Purple',
    red: 'Red',
    loginBackground: 'Login Background Image',
    loginLogo: 'Login Logo',
    websiteLogo: 'Website Logo',
    replacePicture: 'Replace Image',
    websiteLogoTip:
      'Logo displayed at the top of the website. Recommended size: 48x48. Supports JPG, PNG, GIF. Maximum size: 10MB',
    loginLogoTip:
      'Logo on the right side of the login page. Recommended size: 204x52. Supports JPG, PNG, GIF. Maximum size: 10MB',
    loginBackgroundTip:
      'Left-side background image. Vector graphics recommended size: 576x900; Bitmap recommended size: 1152x1800. Supports JPG, PNG, GIF. Maximum size: 10MB',
    websiteName: 'Website Name',
    websiteNamePlaceholder: 'Please enter the website name',
    websiteNameTip: 'The platform name displayed in the web page tab',
    websiteSlogan: 'Welcome Message',
    websiteSloganPlaceholder: 'Please enter the welcome message',
    websiteSloganTip: 'The welcome message below the product logo',
    defaultSlogan: 'Ready-to-use, flexible RAG Chatbot',
    defaultTip: 'Default is the MaxKB platform interface, supports custom settings',
    logoDefaultTip: 'Default is the MaxKB login interface, supports custom settings',
    platformSetting: 'Platform Settings',
    showUserManual: 'Show User Manual',
    showForum: 'Show Forum Support',
    showProject: 'Show Project Address',
    urlPlaceholder: 'Please enter the URL address',
    abandonUpdate: 'Abandon Update',
    saveAndApply: 'Save and Apply',
    fileMessageError: 'File size exceeds 10MB',
    saveSuccess: 'Appearance settings successfully applied'
  },
  email: {
    title: 'Mail Settings',
    smtpHost: 'SMTP Host',
    smtpHostPlaceholder: 'Please enter SMTP host',
    smtpPort: 'SMTP Port',
    smtpPortPlaceholder: 'Please enter SMTP port',
    smtpUser: 'SMTP User',
    smtpUserPlaceholder: 'Please enter SMTP user',
    sendEmail: 'Send Email',
    sendEmailPlaceholder: 'Please enter send email',
    smtpPassword: 'SMTP Password',
    smtpPasswordPlaceholder: 'Please enter SMTP password',
    enableSSL: 'Enable SSL (if the SMTP port is 465, you usually need to enable SSL)',
    enableTLS: 'Enable TLS (if the SMTP port is 587, you usually need to enable TLS)'
  }
}
