import PropTypes from 'prop-types';
import NoticeWrapper from './NoticeStyled';

const Notice = ({ message }) => {
  return (
    <NoticeWrapper>
      <p className="text">{message}</p>
    </NoticeWrapper>
  );
};

export default Notice;

Notice.propTypes = {
  message: PropTypes.string,
};
