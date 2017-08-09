package com.sven.barcode.oauth.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.provider.ClientDetailsService;
import org.springframework.security.oauth2.provider.approval.ApprovalStore;
import org.springframework.security.oauth2.provider.approval.TokenApprovalStore;
import org.springframework.security.oauth2.provider.approval.TokenStoreUserApprovalHandler;
import org.springframework.security.oauth2.provider.request.DefaultOAuth2RequestFactory;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.InMemoryTokenStore;

@Configuration
public class OAuth2SecurityConfiguration extends WebSecurityConfigurerAdapter
{

    @Autowired
    private UserDetailsService userDetailsService;

    @Bean
    public PasswordEncoder encoder()
    {
        return new BCryptPasswordEncoder(11);
    }

    @Override
    protected void configure(final HttpSecurity http) throws Exception
    {
        http.csrf().disable().anonymous().disable().authorizeRequests().antMatchers(
                "/oauth/token").permitAll();

        // http.authorizeRequests().antMatchers("/login").permitAll().antMatchers(
        // "/oauth/token/revokeById/**").permitAll().antMatchers(
        // "/tokens/**").permitAll().anyRequest().authenticated().and().formLogin().permitAll().and().csrf().disable();
    }

    public void configAuthentication(final AuthenticationManagerBuilder auth)
            throws Exception
    {
        auth.userDetailsService(userDetailsService);
    }

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception
    {
        return super.authenticationManagerBean();
    }

    @Bean
    public TokenStore tokenStore()
    {
        return new InMemoryTokenStore();
    }

    @Bean
    public TokenStoreUserApprovalHandler userApprovalHandler(final TokenStore tokenStore,
            final ClientDetailsService clientDetailsService)
    {
        TokenStoreUserApprovalHandler handler = new TokenStoreUserApprovalHandler();
        handler.setTokenStore(tokenStore);
        handler.setRequestFactory(new DefaultOAuth2RequestFactory(clientDetailsService));
        handler.setClientDetailsService(clientDetailsService);
        return handler;
    }

    @Bean
    public ApprovalStore approvalStore(final TokenStore tokenStore) throws Exception
    {
        TokenApprovalStore store = new TokenApprovalStore();
        store.setTokenStore(tokenStore);
        return store;
    }

}
