package br.com.bb.bancoDados.entities.pnhu;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "db2")
public class Operacao {

    @Id
    @Column(name = "COD_CPF_CGC")
    private Long CPF;
    private  Long NRO_OPER;
    private String SITU_OPER;
    private Long RG;
    private String NOM_ORGA_EMSS;


}
