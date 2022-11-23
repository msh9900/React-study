import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "리엑트 공부 재미있다.." },
  { id: "q2", author: "Maximilian", text: "리엑트 공부는 신선해" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};
export default AllQuotes;
