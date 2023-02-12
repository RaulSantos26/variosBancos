package br.com.bb.bancoDados.services.pnhu;

import br.com.bb.bancoDados.dto.integra.PesquisaDTO;
import br.com.bb.bancoDados.dto.pnhu.OperacaoDTO;
import br.com.bb.bancoDados.entities.integra.Pesquisa;
import br.com.bb.bancoDados.entities.pnhu.Operacao;
import br.com.bb.bancoDados.repositories.pnhu.OperacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class OperacaoService {

    @Autowired
    private OperacaoRepository repository;

    @Transactional(readOnly = true)
    public List<OperacaoDTO> findAll(){
        List<Operacao> result = repository.findAll();
        return result.stream().map( x-> new OperacaoDTO(x)).toList();
    }
}
