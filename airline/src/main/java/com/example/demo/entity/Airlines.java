package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "Airlines")
public class Airlines {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "AirlineId", length = 50)
	private Long airlineId;

	@Column(name = "AirlineName", length = 50)
	private String airlineName;

	@Column(name = "AirlineCode", length = 50)
	private String airlineCode;

	@Column(name = "Country", length = 50)
	private String country;

}
