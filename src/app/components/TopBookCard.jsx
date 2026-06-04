import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";

const TopBookCard = ({ book }) => {
  return (
    <Card>
      <div className="p-4 flex gap-6 items-center">

        <Image
          src={book.image_url}
          alt={book.title}
          width={200}
          height={250}
          className="rounded-md object-cover"
        />

        <div>
          <h2 className="text-xl font-bold">{book.title}</h2>
          <p className="text-gray-600">{book.author}</p>
          <p className="text-sm mt-2">{book.category}</p>
        </div>

      </div>
    </Card>
  );
};

export default TopBookCard;