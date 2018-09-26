package com.mkyong.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity // Tabla
public class User {
	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
    private String username;
    private String password;
    private String email;

    public User(String username, String password, String email) {  // constructor test
    	
        this.username = username;
        this.password = password;
        this.email = email;
    }

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
    
    public Integer getId() {     //***
    	return id;
    }
    
    public void setId(Integer id) {   //***
    	this.id=id;
    }
    

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
