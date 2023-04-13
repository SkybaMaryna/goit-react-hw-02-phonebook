import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';
import { nanoid } from 'nanoid';
import { StyledContactList, StyledContactItem } from './ContactList.styled';
import { StyledButton } from 'components/ContactForm/ContactForm.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <StyledContactList>
      {contacts.map(({ name, number, id }) => (
        <StyledContactItem key={nanoid()}>
          <Contact name={name} number={number} />
          <StyledButton
            type="button"
            onClick={() => {
              deleteContact(id);
            }}
          >
            Delete
          </StyledButton>
        </StyledContactItem>
      ))}
    </StyledContactList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  deleteContact: PropTypes.func.isRequired,
};
