package br.com.bb.bancoDados.controllers;


import br.com.bb.bancoDados.dto.integra.PesquisaDTO;
import br.com.bb.bancoDados.dto.pnhu.OperacaoDTO;
import br.com.bb.bancoDados.services.integra.PesquisaService;
import br.com.bb.bancoDados.services.pnhu.OperacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
public class IntegraController {

    @Autowired
    private PesquisaService pesquisaService;

    @Autowired
    private OperacaoService operacaoService;


    @GetMapping("/")
    public ModelAndView pesquisar(){
        List<PesquisaDTO> pesquisa = pesquisaService.findAll();
        System.out.println("Resultado da pesquisa =>" + pesquisa);
        List<OperacaoDTO> operacao = operacaoService.findAll();
        System.out.println("Resultado da operação ==>" + operacao);


        ModelAndView mv = new ModelAndView("dados");
        mv.addObject("pesquisa",pesquisa );
        mv.addObject("operacao", operacao);
        return mv;

    }

}
