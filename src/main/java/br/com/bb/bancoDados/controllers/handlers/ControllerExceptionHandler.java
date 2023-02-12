package br.com.bb.bancoDados.controllers.handlers;



import br.com.bb.bancoDados.dto.CustomError;
import br.com.bb.bancoDados.dto.ValidationError;
import br.com.bb.bancoDados.services.exceptions.DatabaseException;
import br.com.bb.bancoDados.services.exceptions.ResourcesNotFoudException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.ModelAndView;

import java.time.Instant;

@ControllerAdvice
public class ControllerExceptionHandler {

    @ExceptionHandler(ResourcesNotFoudException.class)
    public ModelAndView resourcesNotFoud(ResourcesNotFoudException e,
                                         HttpServletRequest request) {
        HttpStatus status = HttpStatus.NOT_FOUND;
        CustomError err = new CustomError(Instant.now(), status.value(), e.getMessage(),
                request.getRequestURI());
        System.out.println("$$$$$$ " + err.getError() + "$$$$$$");
        System.out.println("$$$$$$ " + err.getStatus() + "$$$$$$");
        ModelAndView mv = new ModelAndView("error");
        mv.addObject("error", err);
        return mv;
    }

    @ExceptionHandler(DatabaseException.class)
    public String database(DatabaseException e,
                                 HttpServletRequest request) {
        HttpStatus status = HttpStatus.NOT_FOUND;
        CustomError err = new CustomError(Instant.now(), status.value(), e.getMessage(),
                request.getRequestURI());
        System.out.println("$$$$$$ " + err.getError() + "$$$$$$");
        System.out.println("$$$$$$ " + err.getStatus() + "$$$$$$");

        return err.getError();
    }


//    @ExceptionHandler(DatabaseException.class)
//    public ResponseEntity<CustomError> database(DatabaseException e,
//                                                        HttpServletRequest request) {
//        HttpStatus status = HttpStatus.BAD_REQUEST;
//        CustomError err = new CustomError(Instant.now(), status.value(), e.getMessage(),
//                request.getRequestURI());
//        return ResponseEntity.status(status).body(err);
//    }

//    @ExceptionHandler(DatabaseException.class)
//    public ModelAndView database(DatabaseException e,
//                                                HttpServletRequest request) {
//        HttpStatus status = HttpStatus.NOT_FOUND;
//        CustomError err = new CustomError(Instant.now(), status.value(), e.getMessage(),
//                request.getRequestURI());
//        System.out.println("$$$$$$ " + err.getError() + "$$$$$$");
//        System.out.println("$$$$$$ " + err.getStatus() + "$$$$$$");
//        ModelAndView mv = new ModelAndView("error");
//        mv.addObject("error", err);
//        return mv;
//    }



    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<CustomError> methodArgumentNotValidation(MethodArgumentNotValidException e,
                                                HttpServletRequest request) {
        HttpStatus status = HttpStatus.UNPROCESSABLE_ENTITY;
        ValidationError err = new ValidationError(Instant.now(), status.value(), "Dados inválidos",
                request.getRequestURI());
        for (FieldError f : e.getBindingResult().getFieldErrors()){
            err.AddError(f.getField(), f.getDefaultMessage());
        }
        return ResponseEntity.status(status).body(err);
    }
}