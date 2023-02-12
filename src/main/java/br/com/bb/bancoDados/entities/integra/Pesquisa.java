package br.com.bb.bancoDados.entities.integra;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigInteger;

@Data
@NoArgsConstructor
@Entity
@Table(name = "tb_processos")
public class Pesquisa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer judicial;
    private Integer gsv;
    private String tribunal;
    private String comarca;
    private String orgao;
    private String esfera;
    private BigInteger processo;





}
