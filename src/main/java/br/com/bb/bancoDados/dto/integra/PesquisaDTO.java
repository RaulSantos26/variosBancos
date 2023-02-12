package br.com.bb.bancoDados.dto.integra;



import br.com.bb.bancoDados.entities.integra.Pesquisa;
import lombok.*;

import java.math.BigInteger;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class PesquisaDTO {


    private Long id;

    private Integer judicial;
    private Integer gsv ;
    private String tribunal;
    private String comarca;
    private String orgao;
    private String esfera;
    private BigInteger processo;




    public PesquisaDTO(Pesquisa entity){
        id = entity.getId();
        gsv = entity.getGsv();
        judicial = entity.getJudicial();
        tribunal = entity.getTribunal();
        comarca = entity.getComarca();
        orgao = entity.getOrgao();
        esfera = entity.getEsfera();
        processo = entity.getProcesso();

    }

}
