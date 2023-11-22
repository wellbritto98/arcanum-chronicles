import './card-create-char.css';

function CardCreateChar({ title, content }) {
    return (
        <div className='card w-75 mt-5'>
            <div className='card-header'>
                <h3>{title}</h3>
            </div>
            <div className='card-body'>
                {content}
            </div>
        </div>
    );
}

export default CardCreateChar;
