package br.com.bb.bancoDados.dto.pnhu;

import br.com.bb.bancoDados.entities.pnhu.Operacao;
import jakarta.persistence.Column;
import jakarta.persistence.Id;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class OperacaoDTO {

    private Long CPF;
    private  Long NRO_OPER;
    private String SITU_OPER;
    private Long RG;

    private String NOM_ORGA_EMSS;

    public OperacaoDTO(Operacao entity){
        CPF = entity.getCPF();
        NRO_OPER = getNRO_OPER();
        SITU_OPER = entity.getSITU_OPER();
        RG = entity.getRG();
        NOM_ORGA_EMSS = getNOM_ORGA_EMSS();
    }
}
