"use client";

import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import React from "react";
import { Trip } from "@prisma/client";
import Button from "@/components/Button";

interface TripReservationProps {
  trip: Trip;
}

const TripReservation = ({ trip }: TripReservationProps) => {
  return (
    <div>
      <div className="flex flex-col px-5">
        <div className="flex gap-4">
          <DatePicker
            placeholderText="Data de início"
            onChange={() => {}}
            className="w-full"
          />
          <DatePicker
            placeholderText="Data Final"
            onChange={() => {}}
            className="w-full"
          />
        </div>
        <Input
          placeholder={`Número de hóspedes(max: ${trip.maxGuests})`}
          className="mt-4"
        />
        <div className="flex justify-between mt-3">
          <p className="font-medium text-sm text-primaryDarker">Total:</p>
          <p className="font-medium text-sm text-primaryDarker">R$ 2500,00</p>
        </div>
        <Button className="mt-3">Reservar agora</Button>
      </div>
    </div>
  );
};

export default TripReservation;
