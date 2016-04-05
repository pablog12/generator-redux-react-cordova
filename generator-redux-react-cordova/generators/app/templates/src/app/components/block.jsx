import React from 'react';
import styles from './styles.scss';

const Block = ({ text, title, link }) => (
  <div className={styles.block}>
    { title &&
      <h3>{title}</h3>
    }
    { text &&
      <p>{text}</p>
    }
    { link &&
      <a href={link}>{link}</a>
    }
  </div>
);

Block.propTypes = {
  title: React.PropTypes.string,
  text: React.PropTypes.string,
  link: React.PropTypes.string,
};

export default Block;
