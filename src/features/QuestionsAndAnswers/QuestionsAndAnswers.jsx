/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import QuestionList from './QuestionsList/QuestionsList.jsx';
import Search from './QASearch/Search.jsx';
import styles from './QuestionsAndAnswers.module.css';

export default function QuestionsAndAnswers({ currentViewItemId }) {
  return (
    <div className={styles.qa} id="QA">
      <h5 className={styles.notbold}>
        QUESTIONS & ANSWERS
      </h5>
      <Search />
      <QuestionList key={currentViewItemId} currentViewItemId={currentViewItemId} />
    </div>
  );
}

QuestionsAndAnswers.propTypes = {
  currentViewItemId: PropTypes.number.isRequired,
};
