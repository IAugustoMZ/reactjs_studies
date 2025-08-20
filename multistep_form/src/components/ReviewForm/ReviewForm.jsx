import './ReviewForm.css';
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from 'react-icons/bs';

const ReviewForm = ({ data, fieldHandler }) => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input type="radio" value="unsatisfied" name="review" required checked={data.review === 'unsatisfied'} onChange={(e) => fieldHandler('review', e.target.value)}/>
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="neutral" name="review" checked={data.review === 'neutral'} onChange={(e) => fieldHandler('review', e.target.value)}/>
          <BsFillEmojiNeutralFill />
          <p>Neutro</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="satisfied" name="review" checked={data.review === 'satisfied'} onChange={(e) => fieldHandler('review', e.target.value)}/>
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" value="very_satisfied" name="review" checked={data.review === 'very_satisfied'} onChange={(e) => fieldHandler('review', e.target.value)}/>
          <BsFillEmojiHeartEyesFill />
          <p>Muito Satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comments:</label>
        <textarea name="comment" id="comment" placeholder='Please tell us about your experience' required value={data.comments || ''} onChange={(e) => fieldHandler('comments', e.target.value)}></textarea>
      </div>
    </div>
  )
}

export default ReviewForm;
