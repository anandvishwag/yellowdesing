import { toast } from 'react-toastify';
const AlertMessage = async (message, type, position) => {
    try {

        switch (type) {
            case 'success':
                return toast.success(message, {
                    position: position,
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            case 'error':
                return toast.error(message, {
                    position: position,
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            case 'info':
                return toast.info(message, {
                    position: position,
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            case 'warn':
                return toast.warn(message, {
                    position: position,
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
           
            default:
                return toast(message, {
                    position: position,
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
        }



       
    } catch (error) {
        console.log(error);
        return null;
    }
};

export default AlertMessage;
