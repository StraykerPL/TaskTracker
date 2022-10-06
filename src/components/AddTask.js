import { useState } from "react";
import TextBox from './TextBox';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert('Please add task description!');
            return;
        }

        onAdd({ text, date, reminder });

        setText('');
        setDate('');
        setReminder(false);
    };

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <TextBox name='Task' type='text' placeholder='Task Description' onChange={(e) => setText(e.target.value)} startValue={text} />
        <TextBox name='Date' type='text' placeholder='DD.MM.YYYY' onChange={(e) => setDate(e.target.value)} startValue={date} />
        <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input type='checkbox' checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
        </div>
        <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  );
};

export default AddTask;