import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactListItem from './contactListItem/ContactListItem';
import ContactListWrapper from './ContactListStyled';

const ContactList = ({
  contacts,
  deleteContact,
  getContactById,
  setEditProfileOpen,
  setContactInfoOpen,
}) => {
  return (
    <ContactListWrapper>
      <TransitionGroup component="ul" className="list">
        {contacts.map(item => (
          <CSSTransition key={item.id} timeout={250} classNames="list-item">
            <ContactListItem
              item={item}
              deleteContact={deleteContact}
              getContactById={getContactById}
              setEditProfileOpen={setEditProfileOpen}
              setContactInfoOpen={setContactInfoOpen}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ContactListWrapper>
  );
};

export default ContactList;

ContactListItem.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func.isRequired,
};
