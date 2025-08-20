import './Thanks.css';
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from 'react-icons/bs';

const EmojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />
};

const Thanks = ({ data }) => {
  return (
    <div className="thanks-container">
      <h2>Just a few more details...</h2>
      <p>Your opinion is very important for us. Soon, you'll get a discount ticket of 10% on your next purchase</p>
      <p>To finish your evaluation, click on Send button below</p>
      <h3>
        {data.name}, Here's a summary of your answers:
      </h3>
      <p className="review-data">
        <span>Product Satisfaction:</span>
        {EmojiData[data.review] || <BsFillEmojiNeutralFill />}
      </p>
      <p className="review-data">
        <span>Your comments:</span>
        {data.comments || 'No comments provided.'}
      </p>
    </div>
  )
}

export default Thanks;