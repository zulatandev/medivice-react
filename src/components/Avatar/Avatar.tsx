import React from 'react';

type Props = {
  url: string;
};

export const Avatar = ({ url }: Props) => {
  return (
    <img src={url} className="bg-gray-200 rounded-full w-12 h-12" alt="avatar" />
  );
};
