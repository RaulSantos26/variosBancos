package br.com.bb.bancoDados.services.integra;



import br.com.bb.bancoDados.dto.integra.PesquisaDTO;
import br.com.bb.bancoDados.dto.pnhu.OperacaoDTO;
import br.com.bb.bancoDados.entities.integra.Pesquisa;
import br.com.bb.bancoDados.entities.pnhu.Operacao;
import br.com.bb.bancoDados.repositories.integra.PesquisaRepository;
import br.com.bb.bancoDados.services.exceptions.DatabaseException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.IncorrectResultSizeDataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class PesquisaService {

    @Autowired
    private PesquisaRepository repository;
    @Transactional(readOnly = true)
    public List<PesquisaDTO> findAll(){
        List<Pesquisa> result = repository.findAll();
        return result.stream().map( x-> new PesquisaDTO(x)).toList();
    }



}
