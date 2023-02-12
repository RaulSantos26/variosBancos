package br.com.bb.bancoDados.configuration;


import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;

import javax.sql.DataSource;

@Configuration
@EnableJpaRepositories(
//        basePackageClasses = PesquisaRepository.class,
        basePackages = ("br.com.bb.bancoDados.repositories.pnhu"),
        entityManagerFactoryRef = "pnhuEntityManager")
public class PnhuDbConfig {

    @Bean
    @ConfigurationProperties(prefix = "pnhu.datasource")
    public DataSource pnhuDataSource(){
        return DataSourceBuilder.create().build();
    }

    @Bean
    public LocalContainerEntityManagerFactoryBean pnhuEntityManager(
            EntityManagerFactoryBuilder builder,
            @Qualifier("pnhuDataSource") DataSource dataSource){
        return  builder.dataSource(dataSource)
                .packages("br.com.bb.bancoDados.entities.pnhu")
                .build();

    }


}
