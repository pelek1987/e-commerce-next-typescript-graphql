interface RatingProps {
    rating: number;
}

export const Rating = ({ rating }: RatingProps) => (
    <div className="text-blue-500 font-bold">
        {rating}
    </div>
)