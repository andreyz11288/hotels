import React from 'react';
import { useSelector } from 'react-redux';
import { cabinetSelectors } from '../../../Redux/Cabinet';
import OrderItem from '../OrderItem/OrderItem';
import styles from './OrdersList.module.scss';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

export default function OrdersList() {
  const orders = useSelector(cabinetSelectors.getMyOrders);

  return (
    <TransitionGroup component="ul" className={styles.listOrders}>
      {orders.map(order => (
        <CSSTransition
          key={order.id}
          appear={true}
          timeout={250}
          classNames={styles}
          unmountOnExit
        >
          <OrderItem order={order} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
