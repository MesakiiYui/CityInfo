package com.mesakii.cityinfoJava.Repository;

import com.mesakii.cityinfoJava.Entity.City;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by tiejin on 8/8/2018.
 */

// This will be AUTO IMPLEMENTED by Spring into a Bean called cityRepository
// CRUD refers Create, Read, Update, Delete

public interface RepositoryCity extends CrudRepository<City, Long> {

}

// This is the repository interface, this will be automatically implemented by Spring in a bean
// with the same name with changing case The bean name will be cityRepository