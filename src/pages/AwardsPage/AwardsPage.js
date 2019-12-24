import React from 'react';
// import { connect } from 'react-redux';
import style from './AwardsPage.module.css';
import AwardsTitle from '../../components/AwardsTitle/AwardsTitle';
import CardsList from '../../components/CardsList';
import AwardsSubmitButton from '../../components/AwardsSubmitButton/AwardsSubmitButton';
import ProgressBar from '../../components/ProgressBar/ProgressBar';

const AwardsPage = () => {
  return (
    <div className={style.wrapper_awards}>
      <div className={style.present_items}>
        <AwardsTitle />
        <ProgressBar />
      </div>
      <div className={style.present_cards}>
        <div>
          <CardsList />
        </div>
      </div>
      <AwardsSubmitButton />
    </div>
  );
};

export default AwardsPage;
