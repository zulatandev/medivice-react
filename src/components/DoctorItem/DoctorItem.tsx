import React from 'react';
import { IDoctor } from '../../inferfaces';
import { Avatar } from '../Avatar';

type Props = {
  doctor: IDoctor
}

export const DoctorItem = ({ doctor }: Props) => {
  return (
    <div className="rounded-6 px-6 py-4 bg-white grid grid-cols-2 gap-6 shadow-lg w-160">
      <div className="flex gap-6 items-center">
        <Avatar url={doctor.photo} />
        <div>
          <div className="font-bold mb-2">{doctor.fullname}</div>
          <div className="font-bold">{doctor.clinic}</div>
        </div>
      </div>
      <div>
        <div className="mb-2">Phone: {doctor.phone}</div>
        <div className="mb-2">Gender: {doctor.gender}</div>
        <div className="mb-2">Email: {doctor.email}</div>
      </div>
    </div>
  );
};
