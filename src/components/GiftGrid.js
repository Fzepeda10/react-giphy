
import { useFetchGifts } from "../hooks/useFetchGifts";
import { GiftGridItem } from "./GiftGridItem";
import { Loading } from "./Icons";

export const GiftGrid = ({ category }) => {

    const { loading, data:images } = useFetchGifts(category);



    return (
        <>
            <h3>
                {category}
            </h3>
            {
                loading && <Loading />
            }
            {!loading && (
                <div className="card-grid">
                    {images.map(img => <GiftGridItem key={img.id} {...img} />)}
                </div>)
            }
        </>
    );
}