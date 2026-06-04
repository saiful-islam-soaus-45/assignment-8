import UserReviewCard from "./UserReviewCard";

const UserReview = async () => {
    const res = await fetch('https://your-project-name.vercel.app/review.json', {
        cache: 'no-store' 
    });
    const reviews = await res.json();

    return (
        <div className="bg-[#9c27b0] py-20 px-6 md:px-12 min-h-screen flex items-center justify-center">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch w-full">
                {reviews.map((review) => (
                    <UserReviewCard key={review.id} review={review} />
                ))}
            </div>
        </div>
    );
};