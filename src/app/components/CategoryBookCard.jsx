import { Button, Card, Chip } from "@heroui/react";
import { Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const CategoryBookCard = ({ book }) => {
    return (
        <Card className="  w-full max-w-70 p-4 border border-gray-100 rounded-2xl shadow-sm bg-white  gap-3 overflow-visible">

            <div className=" relative w-full aspect-square rounded-xl overflow-hidden bg-gray-50">
                <Image
                    src={book.image_url}
                    alt={book.title}
                    fill
                    sizes="(max-width: 280px) 100vw, 280px"
                    className="object-cover"
                    priority={book.id <= 4}
                />

                {book.category && (
                    <Chip
                        size="sm"
                        variant="flat"
                        className="absolute top-2 right-2 bg-linear-to-r from-red-500 to-red-500 text-white  backdrop-blur-md  font-medium text-xs  px-2"
                    >
                        {book.category}
                    </Chip>
                )}
            </div>

            <div className="px-1 flex flex-col gap-0.5">
                <h3 className="font-bold text-gray-900 text-base line-clamp-1" title={book.title}>
                    {book.title}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-1">
                    By {book.author}
                </p>
            </div>



            <div className="flex items-center gap-4 text-sm text-gray-600 px-1 font-medium">
                <div className="flex items-center gap-1.5">
                </div>


                <div className="flex items-center gap-1.5" title="Available Stock">
                    <Layers className="w-4 h-4 text-black" />
                    <span>Quantity: {book.available_quantity}</span>
                </div>
            </div>

            <Link href={`/all-books/${book.id}`}>
                <Button
                    variant="bordered"
                    className="w-full bg-red-500 border-gray-200 text-white font-medium hover:bg-red-600 transition-colors py-2 rounded-xl text-sm mt-1"
                >
                    View Details
                </Button>
            </Link>

        </Card>
    );
};

export default CategoryBookCard;