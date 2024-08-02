import Script from "next/script";
export default function HomePage() {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>This is the home page of your Next.js 14 app.</p>

      <Script src="assets/libs/tiny-slider/min/tiny-slider.js"></Script>
      <Script src="assets/libs/feather-icons/feather.min.js"></Script>
      <Script src="assets/js/plugins.init.js"></Script>
      <Script src="assets/js/app.js"></Script>
    </div>
  );
}
