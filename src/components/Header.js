import Button from './Button';

const Header = ({ onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    );
};

Header.defaultProps = {
    title: 'Task Tracker'
};

export default Header;