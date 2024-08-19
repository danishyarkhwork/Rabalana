import { Metadata } from "next";
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
    <section className="relative max-w-6xl mt-28 mx-auto md:pb-14 pb-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container relative md:mt-12 px-4">
        {/* Two-column layout using flexbox */}
        <div className="lg:flex lg:space-x-8">
          {/* Left Column: Preview (lg:w-8/12) */}
          <div className="md:w-8/12 lg:w-8/12 sm:w-full mb-8 lg:mb-0">
            <div className="relative bg-pink-100 p-8 rounded-xl">
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-3.197-2.132A4 4 0 116 9.197l3.197 2.132a4 4 0 115.555 0zM12 22a10 10 0 100-20 10 10 0 000 20z"
                    />
                  </svg>
                </button>
                <button className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.121 19.121A1 1 0 014 18V6a1 1 0 01.883-.993l.117-.007h14a1 1 0 011 1v12a1 1 0 01-1 1h-4.586l-1.707 1.707a1 1 0 01-1.414 0L5.121 19.12z"
                    />
                  </svg>
                </button>
              </div>
              <PreviewContent template={template} />
            </div>
          </div>

          {/* Right Column: Details (lg:w-4/12) */}
          <div className="md:w-4/12 lg:w-4/12 sm:w-full">
            <div className="flex flex-col space-y-4">
              <div>
                <h1 className="text-3xl font-bold">{template.title}</h1>
                <p className="text-gray-600">{template.description}</p>
                <p className="text-sm text-gray-500 mt-2">Size: 5”x7”</p>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-sm font-bold">Color:</span>
                <div className="flex space-x-2">
                  {templatesData.map((colorTemplate) => (
                    <button
                      key={colorTemplate.id}
                      style={{ backgroundColor: colorTemplate.bgColor }}
                      className={`w-8 h-8 rounded-full border ${
                        colorTemplate.id === template.id ? "border-black" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>

              <button className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
                Customize
              </button>

              <div className="border p-4 rounded-lg space-y-2">
                <h4 className="font-bold text-sm">Spread the joy</h4>
                <div className="flex flex-col space-y-2">
                  <button className="flex items-center space-x-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.752 11.168l-3.197-2.132A4 4 0 116 9.197l3.197 2.132a4 4 0 115.555 0zM12 22a10 10 0 100-20 10 10 0 000 20z"
                      />
                    </svg>
                    <span>Download image</span>
                  </button>
                  <button className="flex items-center space-x-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16V4m0 0a2 2 0 114 0v12m-4 0a2 2 0 104 0m5 2h6"
                      />
                    </svg>
                    <span>Download PDF</span>
                  </button>
                  <button className="flex items-center space-x-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 19.121A1 1 0 014 18V6a1 1 0 01.883-.993l.117-.007h14a1 1 0 011 1v12a1 1 0 01-1 1h-4.586l-1.707 1.707a1 1 0 01-1.414 0L5.121 19.12z"
                      />
                    </svg>
                    <span>Print</span>
                  </button>
                  <button className="flex items-center space-x-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 12l4-4 4 4m0 6H8m12-6v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6"
                      />
                    </svg>
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewPage;
