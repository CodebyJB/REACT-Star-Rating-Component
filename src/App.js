import StarRating from "./StarRating";

export default function App() {
  return (
    <div>
      <StarRating
        maxRating={5}
        messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      />
      <StarRating size={24} color="red" className="test" defaultRating={3} />
    </div>
  );
}
