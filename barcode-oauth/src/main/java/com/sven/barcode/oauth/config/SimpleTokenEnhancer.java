package com.sven.barcode.oauth.config;

import java.util.HashMap;
import java.util.Map;

import org.springframework.security.oauth2.common.DefaultOAuth2AccessToken;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.token.TokenEnhancer;

import com.sven.barcode.oauth.model.User;
import com.sven.barcode.oauth.model.UserPrincipal;

public class SimpleTokenEnhancer implements TokenEnhancer
{
    @Override
    public OAuth2AccessToken enhance(final OAuth2AccessToken accessToken,
            final OAuth2Authentication authentication)
    {

        if (authentication.getPrincipal() instanceof UserPrincipal)
        {
            User user = ((UserPrincipal) authentication.getPrincipal()).getUser();
            final Map<String, Object> additionalInfo = new HashMap<>();
            additionalInfo.put("organization", user.getOrg());
            ((DefaultOAuth2AccessToken) accessToken).setAdditionalInformation(
                    additionalInfo);
        }

        return accessToken;
    }

}
