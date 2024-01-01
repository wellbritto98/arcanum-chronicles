import './CardPadrao.css';

function CardPadrao({ title, content }) {
    return (
        <div className='card-padrao card'>
            <div className='card-header'>
                <h4>{title}</h4>
            </div>
            <div className='card-body'>
                {content}
            </div>
        </div>
    );
}

export default CardPadrao;
