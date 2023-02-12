package br.com.bb.bancoDados.repositories.integra;




import br.com.bb.bancoDados.entities.integra.Pesquisa;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PesquisaRepository extends JpaRepository<Pesquisa, Long> {

    Pesquisa findByjudicial(Integer judicial);

    Pesquisa findBygsv(Integer gsv);
}

