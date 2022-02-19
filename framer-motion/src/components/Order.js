import React,{ useEffect } from 'react';
import { motion } from 'framer-motion';

const containerVariant = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type:'spring',
      mass: 0.4,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 0.4
    }
  }
}
const childVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}
const Order = ({ pizza , setShowModal}) => {
  useEffect(()=>{
    setTimeout(()=>{
      setShowModal(true)
    },5000)
  },[setShowModal])
  return (
    <motion.div className="container order"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
    <h2>Thank you for your order :)</h2>

      <motion.p variants={childVariant}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariant}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;