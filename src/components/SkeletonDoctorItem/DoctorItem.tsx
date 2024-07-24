import React from 'react';

type Props = {
  count: number;
};

export const SkeletonDoctorItem = ({ count = 3 }: Props) => {
  return (
    <>
      {
        Array(count).fill('').map((_, index) => (
          <div key={index} className="animate-pulse rounded-6 px-6 py-4 bg-white grid grid-cols-2 gap-6 shadow-lg w-160">
            <div className="flex gap-6 items-center">
              <div className="rounded-full bg-slate-200 h-12 w-12"></div>

              <div className="flex-1 ">
                <div className="bg-slate-200 rounded h-5 mb-1"></div>
                <div className="bg-slate-200 rounded h-5"></div>
              </div>
            </div>
            <div>
              <div className="mb-2 bg-slate-200 rounded h-4"></div>
              <div className="mb-2 bg-slate-200 rounded h-4"></div>
              <div className="mb-2 bg-slate-200 rounded h-4"></div>
            </div>
          </div>
        ))
      }
    </>
  )
};
