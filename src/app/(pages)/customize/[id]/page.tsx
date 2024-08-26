import React from "react";
import CustomizePage from "@/components/customize/CustomizePage";

const Customize = ({ params }: { params: { id: string } }) => {
  return <CustomizePage id={params.id} />;
};

export async function generateStaticParams() {
  const templates = [
    {
      id: 1,
      title: "Dil Diya Gallan",
      image: "/assets/images/templates/1.jpg",
      href: "/preview/1",
    },
    {
      id: 2,
      title: "Luhongba",
      image: "/assets/images/templates/2.jpg",
      href: "/preview/3",
    },
    {
      id: 3,
      title: "The Chapel",
      image: "/assets/images/templates/3.jpg",
      href: "/preview/2",
    },
  ];

  return templates.map((template) => ({
    id: template.id.toString(),
  }));
}

export default Customize;
