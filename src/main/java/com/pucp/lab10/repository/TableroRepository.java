package com.pucp.lab10.repository;

import com.pucp.lab10.entity.Tablero;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TableroRepository extends JpaRepository<Tablero, Integer> {

    List<Tablero> findAllByOrderByFilaAscColumnaAsc();
}