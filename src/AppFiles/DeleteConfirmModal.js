import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

export default function ConfirmModal({open, onClose, deleteUser}) {
  return (
    <div className='DeleteConfirmModal-animation'>
    <AnimatePresence exitBeforeEnter>
    {open && (
      <motion.div 
        initial={{ opacity: 0, zIndex: 3000 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25}}
      >
      <div className='Modal-Overlay'/>
      <div className='Modal-Style DeleteConfirmModal'>
        <div>
          <h4>Do you really want to delete this user?</h4>
        </div>
        <div className='confirmation-buttons'>
          <button className='btn btn-danger btn-confirmation' onClick={deleteUser}>Yes</button>
          <button className='btn btn-primary btn-confirmation' onClick={onClose}>No</button>
        </div>
      </div>
    </motion.div>)}
    </AnimatePresence>
    </div>
  )
}
