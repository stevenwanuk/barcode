package com.sven.barcode.oauth.config;

import java.util.List;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.oauth2.provider.client.BaseClientDetails;

@Configuration
@ConfigurationProperties(prefix = "oauth.static")
public class OauthStaticClientConfig
{

    private List<BaseClientDetails> clients;

    public List<BaseClientDetails> getClients()
    {
        return clients;
    }

    public void setClients(final List<BaseClientDetails> clients)
    {
        this.clients = clients;
    }

    @Bean("oauth-static-clients")
    public List<BaseClientDetails> clients()
    {
        return clients;
    }
}
