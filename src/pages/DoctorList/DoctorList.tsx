import React from "react";
import { useDoctor } from '../../contexts/doctorContext';
import { DoctorItem } from '../../components/DoctorItem/DoctorItem';

export const DoctorList = () => {
  const { doctors } = useDoctor();

  return (
    <div className="bg-gray-100 flex flex-col h-screen">
      <h1 className="text-2xl font-bold my-6 text-center">Doctor&apos;s list</h1>
      <div className="px-6 flex flex-col gap-6 items-center overflow-auto flex-grow mb-4">
        {doctors.map((doctor) => (
          <DoctorItem key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};
