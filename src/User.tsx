import React from 'react';
import { Avatar, Typography } from '@mui/material';
import './styles/component.scss';

interface UserProps {
  name: string;
  email: string;
  avatarUrl: string;
}

export default function User(props: UserProps) {
  const { name, email, avatarUrl } = props;

  return (
    <div className="User">
      <Avatar src={avatarUrl} className="User-avatar" />
      <div>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="subtitle1">{email}</Typography>
      </div>
    </div>
  );
}