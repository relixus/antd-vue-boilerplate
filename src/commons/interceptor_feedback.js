import {notification} from 'ant-design-vue'

var showNotificationError = (error) => {
    notification["error"]({
        message: 'Error Performing Operation',
        description: error.message,
    });
}

export {showNotificationError}