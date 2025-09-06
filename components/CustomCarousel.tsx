"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

function CustomCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return <Carousel items={cards} />;
}

export { CustomCarousel };

const data = [
  {
    category: "Find Work You Already Did",
    title:
      "Connect Google / Microsoft. Sque surfaces billable work from email, calendar, files.",
    src: "/assets/images/carousel-bg-2.webp",
    // content: (
    //   <p>
    //     "Connect Google/Microsoft. Sque surfaces billable work from email,
    //     calendar, files, and call notes — with clear narratives."
    //   </p>
    // ),
  },
  {
    category: "Approve & Check",
    title:
      "Review drafts, apply categories, and approve in one flow. Automated checks .",
    src: "/assets/images/carousel-bg-3.webp",
  },
  {
    category: "Invoice & Collectct",
    title:
      "Send invoices with a downloadable proof bundle. Track payments and reduce days-to-cash.",
    src: "/assets/images/carousel-bg-1.webp",
  },

  {
    category: "Measure & Scale",
    title: "Analyze performance, refine your process, and fuel growth. ",
    src: "/assets/images/carousel-bg-2.webp",
  },
];
