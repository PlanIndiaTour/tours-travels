package com.planindiatour.planit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude=SecurityAutoConfiguration.class)
public class PlanitApplication {

	public static void main(String[] args) {
		SpringApplication.run(PlanitApplication.class, args);
	}
//bb8ac656-c143-43b7-8734-fe78bf2937ec
}
