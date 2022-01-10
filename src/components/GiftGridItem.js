export const GiftGridItem = ({ id, url, title }) => {

    return (
        <div className="card animate__animated animate__rubberBand">
            <img src={url} alt={title} />
            <p> <strong> {title} </strong> </p>
        </div>
    )
}