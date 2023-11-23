import './card-create-char.css';

function CardCreateChar({ title, content }) {
    return (
        <div className='card-padrao card w-75'>
            <div className='card-header bg-dark'>
                <h4>{title}</h4>
            </div>
            <div className='card-body'>
                {content}
            </div>
        </div>
    );
}

export default CardCreateChar;
