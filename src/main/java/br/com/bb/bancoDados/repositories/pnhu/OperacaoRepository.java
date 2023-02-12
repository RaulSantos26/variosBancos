package br.com.bb.bancoDados.repositories.pnhu;

import br.com.bb.bancoDados.entities.pnhu.Operacao;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OperacaoRepository extends JpaRepository<Operacao, Long> {
}
