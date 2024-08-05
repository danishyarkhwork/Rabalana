import { Metadata } from "next";
import PreviewContent from "./PreviewContent";

const templatesData = [
  {
    id: 1,
    title: "Dil Diya Gallan",
    description:
      "A beautiful and elegant wedding invitation design inspired by traditional Punjabi themes.",
    image: "/assets/images/templates/1.jpg",
  },
  {
    id: 2,
    title: "Luhongba",
    description:
      "A modern wedding card design that celebrates Manipuri culture and traditions.",
    image: "/assets/images/templates/2.jpg",
  },
  {
    id: 3,
    title: "The Chapel",
    description:
      "A classic and timeless design for those who prefer a church wedding theme.",
    image: "/assets/images/templates/3.jpg",
  },
  {
    id: 4,
    title: "Forever Yours",
    description:
      "A simple yet sophisticated design that captures the essence of eternal love.",
    image: "/assets/images/templates/4.jpg",
  },
];

export async function generateStaticParams() {
  return templatesData.map((template) => ({
    id: template.id.toString(),
  }));
}

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
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
    <section className="relative md:py-24 pt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container relative">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
          {/* Image Column */}
          <div className="lg:col-span-6 md:col-span-5">
            <div className="sticky top-20">
              <PreviewContent template={template} />
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-6 md:col-span-7">
            <div>
              <h5 className="lg:text-4xl lg:leading-relaxed text-2xl font-semibold">
                {template.title}
              </h5>

              <div className="grid grid-cols-1 mt-8">
                <div id="StarterContent" className="mt-6">
                  {/* Details Tab */}

                  <div className="grid grid-cols-1">{template.description}</div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 mb-10">
                <button className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300">
                  Download
                </button>
                <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300">
                  Print
                </button>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewPage;
