import PreviewPageClient from "./PreviewPageClient";
import PreviewContent from "./PreviewContent";

const templatesData = [
  {
    id: 1,
    title: "Dil Diya Gallan",
    description:
      "A beautiful and elegant wedding invitation design inspired by traditional Punjabi themes.",
    image: "/assets/images/templates/1.jpg",
    bgColor: "#FFCDDA",
  },
  {
    id: 2,
    title: "Luhongba",
    description:
      "A modern wedding card design that celebrates Manipuri culture and traditions.",
    image: "/assets/images/templates/2.jpg",
    bgColor: "#FFEDBF",
  },
  {
    id: 3,
    title: "The Chapel",
    description:
      "A classic and timeless design for those who prefer a church wedding theme.",
    image: "/assets/images/templates/3.jpg",
    bgColor: "#FFDECD",
  },
  {
    id: 4,
    title: "Forever Yours",
    description:
      "A simple yet sophisticated design that captures the essence of eternal love.",
    image: "/assets/images/templates/4.jpg",
    bgColor: "#d2cdd0",
  },
];

export async function generateStaticParams() {
  return templatesData.map((template) => ({
    id: template.id.toString(),
  }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const template = templatesData.find(
    (template) => template.id === Number(params.id)
  );
  return {
    title: template ? template.title : "Template Preview",
    description: template
      ? template.description
      : "Preview your selected template",
  };
}

const PreviewPage = ({ params }: { params: { id: string } }) => {
  const template = templatesData.find(
    (template) => template.id === Number(params.id)
  );

  if (!template) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-700 dark:text-gray-300">
        Template not found
      </div>
    );
  }

  return (
    <section className="relative max-w-6xl mt-28 mx-auto md:pb-14 pb-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container relative md:mt-12 px-4">
        <div className="lg:flex lg:space-x-8">
          <div className="md:w-8/12 lg:w-8/12 sm:w-full mb-8 lg:mb-0">
            <div className="relative bg-pink-100 p-8 rounded-xl">
              <div className="absolute top-4 right-4 flex space-x-2">
                {/* Additional buttons */}
              </div>
              <PreviewContent template={template} />
            </div>
          </div>

          {/* Render the Client Component */}
          <PreviewPageClient template={template} />
        </div>
      </div>
    </section>
  );
};

export default PreviewPage;
