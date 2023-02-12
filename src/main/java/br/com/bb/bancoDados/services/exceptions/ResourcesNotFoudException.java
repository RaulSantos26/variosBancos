package br.com.bb.bancoDados.services.exceptions;

public class ResourcesNotFoudException extends RuntimeException {

    public ResourcesNotFoudException(String msg){
        super(msg);
    }
}
