package com.pucp.lab10.controller;

import com.pucp.lab10.repository.TableroRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TableroController {

    private final TableroRepository tableroRepository;

    public TableroController(TableroRepository tableroRepository) {
        this.tableroRepository = tableroRepository;
    }

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("tablero", tableroRepository.findAllByOrderByFilaAscColumnaAsc());
        return "index";
    }
}