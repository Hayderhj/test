// @vendors
import React, {useContext} from 'react';

// @styles
import './style.scss';

// @components
import Ruling from '../../components/ruling';

// @context
import { AppStateContext } from "../../App";

const Rulings = () => {  
  const { appState, dispatch } = useContext(AppStateContext);
  return (
    <section className="wrapper rulings">
      <h1 className="rulings__title">Previous Rulings </h1>
      <div className="rulings__content">
        {appState.map((ruling, index) =>
          <Ruling
            data={ruling}
            dispatch={dispatch}
            index={index}
            key={index}
          />
        )}
      </div>
    </section>
  );
};

export default Rulings;
