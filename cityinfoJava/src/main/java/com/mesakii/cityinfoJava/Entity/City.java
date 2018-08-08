package com.mesakii.cityinfoJava.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Created by tiejin on 8/8/2018.
 */
@Entity // This tells Hibernate to make a table out of this class
public class City {
    // This is the entity class which Hibernate will automatically translate into a table.
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer ID;

    private String Name;

    private String CountryCode;

    private String District;

    private Integer Population;


    public Integer getID() {
        return ID;
    }

    public void setID(Integer ID) {
        this.ID = ID;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getCountryCode() {
        return CountryCode;
    }

    public void setCountryCode(String countryCode) {
        CountryCode = countryCode;
    }

    public String getDistrict() {
        return District;
    }

    public void setDistrict(String district) {
        District = district;
    }

    public Integer getPopulation() {
        return Population;
    }

    public void setPopulation(Integer population) {
        Population = population;
    }

}
