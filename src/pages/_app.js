import "@/styles/globals.css";
import Header from "../components/Home/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />;
    </>
  );
}
