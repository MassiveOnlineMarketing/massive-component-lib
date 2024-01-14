'use client'

import { useState } from "react";
import { CardOne } from "./card-1";
import CardAnimation from "./test-4/test-4";
import StackedCards from "./card-stack";
import CardList from "./card-list";
import StackedCardsComponent from "./test-2/staced-cards-2";
import StackedCardViewer from "./test-3/stacked-cards-3";
import TestFive from "./test-5/test-5";


export default function Page() {
    const [selectedCard, setSelectedCard] = useState<number | null>(null);

    const handleTitleClick = (index: number) => {
      setSelectedCard(index);
    };
  
    const cardTitles = ['Card 1', 'Card 2', 'Card 3'];

    const cards = [
        { id: 1, content: <div>Card 1 Content</div> },
        { id: 2, content: <div>Card 2 Content</div> },
        { id: 3, content: <div>Card 3 Content</div> },
      ];
      

    return (
        <div>
            {/* <div className="flex flex-col justify-center items-center h-full bg-white text-black">
                <CardOne />
            </div> */}
            {/* <div>
                <StackedCards />
            </div> */}

            <div>
            {/* <CardList titles={cardTitles} onTitleClick={handleTitleClick} />
            {cardTitles.map((title, index) => (
            <CardAnimation
                key={index}
                index={index}
                title={title}
                selectedCardIndex={selectedCard}
                onCardClick={handleTitleClick}
            />
            ))} */}
            </div>

            <div>
                {/* <StackedCardsComponent /> */}
            </div>

            <div>
                {/* <StackedCardViewer indices={[1, 2, 3]} initialIndex={1} cards={cards} /> */}
            </div>

            <div className="flex justify-center items-center">
                <CardAnimation />
            </div>

            <div>

                {/* <TestFive /> */}
            </div>
        </div>
    )
}