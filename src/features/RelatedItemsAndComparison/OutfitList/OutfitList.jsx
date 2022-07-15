/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useAppDispatch, useAppSelector } from '../../../app/redux-hooks';
import ListContainer from '../helpers/ListContainer/ListContainer.jsx';
import { addOutfit, deleteOutfit } from './outfitListSlice.jsx';
// import ListContainer from '../../UI/Card.jsx';
import Button from '../../UI/Button.jsx';
import OutfitListItem from './OutfitListItem.jsx';
import styles from './OutfitList.module.css';

export default function OutfitList({ currentViewItemId }) {
  const [isCurrentItemAdded, setIsCurrentItemAdded] = useState(true);
  const userOutfitList = useAppSelector((state) => state.outfitList.outfitList);
  const dispatch = useAppDispatch();
  useEffect(() => {
    // if currentviewItemId is in the list already, button should not be visible
    // else button should be visible
    if (userOutfitList.indexOf(currentViewItemId) === -1) {
      setIsCurrentItemAdded(false);
    }
  });
  const handleAddOutfit = (e) => {
    //check here to make sure that there is no duplicate in the userOutfitList
      setIsCurrentItemAdded(true);
      dispatch(addOutfit(currentViewItemId));
  };

  const handleDeleteOutfit = (productId) => {
    if (productId === currentViewItemId) {
      setIsCurrentItemAdded(false);
    }
    dispatch(deleteOutfit(productId));
  };

  console.log(userOutfitList && userOutfitList);
  return (
    <div>
      <h3>Outfit List</h3>
      <ListContainer>
        {!isCurrentItemAdded && (
          <div className={styles.button_ctn} >
            <IoIosAddCircleOutline value="action" className={styles.button} onClick={(e) => handleAddOutfit(e)} />
          </div>
        )}
        {userOutfitList
          && userOutfitList.map((outfitId) => (
            <OutfitListItem
              key={outfitId}
              productId={outfitId}
              handleDeleteOutfit={() => handleDeleteOutfit(outfitId)}
            />
          ))}
      </ListContainer>
    </div>
  );
}

OutfitList.propTypes = {
  currentViewItemId: PropTypes.number.isRequired,
};
