package br.com.bb.bancoDados.configuration;

import br.com.bb.bancoDados.repositories.integra.PesquisaRepository;
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
        basePackages = ("br.com.bb.bancoDados.repositories.integra"),
        entityManagerFactoryRef = "integraEntityManager")
public class IntegraDbConfig {

    @Bean
    @Primary
    @ConfigurationProperties(prefix = "integra.datasource")
    public DataSource integraDataSource(){
        return  DataSourceBuilder.create().build();
    }

    @Bean
    @Primary
    public LocalContainerEntityManagerFactoryBean integraEntityManager(
            EntityManagerFactoryBuilder builder,
            @Qualifier("integraDataSource") DataSource dataSource){
        return  builder.dataSource(dataSource)
                .packages("br.com.bb.bancoDados.entities.integra")
                .build();

    }

}
