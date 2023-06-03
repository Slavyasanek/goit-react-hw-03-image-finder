import { TextWrapper } from './Notification.styled';

const Notification = ({ message, icon }) => {
    return (
        <TextWrapper>
            <p>{message}</p>
            {icon}
        </TextWrapper>
    )
}

export default Notification;