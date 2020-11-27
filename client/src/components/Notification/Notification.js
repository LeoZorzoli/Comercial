import React from 'react'
import { Alert } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const Notification = () => {
    const notification = useSelector(state => state.notification)

    const notificationDanger = () => {
        return (
            <Alert variant="danger">
                {notification.message}
            </Alert>
        )
    }
  
    const notificationSuccess = () => {
      return (
            <Alert variant="success">
                {notification.message}
            </Alert>
      )
    }
  
    if(notification === ''){
        return <></>
    } else if(notification.status === 'bad'){
        return notificationDanger()
    } else {
        return notificationSuccess()
    }
  
  }
export default Notification