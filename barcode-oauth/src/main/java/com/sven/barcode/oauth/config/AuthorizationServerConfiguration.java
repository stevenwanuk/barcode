package com.sven.barcode.oauth.config;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.ClientDetails;
import org.springframework.security.oauth2.provider.ClientDetailsService;
import org.springframework.security.oauth2.provider.ClientRegistrationException;
import org.springframework.security.oauth2.provider.client.BaseClientDetails;
import org.springframework.security.oauth2.provider.token.TokenEnhancerChain;
import org.springframework.security.oauth2.provider.token.TokenStore;

@Configuration
@EnableAuthorizationServer
public class AuthorizationServerConfiguration extends AuthorizationServerConfigurerAdapter
{

    @Autowired @Qualifier("oauth-static-clients") private List<BaseClientDetails> staticClients;

    @Autowired private TokenStore tokenStore;

    @Autowired @Qualifier("authenticationManagerBean") private AuthenticationManager authenticationManager;

    @Override
    public void configure(final ClientDetailsServiceConfigurer clients) throws Exception
    {
        clients.withClientDetails(new ClientDetailsService()
        {

            @Override
            public ClientDetails loadClientByClientId(final String clientId)
                    throws ClientRegistrationException
            {

                return staticClients.stream()
                                    .filter(s -> s.getClientId().equalsIgnoreCase(clientId))
                                    .findAny()
                                    .orElseThrow(
                                            () -> new ClientRegistrationException(clientId));
            }

        });

        // clients.inMemory()
        // .withClient("implicitClientId")
        // .authorizedGrantTypes("implicit")
        // .scopes("read")
        // .autoApprove(true)
        // .and()
        // .withClient("passwordClientId")
        // .secret("secret")
        // .authorizedGrantTypes("password", "authorization_code", "refresh_token")
        // .scopes("read")
        // .accessTokenValiditySeconds(120)
        // .refreshTokenValiditySeconds(120);
    }

    @Override
    public void configure(final AuthorizationServerEndpointsConfigurer endpoints)
            throws Exception
    {
        final TokenEnhancerChain tokenEnhancerChain = new TokenEnhancerChain();
        tokenEnhancerChain.setTokenEnhancers(Arrays.asList(new SimpleTokenEnhancer()));
        endpoints.tokenStore(tokenStore)
                 .tokenEnhancer(tokenEnhancerChain)
                 // .userApprovalHandler(userApprovalHandler)
                 .authenticationManager(authenticationManager);
    }

    @Override
    public void configure(final AuthorizationServerSecurityConfigurer oauthServer)
            throws Exception
    {
        oauthServer.tokenKeyAccess("permitAll()").checkTokenAccess("isAuthenticated()");
    }

}
