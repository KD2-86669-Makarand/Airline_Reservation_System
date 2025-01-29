package com.example.demo.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Table(name = "Bookings")

public class Booking {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "BookingId")
	private Long bookingId;

	@ManyToOne
	@JoinColumn(name = "PassengerId", referencedColumnName = "PassengerId")
	private Passenger passenger;

	@ManyToOne
	@JoinColumn(name = "ScheduleId", referencedColumnName = "ScheduleId")
	private Schedule schedule;

	@Column(name = "BookingDate")
	private LocalDate bookingDate;

	@Enumerated(EnumType.STRING)
	@Column(name = "BookingStatus")
	private BookingStatus status;

	@ManyToOne
	@JoinColumn(name = "PaymentId", referencedColumnName = "paymentId")
	private Payment payment;
	
	@ManyToOne
	@JoinColumn(name = "AircraftId", referencedColumnName = "AircraftId")
	private Aircraft aircraft; 
	
	// add flight id
	
	
	public enum BookingStatus {
		CONFIRMED, CANCELED
	}

}
